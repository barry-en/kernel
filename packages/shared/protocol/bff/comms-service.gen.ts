/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  PeerTopicSubscriptionResultElem,
  PublishToTopicRequest,
  PublishToTopicResult,
  SubscriptionRequest,
  SystemTopicSubscriptionResultElem,
} from "./topics-service.gen";

export const protobufPackage = "decentraland.bff";

export interface Subscription {
  subscriptionId: number;
}

export interface UnsubscriptionResult {
  ok: boolean;
}

function createBaseSubscription(): Subscription {
  return { subscriptionId: 0 };
}

export const Subscription = {
  encode(message: Subscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionId !== 0) {
      writer.uint32(8).uint32(message.subscriptionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subscription {
    return { subscriptionId: isSet(object.subscriptionId) ? Number(object.subscriptionId) : 0 };
  },

  toJSON(message: Subscription): unknown {
    const obj: any = {};
    message.subscriptionId !== undefined && (obj.subscriptionId = Math.round(message.subscriptionId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Subscription>, I>>(object: I): Subscription {
    const message = createBaseSubscription();
    message.subscriptionId = object.subscriptionId ?? 0;
    return message;
  },
};

function createBaseUnsubscriptionResult(): UnsubscriptionResult {
  return { ok: false };
}

export const UnsubscriptionResult = {
  encode(message: UnsubscriptionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok === true) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnsubscriptionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnsubscriptionResult();
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

  fromJSON(object: any): UnsubscriptionResult {
    return { ok: isSet(object.ok) ? Boolean(object.ok) : false };
  },

  toJSON(message: UnsubscriptionResult): unknown {
    const obj: any = {};
    message.ok !== undefined && (obj.ok = message.ok);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnsubscriptionResult>, I>>(object: I): UnsubscriptionResult {
    const message = createBaseUnsubscriptionResult();
    message.ok = object.ok ?? false;
    return message;
  },
};

export type CommsServiceDefinition = typeof CommsServiceDefinition;
export const CommsServiceDefinition = {
  name: "CommsService",
  fullName: "decentraland.bff.CommsService",
  methods: {
    subscribeToPeerMessages: {
      name: "SubscribeToPeerMessages",
      requestType: SubscriptionRequest,
      requestStream: false,
      responseType: Subscription,
      responseStream: false,
      options: {},
    },
    getPeerMessages: {
      name: "GetPeerMessages",
      requestType: Subscription,
      requestStream: false,
      responseType: PeerTopicSubscriptionResultElem,
      responseStream: true,
      options: {},
    },
    unsubscribeToPeerMessages: {
      name: "UnsubscribeToPeerMessages",
      requestType: Subscription,
      requestStream: false,
      responseType: UnsubscriptionResult,
      responseStream: false,
      options: {},
    },
    subscribeToSystemMessages: {
      name: "SubscribeToSystemMessages",
      requestType: SubscriptionRequest,
      requestStream: false,
      responseType: Subscription,
      responseStream: false,
      options: {},
    },
    getSystemMessages: {
      name: "GetSystemMessages",
      requestType: Subscription,
      requestStream: false,
      responseType: SystemTopicSubscriptionResultElem,
      responseStream: true,
      options: {},
    },
    unsubscribeToSystemMessages: {
      name: "UnsubscribeToSystemMessages",
      requestType: Subscription,
      requestStream: false,
      responseType: UnsubscriptionResult,
      responseStream: false,
      options: {},
    },
    /** send a peer message to a topic */
    publishToTopic: {
      name: "PublishToTopic",
      requestType: PublishToTopicRequest,
      requestStream: false,
      responseType: PublishToTopicResult,
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
