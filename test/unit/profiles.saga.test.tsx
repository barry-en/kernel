import { expectSaga } from 'redux-saga-test-plan'
import { call, select } from 'redux-saga/effects'
import * as matchers from 'redux-saga-test-plan/matchers'
import { profileRequest, profileSuccess } from 'shared/profiles/actions'
import { handleFetchProfile, profileServerRequest } from 'shared/profiles/sagas'
import { getCommsContext } from 'shared/comms/selectors'
import { getCurrentUserId, getCurrentIdentity, isCurrentUserId } from 'shared/session/selectors'
import { profileSaga } from '../../packages/shared/profiles/sagas'
import { dynamic } from 'redux-saga-test-plan/providers'
import { expect } from 'chai'
import { PROFILE_SUCCESS } from '../../packages/shared/profiles/actions'
import { sleep } from 'atomicHelpers/sleep'
import { getRealm } from 'shared/comms/selectors'
import { Avatar } from '@dcl/schemas'
import { ensureAvatarCompatibilityFormat } from 'shared/profiles/transformations/profileToServerFormat'

const profile: Avatar = { data: 'profile' } as any

function delayed<T>(result: T) {
  return dynamic<T>(async () => {
    await sleep(1)
    return result
  })
}

const delayedProfile = delayed({ avatars: [profile] })

describe('fetchProfile behavior', () => {
  it('avatar compatibility format', () => {
    ensureAvatarCompatibilityFormat({
      userId: '0x736df2ecb40e4bdc368e19e3067136802536550c',
      email: '',
      name: 'Ant#550c',
      hasClaimedName: false,
      description: 'Host at The Aquarium casino         * -140,126*                                         ',
      ethAddress: '0x736df2ecb40e4bdc368e19e3067136802536550c',
      version: 2,
      avatar: {
        bodyShape: 'urn:decentraland:off-chain:base-avatars:BaseMale',
        snapshots: {
          face256:
            'https://peer.decentral.io/content/contents/bafkreidxhkfakmifeccr3ypojv53oqnecufx647tkqupwipuelru3tkevm',
          body: 'https://peer.decentral.io/content/contents/bafkreie2pwupprfvg64mopsvwnmgzxckxw4q3i4gquaedelwdf6ax2soea'
        },
        eyes: { color: { r: 0.75, g: 0.62109375, b: 0.3515625 } },
        hair: { color: { r: 0.234375, g: 0.12890625, b: 0.04296875 } },
        skin: { color: { r: 0.60546875, g: 0.4609375, b: 0.35546875 } },
        wearables: [
          'urn:decentraland:off-chain:base-avatars:casual_hair_03',
          'urn:decentraland:off-chain:base-avatars:eyebrows_00',
          'urn:decentraland:off-chain:base-avatars:eyes_08',
          'urn:decentraland:off-chain:base-avatars:mouth_03',
          'urn:decentraland:matic:collections-v2:0x1286dad1da5233a63a5d55fcf9e834feb14e1d6d:0',
          'urn:decentraland:off-chain:base-avatars:thug_life',
          'urn:decentraland:off-chain:base-avatars:Thunder_earring',
          'urn:decentraland:off-chain:base-avatars:brown_pants',
          'urn:decentraland:off-chain:base-avatars:sneakers',
          'urn:decentraland:matic:collections-v2:0x1286dad1da5233a63a5d55fcf9e834feb14e1d6d:1'
        ]
      },
      tutorialStep: 256,
      interests: [],
      unclaimedName: ''
    } as any)
  })

 it.skip('completes once for more than one request of same user',
    () => {
      return expectSaga(profileSaga)
        .put(profileSuccess('passport' as any))
        .not.put(profileSuccess('passport' as any))
        .dispatch(profileRequest('user|1'))
        .dispatch(profileRequest('user|1'))
        .dispatch(profileRequest('user|1'))
        .provide([
          [select(getRealm), {}],
          [call(profileServerRequest, 'user|1'), delayedProfile],
          [select(getCurrentUserId), 'myid'],
          [call(ensureAvatarCompatibilityFormat, profile), 'passport']
        ])
        .run()
    })

  it.skip('runs one request for each user', () => {
    return expectSaga(profileSaga)
      .put(profileSuccess('passport1' as any))
      .put(profileSuccess('passport2' as any))
      .not.put(profileSuccess('passport1' as any))
      .not.put(profileSuccess('passport2' as any))
      .dispatch(profileRequest('user|1'))
      .dispatch(profileRequest('user|1'))
      .dispatch(profileRequest('user|2'))
      .dispatch(profileRequest('user|2'))
      .provide([
        [select(getRealm), {}],
        [call(profileServerRequest, 'user|1'), delayedProfile],
        [select(getCurrentUserId), 'myid'],
        [call(ensureAvatarCompatibilityFormat, profile), 'passport1'],
        [call(profileServerRequest, 'user|2'), delayedProfile],
        [call(ensureAvatarCompatibilityFormat, profile), 'passport2']
      ])
      .run()
  })

  it('detects and fixes corrupted scaled snapshots', () => {
    const profileWithCorruptedSnapshots = {
      avatar: { snapshots: { face: 'http://fake.url/contents/facehash', face128: '128', face256: '256' } }
    }
    const profile1 = { ...profileWithCorruptedSnapshots, ethAddress: 'eth1' }
    const userId = 'user|1'

    return expectSaga(handleFetchProfile, profileRequest(userId))
      .provide([
        [select(getCurrentIdentity), {}], // the content of the identity is not used
        [select(isCurrentUserId, userId), false],
        [select(getCommsContext), undefined],
        [call(profileServerRequest, userId, undefined), delayed({ avatars: [profile1] })]
      ])
      .run()
      .then((result) => {
        const putEffects = result.effects.put
        const lastPut = putEffects[putEffects.length - 1].payload.action
        expect(lastPut.type).to.eq(PROFILE_SUCCESS)

        const { face256 } = lastPut.payload.profile.avatar.snapshots
        expect(typeof face256).to.eq(typeof 'String')
      })
  })

  it.skip('falls back when resize not working in current server', () => {
    const profileWithCorruptedSnapshots = {
      avatar: { snapshots: { face256: 'http://fake.url/contents/facehash' } }
    }
    const profile1 = { ...profileWithCorruptedSnapshots, ethAddress: 'eth1' }
    return expectSaga(handleFetchProfile, profileRequest('user|1'))
      .provide([
        [select(getCurrentUserId), 'myid'],
        // [select(getResizeService), 'http://fake/resizeurl'],
        [matchers.call.fn(fetch), dynamic((call) => ({ ok: !call.args[0].startsWith('http://fake/resizeurl') }))],
        [call(profileServerRequest, 'user|1'), delayed({ avatars: [profile1] })]
        // [call(ensureAvatarCompatibilityFormat, 'user|1', profile1), dynamic((effect) => effect.args[1])]
      ])
      .run()
      .then((result) => {
        const putEffects = result.effects.put
        const lastPut = putEffects[putEffects.length - 1].payload.action
        expect(lastPut.type).to.eq(PROFILE_SUCCESS)

        // const { face, face128, face256 } = lastPut.payload.profile.avatar.snapshots
        // expect(face).to.eq('http://fake.url/contents/facehash')
        // expect(face128).to.eq(
        //   `${getServerConfigurations(ETHEREUM_NETWORK.MAINNET).fallbackResizeServiceUrl}/facehash/128`
        // )
        // expect(face256).to.eq(
        //   `${getServerConfigurations(ETHEREUM_NETWORK.MAINNET).fallbackResizeServiceUrl}/facehash/256`
        // )
      })
  })
})
