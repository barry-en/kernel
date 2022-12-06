/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Empty } from "../google/protobuf/empty.gen";

export const protobufPackage = "decentraland.bff";

export interface AboutResponse {
  healthy: boolean;
  configurations: AboutResponse_AboutConfiguration | undefined;
  content: AboutResponse_ContentInfo | undefined;
  comms: AboutResponse_CommsInfo | undefined;
  lambdas: AboutResponse_LambdasInfo | undefined;
  bff: AboutResponse_BffInfo | undefined;
}

export interface AboutResponse_AboutConfiguration {
  realmName?: string | undefined;
  networkId: number;
  globalScenesUrn: string[];
  scenesUrn: string[];
}

export interface AboutResponse_ContentInfo {
  /** common properties */
  healthy: boolean;
  version?: string | undefined;
  commitHash?: string | undefined;
  publicUrl: string;
}

export interface AboutResponse_LambdasInfo {
  /** common properties */
  healthy: boolean;
  version?: string | undefined;
  commitHash?: string | undefined;
  publicUrl: string;
}

export interface AboutResponse_CommsInfo {
  /** common properties */
  healthy: boolean;
  version?: string | undefined;
  commitHash?: string | undefined;
  publicUrl?:
    | string
    | undefined;
  /** specific properties */
  protocol: string;
  usersCount?: number | undefined;
  fixedAdapter?: string | undefined;
}

export interface AboutResponse_BffInfo {
  /** common properties */
  healthy: boolean;
  version?: string | undefined;
  commitHash?: string | undefined;
  publicUrl: string;
  /** specific properties */
  userCount?: number | undefined;
  protocolVersion?: string | undefined;
}

function createBaseAboutResponse(): AboutResponse {
  return {
    healthy: false,
    configurations: undefined,
    content: undefined,
    comms: undefined,
    lambdas: undefined,
    bff: undefined,
  };
}

