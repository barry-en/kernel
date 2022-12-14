/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protocol.comms.rfc4";

export interface Packet {
  message?:
    | { $case: "position"; position: Position }
    | { $case: "profileVersion"; profileVersion: AnnounceProfileVersion }
    | { $case: "profileRequest"; profileRequest: ProfileRequest }
    | { $case: "profileResponse"; profileResponse: ProfileResponse }
    | { $case: "chat"; chat: Chat }
    | { $case: "scene"; scene: Scene }
    | { $case: "voice"; voice: Voice };
}

export interface Position {
  /** command number */
  index: number;
  /** world position */
  positionX: number;
  positionY: number;
  positionZ: number;
  /** quaternion */
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  rotationW: number;
}

export interface AnnounceProfileVersion {
  profileVersion: number;
}

export interface ProfileRequest {
  address: string;
  profileVersion: number;
}

export interface ProfileResponse {
  serializedProfile: string;
  baseUrl: string;
}

export interface Chat {
  message: string;
  timestamp: number;
}

export interface Scene {
  sceneId: string;
  data: Uint8Array;
}

export interface Voice {
  encodedSamples: Uint8Array;
  index: number;
  codec: Voice_VoiceCodec;
}

export enum Voice_VoiceCodec {
  VoiceCodec_OPUS = 0,
  UNRECOGNIZED = -1,
}

export function voice_VoiceCodecFromJSON(object: any): Voice_VoiceCodec {
  switch (object) {
    case 0:
    case "VoiceCodec_OPUS":
      return Voice_VoiceCodec.VoiceCodec_OPUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Voice_VoiceCodec.UNRECOGNIZED;
  }
}

