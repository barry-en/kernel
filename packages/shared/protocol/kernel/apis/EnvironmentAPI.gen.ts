/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ContentMapping } from "../../common/ContentMapping.gen";

export const protobufPackage = "";

export interface MinimalRunnableEntity {
  content: ContentMapping[];
  metadataJson: string;
}

export interface BootstrapDataResponse {
  id: string;
  baseUrl: string;
  entity: MinimalRunnableEntity | undefined;
  useFPSThrottling: boolean;
}

export interface PreviewModeResponse {
  isPreview: boolean;
}

export interface AreUnsafeRequestAllowedResponse {
  status: boolean;
}

export interface GetPlatformResponse {
  platform: string;
}

export interface EnvironmentRealm {
  domain: string;
  layer: string;
  room: string;
  serverName: string;
  displayName: string;
  protocol: string;
}

export interface GetCurrentRealmResponse {
  currentRealm?: EnvironmentRealm | undefined;
}

export interface GetExplorerConfigurationResponse {
  clientUri: string;
  configurations: { [key: string]: string };
}

export interface GetExplorerConfigurationResponse_ConfigurationsEntry {
  key: string;
  value: string;
}

export interface GetDecentralandTimeResponse {
  seconds: number;
}

export interface GetBootstrapDataRequest {
}

export interface IsPreviewModeRequest {
}

export interface GetPlatformRequest {
}

export interface AreUnsafeRequestAllowedRequest {
}

export interface GetCurrentRealmRequest {
}

export interface GetExplorerConfigurationRequest {
}

export interface GetDecentralandTimeRequest {
}

function createBaseMinimalRunnableEntity(): MinimalRunnableEntity {
  return { content: [], metadataJson: "" };
}

