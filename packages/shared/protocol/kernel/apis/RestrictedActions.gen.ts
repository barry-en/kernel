/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface MovePlayerToResponse {
}

export interface MovePlayerToRequest {
  newRelativePosition: Vector3 | undefined;
  cameraTarget?: Vector3 | undefined;
}

export interface TriggerEmoteResponse {
}

export interface TriggerEmoteRequest {
  predefinedEmote: string;
}

function createBaseVector3(): Vector3 {
  return { x: 0, y: 0, z: 0 };
}

export const Vector3 = {
  encode(message: Vector3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Vector3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVector3();
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

  fromJSON(object: any): Vector3 {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: Vector3): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vector3>, I>>(object: I): Vector3 {
    const message = createBaseVector3();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseMovePlayerToResponse(): MovePlayerToResponse {
  return {};
}

export const MovePlayerToResponse = {
  encode(_: MovePlayerToResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MovePlayerToResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMovePlayerToResponse();
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

  fromJSON(_: any): MovePlayerToResponse {
    return {};
  },

  toJSON(_: MovePlayerToResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MovePlayerToResponse>, I>>(_: I): MovePlayerToResponse {
    const message = createBaseMovePlayerToResponse();
    return message;
  },
};

function createBaseMovePlayerToRequest(): MovePlayerToRequest {
  return { newRelativePosition: undefined, cameraTarget: undefined };
}

export const MovePlayerToRequest = {
  encode(message: MovePlayerToRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newRelativePosition !== undefined) {
      Vector3.encode(message.newRelativePosition, writer.uint32(10).fork()).ldelim();
    }
    if (message.cameraTarget !== undefined) {
      Vector3.encode(message.cameraTarget, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MovePlayerToRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMovePlayerToRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newRelativePosition = Vector3.decode(reader, reader.uint32());
          break;
        case 2:
          message.cameraTarget = Vector3.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MovePlayerToRequest {
    return {
      newRelativePosition: isSet(object.newRelativePosition) ? Vector3.fromJSON(object.newRelativePosition) : undefined,
      cameraTarget: isSet(object.cameraTarget) ? Vector3.fromJSON(object.cameraTarget) : undefined,
    };
  },

  toJSON(message: MovePlayerToRequest): unknown {
    const obj: any = {};
    message.newRelativePosition !== undefined &&
      (obj.newRelativePosition = message.newRelativePosition ? Vector3.toJSON(message.newRelativePosition) : undefined);
    message.cameraTarget !== undefined &&
      (obj.cameraTarget = message.cameraTarget ? Vector3.toJSON(message.cameraTarget) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MovePlayerToRequest>, I>>(object: I): MovePlayerToRequest {
    const message = createBaseMovePlayerToRequest();
    message.newRelativePosition = (object.newRelativePosition !== undefined && object.newRelativePosition !== null)
      ? Vector3.fromPartial(object.newRelativePosition)
      : undefined;
    message.cameraTarget = (object.cameraTarget !== undefined && object.cameraTarget !== null)
      ? Vector3.fromPartial(object.cameraTarget)
      : undefined;
    return message;
  },
};

function createBaseTriggerEmoteResponse(): TriggerEmoteResponse {
  return {};
}

export const TriggerEmoteResponse = {
  encode(_: TriggerEmoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerEmoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerEmoteResponse();
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

  fromJSON(_: any): TriggerEmoteResponse {
    return {};
  },

  toJSON(_: TriggerEmoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TriggerEmoteResponse>, I>>(_: I): TriggerEmoteResponse {
    const message = createBaseTriggerEmoteResponse();
    return message;
  },
};

function createBaseTriggerEmoteRequest(): TriggerEmoteRequest {
  return { predefinedEmote: "" };
}

export const TriggerEmoteRequest = {
  encode(message: TriggerEmoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.predefinedEmote !== "") {
      writer.uint32(10).string(message.predefinedEmote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TriggerEmoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTriggerEmoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.predefinedEmote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TriggerEmoteRequest {
    return { predefinedEmote: isSet(object.predefinedEmote) ? String(object.predefinedEmote) : "" };
  },

  toJSON(message: TriggerEmoteRequest): unknown {
    const obj: any = {};
    message.predefinedEmote !== undefined && (obj.predefinedEmote = message.predefinedEmote);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TriggerEmoteRequest>, I>>(object: I): TriggerEmoteRequest {
    const message = createBaseTriggerEmoteRequest();
    message.predefinedEmote = object.predefinedEmote ?? "";
    return message;
  },
};

export type RestrictedActionsServiceDefinition = typeof RestrictedActionsServiceDefinition;
export const RestrictedActionsServiceDefinition = {
  name: "RestrictedActionsService",
  fullName: "RestrictedActionsService",
  methods: {
    movePlayerTo: {
      name: "MovePlayerTo",
      requestType: MovePlayerToRequest,
      requestStream: false,
      responseType: MovePlayerToResponse,
      responseStream: false,
      options: {},
    },
    triggerEmote: {
      name: "TriggerEmote",
      requestType: TriggerEmoteRequest,
      requestStream: false,
      responseType: TriggerEmoteResponse,
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
