/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "protocol.comms.v3";

export enum TransportType {
  TRANSPORT_LIVEKIT = 0,
  TRANSPORT_WS = 1,
  UNRECOGNIZED = -1,
}

export function transportTypeFromJSON(object: any): TransportType {
  switch (object) {
    case 0:
    case "TRANSPORT_LIVEKIT":
      return TransportType.TRANSPORT_LIVEKIT;
    case 1:
    case "TRANSPORT_WS":
      return TransportType.TRANSPORT_WS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransportType.UNRECOGNIZED;
  }
}

export function transportTypeToJSON(object: TransportType): string {
  switch (object) {
    case TransportType.TRANSPORT_LIVEKIT:
      return "TRANSPORT_LIVEKIT";
    case TransportType.TRANSPORT_WS:
      return "TRANSPORT_WS";
    case TransportType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Position3DMessage {
  x: number;
  y: number;
  z: number;
}

export interface IslandChangedMessage {
  islandId: string;
  connStr: string;
  fromIslandId?: string | undefined;
  peers: { [key: string]: Position3DMessage };
}

export interface IslandChangedMessage_PeersEntry {
  key: string;
  value: Position3DMessage | undefined;
}

export interface LeftIslandMessage {
  islandId: string;
  peerId: string;
}

export interface JoinIslandMessage {
  islandId: string;
  peerId: string;
}

export interface IslandData {
  id: string;
  peers: string[];
  maxPeers: number;
  center: Position3DMessage | undefined;
  radius: number;
}

export interface IslandStatusMessage {
  data: IslandData[];
}

export interface TransportInit {
  type: TransportType;
  maxIslandSize: number;
}

export interface TransportHeartbeat {
  availableSeats: number;
  usersCount: number;
}

export interface TransportAuthorizationRequest {
  requestId: string;
  roomId: string;
  userIds: string[];
}

export interface TransportAuthorizationResponse {
  requestId: string;
  connStrs: { [key: string]: string };
}

export interface TransportAuthorizationResponse_ConnStrsEntry {
  key: string;
  value: string;
}

export interface TransportMessage {
  message?: { $case: "init"; init: TransportInit } | { $case: "heartbeat"; heartbeat: TransportHeartbeat } | {
    $case: "authRequest";
    authRequest: TransportAuthorizationRequest;
  } | { $case: "authResponse"; authResponse: TransportAuthorizationResponse };
}

function createBasePosition3DMessage(): Position3DMessage {
  return { x: 0, y: 0, z: 0 };
}

export const Position3DMessage = {
  encode(message: Position3DMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(25).double(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position3DMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition3DMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.double();
          break;
        case 2:
          message.y = reader.double();
          break;
        case 3:
          message.z = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Position3DMessage {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: Position3DMessage): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Position3DMessage>, I>>(object: I): Position3DMessage {
    const message = createBasePosition3DMessage();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseIslandChangedMessage(): IslandChangedMessage {
  return { islandId: "", connStr: "", fromIslandId: undefined, peers: {} };
}

export const IslandChangedMessage = {
  encode(message: IslandChangedMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.islandId !== "") {
      writer.uint32(10).string(message.islandId);
    }
    if (message.connStr !== "") {
      writer.uint32(18).string(message.connStr);
    }
    if (message.fromIslandId !== undefined) {
      writer.uint32(26).string(message.fromIslandId);
    }
    Object.entries(message.peers).forEach(([key, value]) => {
      IslandChangedMessage_PeersEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IslandChangedMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIslandChangedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.islandId = reader.string();
          break;
        case 2:
          message.connStr = reader.string();
          break;
        case 3:
          message.fromIslandId = reader.string();
          break;
        case 4:
          const entry4 = IslandChangedMessage_PeersEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.peers[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IslandChangedMessage {
    return {
      islandId: isSet(object.islandId) ? String(object.islandId) : "",
      connStr: isSet(object.connStr) ? String(object.connStr) : "",
      fromIslandId: isSet(object.fromIslandId) ? String(object.fromIslandId) : undefined,
      peers: isObject(object.peers)
        ? Object.entries(object.peers).reduce<{ [key: string]: Position3DMessage }>((acc, [key, value]) => {
          acc[key] = Position3DMessage.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: IslandChangedMessage): unknown {
    const obj: any = {};
    message.islandId !== undefined && (obj.islandId = message.islandId);
    message.connStr !== undefined && (obj.connStr = message.connStr);
    message.fromIslandId !== undefined && (obj.fromIslandId = message.fromIslandId);
    obj.peers = {};
    if (message.peers) {
      Object.entries(message.peers).forEach(([k, v]) => {
        obj.peers[k] = Position3DMessage.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IslandChangedMessage>, I>>(object: I): IslandChangedMessage {
    const message = createBaseIslandChangedMessage();
    message.islandId = object.islandId ?? "";
    message.connStr = object.connStr ?? "";
    message.fromIslandId = object.fromIslandId ?? undefined;
    message.peers = Object.entries(object.peers ?? {}).reduce<{ [key: string]: Position3DMessage }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Position3DMessage.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseIslandChangedMessage_PeersEntry(): IslandChangedMessage_PeersEntry {
  return { key: "", value: undefined };
}

export const IslandChangedMessage_PeersEntry = {
  encode(message: IslandChangedMessage_PeersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Position3DMessage.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IslandChangedMessage_PeersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIslandChangedMessage_PeersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Position3DMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IslandChangedMessage_PeersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Position3DMessage.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: IslandChangedMessage_PeersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Position3DMessage.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IslandChangedMessage_PeersEntry>, I>>(
    object: I,
  ): IslandChangedMessage_PeersEntry {
    const message = createBaseIslandChangedMessage_PeersEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? Position3DMessage.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseLeftIslandMessage(): LeftIslandMessage {
  return { islandId: "", peerId: "" };
}

export const LeftIslandMessage = {
  encode(message: LeftIslandMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.islandId !== "") {
      writer.uint32(10).string(message.islandId);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeftIslandMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeftIslandMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.islandId = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LeftIslandMessage {
    return {
      islandId: isSet(object.islandId) ? String(object.islandId) : "",
      peerId: isSet(object.peerId) ? String(object.peerId) : "",
    };
  },

  toJSON(message: LeftIslandMessage): unknown {
    const obj: any = {};
    message.islandId !== undefined && (obj.islandId = message.islandId);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LeftIslandMessage>, I>>(object: I): LeftIslandMessage {
    const message = createBaseLeftIslandMessage();
    message.islandId = object.islandId ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
};

function createBaseJoinIslandMessage(): JoinIslandMessage {
  return { islandId: "", peerId: "" };
}

export const JoinIslandMessage = {
  encode(message: JoinIslandMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.islandId !== "") {
      writer.uint32(10).string(message.islandId);
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JoinIslandMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJoinIslandMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.islandId = reader.string();
          break;
        case 2:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): JoinIslandMessage {
    return {
      islandId: isSet(object.islandId) ? String(object.islandId) : "",
      peerId: isSet(object.peerId) ? String(object.peerId) : "",
    };
  },

  toJSON(message: JoinIslandMessage): unknown {
    const obj: any = {};
    message.islandId !== undefined && (obj.islandId = message.islandId);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<JoinIslandMessage>, I>>(object: I): JoinIslandMessage {
    const message = createBaseJoinIslandMessage();
    message.islandId = object.islandId ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
};

function createBaseIslandData(): IslandData {
  return { id: "", peers: [], maxPeers: 0, center: undefined, radius: 0 };
}

export const IslandData = {
  encode(message: IslandData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.peers) {
      writer.uint32(18).string(v!);
    }
    if (message.maxPeers !== 0) {
      writer.uint32(24).uint32(message.maxPeers);
    }
    if (message.center !== undefined) {
      Position3DMessage.encode(message.center, writer.uint32(34).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(41).double(message.radius);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IslandData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIslandData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.peers.push(reader.string());
          break;
        case 3:
          message.maxPeers = reader.uint32();
          break;
        case 4:
          message.center = Position3DMessage.decode(reader, reader.uint32());
          break;
        case 5:
          message.radius = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IslandData {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      peers: Array.isArray(object?.peers) ? object.peers.map((e: any) => String(e)) : [],
      maxPeers: isSet(object.maxPeers) ? Number(object.maxPeers) : 0,
      center: isSet(object.center) ? Position3DMessage.fromJSON(object.center) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
    };
  },

  toJSON(message: IslandData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.peers) {
      obj.peers = message.peers.map((e) => e);
    } else {
      obj.peers = [];
    }
    message.maxPeers !== undefined && (obj.maxPeers = Math.round(message.maxPeers));
    message.center !== undefined &&
      (obj.center = message.center ? Position3DMessage.toJSON(message.center) : undefined);
    message.radius !== undefined && (obj.radius = message.radius);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IslandData>, I>>(object: I): IslandData {
    const message = createBaseIslandData();
    message.id = object.id ?? "";
    message.peers = object.peers?.map((e) => e) || [];
    message.maxPeers = object.maxPeers ?? 0;
    message.center = (object.center !== undefined && object.center !== null)
      ? Position3DMessage.fromPartial(object.center)
      : undefined;
    message.radius = object.radius ?? 0;
    return message;
  },
};

function createBaseIslandStatusMessage(): IslandStatusMessage {
  return { data: [] };
}

export const IslandStatusMessage = {
  encode(message: IslandStatusMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      IslandData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IslandStatusMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIslandStatusMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(IslandData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IslandStatusMessage {
    return { data: Array.isArray(object?.data) ? object.data.map((e: any) => IslandData.fromJSON(e)) : [] };
  },

  toJSON(message: IslandStatusMessage): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => e ? IslandData.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IslandStatusMessage>, I>>(object: I): IslandStatusMessage {
    const message = createBaseIslandStatusMessage();
    message.data = object.data?.map((e) => IslandData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTransportInit(): TransportInit {
  return { type: 0, maxIslandSize: 0 };
}

export const TransportInit = {
  encode(message: TransportInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.maxIslandSize !== 0) {
      writer.uint32(16).uint32(message.maxIslandSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransportInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransportInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.maxIslandSize = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransportInit {
    return {
      type: isSet(object.type) ? transportTypeFromJSON(object.type) : 0,
      maxIslandSize: isSet(object.maxIslandSize) ? Number(object.maxIslandSize) : 0,
    };
  },

  toJSON(message: TransportInit): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = transportTypeToJSON(message.type));
    message.maxIslandSize !== undefined && (obj.maxIslandSize = Math.round(message.maxIslandSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransportInit>, I>>(object: I): TransportInit {
    const message = createBaseTransportInit();
    message.type = object.type ?? 0;
    message.maxIslandSize = object.maxIslandSize ?? 0;
    return message;
  },
};

function createBaseTransportHeartbeat(): TransportHeartbeat {
  return { availableSeats: 0, usersCount: 0 };
}

export const TransportHeartbeat = {
  encode(message: TransportHeartbeat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.availableSeats !== 0) {
      writer.uint32(8).uint32(message.availableSeats);
    }
    if (message.usersCount !== 0) {
      writer.uint32(16).uint32(message.usersCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransportHeartbeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransportHeartbeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.availableSeats = reader.uint32();
          break;
        case 2:
          message.usersCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransportHeartbeat {
    return {
      availableSeats: isSet(object.availableSeats) ? Number(object.availableSeats) : 0,
      usersCount: isSet(object.usersCount) ? Number(object.usersCount) : 0,
    };
  },

  toJSON(message: TransportHeartbeat): unknown {
    const obj: any = {};
    message.availableSeats !== undefined && (obj.availableSeats = Math.round(message.availableSeats));
    message.usersCount !== undefined && (obj.usersCount = Math.round(message.usersCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransportHeartbeat>, I>>(object: I): TransportHeartbeat {
    const message = createBaseTransportHeartbeat();
    message.availableSeats = object.availableSeats ?? 0;
    message.usersCount = object.usersCount ?? 0;
    return message;
  },
};

function createBaseTransportAuthorizationRequest(): TransportAuthorizationRequest {
  return { requestId: "", roomId: "", userIds: [] };
}

export const TransportAuthorizationRequest = {
  encode(message: TransportAuthorizationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.roomId !== "") {
      writer.uint32(18).string(message.roomId);
    }
    for (const v of message.userIds) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransportAuthorizationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransportAuthorizationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.roomId = reader.string();
          break;
        case 3:
          message.userIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransportAuthorizationRequest {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      roomId: isSet(object.roomId) ? String(object.roomId) : "",
      userIds: Array.isArray(object?.userIds) ? object.userIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: TransportAuthorizationRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.roomId !== undefined && (obj.roomId = message.roomId);
    if (message.userIds) {
      obj.userIds = message.userIds.map((e) => e);
    } else {
      obj.userIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransportAuthorizationRequest>, I>>(
    object: I,
  ): TransportAuthorizationRequest {
    const message = createBaseTransportAuthorizationRequest();
    message.requestId = object.requestId ?? "";
    message.roomId = object.roomId ?? "";
    message.userIds = object.userIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseTransportAuthorizationResponse(): TransportAuthorizationResponse {
  return { requestId: "", connStrs: {} };
}

export const TransportAuthorizationResponse = {
  encode(message: TransportAuthorizationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    Object.entries(message.connStrs).forEach(([key, value]) => {
      TransportAuthorizationResponse_ConnStrsEntry.encode({ key: key as any, value }, writer.uint32(18).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransportAuthorizationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransportAuthorizationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          const entry2 = TransportAuthorizationResponse_ConnStrsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.connStrs[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransportAuthorizationResponse {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      connStrs: isObject(object.connStrs)
        ? Object.entries(object.connStrs).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TransportAuthorizationResponse): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    obj.connStrs = {};
    if (message.connStrs) {
      Object.entries(message.connStrs).forEach(([k, v]) => {
        obj.connStrs[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransportAuthorizationResponse>, I>>(
    object: I,
  ): TransportAuthorizationResponse {
    const message = createBaseTransportAuthorizationResponse();
    message.requestId = object.requestId ?? "";
    message.connStrs = Object.entries(object.connStrs ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseTransportAuthorizationResponse_ConnStrsEntry(): TransportAuthorizationResponse_ConnStrsEntry {
  return { key: "", value: "" };
}

export const TransportAuthorizationResponse_ConnStrsEntry = {
  encode(message: TransportAuthorizationResponse_ConnStrsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransportAuthorizationResponse_ConnStrsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransportAuthorizationResponse_ConnStrsEntry();
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

  fromJSON(object: any): TransportAuthorizationResponse_ConnStrsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: TransportAuthorizationResponse_ConnStrsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransportAuthorizationResponse_ConnStrsEntry>, I>>(
    object: I,
  ): TransportAuthorizationResponse_ConnStrsEntry {
    const message = createBaseTransportAuthorizationResponse_ConnStrsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTransportMessage(): TransportMessage {
  return { message: undefined };
}

export const TransportMessage = {
  encode(message: TransportMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message?.$case === "init") {
      TransportInit.encode(message.message.init, writer.uint32(10).fork()).ldelim();
    }
    if (message.message?.$case === "heartbeat") {
      TransportHeartbeat.encode(message.message.heartbeat, writer.uint32(18).fork()).ldelim();
    }
    if (message.message?.$case === "authRequest") {
      TransportAuthorizationRequest.encode(message.message.authRequest, writer.uint32(26).fork()).ldelim();
    }
    if (message.message?.$case === "authResponse") {
      TransportAuthorizationResponse.encode(message.message.authResponse, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransportMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransportMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = { $case: "init", init: TransportInit.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.message = { $case: "heartbeat", heartbeat: TransportHeartbeat.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.message = {
            $case: "authRequest",
            authRequest: TransportAuthorizationRequest.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.message = {
            $case: "authResponse",
            authResponse: TransportAuthorizationResponse.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransportMessage {
    return {
      message: isSet(object.init)
        ? { $case: "init", init: TransportInit.fromJSON(object.init) }
        : isSet(object.heartbeat)
        ? { $case: "heartbeat", heartbeat: TransportHeartbeat.fromJSON(object.heartbeat) }
        : isSet(object.authRequest)
        ? { $case: "authRequest", authRequest: TransportAuthorizationRequest.fromJSON(object.authRequest) }
        : isSet(object.authResponse)
        ? { $case: "authResponse", authResponse: TransportAuthorizationResponse.fromJSON(object.authResponse) }
        : undefined,
    };
  },

  toJSON(message: TransportMessage): unknown {
    const obj: any = {};
    message.message?.$case === "init" &&
      (obj.init = message.message?.init ? TransportInit.toJSON(message.message?.init) : undefined);
    message.message?.$case === "heartbeat" &&
      (obj.heartbeat = message.message?.heartbeat ? TransportHeartbeat.toJSON(message.message?.heartbeat) : undefined);
    message.message?.$case === "authRequest" && (obj.authRequest = message.message?.authRequest
      ? TransportAuthorizationRequest.toJSON(message.message?.authRequest)
      : undefined);
    message.message?.$case === "authResponse" && (obj.authResponse = message.message?.authResponse
      ? TransportAuthorizationResponse.toJSON(message.message?.authResponse)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransportMessage>, I>>(object: I): TransportMessage {
    const message = createBaseTransportMessage();
    if (object.message?.$case === "init" && object.message?.init !== undefined && object.message?.init !== null) {
      message.message = { $case: "init", init: TransportInit.fromPartial(object.message.init) };
    }
    if (
      object.message?.$case === "heartbeat" &&
      object.message?.heartbeat !== undefined &&
      object.message?.heartbeat !== null
    ) {
      message.message = { $case: "heartbeat", heartbeat: TransportHeartbeat.fromPartial(object.message.heartbeat) };
    }
    if (
      object.message?.$case === "authRequest" &&
      object.message?.authRequest !== undefined &&
      object.message?.authRequest !== null
    ) {
      message.message = {
        $case: "authRequest",
        authRequest: TransportAuthorizationRequest.fromPartial(object.message.authRequest),
      };
    }
    if (
      object.message?.$case === "authResponse" &&
      object.message?.authResponse !== undefined &&
      object.message?.authResponse !== null
    ) {
      message.message = {
        $case: "authResponse",
        authResponse: TransportAuthorizationResponse.fromPartial(object.message.authResponse),
      };
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
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
