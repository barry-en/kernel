/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ContentMapping } from "../../common/ContentMapping.gen";

export const protobufPackage = "";

export interface MappingsResponse {
  parcelId: string;
  rootCid: string;
  contents: ContentMapping[];
}

export interface Land {
  sceneId: string;
  sceneJsonData: string;
  baseUrl: string;
  baseUrlBundles: string;
  mappingsResponse: MappingsResponse | undefined;
}

export interface GetParcelRequest {
}

export interface GetParcelResponse {
  land: Land | undefined;
  cid: string;
}

export interface GetSceneIdRequest {
}

export interface GetSceneIdResponse {
  sceneId: string;
}

export interface GetIsEmptyRequest {
}

export interface GetIsEmptyResponse {
  isEmpty: boolean;
}

function createBaseMappingsResponse(): MappingsResponse {
  return { parcelId: "", rootCid: "", contents: [] };
}

export const MappingsResponse = {
  encode(message: MappingsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parcelId !== "") {
      writer.uint32(10).string(message.parcelId);
    }
    if (message.rootCid !== "") {
      writer.uint32(18).string(message.rootCid);
    }
    for (const v of message.contents) {
      ContentMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MappingsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMappingsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parcelId = reader.string();
          break;
        case 2:
          message.rootCid = reader.string();
          break;
        case 3:
          message.contents.push(ContentMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MappingsResponse {
    return {
      parcelId: isSet(object.parcelId) ? String(object.parcelId) : "",
      rootCid: isSet(object.rootCid) ? String(object.rootCid) : "",
      contents: Array.isArray(object?.contents) ? object.contents.map((e: any) => ContentMapping.fromJSON(e)) : [],
    };
  },

  toJSON(message: MappingsResponse): unknown {
    const obj: any = {};
    message.parcelId !== undefined && (obj.parcelId = message.parcelId);
    message.rootCid !== undefined && (obj.rootCid = message.rootCid);
    if (message.contents) {
      obj.contents = message.contents.map((e) => e ? ContentMapping.toJSON(e) : undefined);
    } else {
      obj.contents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MappingsResponse>, I>>(object: I): MappingsResponse {
    const message = createBaseMappingsResponse();
    message.parcelId = object.parcelId ?? "";
    message.rootCid = object.rootCid ?? "";
    message.contents = object.contents?.map((e) => ContentMapping.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLand(): Land {
  return { sceneId: "", sceneJsonData: "", baseUrl: "", baseUrlBundles: "", mappingsResponse: undefined };
}

export const Land = {
  encode(message: Land, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneId !== "") {
      writer.uint32(10).string(message.sceneId);
    }
    if (message.sceneJsonData !== "") {
      writer.uint32(18).string(message.sceneJsonData);
    }
    if (message.baseUrl !== "") {
      writer.uint32(26).string(message.baseUrl);
    }
    if (message.baseUrlBundles !== "") {
      writer.uint32(34).string(message.baseUrlBundles);
    }
    if (message.mappingsResponse !== undefined) {
      MappingsResponse.encode(message.mappingsResponse, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Land {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sceneId = reader.string();
          break;
        case 2:
          message.sceneJsonData = reader.string();
          break;
        case 3:
          message.baseUrl = reader.string();
          break;
        case 4:
          message.baseUrlBundles = reader.string();
          break;
        case 5:
          message.mappingsResponse = MappingsResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Land {
    return {
      sceneId: isSet(object.sceneId) ? String(object.sceneId) : "",
      sceneJsonData: isSet(object.sceneJsonData) ? String(object.sceneJsonData) : "",
      baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : "",
      baseUrlBundles: isSet(object.baseUrlBundles) ? String(object.baseUrlBundles) : "",
      mappingsResponse: isSet(object.mappingsResponse) ? MappingsResponse.fromJSON(object.mappingsResponse) : undefined,
    };
  },

  toJSON(message: Land): unknown {
    const obj: any = {};
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    message.sceneJsonData !== undefined && (obj.sceneJsonData = message.sceneJsonData);
    message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
    message.baseUrlBundles !== undefined && (obj.baseUrlBundles = message.baseUrlBundles);
    message.mappingsResponse !== undefined &&
      (obj.mappingsResponse = message.mappingsResponse ? MappingsResponse.toJSON(message.mappingsResponse) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Land>, I>>(object: I): Land {
    const message = createBaseLand();
    message.sceneId = object.sceneId ?? "";
    message.sceneJsonData = object.sceneJsonData ?? "";
    message.baseUrl = object.baseUrl ?? "";
    message.baseUrlBundles = object.baseUrlBundles ?? "";
    message.mappingsResponse = (object.mappingsResponse !== undefined && object.mappingsResponse !== null)
      ? MappingsResponse.fromPartial(object.mappingsResponse)
      : undefined;
    return message;
  },
};

function createBaseGetParcelRequest(): GetParcelRequest {
  return {};
}

export const GetParcelRequest = {
  encode(_: GetParcelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetParcelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetParcelRequest();
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

  fromJSON(_: any): GetParcelRequest {
    return {};
  },

  toJSON(_: GetParcelRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetParcelRequest>, I>>(_: I): GetParcelRequest {
    const message = createBaseGetParcelRequest();
    return message;
  },
};

function createBaseGetParcelResponse(): GetParcelResponse {
  return { land: undefined, cid: "" };
}

export const GetParcelResponse = {
  encode(message: GetParcelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.land !== undefined) {
      Land.encode(message.land, writer.uint32(10).fork()).ldelim();
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetParcelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetParcelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.land = Land.decode(reader, reader.uint32());
          break;
        case 2:
          message.cid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetParcelResponse {
    return {
      land: isSet(object.land) ? Land.fromJSON(object.land) : undefined,
      cid: isSet(object.cid) ? String(object.cid) : "",
    };
  },

  toJSON(message: GetParcelResponse): unknown {
    const obj: any = {};
    message.land !== undefined && (obj.land = message.land ? Land.toJSON(message.land) : undefined);
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetParcelResponse>, I>>(object: I): GetParcelResponse {
    const message = createBaseGetParcelResponse();
    message.land = (object.land !== undefined && object.land !== null) ? Land.fromPartial(object.land) : undefined;
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseGetSceneIdRequest(): GetSceneIdRequest {
  return {};
}

export const GetSceneIdRequest = {
  encode(_: GetSceneIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSceneIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSceneIdRequest();
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

  fromJSON(_: any): GetSceneIdRequest {
    return {};
  },

  toJSON(_: GetSceneIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSceneIdRequest>, I>>(_: I): GetSceneIdRequest {
    const message = createBaseGetSceneIdRequest();
    return message;
  },
};

function createBaseGetSceneIdResponse(): GetSceneIdResponse {
  return { sceneId: "" };
}

export const GetSceneIdResponse = {
  encode(message: GetSceneIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneId !== "") {
      writer.uint32(10).string(message.sceneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSceneIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSceneIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sceneId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetSceneIdResponse {
    return { sceneId: isSet(object.sceneId) ? String(object.sceneId) : "" };
  },

  toJSON(message: GetSceneIdResponse): unknown {
    const obj: any = {};
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetSceneIdResponse>, I>>(object: I): GetSceneIdResponse {
    const message = createBaseGetSceneIdResponse();
    message.sceneId = object.sceneId ?? "";
    return message;
  },
};

function createBaseGetIsEmptyRequest(): GetIsEmptyRequest {
  return {};
}

export const GetIsEmptyRequest = {
  encode(_: GetIsEmptyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetIsEmptyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetIsEmptyRequest();
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

  fromJSON(_: any): GetIsEmptyRequest {
    return {};
  },

  toJSON(_: GetIsEmptyRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetIsEmptyRequest>, I>>(_: I): GetIsEmptyRequest {
    const message = createBaseGetIsEmptyRequest();
    return message;
  },
};

function createBaseGetIsEmptyResponse(): GetIsEmptyResponse {
  return { isEmpty: false };
}

export const GetIsEmptyResponse = {
  encode(message: GetIsEmptyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isEmpty === true) {
      writer.uint32(8).bool(message.isEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetIsEmptyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetIsEmptyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetIsEmptyResponse {
    return { isEmpty: isSet(object.isEmpty) ? Boolean(object.isEmpty) : false };
  },

  toJSON(message: GetIsEmptyResponse): unknown {
    const obj: any = {};
    message.isEmpty !== undefined && (obj.isEmpty = message.isEmpty);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetIsEmptyResponse>, I>>(object: I): GetIsEmptyResponse {
    const message = createBaseGetIsEmptyResponse();
    message.isEmpty = object.isEmpty ?? false;
    return message;
  },
};

export type ParcelIdentityServiceDefinition = typeof ParcelIdentityServiceDefinition;
export const ParcelIdentityServiceDefinition = {
  name: "ParcelIdentityService",
  fullName: "ParcelIdentityService",
  methods: {
    getParcel: {
      name: "GetParcel",
      requestType: GetParcelRequest,
      requestStream: false,
      responseType: GetParcelResponse,
      responseStream: false,
      options: {},
    },
    getSceneId: {
      name: "GetSceneId",
      requestType: GetSceneIdRequest,
      requestStream: false,
      responseType: GetSceneIdResponse,
      responseStream: false,
      options: {},
    },
    getIsEmpty: {
      name: "GetIsEmpty",
      requestType: GetIsEmptyRequest,
      requestStream: false,
      responseType: GetIsEmptyResponse,
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
