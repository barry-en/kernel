/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface CRDTManyMessages {
  sceneId: string;
  payload: Uint8Array;
  sceneNumber: number;
}

export interface CRDTResponse {
}

export interface PullCRDTRequest {
  sceneId: string;
  sceneNumber: number;
}

/**
 * CRDTStreamRequest is deprecated
 *
 * @deprecated
 */
export interface CRDTStreamRequest {
}

function createBaseCRDTManyMessages(): CRDTManyMessages {
  return { sceneId: "", payload: new Uint8Array(), sceneNumber: 0 };
}

export const CRDTManyMessages = {
  encode(message: CRDTManyMessages, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneId !== "") {
      writer.uint32(10).string(message.sceneId);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    if (message.sceneNumber !== 0) {
      writer.uint32(24).int32(message.sceneNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRDTManyMessages {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRDTManyMessages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sceneId = reader.string();
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        case 3:
          message.sceneNumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CRDTManyMessages {
    return {
      sceneId: isSet(object.sceneId) ? String(object.sceneId) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      sceneNumber: isSet(object.sceneNumber) ? Number(object.sceneNumber) : 0,
    };
  },

  toJSON(message: CRDTManyMessages): unknown {
    const obj: any = {};
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.sceneNumber !== undefined && (obj.sceneNumber = Math.round(message.sceneNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CRDTManyMessages>, I>>(object: I): CRDTManyMessages {
    const message = createBaseCRDTManyMessages();
    message.sceneId = object.sceneId ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.sceneNumber = object.sceneNumber ?? 0;
    return message;
  },
};

function createBaseCRDTResponse(): CRDTResponse {
  return {};
}

export const CRDTResponse = {
  encode(_: CRDTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRDTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRDTResponse();
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

  fromJSON(_: any): CRDTResponse {
    return {};
  },

  toJSON(_: CRDTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CRDTResponse>, I>>(_: I): CRDTResponse {
    const message = createBaseCRDTResponse();
    return message;
  },
};

function createBasePullCRDTRequest(): PullCRDTRequest {
  return { sceneId: "", sceneNumber: 0 };
}

export const PullCRDTRequest = {
  encode(message: PullCRDTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneId !== "") {
      writer.uint32(10).string(message.sceneId);
    }
    if (message.sceneNumber !== 0) {
      writer.uint32(24).int32(message.sceneNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PullCRDTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePullCRDTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sceneId = reader.string();
          break;
        case 3:
          message.sceneNumber = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PullCRDTRequest {
    return {
      sceneId: isSet(object.sceneId) ? String(object.sceneId) : "",
      sceneNumber: isSet(object.sceneNumber) ? Number(object.sceneNumber) : 0,
    };
  },

  toJSON(message: PullCRDTRequest): unknown {
    const obj: any = {};
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    message.sceneNumber !== undefined && (obj.sceneNumber = Math.round(message.sceneNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PullCRDTRequest>, I>>(object: I): PullCRDTRequest {
    const message = createBasePullCRDTRequest();
    message.sceneId = object.sceneId ?? "";
    message.sceneNumber = object.sceneNumber ?? 0;
    return message;
  },
};

function createBaseCRDTStreamRequest(): CRDTStreamRequest {
  return {};
}

export const CRDTStreamRequest = {
  encode(_: CRDTStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CRDTStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCRDTStreamRequest();
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

  fromJSON(_: any): CRDTStreamRequest {
    return {};
  },

  toJSON(_: CRDTStreamRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CRDTStreamRequest>, I>>(_: I): CRDTStreamRequest {
    const message = createBaseCRDTStreamRequest();
    return message;
  },
};

export type CRDTServiceDefinition = typeof CRDTServiceDefinition;
export const CRDTServiceDefinition = {
  name: "CRDTService",
  fullName: "CRDTService",
  methods: {
    sendCrdt: {
      name: "SendCrdt",
      requestType: CRDTManyMessages,
      requestStream: false,
      responseType: CRDTResponse,
      responseStream: false,
      options: {},
    },
    pullCrdt: {
      name: "PullCrdt",
      requestType: PullCRDTRequest,
      requestStream: false,
      responseType: CRDTManyMessages,
      responseStream: false,
      options: {},
    },
    /** CrdtNotificationStream is deprecated */
    crdtNotificationStream: {
      name: "CrdtNotificationStream",
      requestType: CRDTStreamRequest,
      requestStream: false,
      responseType: CRDTManyMessages,
      responseStream: true,
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
