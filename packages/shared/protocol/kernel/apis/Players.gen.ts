/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { UserData } from "./common-sdk/UserData.gen";

export const protobufPackage = "";

export interface Player {
  userId: string;
}

export interface PlayersGetUserDataResponse {
  data?: UserData | undefined;
}

export interface PlayerListResponse {
  players: Player[];
}

export interface GetPlayerDataRequest {
  userId: string;
}

export interface GetPlayersInSceneRequest {
}

export interface GetConnectedPlayersRequest {
}

function createBasePlayer(): Player {
  return { userId: "" };
}

export const Player = {
  encode(message: Player, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Player {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Player {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: Player): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Player>, I>>(object: I): Player {
    const message = createBasePlayer();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBasePlayersGetUserDataResponse(): PlayersGetUserDataResponse {
  return { data: undefined };
}

export const PlayersGetUserDataResponse = {
  encode(message: PlayersGetUserDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      UserData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayersGetUserDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayersGetUserDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = UserData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayersGetUserDataResponse {
    return { data: isSet(object.data) ? UserData.fromJSON(object.data) : undefined };
  },

  toJSON(message: PlayersGetUserDataResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data ? UserData.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayersGetUserDataResponse>, I>>(object: I): PlayersGetUserDataResponse {
    const message = createBasePlayersGetUserDataResponse();
    message.data = (object.data !== undefined && object.data !== null) ? UserData.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBasePlayerListResponse(): PlayerListResponse {
  return { players: [] };
}

export const PlayerListResponse = {
  encode(message: PlayerListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.players) {
      Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.players.push(Player.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerListResponse {
    return { players: Array.isArray(object?.players) ? object.players.map((e: any) => Player.fromJSON(e)) : [] };
  },

  toJSON(message: PlayerListResponse): unknown {
    const obj: any = {};
    if (message.players) {
      obj.players = message.players.map((e) => e ? Player.toJSON(e) : undefined);
    } else {
      obj.players = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerListResponse>, I>>(object: I): PlayerListResponse {
    const message = createBasePlayerListResponse();
    message.players = object.players?.map((e) => Player.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetPlayerDataRequest(): GetPlayerDataRequest {
  return { userId: "" };
}

export const GetPlayerDataRequest = {
  encode(message: GetPlayerDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPlayerDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPlayerDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetPlayerDataRequest {
    return { userId: isSet(object.userId) ? String(object.userId) : "" };
  },

  toJSON(message: GetPlayerDataRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPlayerDataRequest>, I>>(object: I): GetPlayerDataRequest {
    const message = createBaseGetPlayerDataRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetPlayersInSceneRequest(): GetPlayersInSceneRequest {
  return {};
}

export const GetPlayersInSceneRequest = {
  encode(_: GetPlayersInSceneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPlayersInSceneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPlayersInSceneRequest();
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

  fromJSON(_: any): GetPlayersInSceneRequest {
    return {};
  },

  toJSON(_: GetPlayersInSceneRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetPlayersInSceneRequest>, I>>(_: I): GetPlayersInSceneRequest {
    const message = createBaseGetPlayersInSceneRequest();
    return message;
  },
};

function createBaseGetConnectedPlayersRequest(): GetConnectedPlayersRequest {
  return {};
}

export const GetConnectedPlayersRequest = {
  encode(_: GetConnectedPlayersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConnectedPlayersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConnectedPlayersRequest();
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

  fromJSON(_: any): GetConnectedPlayersRequest {
    return {};
  },

  toJSON(_: GetConnectedPlayersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetConnectedPlayersRequest>, I>>(_: I): GetConnectedPlayersRequest {
    const message = createBaseGetConnectedPlayersRequest();
    return message;
  },
};

export type PlayersServiceDefinition = typeof PlayersServiceDefinition;
export const PlayersServiceDefinition = {
  name: "PlayersService",
  fullName: "PlayersService",
  methods: {
    getPlayerData: {
      name: "GetPlayerData",
      requestType: GetPlayerDataRequest,
      requestStream: false,
      responseType: PlayersGetUserDataResponse,
      responseStream: false,
      options: {},
    },
    getPlayersInScene: {
      name: "GetPlayersInScene",
      requestType: GetPlayersInSceneRequest,
      requestStream: false,
      responseType: PlayerListResponse,
      responseStream: false,
      options: {},
    },
    getConnectedPlayers: {
      name: "GetConnectedPlayers",
      requestType: GetConnectedPlayersRequest,
      requestStream: false,
      responseType: PlayerListResponse,
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
