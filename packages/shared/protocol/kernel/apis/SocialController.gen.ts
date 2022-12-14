/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface InitRequest {
}

export interface SocialEvent {
  event: string;
  payload: string;
}

export interface GetAvatarEventsResponse {
  events: SocialEvent[];
}

function createBaseInitRequest(): InitRequest {
  return {};
}

export const InitRequest = {
  encode(_: InitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitRequest();
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

  fromJSON(_: any): InitRequest {
    return {};
  },

  toJSON(_: InitRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InitRequest>, I>>(_: I): InitRequest {
    const message = createBaseInitRequest();
    return message;
  },
};

function createBaseSocialEvent(): SocialEvent {
  return { event: "", payload: "" };
}

export const SocialEvent = {
  encode(message: SocialEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== "") {
      writer.uint32(10).string(message.event);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SocialEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSocialEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = reader.string();
          break;
        case 2:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SocialEvent {
    return {
      event: isSet(object.event) ? String(object.event) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: SocialEvent): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SocialEvent>, I>>(object: I): SocialEvent {
    const message = createBaseSocialEvent();
    message.event = object.event ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseGetAvatarEventsResponse(): GetAvatarEventsResponse {
  return { events: [] };
}

export const GetAvatarEventsResponse = {
  encode(message: GetAvatarEventsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      SocialEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAvatarEventsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAvatarEventsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(SocialEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAvatarEventsResponse {
    return { events: Array.isArray(object?.events) ? object.events.map((e: any) => SocialEvent.fromJSON(e)) : [] };
  },

  toJSON(message: GetAvatarEventsResponse): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? SocialEvent.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetAvatarEventsResponse>, I>>(object: I): GetAvatarEventsResponse {
    const message = createBaseGetAvatarEventsResponse();
    message.events = object.events?.map((e) => SocialEvent.fromPartial(e)) || [];
    return message;
  },
};

export type SocialControllerServiceDefinition = typeof SocialControllerServiceDefinition;
export const SocialControllerServiceDefinition = {
  name: "SocialControllerService",
  fullName: "SocialControllerService",
  methods: {
    pullAvatarEvents: {
      name: "PullAvatarEvents",
      requestType: InitRequest,
      requestStream: false,
      responseType: GetAvatarEventsResponse,
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
