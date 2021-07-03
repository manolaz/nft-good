// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePoll } from "./types/nftgood/tx";
import { MsgDeletePoll } from "./types/nftgood/tx";
import { MsgCreatePoll } from "./types/nftgood/tx";
const types = [
    ["/manolaz.nftgood.nftgood.MsgUpdatePoll", MsgUpdatePoll],
    ["/manolaz.nftgood.nftgood.MsgDeletePoll", MsgDeletePoll],
    ["/manolaz.nftgood.nftgood.MsgCreatePoll", MsgCreatePoll],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdatePoll: (data) => ({ typeUrl: "/manolaz.nftgood.nftgood.MsgUpdatePoll", value: data }),
        msgDeletePoll: (data) => ({ typeUrl: "/manolaz.nftgood.nftgood.MsgDeletePoll", value: data }),
        msgCreatePoll: (data) => ({ typeUrl: "/manolaz.nftgood.nftgood.MsgCreatePoll", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
