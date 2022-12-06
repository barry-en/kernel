/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protocol";

export interface Position {
  time: number;
  positionX: number;
  positionY: number;
  positionZ: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  rotationW: number;
}

export interface Profile {
  time: number;
  profileVersion: string;
  profileType: Profile_ProfileType;
}

export enum Profile_ProfileType {
  LOCAL = 0,
  DEPLOYED = 1,
  UNRECOGNIZED = -1,
}

export function profile_ProfileTypeFromJSON(object: any): Profile_ProfileType {
  switch (object) {
    case 0:
    case "LOCAL":
      return Profile_ProfileType.LOCAL;
    case 1:
    case "DEPLOYED":
      return Profile_ProfileType.DEPLOYED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Profile_ProfileType.UNRECOGNIZED;
  }
}

export function profile_ProfileTypeToJSON(object: Profile_ProfileType): string {
  switch (object) {
    case Profile_ProfileType.LOCAL:
      return "LOCAL";
    case Profile_ProfileType.DEPLOYED:
      return "DEPLOYED";
    case Profile_ProfileType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ProfileRequest {
  time: number;
  profileVersion: string;
  userId: string;
}

export interface ProfileResponse {
  time: number;
  serializedProfile: string;
}

export interface Chat {
  time: number;
  messageId: string;
  text: string;
}

export interface Scene {
  time: number;
  sceneId: string;
  data: string;
}

export interface Voice {
  encodedSamples: Uint8Array;
  index: number;
}

export interface Data {
  message?:
    | { $case: "position"; position: Position }
    | { $case: "profile"; profile: Profile }
    | { $case: "profileRequest"; profileRequest: ProfileRequest }
    | { $case: "profileResponse"; profileResponse: ProfileResponse }
    | { $case: "chat"; chat: Chat }
    | { $case: "scene"; scene: Scene }
    | { $case: "voice"; voice: Voice };
}

function createBasePosition(): Position {
  return { time: 0, positionX: 0, positionY: 0, positionZ: 0, rotationX: 0, rotationY: 0, rotationZ: 0, rotationW: 0 };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    if (message.positionX !== 0) {
      writer.uint32(29).float(message.positionX);
    }
    if (message.positionY !== 0) {
      writer.uint32(37).float(message.positionY);
    }
    if (message.positionZ !== 0) {
      writer.uint32(45).float(message.positionZ);
    }
    if (message.rotationX !== 0) {
      writer.uint32(53).float(message.rotationX);
    }
    if (message.rotationY !== 0) {
      writer.uint32(61).float(message.rotationY);
    }
    if (message.rotationZ !== 0) {
      writer.uint32(69).float(message.rotationZ);
    }
    if (message.rotationW !== 0) {
      writer.uint32(77).float(message.rotationW);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.time = reader.double();
          break;
        case 3:
          message.positionX = reader.float();
          break;
        case 4:
          message.positionY = reader.float();
          break;
        case 5:
          message.positionZ = reader.float();
          break;
        case 6:
          message.rotationX = reader.float();
          break;
        case 7:
          message.rotationY = reader.float();
          break;
        case 8:
          message.rotationZ = reader.float();
          break;
        case 9:
          message.rotationW = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Position {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      positionX: isSet(object.positionX) ? Number(object.positionX) : 0,
      positionY: isSet(object.positionY) ? Number(object.positionY) : 0,
      positionZ: isSet(object.positionZ) ? Number(object.positionZ) : 0,
      rotationX: isSet(object.rotationX) ? Number(object.rotationX) : 0,
      rotationY: isSet(object.rotationY) ? Number(object.rotationY) : 0,
      rotationZ: isSet(object.rotationZ) ? Number(object.rotationZ) : 0,
      rotationW: isSet(object.rotationW) ? Number(object.rotationW) : 0,
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.positionX !== undefined && (obj.positionX = message.positionX);
    message.positionY !== undefined && (obj.positionY = message.positionY);
    message.positionZ !== undefined && (obj.positionZ = message.positionZ);
    message.rotationX !== undefined && (obj.rotationX = message.rotationX);
    message.rotationY !== undefined && (obj.rotationY = message.rotationY);
    message.rotationZ !== undefined && (obj.rotationZ = message.rotationZ);
    message.rotationW !== undefined && (obj.rotationW = message.rotationW);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Position>, I>>(object: I): Position {
    const message = createBasePosition();
    message.time = object.time ?? 0;
    message.positionX = object.positionX ?? 0;
    message.positionY = object.positionY ?? 0;
    message.positionZ = object.positionZ ?? 0;
    message.rotationX = object.rotationX ?? 0;
    message.rotationY = object.rotationY ?? 0;
    message.rotationZ = object.rotationZ ?? 0;
    message.rotationW = object.rotationW ?? 0;
    return message;
  },
};

function createBaseProfile(): Profile {
  return { time: 0, profileVersion: "", profileType: 0 };
}

export const Profile = {
  encode(message: Profile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    if (message.profileVersion !== "") {
      writer.uint32(26).string(message.profileVersion);
    }
    if (message.profileType !== 0) {
      writer.uint32(32).int32(message.profileType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.time = reader.double();
          break;
        case 3:
          message.profileVersion = reader.string();
          break;
        case 4:
          message.profileType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      profileVersion: isSet(object.profileVersion) ? String(object.profileVersion) : "",
      profileType: isSet(object.profileType) ? profile_ProfileTypeFromJSON(object.profileType) : 0,
    };
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.profileVersion !== undefined && (obj.profileVersion = message.profileVersion);
    message.profileType !== undefined && (obj.profileType = profile_ProfileTypeToJSON(message.profileType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Profile>, I>>(object: I): Profile {
    const message = createBaseProfile();
    message.time = object.time ?? 0;
    message.profileVersion = object.profileVersion ?? "";
    message.profileType = object.profileType ?? 0;
    return message;
  },
};

function createBaseProfileRequest(): ProfileRequest {
  return { time: 0, profileVersion: "", userId: "" };
}

export const ProfileRequest = {
  encode(message: ProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    if (message.profileVersion !== "") {
      writer.uint32(26).string(message.profileVersion);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.time = reader.double();
          break;
        case 3:
          message.profileVersion = reader.string();
          break;
        case 4:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfileRequest {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      profileVersion: isSet(object.profileVersion) ? String(object.profileVersion) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
    };
  },

  toJSON(message: ProfileRequest): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.profileVersion !== undefined && (obj.profileVersion = message.profileVersion);
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProfileRequest>, I>>(object: I): ProfileRequest {
    const message = createBaseProfileRequest();
    message.time = object.time ?? 0;
    message.profileVersion = object.profileVersion ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseProfileResponse(): ProfileResponse {
  return { time: 0, serializedProfile: "" };
}

export const ProfileResponse = {
  encode(message: ProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    if (message.serializedProfile !== "") {
      writer.uint32(26).string(message.serializedProfile);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProfileResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.time = reader.double();
          break;
        case 3:
          message.serializedProfile = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProfileResponse {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      serializedProfile: isSet(object.serializedProfile) ? String(object.serializedProfile) : "",
    };
  },

  toJSON(message: ProfileResponse): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.serializedProfile !== undefined && (obj.serializedProfile = message.serializedProfile);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProfileResponse>, I>>(object: I): ProfileResponse {
    const message = createBaseProfileResponse();
    message.time = object.time ?? 0;
    message.serializedProfile = object.serializedProfile ?? "";
    return message;
  },
};

function createBaseChat(): Chat {
  return { time: 0, messageId: "", text: "" };
}

export const Chat = {
  encode(message: Chat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    if (message.messageId !== "") {
      writer.uint32(26).string(message.messageId);
    }
    if (message.text !== "") {
      writer.uint32(34).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.time = reader.double();
          break;
        case 3:
          message.messageId = reader.string();
          break;
        case 4:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chat {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      messageId: isSet(object.messageId) ? String(object.messageId) : "",
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: Chat): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Chat>, I>>(object: I): Chat {
    const message = createBaseChat();
    message.time = object.time ?? 0;
    message.messageId = object.messageId ?? "";
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseScene(): Scene {
  return { time: 0, sceneId: "", data: "" };
}

export const Scene = {
  encode(message: Scene, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(17).double(message.time);
    }
    if (message.sceneId !== "") {
      writer.uint32(26).string(message.sceneId);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Scene {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScene();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.time = reader.double();
          break;
        case 3:
          message.sceneId = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Scene {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      sceneId: isSet(object.sceneId) ? String(object.sceneId) : "",
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: Scene): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Scene>, I>>(object: I): Scene {
    const message = createBaseScene();
    message.time = object.time ?? 0;
    message.sceneId = object.sceneId ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseVoice(): Voice {
  return { encodedSamples: new Uint8Array(), index: 0 };
}

export const Voice = {
  encode(message: Voice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encodedSamples.length !== 0) {
      writer.uint32(18).bytes(message.encodedSamples);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Voice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.encodedSamples = reader.bytes();
          break;
        case 3:
          message.index = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Voice {
    return {
      encodedSamples: isSet(object.encodedSamples) ? bytesFromBase64(object.encodedSamples) : new Uint8Array(),
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: Voice): unknown {
    const obj: any = {};
    message.encodedSamples !== undefined &&
      (obj.encodedSamples = base64FromBytes(
        message.encodedSamples !== undefined ? message.encodedSamples : new Uint8Array(),
      ));
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Voice>, I>>(object: I): Voice {
    const message = createBaseVoice();
    message.encodedSamples = object.encodedSamples ?? new Uint8Array();
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseData(): Data {
  return { message: undefined };
}

export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message?.$case === "position") {
      Position.encode(message.message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.message?.$case === "profile") {
      Profile.encode(message.message.profile, writer.uint32(18).fork()).ldelim();
    }
    if (message.message?.$case === "profileRequest") {
      ProfileRequest.encode(message.message.profileRequest, writer.uint32(26).fork()).ldelim();
    }
    if (message.message?.$case === "profileResponse") {
      ProfileResponse.encode(message.message.profileResponse, writer.uint32(34).fork()).ldelim();
    }
    if (message.message?.$case === "chat") {
      Chat.encode(message.message.chat, writer.uint32(42).fork()).ldelim();
    }
    if (message.message?.$case === "scene") {
      Scene.encode(message.message.scene, writer.uint32(50).fork()).ldelim();
    }
    if (message.message?.$case === "voice") {
      Voice.encode(message.message.voice, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = { $case: "position", position: Position.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.message = { $case: "profile", profile: Profile.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.message = { $case: "profileRequest", profileRequest: ProfileRequest.decode(reader, reader.uint32()) };
          break;
        case 4:
          message.message = {
            $case: "profileResponse",
            profileResponse: ProfileResponse.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.message = { $case: "chat", chat: Chat.decode(reader, reader.uint32()) };
          break;
        case 6:
          message.message = { $case: "scene", scene: Scene.decode(reader, reader.uint32()) };
          break;
        case 7:
          message.message = { $case: "voice", voice: Voice.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Data {
    return {
      message: isSet(object.position)
        ? { $case: "position", position: Position.fromJSON(object.position) }
        : isSet(object.profile)
        ? { $case: "profile", profile: Profile.fromJSON(object.profile) }
        : isSet(object.profileRequest)
        ? { $case: "profileRequest", profileRequest: ProfileRequest.fromJSON(object.profileRequest) }
        : isSet(object.profileResponse)
        ? { $case: "profileResponse", profileResponse: ProfileResponse.fromJSON(object.profileResponse) }
        : isSet(object.chat)
        ? { $case: "chat", chat: Chat.fromJSON(object.chat) }
        : isSet(object.scene)
        ? { $case: "scene", scene: Scene.fromJSON(object.scene) }
        : isSet(object.voice)
        ? { $case: "voice", voice: Voice.fromJSON(object.voice) }
        : undefined,
    };
  },

  toJSON(message: Data): unknown {
    const obj: any = {};
    message.message?.$case === "position" &&
      (obj.position = message.message?.position ? Position.toJSON(message.message?.position) : undefined);
    message.message?.$case === "profile" &&
      (obj.profile = message.message?.profile ? Profile.toJSON(message.message?.profile) : undefined);
    message.message?.$case === "profileRequest" && (obj.profileRequest = message.message?.profileRequest
      ? ProfileRequest.toJSON(message.message?.profileRequest)
      : undefined);
    message.message?.$case === "profileResponse" && (obj.profileResponse = message.message?.profileResponse
      ? ProfileResponse.toJSON(message.message?.profileResponse)
      : undefined);
    message.message?.$case === "chat" &&
      (obj.chat = message.message?.chat ? Chat.toJSON(message.message?.chat) : undefined);
    message.message?.$case === "scene" &&
      (obj.scene = message.message?.scene ? Scene.toJSON(message.message?.scene) : undefined);
    message.message?.$case === "voice" &&
      (obj.voice = message.message?.voice ? Voice.toJSON(message.message?.voice) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Data>, I>>(object: I): Data {
    const message = createBaseData();
    if (
      object.message?.$case === "position" &&
      object.message?.position !== undefined &&
      object.message?.position !== null
    ) {
      message.message = { $case: "position", position: Position.fromPartial(object.message.position) };
    }
    if (
      object.message?.$case === "profile" && object.message?.profile !== undefined && object.message?.profile !== null
    ) {
      message.message = { $case: "profile", profile: Profile.fromPartial(object.message.profile) };
    }
    if (
      object.message?.$case === "profileRequest" &&
      object.message?.profileRequest !== undefined &&
      object.message?.profileRequest !== null
    ) {
      message.message = {
        $case: "profileRequest",
        profileRequest: ProfileRequest.fromPartial(object.message.profileRequest),
      };
    }
    if (
      object.message?.$case === "profileResponse" &&
      object.message?.profileResponse !== undefined &&
      object.message?.profileResponse !== null
    ) {
      message.message = {
        $case: "profileResponse",
        profileResponse: ProfileResponse.fromPartial(object.message.profileResponse),
      };
    }
    if (object.message?.$case === "chat" && object.message?.chat !== undefined && object.message?.chat !== null) {
      message.message = { $case: "chat", chat: Chat.fromPartial(object.message.chat) };
    }
    if (object.message?.$case === "scene" && object.message?.scene !== undefined && object.message?.scene !== null) {
      message.message = { $case: "scene", scene: Scene.fromPartial(object.message.scene) };
    }
    if (object.message?.$case === "voice" && object.message?.voice !== undefined && object.message?.voice !== null) {
      message.message = { $case: "voice", voice: Voice.fromPartial(object.message.voice) };
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
