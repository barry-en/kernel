/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface DevToolsBody {
  type: string;
  jsonPayload: string;
}

export interface EventResponse {
}

function createBaseDevToolsBody(): DevToolsBody {
  return { type: "", jsonPayload: "" };
}

export const DevToolsBody = {
  encode(message: DevToolsBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.jsonPayload !== "") {
      writer.uint32(18).string(message.jsonPayload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DevToolsBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevToolsBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.jsonPayload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DevToolsBody {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      jsonPayload: isSet(object.jsonPayload) ? String(object.jsonPayload) : "",
    };
  },

  toJSON(message: DevToolsBody): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.jsonPayload !== undefined && (obj.jsonPayload = message.jsonPayload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DevToolsBody>, I>>(object: I): DevToolsBody {
    const message = createBaseDevToolsBody();
    message.type = object.type ?? "";
    message.jsonPayload = object.jsonPayload ?? "";
    return message;
  },
};

function createBaseEventResponse(): EventResponse {
  return {};
}

export const EventResponse = {
  encode(_: EventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventResponse();
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

  fromJSON(_: any): EventResponse {
    return {};
  },

  toJSON(_: EventResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventResponse>, I>>(_: I): EventResponse {
    const message = createBaseEventResponse();
    return message;
  },
};

export type DevToolsServiceDefinition = typeof DevToolsServiceDefinition;
export const DevToolsServiceDefinition = {
  name: "DevToolsService",
  fullName: "DevToolsService",
  methods: {
    event: {
      name: "Event",
      requestType: DevToolsBody,
      requestStream: false,
      responseType: EventResponse,
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
