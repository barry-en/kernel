/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface RealSendRequest {
  message: string;
}

export interface RealSendResponse {
}

function createBaseRealSendRequest(): RealSendRequest {
  return { message: "" };
}

export const RealSendRequest = {
  encode(message: RealSendRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RealSendRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRealSendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RealSendRequest {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: RealSendRequest): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RealSendRequest>, I>>(object: I): RealSendRequest {
    const message = createBaseRealSendRequest();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseRealSendResponse(): RealSendResponse {
  return {};
}

export const RealSendResponse = {
  encode(_: RealSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RealSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRealSendResponse();
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

  fromJSON(_: any): RealSendResponse {
    return {};
  },

  toJSON(_: RealSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RealSendResponse>, I>>(_: I): RealSendResponse {
    const message = createBaseRealSendResponse();
    return message;
  },
};

export type CommunicationsControllerServiceDefinition = typeof CommunicationsControllerServiceDefinition;
export const CommunicationsControllerServiceDefinition = {
  name: "CommunicationsControllerService",
  fullName: "CommunicationsControllerService",
  methods: {
    send: {
      name: "Send",
      requestType: RealSendRequest,
      requestStream: false,
      responseType: RealSendResponse,
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
