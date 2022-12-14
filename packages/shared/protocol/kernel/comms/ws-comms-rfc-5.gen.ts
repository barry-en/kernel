/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protocol.comms.rfc5";

/** Sent to the clients when the challenge is validated and they are authenticated. */
export interface WsWelcome {
  alias: number;
  peerIdentities: { [key: number]: string };
}

export interface WsWelcome_PeerIdentitiesEntry {
  key: number;
  value: string;
}

/** Sent to the clients when a user connects and their identity is authenticated. */
export interface WsPeerJoin {
  alias: number;
  address: string;
}

/** Sent to the clients when a user gets disconnected. */
export interface WsPeerLeave {
  alias: number;
}

/** This is the data package for all user messages. */
export interface WsPeerUpdate {
  fromAlias: number;
  body: Uint8Array;
  unreliable: boolean;
}

/**
 * Sent to the clients as first message, it contains a challenge string and a
 * hint about if the same address is connected to another room. In such case,
 * after authentication, the server may decide to end the former connection. This
 * hint exists for UX purposes of the explorers for cases like multiple running
 * instances of the explorer.
 */
export interface WsChallengeRequired {
  challengeToSign: string;
  alreadyConnected: boolean;
}

/** Response to WsChallengeRequired, signed using the AuthChain mechanism. */
export interface WsSignedChallenge {
  authChainJson: string;
}

/**
 * This is the first message sent by the clients, it us used to identify the client
 * in the server.
 */
export interface WsIdentification {
  address: string;
}

/**
 * This message is received by the peers when the same address logs in in a
 * different session. It should signal that the client should be shut down and not
 * retry any new comms connection.
 */
export interface WsKicked {
}

export interface WsPacket {
  message?:
    | { $case: "welcomeMessage"; welcomeMessage: WsWelcome }
    | { $case: "peerJoinMessage"; peerJoinMessage: WsPeerJoin }
    | { $case: "peerUpdateMessage"; peerUpdateMessage: WsPeerUpdate }
    | { $case: "challengeMessage"; challengeMessage: WsChallengeRequired }
    | { $case: "signedChallengeForServer"; signedChallengeForServer: WsSignedChallenge }
    | { $case: "peerLeaveMessage"; peerLeaveMessage: WsPeerLeave }
    | { $case: "peerIdentification"; peerIdentification: WsIdentification }
    | { $case: "peerKicked"; peerKicked: WsKicked };
}

function createBaseWsWelcome(): WsWelcome {
  return { alias: 0, peerIdentities: {} };
}

