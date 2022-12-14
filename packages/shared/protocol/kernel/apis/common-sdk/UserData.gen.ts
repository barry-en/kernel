/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Snapshots {
  face256: string;
  body: string;
}

export interface AvatarForUserData {
  bodyShape: string;
  skinColor: string;
  hairColor: string;
  eyeColor: string;
  wearables: string[];
  snapshots: Snapshots | undefined;
}

export interface UserData {
  displayName: string;
  publicKey?: string | undefined;
  hasConnectedWeb3: boolean;
  userId: string;
  version: number;
  avatar: AvatarForUserData | undefined;
}

function createBaseSnapshots(): Snapshots {
  return { face256: "", body: "" };
}

export const Snapshots = {
  encode(message: Snapshots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.face256 !== "") {
      writer.uint32(10).string(message.face256);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.face256 = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Snapshots {
    return {
      face256: isSet(object.face256) ? String(object.face256) : "",
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: Snapshots): unknown {
    const obj: any = {};
    message.face256 !== undefined && (obj.face256 = message.face256);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Snapshots>, I>>(object: I): Snapshots {
    const message = createBaseSnapshots();
    message.face256 = object.face256 ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseAvatarForUserData(): AvatarForUserData {
  return { bodyShape: "", skinColor: "", hairColor: "", eyeColor: "", wearables: [], snapshots: undefined };
}

export const AvatarForUserData = {
  encode(message: AvatarForUserData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bodyShape !== "") {
      writer.uint32(10).string(message.bodyShape);
    }
    if (message.skinColor !== "") {
      writer.uint32(18).string(message.skinColor);
    }
    if (message.hairColor !== "") {
      writer.uint32(26).string(message.hairColor);
    }
    if (message.eyeColor !== "") {
      writer.uint32(34).string(message.eyeColor);
    }
    for (const v of message.wearables) {
      writer.uint32(42).string(v!);
    }
    if (message.snapshots !== undefined) {
      Snapshots.encode(message.snapshots, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AvatarForUserData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvatarForUserData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bodyShape = reader.string();
          break;
        case 2:
          message.skinColor = reader.string();
          break;
        case 3:
          message.hairColor = reader.string();
          break;
        case 4:
          message.eyeColor = reader.string();
          break;
        case 5:
          message.wearables.push(reader.string());
          break;
        case 6:
          message.snapshots = Snapshots.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AvatarForUserData {
    return {
      bodyShape: isSet(object.bodyShape) ? String(object.bodyShape) : "",
      skinColor: isSet(object.skinColor) ? String(object.skinColor) : "",
      hairColor: isSet(object.hairColor) ? String(object.hairColor) : "",
      eyeColor: isSet(object.eyeColor) ? String(object.eyeColor) : "",
      wearables: Array.isArray(object?.wearables) ? object.wearables.map((e: any) => String(e)) : [],
      snapshots: isSet(object.snapshots) ? Snapshots.fromJSON(object.snapshots) : undefined,
    };
  },

  toJSON(message: AvatarForUserData): unknown {
    const obj: any = {};
    message.bodyShape !== undefined && (obj.bodyShape = message.bodyShape);
    message.skinColor !== undefined && (obj.skinColor = message.skinColor);
    message.hairColor !== undefined && (obj.hairColor = message.hairColor);
    message.eyeColor !== undefined && (obj.eyeColor = message.eyeColor);
    if (message.wearables) {
      obj.wearables = message.wearables.map((e) => e);
    } else {
      obj.wearables = [];
    }
    message.snapshots !== undefined &&
      (obj.snapshots = message.snapshots ? Snapshots.toJSON(message.snapshots) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AvatarForUserData>, I>>(object: I): AvatarForUserData {
    const message = createBaseAvatarForUserData();
    message.bodyShape = object.bodyShape ?? "";
    message.skinColor = object.skinColor ?? "";
    message.hairColor = object.hairColor ?? "";
    message.eyeColor = object.eyeColor ?? "";
    message.wearables = object.wearables?.map((e) => e) || [];
    message.snapshots = (object.snapshots !== undefined && object.snapshots !== null)
      ? Snapshots.fromPartial(object.snapshots)
      : undefined;
    return message;
  },
};

function createBaseUserData(): UserData {
  return { displayName: "", publicKey: undefined, hasConnectedWeb3: false, userId: "", version: 0, avatar: undefined };
}

export const UserData = {
  encode(message: UserData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    if (message.publicKey !== undefined) {
      writer.uint32(18).string(message.publicKey);
    }
    if (message.hasConnectedWeb3 === true) {
      writer.uint32(24).bool(message.hasConnectedWeb3);
    }
    if (message.userId !== "") {
      writer.uint32(34).string(message.userId);
    }
    if (message.version !== 0) {
      writer.uint32(40).int32(message.version);
    }
    if (message.avatar !== undefined) {
      AvatarForUserData.encode(message.avatar, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayName = reader.string();
          break;
        case 2:
          message.publicKey = reader.string();
          break;
        case 3:
          message.hasConnectedWeb3 = reader.bool();
          break;
        case 4:
          message.userId = reader.string();
          break;
        case 5:
          message.version = reader.int32();
          break;
        case 6:
          message.avatar = AvatarForUserData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserData {
    return {
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      publicKey: isSet(object.publicKey) ? String(object.publicKey) : undefined,
      hasConnectedWeb3: isSet(object.hasConnectedWeb3) ? Boolean(object.hasConnectedWeb3) : false,
      userId: isSet(object.userId) ? String(object.userId) : "",
      version: isSet(object.version) ? Number(object.version) : 0,
      avatar: isSet(object.avatar) ? AvatarForUserData.fromJSON(object.avatar) : undefined,
    };
  },

  toJSON(message: UserData): unknown {
    const obj: any = {};
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.hasConnectedWeb3 !== undefined && (obj.hasConnectedWeb3 = message.hasConnectedWeb3);
    message.userId !== undefined && (obj.userId = message.userId);
    message.version !== undefined && (obj.version = Math.round(message.version));
    message.avatar !== undefined &&
      (obj.avatar = message.avatar ? AvatarForUserData.toJSON(message.avatar) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserData>, I>>(object: I): UserData {
    const message = createBaseUserData();
    message.displayName = object.displayName ?? "";
    message.publicKey = object.publicKey ?? undefined;
    message.hasConnectedWeb3 = object.hasConnectedWeb3 ?? false;
    message.userId = object.userId ?? "";
    message.version = object.version ?? 0;
    message.avatar = (object.avatar !== undefined && object.avatar !== null)
      ? AvatarForUserData.fromPartial(object.avatar)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
