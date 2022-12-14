/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum QueryType {
  InvalidQueryType = 0,
  HitFirst = 1,
  HitAll = 2,
  HitFirstAvatar = 3,
  HitAllAvatars = 4,
  UNRECOGNIZED = -1,
}

export function queryTypeFromJSON(object: any): QueryType {
  switch (object) {
    case 0:
    case "InvalidQueryType":
      return QueryType.InvalidQueryType;
    case 1:
    case "HitFirst":
      return QueryType.HitFirst;
    case 2:
    case "HitAll":
      return QueryType.HitAll;
    case 3:
    case "HitFirstAvatar":
      return QueryType.HitFirstAvatar;
    case 4:
    case "HitAllAvatars":
      return QueryType.HitAllAvatars;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QueryType.UNRECOGNIZED;
  }
}

export function queryTypeToJSON(object: QueryType): string {
  switch (object) {
    case QueryType.InvalidQueryType:
      return "InvalidQueryType";
    case QueryType.HitFirst:
      return "HitFirst";
    case QueryType.HitAll:
      return "HitAll";
    case QueryType.HitFirstAvatar:
      return "HitFirstAvatar";
    case QueryType.HitAllAvatars:
      return "HitAllAvatars";
    case QueryType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EAType {
  InvalidEAType = 0,
  OpenExternalUrl = 1,
  OpenNFTDialog = 2,
  CreateEntity = 3,
  RemoveEntity = 4,
  UpdateEntityComponent = 5,
  AttachEntityComponent = 6,
  ComponentRemoved = 7,
  SetEntityParent = 8,
  Query = 9,
  ComponentCreated = 10,
  ComponentDisposed = 11,
  ComponentUpdated = 12,
  InitMessagesFinished = 13,
  UNRECOGNIZED = -1,
}

export function eATypeFromJSON(object: any): EAType {
  switch (object) {
    case 0:
    case "InvalidEAType":
      return EAType.InvalidEAType;
    case 1:
    case "OpenExternalUrl":
      return EAType.OpenExternalUrl;
    case 2:
    case "OpenNFTDialog":
      return EAType.OpenNFTDialog;
    case 3:
    case "CreateEntity":
      return EAType.CreateEntity;
    case 4:
    case "RemoveEntity":
      return EAType.RemoveEntity;
    case 5:
    case "UpdateEntityComponent":
      return EAType.UpdateEntityComponent;
    case 6:
    case "AttachEntityComponent":
      return EAType.AttachEntityComponent;
    case 7:
    case "ComponentRemoved":
      return EAType.ComponentRemoved;
    case 8:
    case "SetEntityParent":
      return EAType.SetEntityParent;
    case 9:
    case "Query":
      return EAType.Query;
    case 10:
    case "ComponentCreated":
      return EAType.ComponentCreated;
    case 11:
    case "ComponentDisposed":
      return EAType.ComponentDisposed;
    case 12:
    case "ComponentUpdated":
      return EAType.ComponentUpdated;
    case 13:
    case "InitMessagesFinished":
      return EAType.InitMessagesFinished;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EAType.UNRECOGNIZED;
  }
}

export function eATypeToJSON(object: EAType): string {
  switch (object) {
    case EAType.InvalidEAType:
      return "InvalidEAType";
    case EAType.OpenExternalUrl:
      return "OpenExternalUrl";
    case EAType.OpenNFTDialog:
      return "OpenNFTDialog";
    case EAType.CreateEntity:
      return "CreateEntity";
    case EAType.RemoveEntity:
      return "RemoveEntity";
    case EAType.UpdateEntityComponent:
      return "UpdateEntityComponent";
    case EAType.AttachEntityComponent:
      return "AttachEntityComponent";
    case EAType.ComponentRemoved:
      return "ComponentRemoved";
    case EAType.SetEntityParent:
      return "SetEntityParent";
    case EAType.Query:
      return "Query";
    case EAType.ComponentCreated:
      return "ComponentCreated";
    case EAType.ComponentDisposed:
      return "ComponentDisposed";
    case EAType.ComponentUpdated:
      return "ComponentUpdated";
    case EAType.InitMessagesFinished:
      return "InitMessagesFinished";
    case EAType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Events */
export enum EventDataType {
  Generic = 0,
  PositionChanged = 1,
  RotationChanged = 2,
  UNRECOGNIZED = -1,
}

export function eventDataTypeFromJSON(object: any): EventDataType {
  switch (object) {
    case 0:
    case "Generic":
      return EventDataType.Generic;
    case 1:
    case "PositionChanged":
      return EventDataType.PositionChanged;
    case 2:
    case "RotationChanged":
      return EventDataType.RotationChanged;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventDataType.UNRECOGNIZED;
  }
}

export function eventDataTypeToJSON(object: EventDataType): string {
  switch (object) {
    case EventDataType.Generic:
      return "Generic";
    case EventDataType.PositionChanged:
      return "PositionChanged";
    case EventDataType.RotationChanged:
      return "RotationChanged";
    case EventDataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface OpenExternalUrlBody {
  url: string;
}

export interface OpenNFTDialogBody {
  assetContractAddress: string;
  tokenId: string;
  comment?: string | undefined;
}

export interface CreateEntityBody {
  id: string;
}

export interface RemoveEntityBody {
  id: string;
}

export interface UpdateEntityComponentBody {
  entityId: string;
  classId: number;
  name: string;
  json: string;
}

export interface AttachEntityComponentBody {
  entityId: string;
  name: string;
  id: string;
}

export interface ComponentRemovedBody {
  entityId: string;
  name: string;
}

export interface SetEntityParentBody {
  entityId: string;
  parentId: string;
}

export interface QueryBody {
  queryId: QueryType;
  payload: string;
}

export interface ComponentCreatedBody {
  id: string;
  classId: number;
  name: string;
}

export interface ComponentDisposedBody {
  id: string;
}

export interface ComponentUpdatedBody {
  id: string;
  json: string;
}

export interface InitMessagesFinishedBody {
}

export interface Payload {
  openExternalUrl?: OpenExternalUrlBody | undefined;
  openNftDialog?: OpenNFTDialogBody | undefined;
  createEntity?: CreateEntityBody | undefined;
  removeEntity?: RemoveEntityBody | undefined;
  updateEntityComponent?: UpdateEntityComponentBody | undefined;
  attachEntityComponent?: AttachEntityComponentBody | undefined;
  componentRemoved?: ComponentRemovedBody | undefined;
  setEntityParent?: SetEntityParentBody | undefined;
  query?: QueryBody | undefined;
  componentCreated?: ComponentCreatedBody | undefined;
  componentDisposed?: ComponentDisposedBody | undefined;
  componentUpdated?: ComponentUpdatedBody | undefined;
  initMessagesFinished?: InitMessagesFinishedBody | undefined;
}

export interface EntityAction {
  type: EAType;
  tag?: string | undefined;
  payload: Payload | undefined;
}

export interface ManyEntityAction {
  actions: EntityAction[];
}

export interface SendBatchResponse {
  events: EventData[];
}

export interface UnsubscribeRequest {
  eventId: string;
}

export interface SubscribeRequest {
  eventId: string;
}

export interface SubscribeResponse {
}

export interface UnsubscribeResponse {
}

export interface GenericPayload {
  eventId: string;
  eventData: string;
}

export interface ReadOnlyVector3 {
  x: number;
  y: number;
  z: number;
}

export interface ReadOnlyQuaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface PositionChangedPayload {
  position: ReadOnlyVector3 | undefined;
  cameraPosition: ReadOnlyVector3 | undefined;
  playerHeight: number;
}

export interface RotationChangedPayload {
  rotation: ReadOnlyVector3 | undefined;
  quaternion: ReadOnlyQuaternion | undefined;
}

export interface EventData {
  type: EventDataType;
  generic?: GenericPayload | undefined;
  positionChanged?: PositionChangedPayload | undefined;
  rotationChanged?: RotationChangedPayload | undefined;
}

function createBaseOpenExternalUrlBody(): OpenExternalUrlBody {
  return { url: "" };
}

export const OpenExternalUrlBody = {
  encode(message: OpenExternalUrlBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenExternalUrlBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenExternalUrlBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenExternalUrlBody {
    return { url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: OpenExternalUrlBody): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenExternalUrlBody>, I>>(object: I): OpenExternalUrlBody {
    const message = createBaseOpenExternalUrlBody();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseOpenNFTDialogBody(): OpenNFTDialogBody {
  return { assetContractAddress: "", tokenId: "", comment: undefined };
}

export const OpenNFTDialogBody = {
  encode(message: OpenNFTDialogBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetContractAddress !== "") {
      writer.uint32(10).string(message.assetContractAddress);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.comment !== undefined) {
      writer.uint32(26).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenNFTDialogBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenNFTDialogBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetContractAddress = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.comment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenNFTDialogBody {
    return {
      assetContractAddress: isSet(object.assetContractAddress) ? String(object.assetContractAddress) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      comment: isSet(object.comment) ? String(object.comment) : undefined,
    };
  },

  toJSON(message: OpenNFTDialogBody): unknown {
    const obj: any = {};
    message.assetContractAddress !== undefined && (obj.assetContractAddress = message.assetContractAddress);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.comment !== undefined && (obj.comment = message.comment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OpenNFTDialogBody>, I>>(object: I): OpenNFTDialogBody {
    const message = createBaseOpenNFTDialogBody();
    message.assetContractAddress = object.assetContractAddress ?? "";
    message.tokenId = object.tokenId ?? "";
    message.comment = object.comment ?? undefined;
    return message;
  },
};

function createBaseCreateEntityBody(): CreateEntityBody {
  return { id: "" };
}

export const CreateEntityBody = {
  encode(message: CreateEntityBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntityBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEntityBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEntityBody {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: CreateEntityBody): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateEntityBody>, I>>(object: I): CreateEntityBody {
    const message = createBaseCreateEntityBody();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseRemoveEntityBody(): RemoveEntityBody {
  return { id: "" };
}

export const RemoveEntityBody = {
  encode(message: RemoveEntityBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveEntityBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveEntityBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveEntityBody {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: RemoveEntityBody): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveEntityBody>, I>>(object: I): RemoveEntityBody {
    const message = createBaseRemoveEntityBody();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUpdateEntityComponentBody(): UpdateEntityComponentBody {
  return { entityId: "", classId: 0, name: "", json: "" };
}

export const UpdateEntityComponentBody = {
  encode(message: UpdateEntityComponentBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.classId !== 0) {
      writer.uint32(16).int32(message.classId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.json !== "") {
      writer.uint32(34).string(message.json);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEntityComponentBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEntityComponentBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.classId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.json = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEntityComponentBody {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      classId: isSet(object.classId) ? Number(object.classId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      json: isSet(object.json) ? String(object.json) : "",
    };
  },

  toJSON(message: UpdateEntityComponentBody): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.classId !== undefined && (obj.classId = Math.round(message.classId));
    message.name !== undefined && (obj.name = message.name);
    message.json !== undefined && (obj.json = message.json);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateEntityComponentBody>, I>>(object: I): UpdateEntityComponentBody {
    const message = createBaseUpdateEntityComponentBody();
    message.entityId = object.entityId ?? "";
    message.classId = object.classId ?? 0;
    message.name = object.name ?? "";
    message.json = object.json ?? "";
    return message;
  },
};

function createBaseAttachEntityComponentBody(): AttachEntityComponentBody {
  return { entityId: "", name: "", id: "" };
}

export const AttachEntityComponentBody = {
  encode(message: AttachEntityComponentBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttachEntityComponentBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttachEntityComponentBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttachEntityComponentBody {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: AttachEntityComponentBody): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttachEntityComponentBody>, I>>(object: I): AttachEntityComponentBody {
    const message = createBaseAttachEntityComponentBody();
    message.entityId = object.entityId ?? "";
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseComponentRemovedBody(): ComponentRemovedBody {
  return { entityId: "", name: "" };
}

export const ComponentRemovedBody = {
  encode(message: ComponentRemovedBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComponentRemovedBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComponentRemovedBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentRemovedBody {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ComponentRemovedBody): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ComponentRemovedBody>, I>>(object: I): ComponentRemovedBody {
    const message = createBaseComponentRemovedBody();
    message.entityId = object.entityId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSetEntityParentBody(): SetEntityParentBody {
  return { entityId: "", parentId: "" };
}

export const SetEntityParentBody = {
  encode(message: SetEntityParentBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.parentId !== "") {
      writer.uint32(18).string(message.parentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetEntityParentBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetEntityParentBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.parentId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetEntityParentBody {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      parentId: isSet(object.parentId) ? String(object.parentId) : "",
    };
  },

  toJSON(message: SetEntityParentBody): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.parentId !== undefined && (obj.parentId = message.parentId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetEntityParentBody>, I>>(object: I): SetEntityParentBody {
    const message = createBaseSetEntityParentBody();
    message.entityId = object.entityId ?? "";
    message.parentId = object.parentId ?? "";
    return message;
  },
};

function createBaseQueryBody(): QueryBody {
  return { queryId: 0, payload: "" };
}

export const QueryBody = {
  encode(message: QueryBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.queryId !== 0) {
      writer.uint32(8).int32(message.queryId);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.int32() as any;
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

  fromJSON(object: any): QueryBody {
    return {
      queryId: isSet(object.queryId) ? queryTypeFromJSON(object.queryId) : 0,
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: QueryBody): unknown {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = queryTypeToJSON(message.queryId));
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBody>, I>>(object: I): QueryBody {
    const message = createBaseQueryBody();
    message.queryId = object.queryId ?? 0;
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseComponentCreatedBody(): ComponentCreatedBody {
  return { id: "", classId: 0, name: "" };
}

export const ComponentCreatedBody = {
  encode(message: ComponentCreatedBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.classId !== 0) {
      writer.uint32(16).int32(message.classId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComponentCreatedBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComponentCreatedBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.classId = reader.int32();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentCreatedBody {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      classId: isSet(object.classId) ? Number(object.classId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: ComponentCreatedBody): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.classId !== undefined && (obj.classId = Math.round(message.classId));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ComponentCreatedBody>, I>>(object: I): ComponentCreatedBody {
    const message = createBaseComponentCreatedBody();
    message.id = object.id ?? "";
    message.classId = object.classId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseComponentDisposedBody(): ComponentDisposedBody {
  return { id: "" };
}

export const ComponentDisposedBody = {
  encode(message: ComponentDisposedBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComponentDisposedBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComponentDisposedBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentDisposedBody {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: ComponentDisposedBody): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ComponentDisposedBody>, I>>(object: I): ComponentDisposedBody {
    const message = createBaseComponentDisposedBody();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseComponentUpdatedBody(): ComponentUpdatedBody {
  return { id: "", json: "" };
}

export const ComponentUpdatedBody = {
  encode(message: ComponentUpdatedBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.json !== "") {
      writer.uint32(18).string(message.json);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComponentUpdatedBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComponentUpdatedBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.json = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComponentUpdatedBody {
    return { id: isSet(object.id) ? String(object.id) : "", json: isSet(object.json) ? String(object.json) : "" };
  },

  toJSON(message: ComponentUpdatedBody): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.json !== undefined && (obj.json = message.json);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ComponentUpdatedBody>, I>>(object: I): ComponentUpdatedBody {
    const message = createBaseComponentUpdatedBody();
    message.id = object.id ?? "";
    message.json = object.json ?? "";
    return message;
  },
};

function createBaseInitMessagesFinishedBody(): InitMessagesFinishedBody {
  return {};
}

export const InitMessagesFinishedBody = {
  encode(_: InitMessagesFinishedBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InitMessagesFinishedBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitMessagesFinishedBody();
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

  fromJSON(_: any): InitMessagesFinishedBody {
    return {};
  },

  toJSON(_: InitMessagesFinishedBody): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InitMessagesFinishedBody>, I>>(_: I): InitMessagesFinishedBody {
    const message = createBaseInitMessagesFinishedBody();
    return message;
  },
};

function createBasePayload(): Payload {
  return {
    openExternalUrl: undefined,
    openNftDialog: undefined,
    createEntity: undefined,
    removeEntity: undefined,
    updateEntityComponent: undefined,
    attachEntityComponent: undefined,
    componentRemoved: undefined,
    setEntityParent: undefined,
    query: undefined,
    componentCreated: undefined,
    componentDisposed: undefined,
    componentUpdated: undefined,
    initMessagesFinished: undefined,
  };
}

export const Payload = {
  encode(message: Payload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.openExternalUrl !== undefined) {
      OpenExternalUrlBody.encode(message.openExternalUrl, writer.uint32(10).fork()).ldelim();
    }
    if (message.openNftDialog !== undefined) {
      OpenNFTDialogBody.encode(message.openNftDialog, writer.uint32(18).fork()).ldelim();
    }
    if (message.createEntity !== undefined) {
      CreateEntityBody.encode(message.createEntity, writer.uint32(26).fork()).ldelim();
    }
    if (message.removeEntity !== undefined) {
      RemoveEntityBody.encode(message.removeEntity, writer.uint32(34).fork()).ldelim();
    }
    if (message.updateEntityComponent !== undefined) {
      UpdateEntityComponentBody.encode(message.updateEntityComponent, writer.uint32(42).fork()).ldelim();
    }
    if (message.attachEntityComponent !== undefined) {
      AttachEntityComponentBody.encode(message.attachEntityComponent, writer.uint32(50).fork()).ldelim();
    }
    if (message.componentRemoved !== undefined) {
      ComponentRemovedBody.encode(message.componentRemoved, writer.uint32(58).fork()).ldelim();
    }
    if (message.setEntityParent !== undefined) {
      SetEntityParentBody.encode(message.setEntityParent, writer.uint32(66).fork()).ldelim();
    }
    if (message.query !== undefined) {
      QueryBody.encode(message.query, writer.uint32(74).fork()).ldelim();
    }
    if (message.componentCreated !== undefined) {
      ComponentCreatedBody.encode(message.componentCreated, writer.uint32(82).fork()).ldelim();
    }
    if (message.componentDisposed !== undefined) {
      ComponentDisposedBody.encode(message.componentDisposed, writer.uint32(90).fork()).ldelim();
    }
    if (message.componentUpdated !== undefined) {
      ComponentUpdatedBody.encode(message.componentUpdated, writer.uint32(98).fork()).ldelim();
    }
    if (message.initMessagesFinished !== undefined) {
      InitMessagesFinishedBody.encode(message.initMessagesFinished, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openExternalUrl = OpenExternalUrlBody.decode(reader, reader.uint32());
          break;
        case 2:
          message.openNftDialog = OpenNFTDialogBody.decode(reader, reader.uint32());
          break;
        case 3:
          message.createEntity = CreateEntityBody.decode(reader, reader.uint32());
          break;
        case 4:
          message.removeEntity = RemoveEntityBody.decode(reader, reader.uint32());
          break;
        case 5:
          message.updateEntityComponent = UpdateEntityComponentBody.decode(reader, reader.uint32());
          break;
        case 6:
          message.attachEntityComponent = AttachEntityComponentBody.decode(reader, reader.uint32());
          break;
        case 7:
          message.componentRemoved = ComponentRemovedBody.decode(reader, reader.uint32());
          break;
        case 8:
          message.setEntityParent = SetEntityParentBody.decode(reader, reader.uint32());
          break;
        case 9:
          message.query = QueryBody.decode(reader, reader.uint32());
          break;
        case 10:
          message.componentCreated = ComponentCreatedBody.decode(reader, reader.uint32());
          break;
        case 11:
          message.componentDisposed = ComponentDisposedBody.decode(reader, reader.uint32());
          break;
        case 12:
          message.componentUpdated = ComponentUpdatedBody.decode(reader, reader.uint32());
          break;
        case 13:
          message.initMessagesFinished = InitMessagesFinishedBody.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Payload {
    return {
      openExternalUrl: isSet(object.openExternalUrl) ? OpenExternalUrlBody.fromJSON(object.openExternalUrl) : undefined,
      openNftDialog: isSet(object.openNftDialog) ? OpenNFTDialogBody.fromJSON(object.openNftDialog) : undefined,
      createEntity: isSet(object.createEntity) ? CreateEntityBody.fromJSON(object.createEntity) : undefined,
      removeEntity: isSet(object.removeEntity) ? RemoveEntityBody.fromJSON(object.removeEntity) : undefined,
      updateEntityComponent: isSet(object.updateEntityComponent)
        ? UpdateEntityComponentBody.fromJSON(object.updateEntityComponent)
        : undefined,
      attachEntityComponent: isSet(object.attachEntityComponent)
        ? AttachEntityComponentBody.fromJSON(object.attachEntityComponent)
        : undefined,
      componentRemoved: isSet(object.componentRemoved)
        ? ComponentRemovedBody.fromJSON(object.componentRemoved)
        : undefined,
      setEntityParent: isSet(object.setEntityParent) ? SetEntityParentBody.fromJSON(object.setEntityParent) : undefined,
      query: isSet(object.query) ? QueryBody.fromJSON(object.query) : undefined,
      componentCreated: isSet(object.componentCreated)
        ? ComponentCreatedBody.fromJSON(object.componentCreated)
        : undefined,
      componentDisposed: isSet(object.componentDisposed)
        ? ComponentDisposedBody.fromJSON(object.componentDisposed)
        : undefined,
      componentUpdated: isSet(object.componentUpdated)
        ? ComponentUpdatedBody.fromJSON(object.componentUpdated)
        : undefined,
      initMessagesFinished: isSet(object.initMessagesFinished)
        ? InitMessagesFinishedBody.fromJSON(object.initMessagesFinished)
        : undefined,
    };
  },

  toJSON(message: Payload): unknown {
    const obj: any = {};
    message.openExternalUrl !== undefined &&
      (obj.openExternalUrl = message.openExternalUrl ? OpenExternalUrlBody.toJSON(message.openExternalUrl) : undefined);
    message.openNftDialog !== undefined &&
      (obj.openNftDialog = message.openNftDialog ? OpenNFTDialogBody.toJSON(message.openNftDialog) : undefined);
    message.createEntity !== undefined &&
      (obj.createEntity = message.createEntity ? CreateEntityBody.toJSON(message.createEntity) : undefined);
    message.removeEntity !== undefined &&
      (obj.removeEntity = message.removeEntity ? RemoveEntityBody.toJSON(message.removeEntity) : undefined);
    message.updateEntityComponent !== undefined && (obj.updateEntityComponent = message.updateEntityComponent
      ? UpdateEntityComponentBody.toJSON(message.updateEntityComponent)
      : undefined);
    message.attachEntityComponent !== undefined && (obj.attachEntityComponent = message.attachEntityComponent
      ? AttachEntityComponentBody.toJSON(message.attachEntityComponent)
      : undefined);
    message.componentRemoved !== undefined && (obj.componentRemoved = message.componentRemoved
      ? ComponentRemovedBody.toJSON(message.componentRemoved)
      : undefined);
    message.setEntityParent !== undefined &&
      (obj.setEntityParent = message.setEntityParent ? SetEntityParentBody.toJSON(message.setEntityParent) : undefined);
    message.query !== undefined && (obj.query = message.query ? QueryBody.toJSON(message.query) : undefined);
    message.componentCreated !== undefined && (obj.componentCreated = message.componentCreated
      ? ComponentCreatedBody.toJSON(message.componentCreated)
      : undefined);
    message.componentDisposed !== undefined && (obj.componentDisposed = message.componentDisposed
      ? ComponentDisposedBody.toJSON(message.componentDisposed)
      : undefined);
    message.componentUpdated !== undefined && (obj.componentUpdated = message.componentUpdated
      ? ComponentUpdatedBody.toJSON(message.componentUpdated)
      : undefined);
    message.initMessagesFinished !== undefined && (obj.initMessagesFinished = message.initMessagesFinished
      ? InitMessagesFinishedBody.toJSON(message.initMessagesFinished)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Payload>, I>>(object: I): Payload {
    const message = createBasePayload();
    message.openExternalUrl = (object.openExternalUrl !== undefined && object.openExternalUrl !== null)
      ? OpenExternalUrlBody.fromPartial(object.openExternalUrl)
      : undefined;
    message.openNftDialog = (object.openNftDialog !== undefined && object.openNftDialog !== null)
      ? OpenNFTDialogBody.fromPartial(object.openNftDialog)
      : undefined;
    message.createEntity = (object.createEntity !== undefined && object.createEntity !== null)
      ? CreateEntityBody.fromPartial(object.createEntity)
      : undefined;
    message.removeEntity = (object.removeEntity !== undefined && object.removeEntity !== null)
      ? RemoveEntityBody.fromPartial(object.removeEntity)
      : undefined;
    message.updateEntityComponent =
      (object.updateEntityComponent !== undefined && object.updateEntityComponent !== null)
        ? UpdateEntityComponentBody.fromPartial(object.updateEntityComponent)
        : undefined;
    message.attachEntityComponent =
      (object.attachEntityComponent !== undefined && object.attachEntityComponent !== null)
        ? AttachEntityComponentBody.fromPartial(object.attachEntityComponent)
        : undefined;
    message.componentRemoved = (object.componentRemoved !== undefined && object.componentRemoved !== null)
      ? ComponentRemovedBody.fromPartial(object.componentRemoved)
      : undefined;
    message.setEntityParent = (object.setEntityParent !== undefined && object.setEntityParent !== null)
      ? SetEntityParentBody.fromPartial(object.setEntityParent)
      : undefined;
    message.query = (object.query !== undefined && object.query !== null)
      ? QueryBody.fromPartial(object.query)
      : undefined;
    message.componentCreated = (object.componentCreated !== undefined && object.componentCreated !== null)
      ? ComponentCreatedBody.fromPartial(object.componentCreated)
      : undefined;
    message.componentDisposed = (object.componentDisposed !== undefined && object.componentDisposed !== null)
      ? ComponentDisposedBody.fromPartial(object.componentDisposed)
      : undefined;
    message.componentUpdated = (object.componentUpdated !== undefined && object.componentUpdated !== null)
      ? ComponentUpdatedBody.fromPartial(object.componentUpdated)
      : undefined;
    message.initMessagesFinished = (object.initMessagesFinished !== undefined && object.initMessagesFinished !== null)
      ? InitMessagesFinishedBody.fromPartial(object.initMessagesFinished)
      : undefined;
    return message;
  },
};

function createBaseEntityAction(): EntityAction {
  return { type: 0, tag: undefined, payload: undefined };
}

export const EntityAction = {
  encode(message: EntityAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.tag !== undefined) {
      writer.uint32(18).string(message.tag);
    }
    if (message.payload !== undefined) {
      Payload.encode(message.payload, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.tag = reader.string();
          break;
        case 3:
          message.payload = Payload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityAction {
    return {
      type: isSet(object.type) ? eATypeFromJSON(object.type) : 0,
      tag: isSet(object.tag) ? String(object.tag) : undefined,
      payload: isSet(object.payload) ? Payload.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: EntityAction): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eATypeToJSON(message.type));
    message.tag !== undefined && (obj.tag = message.tag);
    message.payload !== undefined && (obj.payload = message.payload ? Payload.toJSON(message.payload) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityAction>, I>>(object: I): EntityAction {
    const message = createBaseEntityAction();
    message.type = object.type ?? 0;
    message.tag = object.tag ?? undefined;
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? Payload.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseManyEntityAction(): ManyEntityAction {
  return { actions: [] };
}

export const ManyEntityAction = {
  encode(message: ManyEntityAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actions) {
      EntityAction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ManyEntityAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseManyEntityAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actions.push(EntityAction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ManyEntityAction {
    return { actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => EntityAction.fromJSON(e)) : [] };
  },

  toJSON(message: ManyEntityAction): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) => e ? EntityAction.toJSON(e) : undefined);
    } else {
      obj.actions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ManyEntityAction>, I>>(object: I): ManyEntityAction {
    const message = createBaseManyEntityAction();
    message.actions = object.actions?.map((e) => EntityAction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSendBatchResponse(): SendBatchResponse {
  return { events: [] };
}

export const SendBatchResponse = {
  encode(message: SendBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      EventData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(EventData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendBatchResponse {
    return { events: Array.isArray(object?.events) ? object.events.map((e: any) => EventData.fromJSON(e)) : [] };
  },

  toJSON(message: SendBatchResponse): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? EventData.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendBatchResponse>, I>>(object: I): SendBatchResponse {
    const message = createBaseSendBatchResponse();
    message.events = object.events?.map((e) => EventData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUnsubscribeRequest(): UnsubscribeRequest {
  return { eventId: "" };
}

export const UnsubscribeRequest = {
  encode(message: UnsubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnsubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnsubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnsubscribeRequest {
    return { eventId: isSet(object.eventId) ? String(object.eventId) : "" };
  },

  toJSON(message: UnsubscribeRequest): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnsubscribeRequest>, I>>(object: I): UnsubscribeRequest {
    const message = createBaseUnsubscribeRequest();
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseSubscribeRequest(): SubscribeRequest {
  return { eventId: "" };
}

export const SubscribeRequest = {
  encode(message: SubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeRequest {
    return { eventId: isSet(object.eventId) ? String(object.eventId) : "" };
  },

  toJSON(message: SubscribeRequest): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeRequest>, I>>(object: I): SubscribeRequest {
    const message = createBaseSubscribeRequest();
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseSubscribeResponse(): SubscribeResponse {
  return {};
}

export const SubscribeResponse = {
  encode(_: SubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeResponse();
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

  fromJSON(_: any): SubscribeResponse {
    return {};
  },

  toJSON(_: SubscribeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeResponse>, I>>(_: I): SubscribeResponse {
    const message = createBaseSubscribeResponse();
    return message;
  },
};

function createBaseUnsubscribeResponse(): UnsubscribeResponse {
  return {};
}

export const UnsubscribeResponse = {
  encode(_: UnsubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnsubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnsubscribeResponse();
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

  fromJSON(_: any): UnsubscribeResponse {
    return {};
  },

  toJSON(_: UnsubscribeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnsubscribeResponse>, I>>(_: I): UnsubscribeResponse {
    const message = createBaseUnsubscribeResponse();
    return message;
  },
};

function createBaseGenericPayload(): GenericPayload {
  return { eventId: "", eventData: "" };
}

export const GenericPayload = {
  encode(message: GenericPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    if (message.eventData !== "") {
      writer.uint32(34).string(message.eventData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenericPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.eventId = reader.string();
          break;
        case 4:
          message.eventData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenericPayload {
    return {
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      eventData: isSet(object.eventData) ? String(object.eventData) : "",
    };
  },

  toJSON(message: GenericPayload): unknown {
    const obj: any = {};
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.eventData !== undefined && (obj.eventData = message.eventData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenericPayload>, I>>(object: I): GenericPayload {
    const message = createBaseGenericPayload();
    message.eventId = object.eventId ?? "";
    message.eventData = object.eventData ?? "";
    return message;
  },
};

function createBaseReadOnlyVector3(): ReadOnlyVector3 {
  return { x: 0, y: 0, z: 0 };
}

export const ReadOnlyVector3 = {
  encode(message: ReadOnlyVector3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadOnlyVector3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadOnlyVector3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.z = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadOnlyVector3 {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: ReadOnlyVector3): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReadOnlyVector3>, I>>(object: I): ReadOnlyVector3 {
    const message = createBaseReadOnlyVector3();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseReadOnlyQuaternion(): ReadOnlyQuaternion {
  return { x: 0, y: 0, z: 0, w: 0 };
}

export const ReadOnlyQuaternion = {
  encode(message: ReadOnlyQuaternion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    if (message.w !== 0) {
      writer.uint32(37).float(message.w);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadOnlyQuaternion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadOnlyQuaternion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.z = reader.float();
          break;
        case 4:
          message.w = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReadOnlyQuaternion {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
      w: isSet(object.w) ? Number(object.w) : 0,
    };
  },

  toJSON(message: ReadOnlyQuaternion): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    message.w !== undefined && (obj.w = message.w);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReadOnlyQuaternion>, I>>(object: I): ReadOnlyQuaternion {
    const message = createBaseReadOnlyQuaternion();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    message.w = object.w ?? 0;
    return message;
  },
};

function createBasePositionChangedPayload(): PositionChangedPayload {
  return { position: undefined, cameraPosition: undefined, playerHeight: 0 };
}

export const PositionChangedPayload = {
  encode(message: PositionChangedPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      ReadOnlyVector3.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.cameraPosition !== undefined) {
      ReadOnlyVector3.encode(message.cameraPosition, writer.uint32(18).fork()).ldelim();
    }
    if (message.playerHeight !== 0) {
      writer.uint32(29).float(message.playerHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionChangedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionChangedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = ReadOnlyVector3.decode(reader, reader.uint32());
          break;
        case 2:
          message.cameraPosition = ReadOnlyVector3.decode(reader, reader.uint32());
          break;
        case 3:
          message.playerHeight = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionChangedPayload {
    return {
      position: isSet(object.position) ? ReadOnlyVector3.fromJSON(object.position) : undefined,
      cameraPosition: isSet(object.cameraPosition) ? ReadOnlyVector3.fromJSON(object.cameraPosition) : undefined,
      playerHeight: isSet(object.playerHeight) ? Number(object.playerHeight) : 0,
    };
  },

  toJSON(message: PositionChangedPayload): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position ? ReadOnlyVector3.toJSON(message.position) : undefined);
    message.cameraPosition !== undefined &&
      (obj.cameraPosition = message.cameraPosition ? ReadOnlyVector3.toJSON(message.cameraPosition) : undefined);
    message.playerHeight !== undefined && (obj.playerHeight = message.playerHeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PositionChangedPayload>, I>>(object: I): PositionChangedPayload {
    const message = createBasePositionChangedPayload();
    message.position = (object.position !== undefined && object.position !== null)
      ? ReadOnlyVector3.fromPartial(object.position)
      : undefined;
    message.cameraPosition = (object.cameraPosition !== undefined && object.cameraPosition !== null)
      ? ReadOnlyVector3.fromPartial(object.cameraPosition)
      : undefined;
    message.playerHeight = object.playerHeight ?? 0;
    return message;
  },
};

function createBaseRotationChangedPayload(): RotationChangedPayload {
  return { rotation: undefined, quaternion: undefined };
}

export const RotationChangedPayload = {
  encode(message: RotationChangedPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rotation !== undefined) {
      ReadOnlyVector3.encode(message.rotation, writer.uint32(10).fork()).ldelim();
    }
    if (message.quaternion !== undefined) {
      ReadOnlyQuaternion.encode(message.quaternion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RotationChangedPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRotationChangedPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rotation = ReadOnlyVector3.decode(reader, reader.uint32());
          break;
        case 2:
          message.quaternion = ReadOnlyQuaternion.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RotationChangedPayload {
    return {
      rotation: isSet(object.rotation) ? ReadOnlyVector3.fromJSON(object.rotation) : undefined,
      quaternion: isSet(object.quaternion) ? ReadOnlyQuaternion.fromJSON(object.quaternion) : undefined,
    };
  },

  toJSON(message: RotationChangedPayload): unknown {
    const obj: any = {};
    message.rotation !== undefined &&
      (obj.rotation = message.rotation ? ReadOnlyVector3.toJSON(message.rotation) : undefined);
    message.quaternion !== undefined &&
      (obj.quaternion = message.quaternion ? ReadOnlyQuaternion.toJSON(message.quaternion) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RotationChangedPayload>, I>>(object: I): RotationChangedPayload {
    const message = createBaseRotationChangedPayload();
    message.rotation = (object.rotation !== undefined && object.rotation !== null)
      ? ReadOnlyVector3.fromPartial(object.rotation)
      : undefined;
    message.quaternion = (object.quaternion !== undefined && object.quaternion !== null)
      ? ReadOnlyQuaternion.fromPartial(object.quaternion)
      : undefined;
    return message;
  },
};

function createBaseEventData(): EventData {
  return { type: 0, generic: undefined, positionChanged: undefined, rotationChanged: undefined };
}

export const EventData = {
  encode(message: EventData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.generic !== undefined) {
      GenericPayload.encode(message.generic, writer.uint32(18).fork()).ldelim();
    }
    if (message.positionChanged !== undefined) {
      PositionChangedPayload.encode(message.positionChanged, writer.uint32(26).fork()).ldelim();
    }
    if (message.rotationChanged !== undefined) {
      RotationChangedPayload.encode(message.rotationChanged, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.generic = GenericPayload.decode(reader, reader.uint32());
          break;
        case 3:
          message.positionChanged = PositionChangedPayload.decode(reader, reader.uint32());
          break;
        case 4:
          message.rotationChanged = RotationChangedPayload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventData {
    return {
      type: isSet(object.type) ? eventDataTypeFromJSON(object.type) : 0,
      generic: isSet(object.generic) ? GenericPayload.fromJSON(object.generic) : undefined,
      positionChanged: isSet(object.positionChanged)
        ? PositionChangedPayload.fromJSON(object.positionChanged)
        : undefined,
      rotationChanged: isSet(object.rotationChanged)
        ? RotationChangedPayload.fromJSON(object.rotationChanged)
        : undefined,
    };
  },

  toJSON(message: EventData): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = eventDataTypeToJSON(message.type));
    message.generic !== undefined &&
      (obj.generic = message.generic ? GenericPayload.toJSON(message.generic) : undefined);
    message.positionChanged !== undefined && (obj.positionChanged = message.positionChanged
      ? PositionChangedPayload.toJSON(message.positionChanged)
      : undefined);
    message.rotationChanged !== undefined && (obj.rotationChanged = message.rotationChanged
      ? RotationChangedPayload.toJSON(message.rotationChanged)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventData>, I>>(object: I): EventData {
    const message = createBaseEventData();
    message.type = object.type ?? 0;
    message.generic = (object.generic !== undefined && object.generic !== null)
      ? GenericPayload.fromPartial(object.generic)
      : undefined;
    message.positionChanged = (object.positionChanged !== undefined && object.positionChanged !== null)
      ? PositionChangedPayload.fromPartial(object.positionChanged)
      : undefined;
    message.rotationChanged = (object.rotationChanged !== undefined && object.rotationChanged !== null)
      ? RotationChangedPayload.fromPartial(object.rotationChanged)
      : undefined;
    return message;
  },
};

export type EngineAPIServiceDefinition = typeof EngineAPIServiceDefinition;
export const EngineAPIServiceDefinition = {
  name: "EngineAPIService",
  fullName: "EngineAPIService",
  methods: {
    sendBatch: {
      name: "SendBatch",
      requestType: ManyEntityAction,
      requestStream: false,
      responseType: SendBatchResponse,
      responseStream: false,
      options: {},
    },
    subscribe: {
      name: "Subscribe",
      requestType: SubscribeRequest,
      requestStream: false,
      responseType: SubscribeResponse,
      responseStream: false,
      options: {},
    },
    unsubscribe: {
      name: "Unsubscribe",
      requestType: UnsubscribeRequest,
      requestStream: false,
      responseType: UnsubscribeResponse,
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
