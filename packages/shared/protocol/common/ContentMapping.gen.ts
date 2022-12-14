/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "decentraland.common";

export interface ContentMapping {
  file: string;
  hash: string;
}

function createBaseContentMapping(): ContentMapping {
  return { file: "", hash: "" };
}

export const ContentMapping = {
  encode(message: ContentMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContentMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContentMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ContentMapping {
    return { file: isSet(object.file) ? String(object.file) : "", hash: isSet(object.hash) ? String(object.hash) : "" };
  },

  toJSON(message: ContentMapping): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContentMapping>, I>>(object: I): ContentMapping {
    const message = createBaseContentMapping();
    message.file = object.file ?? "";
    message.hash = object.hash ?? "";
    return message;
  },
};

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