export const WsWelcome = {
  encode(message: WsWelcome, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== 0) {
      writer.uint32(8).uint32(message.alias);
    }
    Object.entries(message.peerIdentities).forEach(([key, value]) => {
      WsWelcome_PeerIdentitiesEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsWelcome {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsWelcome();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alias = reader.uint32();
          break;
        case 2:
          const entry2 = WsWelcome_PeerIdentitiesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.peerIdentities[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsWelcome {
    return {
      alias: isSet(object.alias) ? Number(object.alias) : 0,
      peerIdentities: isObject(object.peerIdentities)
        ? Object.entries(object.peerIdentities).reduce<{ [key: number]: string }>((acc, [key, value]) => {
          acc[Number(key)] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: WsWelcome): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = Math.round(message.alias));
    obj.peerIdentities = {};
    if (message.peerIdentities) {
      Object.entries(message.peerIdentities).forEach(([k, v]) => {
        obj.peerIdentities[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsWelcome>, I>>(object: I): WsWelcome {
    const message = createBaseWsWelcome();
    message.alias = object.alias ?? 0;
    message.peerIdentities = Object.entries(object.peerIdentities ?? {}).reduce<{ [key: number]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseWsWelcome_PeerIdentitiesEntry(): WsWelcome_PeerIdentitiesEntry {
  return { key: 0, value: "" };
}

export const WsWelcome_PeerIdentitiesEntry = {
  encode(message: WsWelcome_PeerIdentitiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).uint32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsWelcome_PeerIdentitiesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsWelcome_PeerIdentitiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint32();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsWelcome_PeerIdentitiesEntry {
    return { key: isSet(object.key) ? Number(object.key) : 0, value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: WsWelcome_PeerIdentitiesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsWelcome_PeerIdentitiesEntry>, I>>(
    object: I,
  ): WsWelcome_PeerIdentitiesEntry {
    const message = createBaseWsWelcome_PeerIdentitiesEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseWsPeerJoin(): WsPeerJoin {
  return { alias: 0, address: "" };
}

export const WsPeerJoin = {
  encode(message: WsPeerJoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== 0) {
      writer.uint32(8).uint32(message.alias);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsPeerJoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsPeerJoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alias = reader.uint32();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsPeerJoin {
    return {
      alias: isSet(object.alias) ? Number(object.alias) : 0,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: WsPeerJoin): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = Math.round(message.alias));
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsPeerJoin>, I>>(object: I): WsPeerJoin {
    const message = createBaseWsPeerJoin();
    message.alias = object.alias ?? 0;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseWsPeerLeave(): WsPeerLeave {
  return { alias: 0 };
}

export const WsPeerLeave = {
  encode(message: WsPeerLeave, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== 0) {
      writer.uint32(8).uint32(message.alias);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsPeerLeave {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsPeerLeave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.alias = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsPeerLeave {
    return { alias: isSet(object.alias) ? Number(object.alias) : 0 };
  },

  toJSON(message: WsPeerLeave): unknown {
    const obj: any = {};
    message.alias !== undefined && (obj.alias = Math.round(message.alias));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsPeerLeave>, I>>(object: I): WsPeerLeave {
    const message = createBaseWsPeerLeave();
    message.alias = object.alias ?? 0;
    return message;
  },
};

function createBaseWsPeerUpdate(): WsPeerUpdate {
  return { fromAlias: 0, body: new Uint8Array(), unreliable: false };
}

export const WsPeerUpdate = {
  encode(message: WsPeerUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAlias !== 0) {
      writer.uint32(8).uint32(message.fromAlias);
    }
    if (message.body.length !== 0) {
      writer.uint32(18).bytes(message.body);
    }
    if (message.unreliable === true) {
      writer.uint32(24).bool(message.unreliable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsPeerUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsPeerUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAlias = reader.uint32();
          break;
        case 2:
          message.body = reader.bytes();
          break;
        case 3:
          message.unreliable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsPeerUpdate {
    return {
      fromAlias: isSet(object.fromAlias) ? Number(object.fromAlias) : 0,
      body: isSet(object.body) ? bytesFromBase64(object.body) : new Uint8Array(),
      unreliable: isSet(object.unreliable) ? Boolean(object.unreliable) : false,
    };
  },

  toJSON(message: WsPeerUpdate): unknown {
    const obj: any = {};
    message.fromAlias !== undefined && (obj.fromAlias = Math.round(message.fromAlias));
    message.body !== undefined &&
      (obj.body = base64FromBytes(message.body !== undefined ? message.body : new Uint8Array()));
    message.unreliable !== undefined && (obj.unreliable = message.unreliable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsPeerUpdate>, I>>(object: I): WsPeerUpdate {
    const message = createBaseWsPeerUpdate();
    message.fromAlias = object.fromAlias ?? 0;
    message.body = object.body ?? new Uint8Array();
    message.unreliable = object.unreliable ?? false;
    return message;
  },
};

function createBaseWsChallengeRequired(): WsChallengeRequired {
  return { challengeToSign: "", alreadyConnected: false };
}

export const WsChallengeRequired = {
  encode(message: WsChallengeRequired, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.challengeToSign !== "") {
      writer.uint32(10).string(message.challengeToSign);
    }
    if (message.alreadyConnected === true) {
      writer.uint32(16).bool(message.alreadyConnected);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsChallengeRequired {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsChallengeRequired();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeToSign = reader.string();
          break;
        case 2:
          message.alreadyConnected = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsChallengeRequired {
    return {
      challengeToSign: isSet(object.challengeToSign) ? String(object.challengeToSign) : "",
      alreadyConnected: isSet(object.alreadyConnected) ? Boolean(object.alreadyConnected) : false,
    };
  },

  toJSON(message: WsChallengeRequired): unknown {
    const obj: any = {};
    message.challengeToSign !== undefined && (obj.challengeToSign = message.challengeToSign);
    message.alreadyConnected !== undefined && (obj.alreadyConnected = message.alreadyConnected);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsChallengeRequired>, I>>(object: I): WsChallengeRequired {
    const message = createBaseWsChallengeRequired();
    message.challengeToSign = object.challengeToSign ?? "";
    message.alreadyConnected = object.alreadyConnected ?? false;
    return message;
  },
};

function createBaseWsSignedChallenge(): WsSignedChallenge {
  return { authChainJson: "" };
}

export const WsSignedChallenge = {
  encode(message: WsSignedChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authChainJson !== "") {
      writer.uint32(10).string(message.authChainJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsSignedChallenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsSignedChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authChainJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsSignedChallenge {
    return { authChainJson: isSet(object.authChainJson) ? String(object.authChainJson) : "" };
  },

  toJSON(message: WsSignedChallenge): unknown {
    const obj: any = {};
    message.authChainJson !== undefined && (obj.authChainJson = message.authChainJson);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsSignedChallenge>, I>>(object: I): WsSignedChallenge {
    const message = createBaseWsSignedChallenge();
    message.authChainJson = object.authChainJson ?? "";
    return message;
  },
};

function createBaseWsIdentification(): WsIdentification {
  return { address: "" };
}

export const WsIdentification = {
  encode(message: WsIdentification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsIdentification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsIdentification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsIdentification {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: WsIdentification): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsIdentification>, I>>(object: I): WsIdentification {
    const message = createBaseWsIdentification();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseWsKicked(): WsKicked {
  return {};
}

export const WsKicked = {
  encode(_: WsKicked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsKicked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsKicked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): WsKicked {
    return {};
  },

  toJSON(_: WsKicked): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsKicked>, I>>(_: I): WsKicked {
    const message = createBaseWsKicked();
    return message;
  },
};

function createBaseWsPacket(): WsPacket {
  return { message: undefined };
}

export const WsPacket = {
  encode(message: WsPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message?.$case === "welcomeMessage") {
      WsWelcome.encode(message.message.welcomeMessage, writer.uint32(10).fork()).ldelim();
    }
    if (message.message?.$case === "peerJoinMessage") {
      WsPeerJoin.encode(message.message.peerJoinMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.message?.$case === "peerUpdateMessage") {
      WsPeerUpdate.encode(message.message.peerUpdateMessage, writer.uint32(26).fork()).ldelim();
    }
    if (message.message?.$case === "challengeMessage") {
      WsChallengeRequired.encode(message.message.challengeMessage, writer.uint32(34).fork()).ldelim();
    }
    if (message.message?.$case === "signedChallengeForServer") {
      WsSignedChallenge.encode(message.message.signedChallengeForServer, writer.uint32(42).fork()).ldelim();
    }
    if (message.message?.$case === "peerLeaveMessage") {
      WsPeerLeave.encode(message.message.peerLeaveMessage, writer.uint32(50).fork()).ldelim();
    }
    if (message.message?.$case === "peerIdentification") {
      WsIdentification.encode(message.message.peerIdentification, writer.uint32(58).fork()).ldelim();
    }
    if (message.message?.$case === "peerKicked") {
      WsKicked.encode(message.message.peerKicked, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WsPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWsPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = { $case: "welcomeMessage", welcomeMessage: WsWelcome.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.message = { $case: "peerJoinMessage", peerJoinMessage: WsPeerJoin.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.message = {
            $case: "peerUpdateMessage",
            peerUpdateMessage: WsPeerUpdate.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.message = {
            $case: "challengeMessage",
            challengeMessage: WsChallengeRequired.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.message = {
            $case: "signedChallengeForServer",
            signedChallengeForServer: WsSignedChallenge.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.message = {
            $case: "peerLeaveMessage",
            peerLeaveMessage: WsPeerLeave.decode(reader, reader.uint32()),
          };
          break;
        case 7:
          message.message = {
            $case: "peerIdentification",
            peerIdentification: WsIdentification.decode(reader, reader.uint32()),
          };
          break;
        case 8:
          message.message = { $case: "peerKicked", peerKicked: WsKicked.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WsPacket {
    return {
      message: isSet(object.welcomeMessage)
        ? { $case: "welcomeMessage", welcomeMessage: WsWelcome.fromJSON(object.welcomeMessage) }
        : isSet(object.peerJoinMessage)
        ? { $case: "peerJoinMessage", peerJoinMessage: WsPeerJoin.fromJSON(object.peerJoinMessage) }
        : isSet(object.peerUpdateMessage)
        ? { $case: "peerUpdateMessage", peerUpdateMessage: WsPeerUpdate.fromJSON(object.peerUpdateMessage) }
        : isSet(object.challengeMessage)
        ? { $case: "challengeMessage", challengeMessage: WsChallengeRequired.fromJSON(object.challengeMessage) }
        : isSet(object.signedChallengeForServer)
        ? {
          $case: "signedChallengeForServer",
          signedChallengeForServer: WsSignedChallenge.fromJSON(object.signedChallengeForServer),
        }
        : isSet(object.peerLeaveMessage)
        ? { $case: "peerLeaveMessage", peerLeaveMessage: WsPeerLeave.fromJSON(object.peerLeaveMessage) }
        : isSet(object.peerIdentification)
        ? { $case: "peerIdentification", peerIdentification: WsIdentification.fromJSON(object.peerIdentification) }
        : isSet(object.peerKicked)
        ? { $case: "peerKicked", peerKicked: WsKicked.fromJSON(object.peerKicked) }
        : undefined,
    };
  },

  toJSON(message: WsPacket): unknown {
    const obj: any = {};
    message.message?.$case === "welcomeMessage" && (obj.welcomeMessage = message.message?.welcomeMessage
      ? WsWelcome.toJSON(message.message?.welcomeMessage)
      : undefined);
    message.message?.$case === "peerJoinMessage" && (obj.peerJoinMessage = message.message?.peerJoinMessage
      ? WsPeerJoin.toJSON(message.message?.peerJoinMessage)
      : undefined);
    message.message?.$case === "peerUpdateMessage" && (obj.peerUpdateMessage = message.message?.peerUpdateMessage
      ? WsPeerUpdate.toJSON(message.message?.peerUpdateMessage)
      : undefined);
    message.message?.$case === "challengeMessage" && (obj.challengeMessage = message.message?.challengeMessage
      ? WsChallengeRequired.toJSON(message.message?.challengeMessage)
      : undefined);
    message.message?.$case === "signedChallengeForServer" &&
      (obj.signedChallengeForServer = message.message?.signedChallengeForServer
        ? WsSignedChallenge.toJSON(message.message?.signedChallengeForServer)
        : undefined);
    message.message?.$case === "peerLeaveMessage" && (obj.peerLeaveMessage = message.message?.peerLeaveMessage
      ? WsPeerLeave.toJSON(message.message?.peerLeaveMessage)
      : undefined);
    message.message?.$case === "peerIdentification" && (obj.peerIdentification = message.message?.peerIdentification
      ? WsIdentification.toJSON(message.message?.peerIdentification)
      : undefined);
    message.message?.$case === "peerKicked" &&
      (obj.peerKicked = message.message?.peerKicked ? WsKicked.toJSON(message.message?.peerKicked) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WsPacket>, I>>(object: I): WsPacket {
    const message = createBaseWsPacket();
    if (
      object.message?.$case === "welcomeMessage" &&
      object.message?.welcomeMessage !== undefined &&
      object.message?.welcomeMessage !== null
    ) {
      message.message = {
        $case: "welcomeMessage",
        welcomeMessage: WsWelcome.fromPartial(object.message.welcomeMessage),
      };
    }
    if (
      object.message?.$case === "peerJoinMessage" &&
      object.message?.peerJoinMessage !== undefined &&
      object.message?.peerJoinMessage !== null
    ) {
      message.message = {
        $case: "peerJoinMessage",
        peerJoinMessage: WsPeerJoin.fromPartial(object.message.peerJoinMessage),
      };
    }
    if (
      object.message?.$case === "peerUpdateMessage" &&
      object.message?.peerUpdateMessage !== undefined &&
      object.message?.peerUpdateMessage !== null
    ) {
      message.message = {
        $case: "peerUpdateMessage",
        peerUpdateMessage: WsPeerUpdate.fromPartial(object.message.peerUpdateMessage),
      };
    }
    if (
      object.message?.$case === "challengeMessage" &&
      object.message?.challengeMessage !== undefined &&
      object.message?.challengeMessage !== null
    ) {
      message.message = {
        $case: "challengeMessage",
        challengeMessage: WsChallengeRequired.fromPartial(object.message.challengeMessage),
      };
    }
    if (
      object.message?.$case === "signedChallengeForServer" &&
      object.message?.signedChallengeForServer !== undefined &&
      object.message?.signedChallengeForServer !== null
    ) {
      message.message = {
        $case: "signedChallengeForServer",
        signedChallengeForServer: WsSignedChallenge.fromPartial(object.message.signedChallengeForServer),
      };
    }
    if (
      object.message?.$case === "peerLeaveMessage" &&
      object.message?.peerLeaveMessage !== undefined &&
      object.message?.peerLeaveMessage !== null
    ) {
      message.message = {
        $case: "peerLeaveMessage",
        peerLeaveMessage: WsPeerLeave.fromPartial(object.message.peerLeaveMessage),
      };
    }
    if (
      object.message?.$case === "peerIdentification" &&
      object.message?.peerIdentification !== undefined &&
      object.message?.peerIdentification !== null
    ) {
      message.message = {
        $case: "peerIdentification",
        peerIdentification: WsIdentification.fromPartial(object.message.peerIdentification),
      };
    }
    if (
      object.message?.$case === "peerKicked" &&
      object.message?.peerKicked !== undefined &&
      object.message?.peerKicked !== null
    ) {
      message.message = { $case: "peerKicked", peerKicked: WsKicked.fromPartial(object.message.peerKicked) };
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
