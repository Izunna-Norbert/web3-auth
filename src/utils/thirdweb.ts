import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import { WEB3_NODE_API_KEY, WEB3_NODE_NETWORK, WEB3_NODE_URL } from "../constants/constants";

export const Provider = new ethers.providers.JsonRpcProvider(WEB3_NODE_URL);
export const Thirdweb = new ThirdwebSDK(WEB3_NODE_NETWORK, {
});

