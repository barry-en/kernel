/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum PermissionItem {
  ALLOW_TO_MOVE_PLAYER_INSIDE_SCENE = 0,
  ALLOW_TO_TRIGGER_AVATAR_EMOTE = 1,
  USE_WEB3_API = 2,
  USE_WEBSOCKET = 3,
  USE_FETCH = 4,
  UNRECOGNIZED = -1,
}

export function permissionItemFromJSON(object: any): PermissionItem {
  switch (object) {
    case 0:
    case "ALLOW_TO_MOVE_PLAYER_INSIDE_SCENE":
      return PermissionItem.ALLOW_TO_MOVE_PLAYER_INSIDE_SCENE;
    case 1:
    case "ALLOW_TO_TRIGGER_AVATAR_EMOTE":
      return PermissionItem.ALLOW_TO_TRIGGER_AVATAR_EMOTE;
    case 2:
    case "USE_WEB3_API":
      return PermissionItem.USE_WEB3_API;
    case 3:
    case "USE_WEBSOCKET":
      return PermissionItem.USE_WEBSOCKET;
    case 4:
    case "USE_FETCH":
      return PermissionItem.USE_FETCH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PermissionItem.UNRECOGNIZED;
  }
}

export function permissionItemToJSON(object: PermissionItem): string {
  switch (object) {
    case PermissionItem.ALLOW_TO_MOVE_PLAYER_INSIDE_SCENE:
      return "ALLOW_TO_MOVE_PLAYER_INSIDE_SCENE";
    case PermissionItem.ALLOW_TO_TRIGGER_AVATAR_EMOTE:
      return "ALLOW_TO_TRIGGER_AVATAR_EMOTE";
    case PermissionItem.USE_WEB3_API:
      return "USE_WEB3_API";
    case PermissionItem.USE_WEBSOCKET:
      return "USE_WEBSOCKET";
    case PermissionItem.USE_FETCH:
      return "USE_FETCH";
    case PermissionItem.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PermissionResponse {
  hasPermission: boolean;
}

export interface HasPermissionRequest {
  permission: PermissionItem;
}

export interface HasManyPermissionRequest {
  permissions: PermissionItem[];
}

export interface HasManyPermissionResponse {
  hasManyPermission: boolean[];
}

function createBasePermissionResponse(): PermissionResponse {
  return { hasPermission: false };
}

export const PermissionResponse = {
  encode(message: PermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasPermission === true) {
      writer.uint32(8).bool(message.hasPermission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasPermission = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionResponse {
    return { hasPermission: isSet(object.hasPermission) ? Boolean(object.hasPermission) : false };
  },

  toJSON(message: PermissionResponse): unknown {
    const obj: any = {};
    message.hasPermission !== undefined && (obj.hasPermission = message.hasPermission);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PermissionResponse>, I>>(object: I): PermissionResponse {
    const message = createBasePermissionResponse();
    message.hasPermission = object.hasPermission ?? false;
    return message;
  },
};

function createBaseHasPermissionRequest(): HasPermissionRequest {
  return { permission: 0 };
}

export const HasPermissionRequest = {
  encode(message: HasPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HasPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHasPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HasPermissionRequest {
    return { permission: isSet(object.permission) ? permissionItemFromJSON(object.permission) : 0 };
  },

  toJSON(message: HasPermissionRequest): unknown {
    const obj: any = {};
    message.permission !== undefined && (obj.permission = permissionItemToJSON(message.permission));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HasPermissionRequest>, I>>(object: I): HasPermissionRequest {
    const message = createBaseHasPermissionRequest();
    message.permission = object.permission ?? 0;
    return message;
  },
};

function createBaseHasManyPermissionRequest(): HasManyPermissionRequest {
  return { permissions: [] };
}

export const HasManyPermissionRequest = {
  encode(message: HasManyPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.permissions) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HasManyPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHasManyPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.permissions.push(reader.int32() as any);
            }
          } else {
            message.permissions.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HasManyPermissionRequest {
    return {
      permissions: Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => permissionItemFromJSON(e))
        : [],
    };
  },

  toJSON(message: HasManyPermissionRequest): unknown {
    const obj: any = {};
    if (message.permissions) {
      obj.permissions = message.permissions.map((e) => permissionItemToJSON(e));
    } else {
      obj.permissions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HasManyPermissionRequest>, I>>(object: I): HasManyPermissionRequest {
    const message = createBaseHasManyPermissionRequest();
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};

function createBaseHasManyPermissionResponse(): HasManyPermissionResponse {
  return { hasManyPermission: [] };
}

export const HasManyPermissionResponse = {
  encode(message: HasManyPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.hasManyPermission) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HasManyPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHasManyPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.hasManyPermission.push(reader.bool());
            }
          } else {
            message.hasManyPermission.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HasManyPermissionResponse {
    return {
      hasManyPermission: Array.isArray(object?.hasManyPermission)
        ? object.hasManyPermission.map((e: any) => Boolean(e))
        : [],
    };
  },

  toJSON(message: HasManyPermissionResponse): unknown {
    const obj: any = {};
    if (message.hasManyPermission) {
      obj.hasManyPermission = message.hasManyPermission.map((e) => e);
    } else {
      obj.hasManyPermission = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HasManyPermissionResponse>, I>>(object: I): HasManyPermissionResponse {
    const message = createBaseHasManyPermissionResponse();
    message.hasManyPermission = object.hasManyPermission?.map((e) => e) || [];
    return message;
  },
};

export type PermissionsServiceDefinition = typeof PermissionsServiceDefinition;
export const PermissionsServiceDefinition = {
  name: "PermissionsService",
  fullName: "PermissionsService",
  methods: {
    hasPermission: {
      name: "HasPermission",
      requestType: HasPermissionRequest,
      requestStream: false,
      responseType: PermissionResponse,
      responseStream: false,
      options: {},
    },
    hasManyPermissions: {
      name: "HasManyPermissions",
      requestType: HasManyPermissionRequest,
      requestStream: false,
      responseType: HasManyPermissionResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

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
