/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface RequirePaymentRequest {
  toAddress: string;
  amount: number;
  currency: string;
}

export interface RequirePaymentResponse {
  jsonAnyResponse: string;
}

export interface SignMessageRequest {
  message: { [key: string]: string };
}

export interface SignMessageRequest_MessageEntry {
  key: string;
  value: string;
}

export interface SignMessageResponse {
  message: string;
  hexEncodedMessage: string;
  signature: string;
}

export interface ConvertMessageToObjectRequest {
  message: string;
}

export interface ConvertMessageToObjectResponse {
  dict: { [key: string]: string };
}

export interface ConvertMessageToObjectResponse_DictEntry {
  key: string;
  value: string;
}

export interface SendAsyncRequest {
  id: number;
  method: string;
  jsonParams: string;
}

export interface SendAsyncResponse {
  jsonAnyResponse: string;
}

export interface GetUserAccountRequest {
}

export interface GetUserAccountResponse {
  address?: string | undefined;
}

function createBaseRequirePaymentRequest(): RequirePaymentRequest {
  return { toAddress: "", amount: 0, currency: "" };
}

export const RequirePaymentRequest = {
  encode(message: RequirePaymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.toAddress !== "") {
      writer.uint32(10).string(message.toAddress);
    }
    if (message.amount !== 0) {
      writer.uint32(21).float(message.amount);
    }
    if (message.currency !== "") {
      writer.uint32(26).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequirePaymentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequirePaymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toAddress = reader.string();
          break;
        case 2:
          message.amount = reader.float();
          break;
        case 3:
          message.currency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequirePaymentRequest {
    return {
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
    };
  },

  toJSON(message: RequirePaymentRequest): unknown {
    const obj: any = {};
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequirePaymentRequest>, I>>(object: I): RequirePaymentRequest {
    const message = createBaseRequirePaymentRequest();
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount ?? 0;
    message.currency = object.currency ?? "";
    return message;
  },
};

function createBaseRequirePaymentResponse(): RequirePaymentResponse {
  return { jsonAnyResponse: "" };
}

export const RequirePaymentResponse = {
  encode(message: RequirePaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jsonAnyResponse !== "") {
      writer.uint32(10).string(message.jsonAnyResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequirePaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequirePaymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jsonAnyResponse = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequirePaymentResponse {
    return { jsonAnyResponse: isSet(object.jsonAnyResponse) ? String(object.jsonAnyResponse) : "" };
  },

  toJSON(message: RequirePaymentResponse): unknown {
    const obj: any = {};
    message.jsonAnyResponse !== undefined && (obj.jsonAnyResponse = message.jsonAnyResponse);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequirePaymentResponse>, I>>(object: I): RequirePaymentResponse {
    const message = createBaseRequirePaymentResponse();
    message.jsonAnyResponse = object.jsonAnyResponse ?? "";
    return message;
  },
};

function createBaseSignMessageRequest(): SignMessageRequest {
  return { message: {} };
}

export const SignMessageRequest = {
  encode(message: SignMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.message).forEach(([key, value]) => {
      SignMessageRequest_MessageEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignMessageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SignMessageRequest_MessageEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.message[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignMessageRequest {
    return {
      message: isObject(object.message)
        ? Object.entries(object.message).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SignMessageRequest): unknown {
    const obj: any = {};
    obj.message = {};
    if (message.message) {
      Object.entries(message.message).forEach(([k, v]) => {
        obj.message[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignMessageRequest>, I>>(object: I): SignMessageRequest {
    const message = createBaseSignMessageRequest();
    message.message = Object.entries(object.message ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseSignMessageRequest_MessageEntry(): SignMessageRequest_MessageEntry {
  return { key: "", value: "" };
}

export const SignMessageRequest_MessageEntry = {
  encode(message: SignMessageRequest_MessageEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignMessageRequest_MessageEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignMessageRequest_MessageEntry();
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

  fromJSON(object: any): SignMessageRequest_MessageEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: SignMessageRequest_MessageEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignMessageRequest_MessageEntry>, I>>(
    object: I,
  ): SignMessageRequest_MessageEntry {
    const message = createBaseSignMessageRequest_MessageEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSignMessageResponse(): SignMessageResponse {
  return { message: "", hexEncodedMessage: "", signature: "" };
}

export const SignMessageResponse = {
  encode(message: SignMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.hexEncodedMessage !== "") {
      writer.uint32(18).string(message.hexEncodedMessage);
    }
    if (message.signature !== "") {
      writer.uint32(26).string(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.hexEncodedMessage = reader.string();
          break;
        case 3:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignMessageResponse {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      hexEncodedMessage: isSet(object.hexEncodedMessage) ? String(object.hexEncodedMessage) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
    };
  },

  toJSON(message: SignMessageResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.hexEncodedMessage !== undefined && (obj.hexEncodedMessage = message.hexEncodedMessage);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignMessageResponse>, I>>(object: I): SignMessageResponse {
    const message = createBaseSignMessageResponse();
    message.message = object.message ?? "";
    message.hexEncodedMessage = object.hexEncodedMessage ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

function createBaseConvertMessageToObjectRequest(): ConvertMessageToObjectRequest {
  return { message: "" };
}

export const ConvertMessageToObjectRequest = {
  encode(message: ConvertMessageToObjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvertMessageToObjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertMessageToObjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConvertMessageToObjectRequest {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: ConvertMessageToObjectRequest): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConvertMessageToObjectRequest>, I>>(
    object: I,
  ): ConvertMessageToObjectRequest {
    const message = createBaseConvertMessageToObjectRequest();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseConvertMessageToObjectResponse(): ConvertMessageToObjectResponse {
  return { dict: {} };
}

export const ConvertMessageToObjectResponse = {
  encode(message: ConvertMessageToObjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.dict).forEach(([key, value]) => {
      ConvertMessageToObjectResponse_DictEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvertMessageToObjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertMessageToObjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ConvertMessageToObjectResponse_DictEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.dict[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConvertMessageToObjectResponse {
    return {
      dict: isObject(object.dict)
        ? Object.entries(object.dict).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ConvertMessageToObjectResponse): unknown {
    const obj: any = {};
    obj.dict = {};
    if (message.dict) {
      Object.entries(message.dict).forEach(([k, v]) => {
        obj.dict[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConvertMessageToObjectResponse>, I>>(
    object: I,
  ): ConvertMessageToObjectResponse {
    const message = createBaseConvertMessageToObjectResponse();
    message.dict = Object.entries(object.dict ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseConvertMessageToObjectResponse_DictEntry(): ConvertMessageToObjectResponse_DictEntry {
  return { key: "", value: "" };
}

export const ConvertMessageToObjectResponse_DictEntry = {
  encode(message: ConvertMessageToObjectResponse_DictEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConvertMessageToObjectResponse_DictEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConvertMessageToObjectResponse_DictEntry();
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

  fromJSON(object: any): ConvertMessageToObjectResponse_DictEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ConvertMessageToObjectResponse_DictEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConvertMessageToObjectResponse_DictEntry>, I>>(
    object: I,
  ): ConvertMessageToObjectResponse_DictEntry {
    const message = createBaseConvertMessageToObjectResponse_DictEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSendAsyncRequest(): SendAsyncRequest {
  return { id: 0, method: "", jsonParams: "" };
}

export const SendAsyncRequest = {
  encode(message: SendAsyncRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.method !== "") {
      writer.uint32(18).string(message.method);
    }
    if (message.jsonParams !== "") {
      writer.uint32(26).string(message.jsonParams);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendAsyncRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAsyncRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.method = reader.string();
          break;
        case 3:
          message.jsonParams = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendAsyncRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      method: isSet(object.method) ? String(object.method) : "",
      jsonParams: isSet(object.jsonParams) ? String(object.jsonParams) : "",
    };
  },

  toJSON(message: SendAsyncRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.method !== undefined && (obj.method = message.method);
    message.jsonParams !== undefined && (obj.jsonParams = message.jsonParams);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendAsyncRequest>, I>>(object: I): SendAsyncRequest {
    const message = createBaseSendAsyncRequest();
    message.id = object.id ?? 0;
    message.method = object.method ?? "";
    message.jsonParams = object.jsonParams ?? "";
    return message;
  },
};

function createBaseSendAsyncResponse(): SendAsyncResponse {
  return { jsonAnyResponse: "" };
}

export const SendAsyncResponse = {
  encode(message: SendAsyncResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jsonAnyResponse !== "") {
      writer.uint32(10).string(message.jsonAnyResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendAsyncResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAsyncResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jsonAnyResponse = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendAsyncResponse {
    return { jsonAnyResponse: isSet(object.jsonAnyResponse) ? String(object.jsonAnyResponse) : "" };
  },

  toJSON(message: SendAsyncResponse): unknown {
    const obj: any = {};
    message.jsonAnyResponse !== undefined && (obj.jsonAnyResponse = message.jsonAnyResponse);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendAsyncResponse>, I>>(object: I): SendAsyncResponse {
    const message = createBaseSendAsyncResponse();
    message.jsonAnyResponse = object.jsonAnyResponse ?? "";
    return message;
  },
};

function createBaseGetUserAccountRequest(): GetUserAccountRequest {
  return {};
}

export const GetUserAccountRequest = {
  encode(_: GetUserAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserAccountRequest();
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

  fromJSON(_: any): GetUserAccountRequest {
    return {};
  },

  toJSON(_: GetUserAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserAccountRequest>, I>>(_: I): GetUserAccountRequest {
    const message = createBaseGetUserAccountRequest();
    return message;
  },
};

function createBaseGetUserAccountResponse(): GetUserAccountResponse {
  return { address: undefined };
}

export const GetUserAccountResponse = {
  encode(message: GetUserAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserAccountResponse {
    return { address: isSet(object.address) ? String(object.address) : undefined };
  },

  toJSON(message: GetUserAccountResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserAccountResponse>, I>>(object: I): GetUserAccountResponse {
    const message = createBaseGetUserAccountResponse();
    message.address = object.address ?? undefined;
    return message;
  },
};

export type EthereumControllerServiceDefinition = typeof EthereumControllerServiceDefinition;
export const EthereumControllerServiceDefinition = {
  name: "EthereumControllerService",
  fullName: "EthereumControllerService",
  methods: {
    requirePayment: {
      name: "RequirePayment",
      requestType: RequirePaymentRequest,
      requestStream: false,
      responseType: RequirePaymentResponse,
      responseStream: false,
      options: {},
    },
    signMessage: {
      name: "SignMessage",
      requestType: SignMessageRequest,
      requestStream: false,
      responseType: SignMessageResponse,
      responseStream: false,
      options: {},
    },
    convertMessageToObject: {
      name: "ConvertMessageToObject",
      requestType: ConvertMessageToObjectRequest,
      requestStream: false,
      responseType: ConvertMessageToObjectResponse,
      responseStream: false,
      options: {},
    },
    sendAsync: {
      name: "SendAsync",
      requestType: SendAsyncRequest,
      requestStream: false,
      responseType: SendAsyncResponse,
      responseStream: false,
      options: {},
    },
    getUserAccount: {
      name: "GetUserAccount",
      requestType: GetUserAccountRequest,
      requestStream: false,
      responseType: GetUserAccountResponse,
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
