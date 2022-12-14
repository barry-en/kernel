/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { UserData } from "./common-sdk/UserData.gen";

export const protobufPackage = "";

export interface GetUserDataRequest {
}

export interface GetUserDataResponse {
  data?: UserData | undefined;
}

export interface GetUserPublicKeyRequest {
}

export interface GetUserPublicKeyResponse {
  address?: string | undefined;
}

function createBaseGetUserDataRequest(): GetUserDataRequest {
  return {};
}

export const GetUserDataRequest = {
  encode(_: GetUserDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserDataRequest();
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

  fromJSON(_: any): GetUserDataRequest {
    return {};
  },

  toJSON(_: GetUserDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserDataRequest>, I>>(_: I): GetUserDataRequest {
    const message = createBaseGetUserDataRequest();
    return message;
  },
};

function createBaseGetUserDataResponse(): GetUserDataResponse {
  return { data: undefined };
}

export const GetUserDataResponse = {
  encode(message: GetUserDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      UserData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = UserData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserDataResponse {
    return { data: isSet(object.data) ? UserData.fromJSON(object.data) : undefined };
  },

  toJSON(message: GetUserDataResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data ? UserData.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserDataResponse>, I>>(object: I): GetUserDataResponse {
    const message = createBaseGetUserDataResponse();
    message.data = (object.data !== undefined && object.data !== null) ? UserData.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseGetUserPublicKeyRequest(): GetUserPublicKeyRequest {
  return {};
}

export const GetUserPublicKeyRequest = {
  encode(_: GetUserPublicKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserPublicKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserPublicKeyRequest();
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

  fromJSON(_: any): GetUserPublicKeyRequest {
    return {};
  },

  toJSON(_: GetUserPublicKeyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserPublicKeyRequest>, I>>(_: I): GetUserPublicKeyRequest {
    const message = createBaseGetUserPublicKeyRequest();
    return message;
  },
};

function createBaseGetUserPublicKeyResponse(): GetUserPublicKeyResponse {
  return { address: undefined };
}

export const GetUserPublicKeyResponse = {
  encode(message: GetUserPublicKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserPublicKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserPublicKeyResponse();
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

  fromJSON(object: any): GetUserPublicKeyResponse {
    return { address: isSet(object.address) ? String(object.address) : undefined };
  },

  toJSON(message: GetUserPublicKeyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserPublicKeyResponse>, I>>(object: I): GetUserPublicKeyResponse {
    const message = createBaseGetUserPublicKeyResponse();
    message.address = object.address ?? undefined;
    return message;
  },
};

export type UserIdentityServiceDefinition = typeof UserIdentityServiceDefinition;
export const UserIdentityServiceDefinition = {
  name: "UserIdentityService",
  fullName: "UserIdentityService",
  methods: {
    getUserPublicKey: {
      name: "GetUserPublicKey",
      requestType: GetUserPublicKeyRequest,
      requestStream: false,
      responseType: GetUserPublicKeyResponse,
      responseStream: false,
      options: {},
    },
    getUserData: {
      name: "GetUserData",
      requestType: GetUserDataRequest,
      requestStream: false,
      responseType: GetUserDataResponse,
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
