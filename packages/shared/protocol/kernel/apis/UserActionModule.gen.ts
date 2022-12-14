/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface RequestTeleportRequest {
  destination: string;
}

export interface RequestTeleportResponse {
}

function createBaseRequestTeleportRequest(): RequestTeleportRequest {
  return { destination: "" };
}

export const RequestTeleportRequest = {
  encode(message: RequestTeleportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destination !== "") {
      writer.uint32(10).string(message.destination);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestTeleportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestTeleportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destination = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestTeleportRequest {
    return { destination: isSet(object.destination) ? String(object.destination) : "" };
  },

  toJSON(message: RequestTeleportRequest): unknown {
    const obj: any = {};
    message.destination !== undefined && (obj.destination = message.destination);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestTeleportRequest>, I>>(object: I): RequestTeleportRequest {
    const message = createBaseRequestTeleportRequest();
    message.destination = object.destination ?? "";
    return message;
  },
};

function createBaseRequestTeleportResponse(): RequestTeleportResponse {
  return {};
}

export const RequestTeleportResponse = {
  encode(_: RequestTeleportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestTeleportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestTeleportResponse();
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

  fromJSON(_: any): RequestTeleportResponse {
    return {};
  },

  toJSON(_: RequestTeleportResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestTeleportResponse>, I>>(_: I): RequestTeleportResponse {
    const message = createBaseRequestTeleportResponse();
    return message;
  },
};

export type UserActionModuleServiceDefinition = typeof UserActionModuleServiceDefinition;
export const UserActionModuleServiceDefinition = {
  name: "UserActionModuleService",
  fullName: "UserActionModuleService",
  methods: {
    requestTeleport: {
      name: "RequestTeleport",
      requestType: RequestTeleportRequest,
      requestStream: false,
      responseType: RequestTeleportResponse,
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
