import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoin {
  /**
   * Cosmos coin which denomination is registered in a token pair. The coin
   * amount defines the amount of coins to convert.
   */
  coin: Coin;
  /** recipient hex address to receive ERC20 token */
  receiver: string;
  /** cosmos bech32 address from the owner of the given Cosmos coins */
  sender: string;
}
export interface MsgConvertCoinProtoMsg {
  typeUrl: "/evmos.erc20.v1.MsgConvertCoin";
  value: Uint8Array;
}
/** MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token */
export interface MsgConvertCoinAmino {
  /**
   * Cosmos coin which denomination is registered in a token pair. The coin
   * amount defines the amount of coins to convert.
   */
  coin: CoinAmino;
  /** recipient hex address to receive ERC20 token */
  receiver: string;
  /** cosmos bech32 address from the owner of the given Cosmos coins */
  sender: string;
}
export interface MsgConvertCoinAminoMsg {
  type: "/evmos.erc20.v1.MsgConvertCoin";
  value: MsgConvertCoinAmino;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponse {}
export interface MsgConvertCoinResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse";
  value: Uint8Array;
}
/** MsgConvertCoinResponse returns no fields */
export interface MsgConvertCoinResponseAmino {}
export interface MsgConvertCoinResponseAminoMsg {
  type: "/evmos.erc20.v1.MsgConvertCoinResponse";
  value: MsgConvertCoinResponseAmino;
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20 {
  /** ERC20 token contract address registered in a token pair */
  contractAddress: string;
  /** amount of ERC20 tokens to convert */
  amount: string;
  /** bech32 address to receive native Cosmos coins */
  receiver: string;
  /** sender hex address from the owner of the given ERC20 tokens */
  sender: string;
}
export interface MsgConvertERC20ProtoMsg {
  typeUrl: "/evmos.erc20.v1.MsgConvertERC20";
  value: Uint8Array;
}
/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 */
export interface MsgConvertERC20Amino {
  /** ERC20 token contract address registered in a token pair */
  contract_address: string;
  /** amount of ERC20 tokens to convert */
  amount: string;
  /** bech32 address to receive native Cosmos coins */
  receiver: string;
  /** sender hex address from the owner of the given ERC20 tokens */
  sender: string;
}
export interface MsgConvertERC20AminoMsg {
  type: "/evmos.erc20.v1.MsgConvertERC20";
  value: MsgConvertERC20Amino;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20Response {}
export interface MsgConvertERC20ResponseProtoMsg {
  typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response";
  value: Uint8Array;
}
/** MsgConvertERC20Response returns no fields */
export interface MsgConvertERC20ResponseAmino {}
export interface MsgConvertERC20ResponseAminoMsg {
  type: "/evmos.erc20.v1.MsgConvertERC20Response";
  value: MsgConvertERC20ResponseAmino;
}
function createBaseMsgConvertCoin(): MsgConvertCoin {
  return {
    coin: Coin.fromPartial({}),
    receiver: "",
    sender: ""
  };
}
export const MsgConvertCoin = {
  typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
  encode(message: MsgConvertCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConvertCoin>): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgConvertCoinAmino): MsgConvertCoin {
    const message = createBaseMsgConvertCoin();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgConvertCoin): MsgConvertCoinAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinAminoMsg): MsgConvertCoin {
    return MsgConvertCoin.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCoinProtoMsg): MsgConvertCoin {
    return MsgConvertCoin.decode(message.value);
  },
  toProto(message: MsgConvertCoin): Uint8Array {
    return MsgConvertCoin.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoin): MsgConvertCoinProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.MsgConvertCoin",
      value: MsgConvertCoin.encode(message).finish()
    };
  }
};
function createBaseMsgConvertCoinResponse(): MsgConvertCoinResponse {
  return {};
}
export const MsgConvertCoinResponse = {
  typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse",
  encode(_: MsgConvertCoinResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertCoinResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertCoinResponse();
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
  fromPartial(_: DeepPartial<MsgConvertCoinResponse>): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
  fromAmino(_: MsgConvertCoinResponseAmino): MsgConvertCoinResponse {
    const message = createBaseMsgConvertCoinResponse();
    return message;
  },
  toAmino(_: MsgConvertCoinResponse): MsgConvertCoinResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertCoinResponseAminoMsg): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertCoinResponseProtoMsg): MsgConvertCoinResponse {
    return MsgConvertCoinResponse.decode(message.value);
  },
  toProto(message: MsgConvertCoinResponse): Uint8Array {
    return MsgConvertCoinResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertCoinResponse): MsgConvertCoinResponseProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.MsgConvertCoinResponse",
      value: MsgConvertCoinResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConvertERC20(): MsgConvertERC20 {
  return {
    contractAddress: "",
    amount: "",
    receiver: "",
    sender: ""
  };
}
export const MsgConvertERC20 = {
  typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
  encode(message: MsgConvertERC20, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgConvertERC20>): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    message.contractAddress = object.contractAddress ?? "";
    message.amount = object.amount ?? "";
    message.receiver = object.receiver ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgConvertERC20Amino): MsgConvertERC20 {
    const message = createBaseMsgConvertERC20();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgConvertERC20): MsgConvertERC20Amino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20AminoMsg): MsgConvertERC20 {
    return MsgConvertERC20.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertERC20ProtoMsg): MsgConvertERC20 {
    return MsgConvertERC20.decode(message.value);
  },
  toProto(message: MsgConvertERC20): Uint8Array {
    return MsgConvertERC20.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20): MsgConvertERC20ProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.MsgConvertERC20",
      value: MsgConvertERC20.encode(message).finish()
    };
  }
};
function createBaseMsgConvertERC20Response(): MsgConvertERC20Response {
  return {};
}
export const MsgConvertERC20Response = {
  typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response",
  encode(_: MsgConvertERC20Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConvertERC20Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConvertERC20Response();
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
  fromPartial(_: DeepPartial<MsgConvertERC20Response>): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
  fromAmino(_: MsgConvertERC20ResponseAmino): MsgConvertERC20Response {
    const message = createBaseMsgConvertERC20Response();
    return message;
  },
  toAmino(_: MsgConvertERC20Response): MsgConvertERC20ResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConvertERC20ResponseAminoMsg): MsgConvertERC20Response {
    return MsgConvertERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConvertERC20ResponseProtoMsg): MsgConvertERC20Response {
    return MsgConvertERC20Response.decode(message.value);
  },
  toProto(message: MsgConvertERC20Response): Uint8Array {
    return MsgConvertERC20Response.encode(message).finish();
  },
  toProtoMsg(message: MsgConvertERC20Response): MsgConvertERC20ResponseProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.MsgConvertERC20Response",
      value: MsgConvertERC20Response.encode(message).finish()
    };
  }
};