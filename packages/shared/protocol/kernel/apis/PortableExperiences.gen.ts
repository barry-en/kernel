/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface KillRequest {
  pid: string;
}

export interface KillResponse {
  status: boolean;
}

export interface SpawnRequest {
  pid: string;
}

export interface SpawnResponse {
  pid: string;
  parentCid: string;
}

export interface PxRequest {
  pid: string;
}

export interface GetPortableExperiencesLoadedRequest {
}

export interface GetPortableExperiencesLoadedResponse {
  loaded: SpawnResponse[];
}

export interface ExitRequest {
}

export interface ExitResponse {
  status: boolean;
}

function createBaseKillRequest(): KillRequest {
  return { pid: "" };
}

export const KillRequest = {
  encode(message: KillRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== "") {
      writer.uint32(10).string(message.pid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KillRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKillRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KillRequest {
    return { pid: isSet(object.pid) ? String(object.pid) : "" };
  },

  toJSON(message: KillRequest): unknown {
    const obj: any = {};
    message.pid !== undefined && (obj.pid = message.pid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KillRequest>, I>>(object: I): KillRequest {
    const message = createBaseKillRequest();
    message.pid = object.pid ?? "";
    return message;
  },
};

function createBaseKillResponse(): KillResponse {
  return { status: false };
}

export const KillResponse = {
  encode(message: KillResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status === true) {
      writer.uint32(8).bool(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KillResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKillResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KillResponse {
    return { status: isSet(object.status) ? Boolean(object.status) : false };
  },

  toJSON(message: KillResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KillResponse>, I>>(object: I): KillResponse {
    const message = createBaseKillResponse();
    message.status = object.status ?? false;
    return message;
  },
};

function createBaseSpawnRequest(): SpawnRequest {
  return { pid: "" };
}

export const SpawnRequest = {
  encode(message: SpawnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== "") {
      writer.uint32(10).string(message.pid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpawnRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpawnRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpawnRequest {
    return { pid: isSet(object.pid) ? String(object.pid) : "" };
  },

  toJSON(message: SpawnRequest): unknown {
    const obj: any = {};
    message.pid !== undefined && (obj.pid = message.pid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpawnRequest>, I>>(object: I): SpawnRequest {
    const message = createBaseSpawnRequest();
    message.pid = object.pid ?? "";
    return message;
  },
};

function createBaseSpawnResponse(): SpawnResponse {
  return { pid: "", parentCid: "" };
}

export const SpawnResponse = {
  encode(message: SpawnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== "") {
      writer.uint32(10).string(message.pid);
    }
    if (message.parentCid !== "") {
      writer.uint32(18).string(message.parentCid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpawnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpawnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pid = reader.string();
          break;
        case 2:
          message.parentCid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpawnResponse {
    return {
      pid: isSet(object.pid) ? String(object.pid) : "",
      parentCid: isSet(object.parentCid) ? String(object.parentCid) : "",
    };
  },

  toJSON(message: SpawnResponse): unknown {
    const obj: any = {};
    message.pid !== undefined && (obj.pid = message.pid);
    message.parentCid !== undefined && (obj.parentCid = message.parentCid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpawnResponse>, I>>(object: I): SpawnResponse {
    const message = createBaseSpawnResponse();
    message.pid = object.pid ?? "";
    message.parentCid = object.parentCid ?? "";
    return message;
  },
};

function createBasePxRequest(): PxRequest {
  return { pid: "" };
}

export const PxRequest = {
  encode(message: PxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pid !== "") {
      writer.uint32(10).string(message.pid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PxRequest {
    return { pid: isSet(object.pid) ? String(object.pid) : "" };
  },

  toJSON(message: PxRequest): unknown {
    const obj: any = {};
    message.pid !== undefined && (obj.pid = message.pid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PxRequest>, I>>(object: I): PxRequest {
    const message = createBasePxRequest();
    message.pid = object.pid ?? "";
    return message;
  },
};

function createBaseGetPortableExperiencesLoadedRequest(): GetPortableExperiencesLoadedRequest {
  return {};
}

export const GetPortableExperiencesLoadedRequest = {
  encode(_: GetPortableExperiencesLoadedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPortableExperiencesLoadedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPortableExperiencesLoadedRequest();
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

  fromJSON(_: any): GetPortableExperiencesLoadedRequest {
    return {};
  },

  toJSON(_: GetPortableExperiencesLoadedRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPortableExperiencesLoadedRequest>, I>>(
    _: I,
  ): GetPortableExperiencesLoadedRequest {
    const message = createBaseGetPortableExperiencesLoadedRequest();
    return message;
  },
};

function createBaseGetPortableExperiencesLoadedResponse(): GetPortableExperiencesLoadedResponse {
  return { loaded: [] };
}

export const GetPortableExperiencesLoadedResponse = {
  encode(message: GetPortableExperiencesLoadedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.loaded) {
      SpawnResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPortableExperiencesLoadedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPortableExperiencesLoadedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loaded.push(SpawnResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPortableExperiencesLoadedResponse {
    return { loaded: Array.isArray(object?.loaded) ? object.loaded.map((e: any) => SpawnResponse.fromJSON(e)) : [] };
  },

  toJSON(message: GetPortableExperiencesLoadedResponse): unknown {
    const obj: any = {};
    if (message.loaded) {
      obj.loaded = message.loaded.map((e) => e ? SpawnResponse.toJSON(e) : undefined);
    } else {
      obj.loaded = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPortableExperiencesLoadedResponse>, I>>(
    object: I,
  ): GetPortableExperiencesLoadedResponse {
    const message = createBaseGetPortableExperiencesLoadedResponse();
    message.loaded = object.loaded?.map((e) => SpawnResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExitRequest(): ExitRequest {
  return {};
}

export const ExitRequest = {
  encode(_: ExitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExitRequest();
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

  fromJSON(_: any): ExitRequest {
    return {};
  },

  toJSON(_: ExitRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExitRequest>, I>>(_: I): ExitRequest {
    const message = createBaseExitRequest();
    return message;
  },
};

function createBaseExitResponse(): ExitResponse {
  return { status: false };
}

export const ExitResponse = {
  encode(message: ExitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status === true) {
      writer.uint32(8).bool(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExitResponse {
    return { status: isSet(object.status) ? Boolean(object.status) : false };
  },

  toJSON(message: ExitResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExitResponse>, I>>(object: I): ExitResponse {
    const message = createBaseExitResponse();
    message.status = object.status ?? false;
    return message;
  },
};

export type PortableExperiencesServiceDefinition = typeof PortableExperiencesServiceDefinition;
export const PortableExperiencesServiceDefinition = {
  name: "PortableExperiencesService",
  fullName: "PortableExperiencesService",
  methods: {
    spawn: {
      name: "Spawn",
      requestType: SpawnRequest,
      requestStream: false,
      responseType: SpawnResponse,
      responseStream: false,
      options: {},
    },
    kill: {
      name: "Kill",
      requestType: KillRequest,
      requestStream: false,
      responseType: KillResponse,
      responseStream: false,
      options: {},
    },
    exit: {
      name: "Exit",
      requestType: ExitRequest,
      requestStream: false,
      responseType: ExitResponse,
      responseStream: false,
      options: {},
    },
    getPortableExperiencesLoaded: {
      name: "GetPortableExperiencesLoaded",
      requestType: GetPortableExperiencesLoadedRequest,
      requestStream: false,
      responseType: GetPortableExperiencesLoadedResponse,
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
