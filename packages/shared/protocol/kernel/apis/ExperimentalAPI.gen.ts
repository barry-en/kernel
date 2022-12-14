/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface SendToRendererRequest {
  data: Uint8Array;
}

export interface SendToResponse {
}

export interface MessageFromRendererRequest {
}

export interface MessageFromRendererResponse {
  data: Uint8Array[];
}

function createBaseSendToRendererRequest(): SendToRendererRequest {
  return { data: new Uint8Array() };
}

export const SendToRendererRequest = {
  encode(message: SendToRendererRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendToRendererRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendToRendererRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendToRendererRequest {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array() };
  },

  toJSON(message: SendToRendererRequest): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendToRendererRequest>, I>>(object: I): SendToRendererRequest {
    const message = createBaseSendToRendererRequest();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseSendToResponse(): SendToResponse {
  return {};
}

export const SendToResponse = {
  encode(_: SendToResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendToResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendToResponse();
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

  fromJSON(_: any): SendToResponse {
    return {};
  },

  toJSON(_: SendToResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendToResponse>, I>>(_: I): SendToResponse {
    const message = createBaseSendToResponse();
    return message;
  },
};

function createBaseMessageFromRendererRequest(): MessageFromRendererRequest {
  return {};
}

export const MessageFromRendererRequest = {
  encode(_: MessageFromRendererRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFromRendererRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFromRendererRequest();
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

  fromJSON(_: any): MessageFromRendererRequest {
    return {};
  },

  toJSON(_: MessageFromRendererRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageFromRendererRequest>, I>>(_: I): MessageFromRendererRequest {
    const message = createBaseMessageFromRendererRequest();
    return message;
  },
};

function createBaseMessageFromRendererResponse(): MessageFromRendererResponse {
  return { data: [] };
}

export const MessageFromRendererResponse = {
  encode(message: MessageFromRendererResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageFromRendererResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageFromRendererResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageFromRendererResponse {
    return { data: Array.isArray(object?.data) ? object.data.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: MessageFromRendererResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageFromRendererResponse>, I>>(object: I): MessageFromRendererResponse {
    const message = createBaseMessageFromRendererResponse();
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

export type ExperimentalAPIServiceDefinition = typeof ExperimentalAPIServiceDefinition;
export const ExperimentalAPIServiceDefinition = {
  name: "ExperimentalAPIService",
  fullName: "ExperimentalAPIService",
  methods: {
    sendToRenderer: {
      name: "SendToRenderer",
      requestType: SendToRendererRequest,
      requestStream: false,
      responseType: SendToResponse,
      responseStream: false,
      options: {},
    },
    messageFromRenderer: {
      name: "MessageFromRenderer",
      requestType: MessageFromRendererRequest,
      requestStream: false,
      responseType: MessageFromRendererResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

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
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
