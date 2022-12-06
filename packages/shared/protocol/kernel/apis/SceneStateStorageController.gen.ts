/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface SerializedSceneState {
  entities: SerializedEntity[];
}

export interface SerializedComponent {
  type: number;
  valueJson: string;
}

export interface SerializedEntity {
  id: string;
  components: SerializedComponent[];
}

export interface GetProjectManifestRequest {
  projectId: string;
}

export interface GetProjectManifestResponse {
  state?: SerializedSceneState | undefined;
}

export interface GetProjectManifestByCoordinatesRequest {
  land: string;
}

export interface GetProjectManifestByCoordinatesResponse {
  state?: SerializedSceneState | undefined;
}

export interface CreateProjectWithCoordsRequest {
  coordinates: string;
}

export interface CreateProjectWithCoordsResponse {
  ok: boolean;
}

export interface SaveSceneStateRequest {
  serializedSceneState: SerializedSceneState | undefined;
}

export interface SaveSceneStateResponse {
  ok: boolean;
  error?: string | undefined;
}

export interface SaveProjectInfoRequest {
  sceneState: SerializedSceneState | undefined;
  projectName: string;
  projectDescription: string;
  projectScreenshot: string;
}

export interface SaveProjectInfoResponse {
  ok: boolean;
}

export interface PublishSceneStateRequest {
  sceneId: string;
  sceneName: string;
  sceneDescription: string;
  sceneScreenshot: string;
  sceneState: SerializedSceneState | undefined;
}

export interface PublishSceneStateResponse {
  ok: boolean;
  error?: string | undefined;
}

export interface GetStoredStateRequest {
  sceneId: string;
}

export interface GetStoredStateResponse {
  state?: SerializedSceneState | undefined;
}

export interface CreateProjectFromStateDefinitionRequest {
}

export interface CreateProjectFromStateDefinitionResponse {
  state?: SerializedSceneState | undefined;
}

export interface SendAssetsToRendererRequest {
  state: SerializedSceneState | undefined;
}

export interface SendAssetsToRendererResponse {
  state: string;
}

function createBaseSerializedSceneState(): SerializedSceneState {
  return { entities: [] };
}

