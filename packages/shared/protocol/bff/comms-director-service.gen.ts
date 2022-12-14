/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Position } from "../common/Vectors.gen";
import { Empty } from "../google/protobuf/empty.gen";

export const protobufPackage = "decentraland.bff";

export interface WorldCommand {
  setCommsAdapter: SetCommsAdapter | undefined;
}

export interface SetCommsAdapter {
  connectionString: string;
}

export interface Heartbeat {
  position: Position | undefined;
  desiredRoom?: string | undefined;
}

function createBaseWorldCommand(): WorldCommand {
  return { setCommsAdapter: undefined };
}

export const WorldCommand = {
  encode(message: WorldCommand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.setCommsAdapter !== undefined) {
      SetCommsAdapter.encode(message.setCommsAdapter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorldCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWorldCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.setCommsAdapter = SetCommsAdapter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorldCommand {
    return {
      setCommsAdapter: isSet(object.setCommsAdapter) ? SetCommsAdapter.fromJSON(object.setCommsAdapter) : undefined,
    };
  },

  toJSON(message: WorldCommand): unknown {
    const obj: any = {};
    message.setCommsAdapter !== undefined &&
      (obj.setCommsAdapter = message.setCommsAdapter ? SetCommsAdapter.toJSON(message.setCommsAdapter) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WorldCommand>, I>>(object: I): WorldCommand {
    const message = createBaseWorldCommand();
    message.setCommsAdapter = (object.setCommsAdapter !== undefined && object.setCommsAdapter !== null)
      ? SetCommsAdapter.fromPartial(object.setCommsAdapter)
      : undefined;
    return message;
  },
};

function createBaseSetCommsAdapter(): SetCommsAdapter {
  return { connectionString: "" };
}

export const SetCommsAdapter = {
  encode(message: SetCommsAdapter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionString !== "") {
      writer.uint32(10).string(message.connectionString);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCommsAdapter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCommsAdapter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetCommsAdapter {
    return { connectionString: isSet(object.connectionString) ? String(object.connectionString) : "" };
  },

  toJSON(message: SetCommsAdapter): unknown {
    const obj: any = {};
    message.connectionString !== undefined && (obj.connectionString = message.connectionString);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetCommsAdapter>, I>>(object: I): SetCommsAdapter {
    const message = createBaseSetCommsAdapter();
    message.connectionString = object.connectionString ?? "";
    return message;
  },
};

function createBaseHeartbeat(): Heartbeat {
  return { position: undefined, desiredRoom: undefined };
}

export const Heartbeat = {
  encode(message: Heartbeat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    if (message.desiredRoom !== undefined) {
      writer.uint32(18).string(message.desiredRoom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Heartbeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeartbeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        case 2:
          message.desiredRoom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Heartbeat {
    return {
      position: isSet(object.position) ? Position.fromJSON(object.position) : undefined,
      desiredRoom: isSet(object.desiredRoom) ? String(object.desiredRoom) : undefined,
    };
  },

  toJSON(message: Heartbeat): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position ? Position.toJSON(message.position) : undefined);
    message.desiredRoom !== undefined && (obj.desiredRoom = message.desiredRoom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Heartbeat>, I>>(object: I): Heartbeat {
    const message = createBaseHeartbeat();
    message.position = (object.position !== undefined && object.position !== null)
      ? Position.fromPartial(object.position)
      : undefined;
    message.desiredRoom = object.desiredRoom ?? undefined;
    return message;
  },
};

export type CommsDirectorServiceDefinition = typeof CommsDirectorServiceDefinition;
export const CommsDirectorServiceDefinition = {
  name: "CommsDirectorService",
  fullName: "decentraland.bff.CommsDirectorService",
  methods: {
    /**
     * every couple seconds AND at the beginning, the explorers must send a heartbeat
     * to make the comms director aware of their location
     */
    sendHeartbeat: {
      name: "SendHeartbeat",
      requestType: Heartbeat,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    /**
     * before sending the first heartbeat, it is required that the explorers subscribe
     * to a list of comms commands
     */
    getCommsCommands: {
      name: "GetCommsCommands",
      requestType: Empty,
      requestStream: false,
      responseType: WorldCommand,
      responseStream: true,
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