export function voice_VoiceCodecToJSON(object: Voice_VoiceCodec): string {
  switch (object) {
    case Voice_VoiceCodec.VoiceCodec_OPUS:
      return "VoiceCodec_OPUS";
    case Voice_VoiceCodec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBasePacket(): Packet {
  return { message: undefined };
}

export const Packet = {
  encode(message: Packet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message?.$case === "position") {
      Position.encode(message.message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.message?.$case === "profileVersion") {
      AnnounceProfileVersion.encode(message.message.profileVersion, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Packet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = { $case: "position", position: Position.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.message = {
            $case: "profileVersion",
            profileVersion: AnnounceProfileVersion.decode(reader, reader.uint32()),
          };
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

  fromJSON(object: any): Packet {
    return {
      message: isSet(object.position)
        ? { $case: "position", position: Position.fromJSON(object.position) }
        : isSet(object.profileVersion)
        ? { $case: "profileVersion", profileVersion: AnnounceProfileVersion.fromJSON(object.profileVersion) }
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

  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.message?.$case === "position" &&
      (obj.position = message.message?.position ? Position.toJSON(message.message?.position) : undefined);
    message.message?.$case === "profileVersion" && (obj.profileVersion = message.message?.profileVersion
      ? AnnounceProfileVersion.toJSON(message.message?.profileVersion)
      : undefined);
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

  fromPartial<I extends Exact<DeepPartial<Packet>, I>>(object: I): Packet {
    const message = createBasePacket();
    if (
      object.message?.$case === "position" &&
      object.message?.position !== undefined &&
      object.message?.position !== null
    ) {
      message.message = { $case: "position", position: Position.fromPartial(object.message.position) };
    }
    if (
      object.message?.$case === "profileVersion" &&
      object.message?.profileVersion !== undefined &&
      object.message?.profileVersion !== null
    ) {
      message.message = {
        $case: "profileVersion",
        profileVersion: AnnounceProfileVersion.fromPartial(object.message.profileVersion),
      };
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

function createBasePosition(): Position {
  return { index: 0, positionX: 0, positionY: 0, positionZ: 0, rotationX: 0, rotationY: 0, rotationZ: 0, rotationW: 0 };
}

export const Position = {
  encode(message: Position, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
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
        case 1:
          message.index = reader.uint32();
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
      index: isSet(object.index) ? Number(object.index) : 0,
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
    message.index !== undefined && (obj.index = Math.round(message.index));
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
    message.index = object.index ?? 0;
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

function createBaseAnnounceProfileVersion(): AnnounceProfileVersion {
  return { profileVersion: 0 };
}

export const AnnounceProfileVersion = {
  encode(message: AnnounceProfileVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.profileVersion !== 0) {
      writer.uint32(8).uint32(message.profileVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnnounceProfileVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnnounceProfileVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profileVersion = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnnounceProfileVersion {
    return { profileVersion: isSet(object.profileVersion) ? Number(object.profileVersion) : 0 };
  },

  toJSON(message: AnnounceProfileVersion): unknown {
    const obj: any = {};
    message.profileVersion !== undefined && (obj.profileVersion = Math.round(message.profileVersion));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AnnounceProfileVersion>, I>>(object: I): AnnounceProfileVersion {
    const message = createBaseAnnounceProfileVersion();
    message.profileVersion = object.profileVersion ?? 0;
    return message;
  },
};

function createBaseProfileRequest(): ProfileRequest {
  return { address: "", profileVersion: 0 };
}

export const ProfileRequest = {
  encode(message: ProfileRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.profileVersion !== 0) {
      writer.uint32(24).uint32(message.profileVersion);
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
        case 4:
          message.address = reader.string();
          break;
        case 3:
          message.profileVersion = reader.uint32();
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
      address: isSet(object.address) ? String(object.address) : "",
      profileVersion: isSet(object.profileVersion) ? Number(object.profileVersion) : 0,
    };
  },

  toJSON(message: ProfileRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.profileVersion !== undefined && (obj.profileVersion = Math.round(message.profileVersion));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProfileRequest>, I>>(object: I): ProfileRequest {
    const message = createBaseProfileRequest();
    message.address = object.address ?? "";
    message.profileVersion = object.profileVersion ?? 0;
    return message;
  },
};

function createBaseProfileResponse(): ProfileResponse {
  return { serializedProfile: "", baseUrl: "" };
}

export const ProfileResponse = {
  encode(message: ProfileResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serializedProfile !== "") {
      writer.uint32(10).string(message.serializedProfile);
    }
    if (message.baseUrl !== "") {
      writer.uint32(18).string(message.baseUrl);
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
        case 1:
          message.serializedProfile = reader.string();
          break;
        case 2:
          message.baseUrl = reader.string();
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
      serializedProfile: isSet(object.serializedProfile) ? String(object.serializedProfile) : "",
      baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : "",
    };
  },

  toJSON(message: ProfileResponse): unknown {
    const obj: any = {};
    message.serializedProfile !== undefined && (obj.serializedProfile = message.serializedProfile);
    message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProfileResponse>, I>>(object: I): ProfileResponse {
    const message = createBaseProfileResponse();
    message.serializedProfile = object.serializedProfile ?? "";
    message.baseUrl = object.baseUrl ?? "";
    return message;
  },
};

function createBaseChat(): Chat {
  return { message: "", timestamp: 0 };
}

export const Chat = {
  encode(message: Chat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.timestamp !== 0) {
      writer.uint32(17).double(message.timestamp);
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
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.timestamp = reader.double();
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
      message: isSet(object.message) ? String(object.message) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: Chat): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Chat>, I>>(object: I): Chat {
    const message = createBaseChat();
    message.message = object.message ?? "";
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseScene(): Scene {
  return { sceneId: "", data: new Uint8Array() };
}

export const Scene = {
  encode(message: Scene, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneId !== "") {
      writer.uint32(10).string(message.sceneId);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
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
        case 1:
          message.sceneId = reader.string();
          break;
        case 2:
          message.data = reader.bytes();
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
      sceneId: isSet(object.sceneId) ? String(object.sceneId) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: Scene): unknown {
    const obj: any = {};
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Scene>, I>>(object: I): Scene {
    const message = createBaseScene();
    message.sceneId = object.sceneId ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseVoice(): Voice {
  return { encodedSamples: new Uint8Array(), index: 0, codec: 0 };
}

export const Voice = {
  encode(message: Voice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.encodedSamples.length !== 0) {
      writer.uint32(10).bytes(message.encodedSamples);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.codec !== 0) {
      writer.uint32(24).int32(message.codec);
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
        case 1:
          message.encodedSamples = reader.bytes();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.codec = reader.int32() as any;
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
      codec: isSet(object.codec) ? voice_VoiceCodecFromJSON(object.codec) : 0,
    };
  },

  toJSON(message: Voice): unknown {
    const obj: any = {};
    message.encodedSamples !== undefined &&
      (obj.encodedSamples = base64FromBytes(
        message.encodedSamples !== undefined ? message.encodedSamples : new Uint8Array(),
      ));
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.codec !== undefined && (obj.codec = voice_VoiceCodecToJSON(message.codec));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Voice>, I>>(object: I): Voice {
    const message = createBaseVoice();
    message.encodedSamples = object.encodedSamples ?? new Uint8Array();
    message.index = object.index ?? 0;
    message.codec = object.codec ?? 0;
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
