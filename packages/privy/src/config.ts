import type { PrivyClientConfig } from "@privy-io/react-auth";

import { SHIELD3_RPC_URL } from "./constants.ts";
export const initShield3PrivyConfig = (
  SHIELD3_API_KEY: string,
  privyClientConfig: PrivyClientConfig = {},
): PrivyClientConfig => {
  if (!SHIELD3_API_KEY) {
    throw new Error("SHIELD3_API_KEY is missing.");
  }
  return {
    ...privyClientConfig,
    rpcConfig: {
      ...privyClientConfig?.rpcConfig,
      rpcUrls: {
        1: _generatePrivyRpcUrl(SHIELD3_API_KEY, '0x01'), // Mainnet
        5: _generatePrivyRpcUrl(SHIELD3_API_KEY, '0x5'), // Goerli
        137: _generatePrivyRpcUrl(SHIELD3_API_KEY, '0x89'), // Polygon
        80001: _generatePrivyRpcUrl(SHIELD3_API_KEY, '0x13881'), // Mumbai
        11155111: _generatePrivyRpcUrl(SHIELD3_API_KEY, '0xaa36a7'), // Sepolia
        ...privyClientConfig?.rpcConfig?.rpcUrls,
      },
    },
  };
};

const _generatePrivyRpcUrl = (apiKey: string, chainId: string) => {
  const url = new URL(`${SHIELD3_RPC_URL}/${chainId}/rpc`);
  url.searchParams.append("apiKey", apiKey);
  return url.toString();
};