export const MinimalRunnableEntity = {
  encode(message: MinimalRunnableEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.content) {
      ContentMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadataJson !== "") {
      writer.uint32(18).string(message.metadataJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinimalRunnableEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinimalRunnableEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content.push(ContentMapping.decode(reader, reader.uint32()));
          break;
        case 2:
          message.metadataJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MinimalRunnableEntity {
    return {
      content: Array.isArray(object?.content) ? object.content.map((e: any) => ContentMapping.fromJSON(e)) : [],
      metadataJson: isSet(object.metadataJson) ? String(object.metadataJson) : "",
    };
  },

  toJSON(message: MinimalRunnableEntity): unknown {
    const obj: any = {};
    if (message.content) {
      obj.content = message.content.map((e) => e ? ContentMapping.toJSON(e) : undefined);
    } else {
      obj.content = [];
    }
    message.metadataJson !== undefined && (obj.metadataJson = message.metadataJson);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MinimalRunnableEntity>, I>>(object: I): MinimalRunnableEntity {
    const message = createBaseMinimalRunnableEntity();
    message.content = object.content?.map((e) => ContentMapping.fromPartial(e)) || [];
    message.metadataJson = object.metadataJson ?? "";
    return message;
  },
};

function createBaseBootstrapDataResponse(): BootstrapDataResponse {
  return { id: "", baseUrl: "", entity: undefined, useFPSThrottling: false };
}

export const BootstrapDataResponse = {
  encode(message: BootstrapDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.baseUrl !== "") {
      writer.uint32(34).string(message.baseUrl);
    }
    if (message.entity !== undefined) {
      MinimalRunnableEntity.encode(message.entity, writer.uint32(18).fork()).ldelim();
    }
    if (message.useFPSThrottling === true) {
      writer.uint32(40).bool(message.useFPSThrottling);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BootstrapDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBootstrapDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 4:
          message.baseUrl = reader.string();
          break;
        case 2:
          message.entity = MinimalRunnableEntity.decode(reader, reader.uint32());
          break;
        case 5:
          message.useFPSThrottling = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootstrapDataResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : "",
      entity: isSet(object.entity) ? MinimalRunnableEntity.fromJSON(object.entity) : undefined,
      useFPSThrottling: isSet(object.useFPSThrottling) ? Boolean(object.useFPSThrottling) : false,
    };
  },

  toJSON(message: BootstrapDataResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
    message.entity !== undefined &&
      (obj.entity = message.entity ? MinimalRunnableEntity.toJSON(message.entity) : undefined);
    message.useFPSThrottling !== undefined && (obj.useFPSThrottling = message.useFPSThrottling);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BootstrapDataResponse>, I>>(object: I): BootstrapDataResponse {
    const message = createBaseBootstrapDataResponse();
    message.id = object.id ?? "";
    message.baseUrl = object.baseUrl ?? "";
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? MinimalRunnableEntity.fromPartial(object.entity)
      : undefined;
    message.useFPSThrottling = object.useFPSThrottling ?? false;
    return message;
  },
};

function createBasePreviewModeResponse(): PreviewModeResponse {
  return { isPreview: false };
}

export const PreviewModeResponse = {
  encode(message: PreviewModeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isPreview === true) {
      writer.uint32(8).bool(message.isPreview);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PreviewModeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreviewModeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isPreview = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PreviewModeResponse {
    return { isPreview: isSet(object.isPreview) ? Boolean(object.isPreview) : false };
  },

  toJSON(message: PreviewModeResponse): unknown {
    const obj: any = {};
    message.isPreview !== undefined && (obj.isPreview = message.isPreview);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PreviewModeResponse>, I>>(object: I): PreviewModeResponse {
    const message = createBasePreviewModeResponse();
    message.isPreview = object.isPreview ?? false;
    return message;
  },
};

function createBaseAreUnsafeRequestAllowedResponse(): AreUnsafeRequestAllowedResponse {
  return { status: false };
}

export const AreUnsafeRequestAllowedResponse = {
  encode(message: AreUnsafeRequestAllowedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status === true) {
      writer.uint32(8).bool(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AreUnsafeRequestAllowedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAreUnsafeRequestAllowedResponse();
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

  fromJSON(object: any): AreUnsafeRequestAllowedResponse {
    return { status: isSet(object.status) ? Boolean(object.status) : false };
  },

  toJSON(message: AreUnsafeRequestAllowedResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AreUnsafeRequestAllowedResponse>, I>>(
    object: I,
  ): AreUnsafeRequestAllowedResponse {
    const message = createBaseAreUnsafeRequestAllowedResponse();
    message.status = object.status ?? false;
    return message;
  },
};

function createBaseGetPlatformResponse(): GetPlatformResponse {
  return { platform: "" };
}

export const GetPlatformResponse = {
  encode(message: GetPlatformResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== "") {
      writer.uint32(10).string(message.platform);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPlatformResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPlatformResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.platform = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPlatformResponse {
    return { platform: isSet(object.platform) ? String(object.platform) : "" };
  },

  toJSON(message: GetPlatformResponse): unknown {
    const obj: any = {};
    message.platform !== undefined && (obj.platform = message.platform);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPlatformResponse>, I>>(object: I): GetPlatformResponse {
    const message = createBaseGetPlatformResponse();
    message.platform = object.platform ?? "";
    return message;
  },
};

function createBaseEnvironmentRealm(): EnvironmentRealm {
  return { domain: "", layer: "", room: "", serverName: "", displayName: "", protocol: "" };
}

export const EnvironmentRealm = {
  encode(message: EnvironmentRealm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    if (message.layer !== "") {
      writer.uint32(18).string(message.layer);
    }
    if (message.room !== "") {
      writer.uint32(26).string(message.room);
    }
    if (message.serverName !== "") {
      writer.uint32(34).string(message.serverName);
    }
    if (message.displayName !== "") {
      writer.uint32(42).string(message.displayName);
    }
    if (message.protocol !== "") {
      writer.uint32(50).string(message.protocol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnvironmentRealm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvironmentRealm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        case 2:
          message.layer = reader.string();
          break;
        case 3:
          message.room = reader.string();
          break;
        case 4:
          message.serverName = reader.string();
          break;
        case 5:
          message.displayName = reader.string();
          break;
        case 6:
          message.protocol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnvironmentRealm {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
      layer: isSet(object.layer) ? String(object.layer) : "",
      room: isSet(object.room) ? String(object.room) : "",
      serverName: isSet(object.serverName) ? String(object.serverName) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
    };
  },

  toJSON(message: EnvironmentRealm): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    message.layer !== undefined && (obj.layer = message.layer);
    message.room !== undefined && (obj.room = message.room);
    message.serverName !== undefined && (obj.serverName = message.serverName);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnvironmentRealm>, I>>(object: I): EnvironmentRealm {
    const message = createBaseEnvironmentRealm();
    message.domain = object.domain ?? "";
    message.layer = object.layer ?? "";
    message.room = object.room ?? "";
    message.serverName = object.serverName ?? "";
    message.displayName = object.displayName ?? "";
    message.protocol = object.protocol ?? "";
    return message;
  },
};

function createBaseGetCurrentRealmResponse(): GetCurrentRealmResponse {
  return { currentRealm: undefined };
}

export const GetCurrentRealmResponse = {
  encode(message: GetCurrentRealmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentRealm !== undefined) {
      EnvironmentRealm.encode(message.currentRealm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCurrentRealmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrentRealmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentRealm = EnvironmentRealm.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCurrentRealmResponse {
    return { currentRealm: isSet(object.currentRealm) ? EnvironmentRealm.fromJSON(object.currentRealm) : undefined };
  },

  toJSON(message: GetCurrentRealmResponse): unknown {
    const obj: any = {};
    message.currentRealm !== undefined &&
      (obj.currentRealm = message.currentRealm ? EnvironmentRealm.toJSON(message.currentRealm) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCurrentRealmResponse>, I>>(object: I): GetCurrentRealmResponse {
    const message = createBaseGetCurrentRealmResponse();
    message.currentRealm = (object.currentRealm !== undefined && object.currentRealm !== null)
      ? EnvironmentRealm.fromPartial(object.currentRealm)
      : undefined;
    return message;
  },
};

function createBaseGetExplorerConfigurationResponse(): GetExplorerConfigurationResponse {
  return { clientUri: "", configurations: {} };
}

export const GetExplorerConfigurationResponse = {
  encode(message: GetExplorerConfigurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientUri !== "") {
      writer.uint32(10).string(message.clientUri);
    }
    Object.entries(message.configurations).forEach(([key, value]) => {
      GetExplorerConfigurationResponse_ConfigurationsEntry.encode({ key: key as any, value }, writer.uint32(18).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExplorerConfigurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExplorerConfigurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientUri = reader.string();
          break;
        case 2:
          const entry2 = GetExplorerConfigurationResponse_ConfigurationsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.configurations[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetExplorerConfigurationResponse {
    return {
      clientUri: isSet(object.clientUri) ? String(object.clientUri) : "",
      configurations: isObject(object.configurations)
        ? Object.entries(object.configurations).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: GetExplorerConfigurationResponse): unknown {
    const obj: any = {};
    message.clientUri !== undefined && (obj.clientUri = message.clientUri);
    obj.configurations = {};
    if (message.configurations) {
      Object.entries(message.configurations).forEach(([k, v]) => {
        obj.configurations[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetExplorerConfigurationResponse>, I>>(
    object: I,
  ): GetExplorerConfigurationResponse {
    const message = createBaseGetExplorerConfigurationResponse();
    message.clientUri = object.clientUri ?? "";
    message.configurations = Object.entries(object.configurations ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseGetExplorerConfigurationResponse_ConfigurationsEntry(): GetExplorerConfigurationResponse_ConfigurationsEntry {
  return { key: "", value: "" };
}

export const GetExplorerConfigurationResponse_ConfigurationsEntry = {
  encode(
    message: GetExplorerConfigurationResponse_ConfigurationsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExplorerConfigurationResponse_ConfigurationsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExplorerConfigurationResponse_ConfigurationsEntry();
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

  fromJSON(object: any): GetExplorerConfigurationResponse_ConfigurationsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: GetExplorerConfigurationResponse_ConfigurationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetExplorerConfigurationResponse_ConfigurationsEntry>, I>>(
    object: I,
  ): GetExplorerConfigurationResponse_ConfigurationsEntry {
    const message = createBaseGetExplorerConfigurationResponse_ConfigurationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGetDecentralandTimeResponse(): GetDecentralandTimeResponse {
  return { seconds: 0 };
}

export const GetDecentralandTimeResponse = {
  encode(message: GetDecentralandTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seconds !== 0) {
      writer.uint32(8).int32(message.seconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDecentralandTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDecentralandTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDecentralandTimeResponse {
    return { seconds: isSet(object.seconds) ? Number(object.seconds) : 0 };
  },

  toJSON(message: GetDecentralandTimeResponse): unknown {
    const obj: any = {};
    message.seconds !== undefined && (obj.seconds = Math.round(message.seconds));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDecentralandTimeResponse>, I>>(object: I): GetDecentralandTimeResponse {
    const message = createBaseGetDecentralandTimeResponse();
    message.seconds = object.seconds ?? 0;
    return message;
  },
};

function createBaseGetBootstrapDataRequest(): GetBootstrapDataRequest {
  return {};
}

export const GetBootstrapDataRequest = {
  encode(_: GetBootstrapDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBootstrapDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBootstrapDataRequest();
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

  fromJSON(_: any): GetBootstrapDataRequest {
    return {};
  },

  toJSON(_: GetBootstrapDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBootstrapDataRequest>, I>>(_: I): GetBootstrapDataRequest {
    const message = createBaseGetBootstrapDataRequest();
    return message;
  },
};

function createBaseIsPreviewModeRequest(): IsPreviewModeRequest {
  return {};
}

export const IsPreviewModeRequest = {
  encode(_: IsPreviewModeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsPreviewModeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsPreviewModeRequest();
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

  fromJSON(_: any): IsPreviewModeRequest {
    return {};
  },

  toJSON(_: IsPreviewModeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IsPreviewModeRequest>, I>>(_: I): IsPreviewModeRequest {
    const message = createBaseIsPreviewModeRequest();
    return message;
  },
};

function createBaseGetPlatformRequest(): GetPlatformRequest {
  return {};
}

export const GetPlatformRequest = {
  encode(_: GetPlatformRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPlatformRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPlatformRequest();
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

  fromJSON(_: any): GetPlatformRequest {
    return {};
  },

  toJSON(_: GetPlatformRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPlatformRequest>, I>>(_: I): GetPlatformRequest {
    const message = createBaseGetPlatformRequest();
    return message;
  },
};

function createBaseAreUnsafeRequestAllowedRequest(): AreUnsafeRequestAllowedRequest {
  return {};
}

export const AreUnsafeRequestAllowedRequest = {
  encode(_: AreUnsafeRequestAllowedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AreUnsafeRequestAllowedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAreUnsafeRequestAllowedRequest();
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

  fromJSON(_: any): AreUnsafeRequestAllowedRequest {
    return {};
  },

  toJSON(_: AreUnsafeRequestAllowedRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AreUnsafeRequestAllowedRequest>, I>>(_: I): AreUnsafeRequestAllowedRequest {
    const message = createBaseAreUnsafeRequestAllowedRequest();
    return message;
  },
};

function createBaseGetCurrentRealmRequest(): GetCurrentRealmRequest {
  return {};
}

export const GetCurrentRealmRequest = {
  encode(_: GetCurrentRealmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCurrentRealmRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrentRealmRequest();
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

  fromJSON(_: any): GetCurrentRealmRequest {
    return {};
  },

  toJSON(_: GetCurrentRealmRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCurrentRealmRequest>, I>>(_: I): GetCurrentRealmRequest {
    const message = createBaseGetCurrentRealmRequest();
    return message;
  },
};

function createBaseGetExplorerConfigurationRequest(): GetExplorerConfigurationRequest {
  return {};
}

export const GetExplorerConfigurationRequest = {
  encode(_: GetExplorerConfigurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExplorerConfigurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExplorerConfigurationRequest();
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

  fromJSON(_: any): GetExplorerConfigurationRequest {
    return {};
  },

  toJSON(_: GetExplorerConfigurationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetExplorerConfigurationRequest>, I>>(_: I): GetExplorerConfigurationRequest {
    const message = createBaseGetExplorerConfigurationRequest();
    return message;
  },
};

function createBaseGetDecentralandTimeRequest(): GetDecentralandTimeRequest {
  return {};
}

export const GetDecentralandTimeRequest = {
  encode(_: GetDecentralandTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDecentralandTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDecentralandTimeRequest();
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

  fromJSON(_: any): GetDecentralandTimeRequest {
    return {};
  },

  toJSON(_: GetDecentralandTimeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetDecentralandTimeRequest>, I>>(_: I): GetDecentralandTimeRequest {
    const message = createBaseGetDecentralandTimeRequest();
    return message;
  },
};

export type EnvironmentAPIServiceDefinition = typeof EnvironmentAPIServiceDefinition;
export const EnvironmentAPIServiceDefinition = {
  name: "EnvironmentAPIService",
  fullName: "EnvironmentAPIService",
  methods: {
    getBootstrapData: {
      name: "GetBootstrapData",
      requestType: GetBootstrapDataRequest,
      requestStream: false,
      responseType: BootstrapDataResponse,
      responseStream: false,
      options: {},
    },
    isPreviewMode: {
      name: "IsPreviewMode",
      requestType: IsPreviewModeRequest,
      requestStream: false,
      responseType: PreviewModeResponse,
      responseStream: false,
      options: {},
    },
    getPlatform: {
      name: "GetPlatform",
      requestType: GetPlatformRequest,
      requestStream: false,
      responseType: GetPlatformResponse,
      responseStream: false,
      options: {},
    },
    areUnsafeRequestAllowed: {
      name: "AreUnsafeRequestAllowed",
      requestType: AreUnsafeRequestAllowedRequest,
      requestStream: false,
      responseType: AreUnsafeRequestAllowedResponse,
      responseStream: false,
      options: {},
    },
    getCurrentRealm: {
      name: "GetCurrentRealm",
      requestType: GetCurrentRealmRequest,
      requestStream: false,
      responseType: GetCurrentRealmResponse,
      responseStream: false,
      options: {},
    },
    getExplorerConfiguration: {
      name: "GetExplorerConfiguration",
      requestType: GetExplorerConfigurationRequest,
      requestStream: false,
      responseType: GetExplorerConfigurationResponse,
      responseStream: false,
      options: {},
    },
    getDecentralandTime: {
      name: "GetDecentralandTime",
      requestType: GetDecentralandTimeRequest,
      requestStream: false,
      responseType: GetDecentralandTimeResponse,
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