export const SerializedSceneState = {
  encode(message: SerializedSceneState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entities) {
      SerializedEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SerializedSceneState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSerializedSceneState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entities.push(SerializedEntity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SerializedSceneState {
    return {
      entities: Array.isArray(object?.entities) ? object.entities.map((e: any) => SerializedEntity.fromJSON(e)) : [],
    };
  },

  toJSON(message: SerializedSceneState): unknown {
    const obj: any = {};
    if (message.entities) {
      obj.entities = message.entities.map((e) => e ? SerializedEntity.toJSON(e) : undefined);
    } else {
      obj.entities = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SerializedSceneState>, I>>(object: I): SerializedSceneState {
    const message = createBaseSerializedSceneState();
    message.entities = object.entities?.map((e) => SerializedEntity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSerializedComponent(): SerializedComponent {
  return { type: 0, valueJson: "" };
}

export const SerializedComponent = {
  encode(message: SerializedComponent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.valueJson !== "") {
      writer.uint32(18).string(message.valueJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SerializedComponent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSerializedComponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32();
          break;
        case 2:
          message.valueJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SerializedComponent {
    return {
      type: isSet(object.type) ? Number(object.type) : 0,
      valueJson: isSet(object.valueJson) ? String(object.valueJson) : "",
    };
  },

  toJSON(message: SerializedComponent): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.valueJson !== undefined && (obj.valueJson = message.valueJson);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SerializedComponent>, I>>(object: I): SerializedComponent {
    const message = createBaseSerializedComponent();
    message.type = object.type ?? 0;
    message.valueJson = object.valueJson ?? "";
    return message;
  },
};

function createBaseSerializedEntity(): SerializedEntity {
  return { id: "", components: [] };
}

export const SerializedEntity = {
  encode(message: SerializedEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.components) {
      SerializedComponent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SerializedEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSerializedEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.components.push(SerializedComponent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SerializedEntity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      components: Array.isArray(object?.components)
        ? object.components.map((e: any) => SerializedComponent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SerializedEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.components) {
      obj.components = message.components.map((e) => e ? SerializedComponent.toJSON(e) : undefined);
    } else {
      obj.components = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SerializedEntity>, I>>(object: I): SerializedEntity {
    const message = createBaseSerializedEntity();
    message.id = object.id ?? "";
    message.components = object.components?.map((e) => SerializedComponent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetProjectManifestRequest(): GetProjectManifestRequest {
  return { projectId: "" };
}

export const GetProjectManifestRequest = {
  encode(message: GetProjectManifestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectManifestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectManifestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.projectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectManifestRequest {
    return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
  },

  toJSON(message: GetProjectManifestRequest): unknown {
    const obj: any = {};
    message.projectId !== undefined && (obj.projectId = message.projectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectManifestRequest>, I>>(object: I): GetProjectManifestRequest {
    const message = createBaseGetProjectManifestRequest();
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseGetProjectManifestResponse(): GetProjectManifestResponse {
  return { state: undefined };
}

export const GetProjectManifestResponse = {
  encode(message: GetProjectManifestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      SerializedSceneState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectManifestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectManifestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = SerializedSceneState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectManifestResponse {
    return { state: isSet(object.state) ? SerializedSceneState.fromJSON(object.state) : undefined };
  },

  toJSON(message: GetProjectManifestResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? SerializedSceneState.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectManifestResponse>, I>>(object: I): GetProjectManifestResponse {
    const message = createBaseGetProjectManifestResponse();
    message.state = (object.state !== undefined && object.state !== null)
      ? SerializedSceneState.fromPartial(object.state)
      : undefined;
    return message;
  },
};

function createBaseGetProjectManifestByCoordinatesRequest(): GetProjectManifestByCoordinatesRequest {
  return { land: "" };
}

export const GetProjectManifestByCoordinatesRequest = {
  encode(message: GetProjectManifestByCoordinatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.land !== "") {
      writer.uint32(10).string(message.land);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectManifestByCoordinatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectManifestByCoordinatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.land = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectManifestByCoordinatesRequest {
    return { land: isSet(object.land) ? String(object.land) : "" };
  },

  toJSON(message: GetProjectManifestByCoordinatesRequest): unknown {
    const obj: any = {};
    message.land !== undefined && (obj.land = message.land);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectManifestByCoordinatesRequest>, I>>(
    object: I,
  ): GetProjectManifestByCoordinatesRequest {
    const message = createBaseGetProjectManifestByCoordinatesRequest();
    message.land = object.land ?? "";
    return message;
  },
};

function createBaseGetProjectManifestByCoordinatesResponse(): GetProjectManifestByCoordinatesResponse {
  return { state: undefined };
}

export const GetProjectManifestByCoordinatesResponse = {
  encode(message: GetProjectManifestByCoordinatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      SerializedSceneState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProjectManifestByCoordinatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProjectManifestByCoordinatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = SerializedSceneState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProjectManifestByCoordinatesResponse {
    return { state: isSet(object.state) ? SerializedSceneState.fromJSON(object.state) : undefined };
  },

  toJSON(message: GetProjectManifestByCoordinatesResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? SerializedSceneState.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProjectManifestByCoordinatesResponse>, I>>(
    object: I,
  ): GetProjectManifestByCoordinatesResponse {
    const message = createBaseGetProjectManifestByCoordinatesResponse();
    message.state = (object.state !== undefined && object.state !== null)
      ? SerializedSceneState.fromPartial(object.state)
      : undefined;
    return message;
  },
};

function createBaseCreateProjectWithCoordsRequest(): CreateProjectWithCoordsRequest {
  return { coordinates: "" };
}

export const CreateProjectWithCoordsRequest = {
  encode(message: CreateProjectWithCoordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coordinates !== "") {
      writer.uint32(10).string(message.coordinates);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectWithCoordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectWithCoordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coordinates = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProjectWithCoordsRequest {
    return { coordinates: isSet(object.coordinates) ? String(object.coordinates) : "" };
  },

  toJSON(message: CreateProjectWithCoordsRequest): unknown {
    const obj: any = {};
    message.coordinates !== undefined && (obj.coordinates = message.coordinates);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectWithCoordsRequest>, I>>(
    object: I,
  ): CreateProjectWithCoordsRequest {
    const message = createBaseCreateProjectWithCoordsRequest();
    message.coordinates = object.coordinates ?? "";
    return message;
  },
};

function createBaseCreateProjectWithCoordsResponse(): CreateProjectWithCoordsResponse {
  return { ok: false };
}

export const CreateProjectWithCoordsResponse = {
  encode(message: CreateProjectWithCoordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectWithCoordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectWithCoordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ok = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProjectWithCoordsResponse {
    return { ok: isSet(object.ok) ? Boolean(object.ok) : false };
  },

  toJSON(message: CreateProjectWithCoordsResponse): unknown {
    const obj: any = {};
    message.ok !== undefined && (obj.ok = message.ok);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectWithCoordsResponse>, I>>(
    object: I,
  ): CreateProjectWithCoordsResponse {
    const message = createBaseCreateProjectWithCoordsResponse();
    message.ok = object.ok ?? false;
    return message;
  },
};

function createBaseSaveSceneStateRequest(): SaveSceneStateRequest {
  return { serializedSceneState: undefined };
}

export const SaveSceneStateRequest = {
  encode(message: SaveSceneStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serializedSceneState !== undefined) {
      SerializedSceneState.encode(message.serializedSceneState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveSceneStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveSceneStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serializedSceneState = SerializedSceneState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveSceneStateRequest {
    return {
      serializedSceneState: isSet(object.serializedSceneState)
        ? SerializedSceneState.fromJSON(object.serializedSceneState)
        : undefined,
    };
  },

  toJSON(message: SaveSceneStateRequest): unknown {
    const obj: any = {};
    message.serializedSceneState !== undefined && (obj.serializedSceneState = message.serializedSceneState
      ? SerializedSceneState.toJSON(message.serializedSceneState)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveSceneStateRequest>, I>>(object: I): SaveSceneStateRequest {
    const message = createBaseSaveSceneStateRequest();
    message.serializedSceneState = (object.serializedSceneState !== undefined && object.serializedSceneState !== null)
      ? SerializedSceneState.fromPartial(object.serializedSceneState)
      : undefined;
    return message;
  },
};

function createBaseSaveSceneStateResponse(): SaveSceneStateResponse {
  return { ok: false, error: undefined };
}

export const SaveSceneStateResponse = {
  encode(message: SaveSceneStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    if (message.error !== undefined) {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveSceneStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveSceneStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ok = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveSceneStateResponse {
    return {
      ok: isSet(object.ok) ? Boolean(object.ok) : false,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: SaveSceneStateResponse): unknown {
    const obj: any = {};
    message.ok !== undefined && (obj.ok = message.ok);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveSceneStateResponse>, I>>(object: I): SaveSceneStateResponse {
    const message = createBaseSaveSceneStateResponse();
    message.ok = object.ok ?? false;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseSaveProjectInfoRequest(): SaveProjectInfoRequest {
  return { sceneState: undefined, projectName: "", projectDescription: "", projectScreenshot: "" };
}

export const SaveProjectInfoRequest = {
  encode(message: SaveProjectInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneState !== undefined) {
      SerializedSceneState.encode(message.sceneState, writer.uint32(10).fork()).ldelim();
    }
    if (message.projectName !== "") {
      writer.uint32(18).string(message.projectName);
    }
    if (message.projectDescription !== "") {
      writer.uint32(26).string(message.projectDescription);
    }
    if (message.projectScreenshot !== "") {
      writer.uint32(34).string(message.projectScreenshot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveProjectInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveProjectInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sceneState = SerializedSceneState.decode(reader, reader.uint32());
          break;
        case 2:
          message.projectName = reader.string();
          break;
        case 3:
          message.projectDescription = reader.string();
          break;
        case 4:
          message.projectScreenshot = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveProjectInfoRequest {
    return {
      sceneState: isSet(object.sceneState) ? SerializedSceneState.fromJSON(object.sceneState) : undefined,
      projectName: isSet(object.projectName) ? String(object.projectName) : "",
      projectDescription: isSet(object.projectDescription) ? String(object.projectDescription) : "",
      projectScreenshot: isSet(object.projectScreenshot) ? String(object.projectScreenshot) : "",
    };
  },

  toJSON(message: SaveProjectInfoRequest): unknown {
    const obj: any = {};
    message.sceneState !== undefined &&
      (obj.sceneState = message.sceneState ? SerializedSceneState.toJSON(message.sceneState) : undefined);
    message.projectName !== undefined && (obj.projectName = message.projectName);
    message.projectDescription !== undefined && (obj.projectDescription = message.projectDescription);
    message.projectScreenshot !== undefined && (obj.projectScreenshot = message.projectScreenshot);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveProjectInfoRequest>, I>>(object: I): SaveProjectInfoRequest {
    const message = createBaseSaveProjectInfoRequest();
    message.sceneState = (object.sceneState !== undefined && object.sceneState !== null)
      ? SerializedSceneState.fromPartial(object.sceneState)
      : undefined;
    message.projectName = object.projectName ?? "";
    message.projectDescription = object.projectDescription ?? "";
    message.projectScreenshot = object.projectScreenshot ?? "";
    return message;
  },
};

function createBaseSaveProjectInfoResponse(): SaveProjectInfoResponse {
  return { ok: false };
}

export const SaveProjectInfoResponse = {
  encode(message: SaveProjectInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveProjectInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveProjectInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ok = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveProjectInfoResponse {
    return { ok: isSet(object.ok) ? Boolean(object.ok) : false };
  },

  toJSON(message: SaveProjectInfoResponse): unknown {
    const obj: any = {};
    message.ok !== undefined && (obj.ok = message.ok);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveProjectInfoResponse>, I>>(object: I): SaveProjectInfoResponse {
    const message = createBaseSaveProjectInfoResponse();
    message.ok = object.ok ?? false;
    return message;
  },
};

function createBasePublishSceneStateRequest(): PublishSceneStateRequest {
  return { sceneId: "", sceneName: "", sceneDescription: "", sceneScreenshot: "", sceneState: undefined };
}

export const PublishSceneStateRequest = {
  encode(message: PublishSceneStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneId !== "") {
      writer.uint32(10).string(message.sceneId);
    }
    if (message.sceneName !== "") {
      writer.uint32(18).string(message.sceneName);
    }
    if (message.sceneDescription !== "") {
      writer.uint32(26).string(message.sceneDescription);
    }
    if (message.sceneScreenshot !== "") {
      writer.uint32(34).string(message.sceneScreenshot);
    }
    if (message.sceneState !== undefined) {
      SerializedSceneState.encode(message.sceneState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishSceneStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishSceneStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sceneId = reader.string();
          break;
        case 2:
          message.sceneName = reader.string();
          break;
        case 3:
          message.sceneDescription = reader.string();
          break;
        case 4:
          message.sceneScreenshot = reader.string();
          break;
        case 5:
          message.sceneState = SerializedSceneState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishSceneStateRequest {
    return {
      sceneId: isSet(object.sceneId) ? String(object.sceneId) : "",
      sceneName: isSet(object.sceneName) ? String(object.sceneName) : "",
      sceneDescription: isSet(object.sceneDescription) ? String(object.sceneDescription) : "",
      sceneScreenshot: isSet(object.sceneScreenshot) ? String(object.sceneScreenshot) : "",
      sceneState: isSet(object.sceneState) ? SerializedSceneState.fromJSON(object.sceneState) : undefined,
    };
  },

  toJSON(message: PublishSceneStateRequest): unknown {
    const obj: any = {};
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    message.sceneName !== undefined && (obj.sceneName = message.sceneName);
    message.sceneDescription !== undefined && (obj.sceneDescription = message.sceneDescription);
    message.sceneScreenshot !== undefined && (obj.sceneScreenshot = message.sceneScreenshot);
    message.sceneState !== undefined &&
      (obj.sceneState = message.sceneState ? SerializedSceneState.toJSON(message.sceneState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishSceneStateRequest>, I>>(object: I): PublishSceneStateRequest {
    const message = createBasePublishSceneStateRequest();
    message.sceneId = object.sceneId ?? "";
    message.sceneName = object.sceneName ?? "";
    message.sceneDescription = object.sceneDescription ?? "";
    message.sceneScreenshot = object.sceneScreenshot ?? "";
    message.sceneState = (object.sceneState !== undefined && object.sceneState !== null)
      ? SerializedSceneState.fromPartial(object.sceneState)
      : undefined;
    return message;
  },
};

function createBasePublishSceneStateResponse(): PublishSceneStateResponse {
  return { ok: false, error: undefined };
}

export const PublishSceneStateResponse = {
  encode(message: PublishSceneStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    if (message.error !== undefined) {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishSceneStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishSceneStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ok = reader.bool();
          break;
        case 2:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishSceneStateResponse {
    return {
      ok: isSet(object.ok) ? Boolean(object.ok) : false,
      error: isSet(object.error) ? String(object.error) : undefined,
    };
  },

  toJSON(message: PublishSceneStateResponse): unknown {
    const obj: any = {};
    message.ok !== undefined && (obj.ok = message.ok);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishSceneStateResponse>, I>>(object: I): PublishSceneStateResponse {
    const message = createBasePublishSceneStateResponse();
    message.ok = object.ok ?? false;
    message.error = object.error ?? undefined;
    return message;
  },
};

function createBaseGetStoredStateRequest(): GetStoredStateRequest {
  return { sceneId: "" };
}

export const GetStoredStateRequest = {
  encode(message: GetStoredStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sceneId !== "") {
      writer.uint32(10).string(message.sceneId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStoredStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStoredStateRequest();
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

  fromJSON(object: any): GetStoredStateRequest {
    return { sceneId: isSet(object.sceneId) ? String(object.sceneId) : "" };
  },

  toJSON(message: GetStoredStateRequest): unknown {
    const obj: any = {};
    message.sceneId !== undefined && (obj.sceneId = message.sceneId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStoredStateRequest>, I>>(object: I): GetStoredStateRequest {
    const message = createBaseGetStoredStateRequest();
    message.sceneId = object.sceneId ?? "";
    return message;
  },
};

function createBaseGetStoredStateResponse(): GetStoredStateResponse {
  return { state: undefined };
}

export const GetStoredStateResponse = {
  encode(message: GetStoredStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      SerializedSceneState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStoredStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStoredStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = SerializedSceneState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStoredStateResponse {
    return { state: isSet(object.state) ? SerializedSceneState.fromJSON(object.state) : undefined };
  },

  toJSON(message: GetStoredStateResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? SerializedSceneState.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStoredStateResponse>, I>>(object: I): GetStoredStateResponse {
    const message = createBaseGetStoredStateResponse();
    message.state = (object.state !== undefined && object.state !== null)
      ? SerializedSceneState.fromPartial(object.state)
      : undefined;
    return message;
  },
};

function createBaseCreateProjectFromStateDefinitionRequest(): CreateProjectFromStateDefinitionRequest {
  return {};
}

export const CreateProjectFromStateDefinitionRequest = {
  encode(_: CreateProjectFromStateDefinitionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectFromStateDefinitionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectFromStateDefinitionRequest();
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

  fromJSON(_: any): CreateProjectFromStateDefinitionRequest {
    return {};
  },

  toJSON(_: CreateProjectFromStateDefinitionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectFromStateDefinitionRequest>, I>>(
    _: I,
  ): CreateProjectFromStateDefinitionRequest {
    const message = createBaseCreateProjectFromStateDefinitionRequest();
    return message;
  },
};

function createBaseCreateProjectFromStateDefinitionResponse(): CreateProjectFromStateDefinitionResponse {
  return { state: undefined };
}

export const CreateProjectFromStateDefinitionResponse = {
  encode(message: CreateProjectFromStateDefinitionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      SerializedSceneState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProjectFromStateDefinitionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProjectFromStateDefinitionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = SerializedSceneState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateProjectFromStateDefinitionResponse {
    return { state: isSet(object.state) ? SerializedSceneState.fromJSON(object.state) : undefined };
  },

  toJSON(message: CreateProjectFromStateDefinitionResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? SerializedSceneState.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateProjectFromStateDefinitionResponse>, I>>(
    object: I,
  ): CreateProjectFromStateDefinitionResponse {
    const message = createBaseCreateProjectFromStateDefinitionResponse();
    message.state = (object.state !== undefined && object.state !== null)
      ? SerializedSceneState.fromPartial(object.state)
      : undefined;
    return message;
  },
};

function createBaseSendAssetsToRendererRequest(): SendAssetsToRendererRequest {
  return { state: undefined };
}

export const SendAssetsToRendererRequest = {
  encode(message: SendAssetsToRendererRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      SerializedSceneState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendAssetsToRendererRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAssetsToRendererRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = SerializedSceneState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendAssetsToRendererRequest {
    return { state: isSet(object.state) ? SerializedSceneState.fromJSON(object.state) : undefined };
  },

  toJSON(message: SendAssetsToRendererRequest): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? SerializedSceneState.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendAssetsToRendererRequest>, I>>(object: I): SendAssetsToRendererRequest {
    const message = createBaseSendAssetsToRendererRequest();
    message.state = (object.state !== undefined && object.state !== null)
      ? SerializedSceneState.fromPartial(object.state)
      : undefined;
    return message;
  },
};

function createBaseSendAssetsToRendererResponse(): SendAssetsToRendererResponse {
  return { state: "" };
}

export const SendAssetsToRendererResponse = {
  encode(message: SendAssetsToRendererResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendAssetsToRendererResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAssetsToRendererResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendAssetsToRendererResponse {
    return { state: isSet(object.state) ? String(object.state) : "" };
  },

  toJSON(message: SendAssetsToRendererResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendAssetsToRendererResponse>, I>>(object: I): SendAssetsToRendererResponse {
    const message = createBaseSendAssetsToRendererResponse();
    message.state = object.state ?? "";
    return message;
  },
};

export type SceneStateStorageControllerServiceDefinition = typeof SceneStateStorageControllerServiceDefinition;
export const SceneStateStorageControllerServiceDefinition = {
  name: "SceneStateStorageControllerService",
  fullName: "SceneStateStorageControllerService",
  methods: {
    getProjectManifest: {
      name: "GetProjectManifest",
      requestType: GetProjectManifestRequest,
      requestStream: false,
      responseType: GetProjectManifestResponse,
      responseStream: false,
      options: {},
    },
    getProjectManifestByCoordinates: {
      name: "GetProjectManifestByCoordinates",
      requestType: GetProjectManifestByCoordinatesRequest,
      requestStream: false,
      responseType: GetProjectManifestByCoordinatesResponse,
      responseStream: false,
      options: {},
    },
    createProjectWithCoords: {
      name: "CreateProjectWithCoords",
      requestType: CreateProjectWithCoordsRequest,
      requestStream: false,
      responseType: CreateProjectWithCoordsResponse,
      responseStream: false,
      options: {},
    },
    saveSceneState: {
      name: "SaveSceneState",
      requestType: SaveSceneStateRequest,
      requestStream: false,
      responseType: SaveSceneStateResponse,
      responseStream: false,
      options: {},
    },
    saveProjectInfo: {
      name: "SaveProjectInfo",
      requestType: SaveProjectInfoRequest,
      requestStream: false,
      responseType: SaveProjectInfoResponse,
      responseStream: false,
      options: {},
    },
    publishSceneState: {
      name: "PublishSceneState",
      requestType: PublishSceneStateRequest,
      requestStream: false,
      responseType: PublishSceneStateResponse,
      responseStream: false,
      options: {},
    },
    getStoredState: {
      name: "GetStoredState",
      requestType: GetStoredStateRequest,
      requestStream: false,
      responseType: GetStoredStateResponse,
      responseStream: false,
      options: {},
    },
    createProjectFromStateDefinition: {
      name: "CreateProjectFromStateDefinition",
      requestType: CreateProjectFromStateDefinitionRequest,
      requestStream: false,
      responseType: CreateProjectFromStateDefinitionResponse,
      responseStream: false,
      options: {},
    },
    sendAssetsToRenderer: {
      name: "SendAssetsToRenderer",
      requestType: SendAssetsToRendererRequest,
      requestStream: false,
      responseType: SendAssetsToRendererResponse,
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