export const AboutResponse = {
  encode(message: AboutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.healthy === true) {
      writer.uint32(8).bool(message.healthy);
    }
    if (message.configurations !== undefined) {
      AboutResponse_AboutConfiguration.encode(message.configurations, writer.uint32(18).fork()).ldelim();
    }
    if (message.content !== undefined) {
      AboutResponse_ContentInfo.encode(message.content, writer.uint32(26).fork()).ldelim();
    }
    if (message.comms !== undefined) {
      AboutResponse_CommsInfo.encode(message.comms, writer.uint32(34).fork()).ldelim();
    }
    if (message.lambdas !== undefined) {
      AboutResponse_LambdasInfo.encode(message.lambdas, writer.uint32(42).fork()).ldelim();
    }
    if (message.bff !== undefined) {
      AboutResponse_BffInfo.encode(message.bff, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AboutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAboutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healthy = reader.bool();
          break;
        case 2:
          message.configurations = AboutResponse_AboutConfiguration.decode(reader, reader.uint32());
          break;
        case 3:
          message.content = AboutResponse_ContentInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.comms = AboutResponse_CommsInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.lambdas = AboutResponse_LambdasInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.bff = AboutResponse_BffInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AboutResponse {
    return {
      healthy: isSet(object.healthy) ? Boolean(object.healthy) : false,
      configurations: isSet(object.configurations)
        ? AboutResponse_AboutConfiguration.fromJSON(object.configurations)
        : undefined,
      content: isSet(object.content) ? AboutResponse_ContentInfo.fromJSON(object.content) : undefined,
      comms: isSet(object.comms) ? AboutResponse_CommsInfo.fromJSON(object.comms) : undefined,
      lambdas: isSet(object.lambdas) ? AboutResponse_LambdasInfo.fromJSON(object.lambdas) : undefined,
      bff: isSet(object.bff) ? AboutResponse_BffInfo.fromJSON(object.bff) : undefined,
    };
  },

  toJSON(message: AboutResponse): unknown {
    const obj: any = {};
    message.healthy !== undefined && (obj.healthy = message.healthy);
    message.configurations !== undefined && (obj.configurations = message.configurations
      ? AboutResponse_AboutConfiguration.toJSON(message.configurations)
      : undefined);
    message.content !== undefined &&
      (obj.content = message.content ? AboutResponse_ContentInfo.toJSON(message.content) : undefined);
    message.comms !== undefined &&
      (obj.comms = message.comms ? AboutResponse_CommsInfo.toJSON(message.comms) : undefined);
    message.lambdas !== undefined &&
      (obj.lambdas = message.lambdas ? AboutResponse_LambdasInfo.toJSON(message.lambdas) : undefined);
    message.bff !== undefined && (obj.bff = message.bff ? AboutResponse_BffInfo.toJSON(message.bff) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AboutResponse>, I>>(object: I): AboutResponse {
    const message = createBaseAboutResponse();
    message.healthy = object.healthy ?? false;
    message.configurations = (object.configurations !== undefined && object.configurations !== null)
      ? AboutResponse_AboutConfiguration.fromPartial(object.configurations)
      : undefined;
    message.content = (object.content !== undefined && object.content !== null)
      ? AboutResponse_ContentInfo.fromPartial(object.content)
      : undefined;
    message.comms = (object.comms !== undefined && object.comms !== null)
      ? AboutResponse_CommsInfo.fromPartial(object.comms)
      : undefined;
    message.lambdas = (object.lambdas !== undefined && object.lambdas !== null)
      ? AboutResponse_LambdasInfo.fromPartial(object.lambdas)
      : undefined;
    message.bff = (object.bff !== undefined && object.bff !== null)
      ? AboutResponse_BffInfo.fromPartial(object.bff)
      : undefined;
    return message;
  },
};

function createBaseAboutResponse_AboutConfiguration(): AboutResponse_AboutConfiguration {
  return { realmName: undefined, networkId: 0, globalScenesUrn: [], scenesUrn: [] };
}

export const AboutResponse_AboutConfiguration = {
  encode(message: AboutResponse_AboutConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.realmName !== undefined) {
      writer.uint32(10).string(message.realmName);
    }
    if (message.networkId !== 0) {
      writer.uint32(16).uint32(message.networkId);
    }
    for (const v of message.globalScenesUrn) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.scenesUrn) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AboutResponse_AboutConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAboutResponse_AboutConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.realmName = reader.string();
          break;
        case 2:
          message.networkId = reader.uint32();
          break;
        case 3:
          message.globalScenesUrn.push(reader.string());
          break;
        case 4:
          message.scenesUrn.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AboutResponse_AboutConfiguration {
    return {
      realmName: isSet(object.realmName) ? String(object.realmName) : undefined,
      networkId: isSet(object.networkId) ? Number(object.networkId) : 0,
      globalScenesUrn: Array.isArray(object?.globalScenesUrn) ? object.globalScenesUrn.map((e: any) => String(e)) : [],
      scenesUrn: Array.isArray(object?.scenesUrn) ? object.scenesUrn.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AboutResponse_AboutConfiguration): unknown {
    const obj: any = {};
    message.realmName !== undefined && (obj.realmName = message.realmName);
    message.networkId !== undefined && (obj.networkId = Math.round(message.networkId));
    if (message.globalScenesUrn) {
      obj.globalScenesUrn = message.globalScenesUrn.map((e) => e);
    } else {
      obj.globalScenesUrn = [];
    }
    if (message.scenesUrn) {
      obj.scenesUrn = message.scenesUrn.map((e) => e);
    } else {
      obj.scenesUrn = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AboutResponse_AboutConfiguration>, I>>(
    object: I,
  ): AboutResponse_AboutConfiguration {
    const message = createBaseAboutResponse_AboutConfiguration();
    message.realmName = object.realmName ?? undefined;
    message.networkId = object.networkId ?? 0;
    message.globalScenesUrn = object.globalScenesUrn?.map((e) => e) || [];
    message.scenesUrn = object.scenesUrn?.map((e) => e) || [];
    return message;
  },
};

function createBaseAboutResponse_ContentInfo(): AboutResponse_ContentInfo {
  return { healthy: false, version: undefined, commitHash: undefined, publicUrl: "" };
}

export const AboutResponse_ContentInfo = {
  encode(message: AboutResponse_ContentInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.healthy === true) {
      writer.uint32(8).bool(message.healthy);
    }
    if (message.version !== undefined) {
      writer.uint32(18).string(message.version);
    }
    if (message.commitHash !== undefined) {
      writer.uint32(26).string(message.commitHash);
    }
    if (message.publicUrl !== "") {
      writer.uint32(34).string(message.publicUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AboutResponse_ContentInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAboutResponse_ContentInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healthy = reader.bool();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.commitHash = reader.string();
          break;
        case 4:
          message.publicUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AboutResponse_ContentInfo {
    return {
      healthy: isSet(object.healthy) ? Boolean(object.healthy) : false,
      version: isSet(object.version) ? String(object.version) : undefined,
      commitHash: isSet(object.commitHash) ? String(object.commitHash) : undefined,
      publicUrl: isSet(object.publicUrl) ? String(object.publicUrl) : "",
    };
  },

  toJSON(message: AboutResponse_ContentInfo): unknown {
    const obj: any = {};
    message.healthy !== undefined && (obj.healthy = message.healthy);
    message.version !== undefined && (obj.version = message.version);
    message.commitHash !== undefined && (obj.commitHash = message.commitHash);
    message.publicUrl !== undefined && (obj.publicUrl = message.publicUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AboutResponse_ContentInfo>, I>>(object: I): AboutResponse_ContentInfo {
    const message = createBaseAboutResponse_ContentInfo();
    message.healthy = object.healthy ?? false;
    message.version = object.version ?? undefined;
    message.commitHash = object.commitHash ?? undefined;
    message.publicUrl = object.publicUrl ?? "";
    return message;
  },
};

function createBaseAboutResponse_LambdasInfo(): AboutResponse_LambdasInfo {
  return { healthy: false, version: undefined, commitHash: undefined, publicUrl: "" };
}

export const AboutResponse_LambdasInfo = {
  encode(message: AboutResponse_LambdasInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.healthy === true) {
      writer.uint32(8).bool(message.healthy);
    }
    if (message.version !== undefined) {
      writer.uint32(18).string(message.version);
    }
    if (message.commitHash !== undefined) {
      writer.uint32(26).string(message.commitHash);
    }
    if (message.publicUrl !== "") {
      writer.uint32(34).string(message.publicUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AboutResponse_LambdasInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAboutResponse_LambdasInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healthy = reader.bool();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.commitHash = reader.string();
          break;
        case 4:
          message.publicUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AboutResponse_LambdasInfo {
    return {
      healthy: isSet(object.healthy) ? Boolean(object.healthy) : false,
      version: isSet(object.version) ? String(object.version) : undefined,
      commitHash: isSet(object.commitHash) ? String(object.commitHash) : undefined,
      publicUrl: isSet(object.publicUrl) ? String(object.publicUrl) : "",
    };
  },

  toJSON(message: AboutResponse_LambdasInfo): unknown {
    const obj: any = {};
    message.healthy !== undefined && (obj.healthy = message.healthy);
    message.version !== undefined && (obj.version = message.version);
    message.commitHash !== undefined && (obj.commitHash = message.commitHash);
    message.publicUrl !== undefined && (obj.publicUrl = message.publicUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AboutResponse_LambdasInfo>, I>>(object: I): AboutResponse_LambdasInfo {
    const message = createBaseAboutResponse_LambdasInfo();
    message.healthy = object.healthy ?? false;
    message.version = object.version ?? undefined;
    message.commitHash = object.commitHash ?? undefined;
    message.publicUrl = object.publicUrl ?? "";
    return message;
  },
};

function createBaseAboutResponse_CommsInfo(): AboutResponse_CommsInfo {
  return {
    healthy: false,
    version: undefined,
    commitHash: undefined,
    publicUrl: undefined,
    protocol: "",
    usersCount: undefined,
    fixedAdapter: undefined,
  };
}

export const AboutResponse_CommsInfo = {
  encode(message: AboutResponse_CommsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.healthy === true) {
      writer.uint32(8).bool(message.healthy);
    }
    if (message.version !== undefined) {
      writer.uint32(18).string(message.version);
    }
    if (message.commitHash !== undefined) {
      writer.uint32(26).string(message.commitHash);
    }
    if (message.publicUrl !== undefined) {
      writer.uint32(34).string(message.publicUrl);
    }
    if (message.protocol !== "") {
      writer.uint32(402).string(message.protocol);
    }
    if (message.usersCount !== undefined) {
      writer.uint32(408).int32(message.usersCount);
    }
    if (message.fixedAdapter !== undefined) {
      writer.uint32(418).string(message.fixedAdapter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AboutResponse_CommsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAboutResponse_CommsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healthy = reader.bool();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.commitHash = reader.string();
          break;
        case 4:
          message.publicUrl = reader.string();
          break;
        case 50:
          message.protocol = reader.string();
          break;
        case 51:
          message.usersCount = reader.int32();
          break;
        case 52:
          message.fixedAdapter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AboutResponse_CommsInfo {
    return {
      healthy: isSet(object.healthy) ? Boolean(object.healthy) : false,
      version: isSet(object.version) ? String(object.version) : undefined,
      commitHash: isSet(object.commitHash) ? String(object.commitHash) : undefined,
      publicUrl: isSet(object.publicUrl) ? String(object.publicUrl) : undefined,
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      usersCount: isSet(object.usersCount) ? Number(object.usersCount) : undefined,
      fixedAdapter: isSet(object.fixedAdapter) ? String(object.fixedAdapter) : undefined,
    };
  },

  toJSON(message: AboutResponse_CommsInfo): unknown {
    const obj: any = {};
    message.healthy !== undefined && (obj.healthy = message.healthy);
    message.version !== undefined && (obj.version = message.version);
    message.commitHash !== undefined && (obj.commitHash = message.commitHash);
    message.publicUrl !== undefined && (obj.publicUrl = message.publicUrl);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.usersCount !== undefined && (obj.usersCount = Math.round(message.usersCount));
    message.fixedAdapter !== undefined && (obj.fixedAdapter = message.fixedAdapter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AboutResponse_CommsInfo>, I>>(object: I): AboutResponse_CommsInfo {
    const message = createBaseAboutResponse_CommsInfo();
    message.healthy = object.healthy ?? false;
    message.version = object.version ?? undefined;
    message.commitHash = object.commitHash ?? undefined;
    message.publicUrl = object.publicUrl ?? undefined;
    message.protocol = object.protocol ?? "";
    message.usersCount = object.usersCount ?? undefined;
    message.fixedAdapter = object.fixedAdapter ?? undefined;
    return message;
  },
};

function createBaseAboutResponse_BffInfo(): AboutResponse_BffInfo {
  return {
    healthy: false,
    version: undefined,
    commitHash: undefined,
    publicUrl: "",
    userCount: undefined,
    protocolVersion: undefined,
  };
}

export const AboutResponse_BffInfo = {
  encode(message: AboutResponse_BffInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.healthy === true) {
      writer.uint32(8).bool(message.healthy);
    }
    if (message.version !== undefined) {
      writer.uint32(18).string(message.version);
    }
    if (message.commitHash !== undefined) {
      writer.uint32(26).string(message.commitHash);
    }
    if (message.publicUrl !== "") {
      writer.uint32(34).string(message.publicUrl);
    }
    if (message.userCount !== undefined) {
      writer.uint32(408).int32(message.userCount);
    }
    if (message.protocolVersion !== undefined) {
      writer.uint32(418).string(message.protocolVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AboutResponse_BffInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAboutResponse_BffInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healthy = reader.bool();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.commitHash = reader.string();
          break;
        case 4:
          message.publicUrl = reader.string();
          break;
        case 51:
          message.userCount = reader.int32();
          break;
        case 52:
          message.protocolVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AboutResponse_BffInfo {
    return {
      healthy: isSet(object.healthy) ? Boolean(object.healthy) : false,
      version: isSet(object.version) ? String(object.version) : undefined,
      commitHash: isSet(object.commitHash) ? String(object.commitHash) : undefined,
      publicUrl: isSet(object.publicUrl) ? String(object.publicUrl) : "",
      userCount: isSet(object.userCount) ? Number(object.userCount) : undefined,
      protocolVersion: isSet(object.protocolVersion) ? String(object.protocolVersion) : undefined,
    };
  },

  toJSON(message: AboutResponse_BffInfo): unknown {
    const obj: any = {};
    message.healthy !== undefined && (obj.healthy = message.healthy);
    message.version !== undefined && (obj.version = message.version);
    message.commitHash !== undefined && (obj.commitHash = message.commitHash);
    message.publicUrl !== undefined && (obj.publicUrl = message.publicUrl);
    message.userCount !== undefined && (obj.userCount = Math.round(message.userCount));
    message.protocolVersion !== undefined && (obj.protocolVersion = message.protocolVersion);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AboutResponse_BffInfo>, I>>(object: I): AboutResponse_BffInfo {
    const message = createBaseAboutResponse_BffInfo();
    message.healthy = object.healthy ?? false;
    message.version = object.version ?? undefined;
    message.commitHash = object.commitHash ?? undefined;
    message.publicUrl = object.publicUrl ?? "";
    message.userCount = object.userCount ?? undefined;
    message.protocolVersion = object.protocolVersion ?? undefined;
    return message;
  },
};

export type HttpEndpointsDefinition = typeof HttpEndpointsDefinition;
export const HttpEndpointsDefinition = {
  name: "HttpEndpoints",
  fullName: "decentraland.bff.HttpEndpoints",
  methods: {
    /** Returns the status and configuration of the bff microservice */
    about: {
      name: "About",
      requestType: Empty,
      requestStream: false,
      responseType: AboutResponse,
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
