/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface FlatFetchInit {
  method?: string | undefined;
  body?: string | undefined;
  headers: { [key: string]: string };
}

export interface FlatFetchInit_HeadersEntry {
  key: string;
  value: string;
}

export interface FlatFetchResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: { [key: string]: string };
  body: string;
}

export interface FlatFetchResponse_HeadersEntry {
  key: string;
  value: string;
}

export interface SignedFetchRequest {
  url: string;
  init?: FlatFetchInit | undefined;
}

function createBaseFlatFetchInit(): FlatFetchInit {
  return { method: undefined, body: undefined, headers: {} };
}

export const FlatFetchInit = {
  encode(message: FlatFetchInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.method !== undefined) {
      writer.uint32(10).string(message.method);
    }
    if (message.body !== undefined) {
      writer.uint32(18).string(message.body);
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      FlatFetchInit_HeadersEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FlatFetchInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlatFetchInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.method = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        case 3:
          const entry3 = FlatFetchInit_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FlatFetchInit {
    return {
      method: isSet(object.method) ? String(object.method) : undefined,
      body: isSet(object.body) ? String(object.body) : undefined,
      headers: isObject(object.headers)
        ? Object.entries(object.headers).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: FlatFetchInit): unknown {
    const obj: any = {};
    message.method !== undefined && (obj.method = message.method);
    message.body !== undefined && (obj.body = message.body);
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FlatFetchInit>, I>>(object: I): FlatFetchInit {
    const message = createBaseFlatFetchInit();
    message.method = object.method ?? undefined;
    message.body = object.body ?? undefined;
    message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseFlatFetchInit_HeadersEntry(): FlatFetchInit_HeadersEntry {
  return { key: "", value: "" };
}

export const FlatFetchInit_HeadersEntry = {
  encode(message: FlatFetchInit_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FlatFetchInit_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlatFetchInit_HeadersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FlatFetchInit_HeadersEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: FlatFetchInit_HeadersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FlatFetchInit_HeadersEntry>, I>>(object: I): FlatFetchInit_HeadersEntry {
    const message = createBaseFlatFetchInit_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseFlatFetchResponse(): FlatFetchResponse {
  return { ok: false, status: 0, statusText: "", headers: {}, body: "" };
}

export const FlatFetchResponse = {
  encode(message: FlatFetchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.statusText !== "") {
      writer.uint32(26).string(message.statusText);
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      FlatFetchResponse_HeadersEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.body !== "") {
      writer.uint32(42).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FlatFetchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlatFetchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ok = reader.bool();
          break;
        case 2:
          message.status = reader.int32();
          break;
        case 3:
          message.statusText = reader.string();
          break;
        case 4:
          const entry4 = FlatFetchResponse_HeadersEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.headers[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FlatFetchResponse {
    return {
      ok: isSet(object.ok) ? Boolean(object.ok) : false,
      status: isSet(object.status) ? Number(object.status) : 0,
      statusText: isSet(object.statusText) ? String(object.statusText) : "",
      headers: isObject(object.headers)
        ? Object.entries(object.headers).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: FlatFetchResponse): unknown {
    const obj: any = {};
    message.ok !== undefined && (obj.ok = message.ok);
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.statusText !== undefined && (obj.statusText = message.statusText);
    obj.headers = {};
    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FlatFetchResponse>, I>>(object: I): FlatFetchResponse {
    const message = createBaseFlatFetchResponse();
    message.ok = object.ok ?? false;
    message.status = object.status ?? 0;
    message.statusText = object.statusText ?? "";
    message.headers = Object.entries(object.headers ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.body = object.body ?? "";
    return message;
  },
};

function createBaseFlatFetchResponse_HeadersEntry(): FlatFetchResponse_HeadersEntry {
  return { key: "", value: "" };
}

export const FlatFetchResponse_HeadersEntry = {
  encode(message: FlatFetchResponse_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FlatFetchResponse_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlatFetchResponse_HeadersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FlatFetchResponse_HeadersEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: FlatFetchResponse_HeadersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FlatFetchResponse_HeadersEntry>, I>>(
    object: I,
  ): FlatFetchResponse_HeadersEntry {
    const message = createBaseFlatFetchResponse_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSignedFetchRequest(): SignedFetchRequest {
  return { url: "", init: undefined };
}

export const SignedFetchRequest = {
  encode(message: SignedFetchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.init !== undefined) {
      FlatFetchInit.encode(message.init, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedFetchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedFetchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.init = FlatFetchInit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedFetchRequest {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      init: isSet(object.init) ? FlatFetchInit.fromJSON(object.init) : undefined,
    };
  },

  toJSON(message: SignedFetchRequest): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.init !== undefined && (obj.init = message.init ? FlatFetchInit.toJSON(message.init) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignedFetchRequest>, I>>(object: I): SignedFetchRequest {
    const message = createBaseSignedFetchRequest();
    message.url = object.url ?? "";
    message.init = (object.init !== undefined && object.init !== null)
      ? FlatFetchInit.fromPartial(object.init)
      : undefined;
    return message;
  },
};

export type SignedFetchServiceDefinition = typeof SignedFetchServiceDefinition;
export const SignedFetchServiceDefinition = {
  name: "SignedFetchService",
  fullName: "SignedFetchService",
  methods: {
    signedFetch: {
      name: "SignedFetch",
      requestType: SignedFetchRequest,
      requestStream: false,
      responseType: FlatFetchResponse,
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
