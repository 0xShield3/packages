import type { PrivyClientConfig } from '@privy-io/react-auth'
import { mainnet, goerli, polygon, polygonMumbai, sepolia } from 'viem/chains'
import { addRpcUrlOverrideToChain } from '@privy-io/react-auth'

import { SHIELD3_RPC_URL } from './constants.ts'
export const initShield3PrivyConfig = (SHIELD3_API_KEY: string, privyClientConfig: PrivyClientConfig = {}): PrivyClientConfig => {
    if (!SHIELD3_API_KEY) {
        throw new Error('SHIELD3_API_KEY is missing.')
    }
    const mainnetOverride = addRpcUrlOverrideToChain(mainnet, _generatePrivyRpcUrl(SHIELD3_API_KEY, '0x01'))
    const goerliOverride = addRpcUrlOverrideToChain(goerli, _generatePrivyRpcUrl(SHIELD3_API_KEY, '0x5'))
    const polygonOverride = addRpcUrlOverrideToChain(polygon, _generatePrivyRpcUrl(SHIELD3_API_KEY, '0x89'))
    const mumbaiOverride = addRpcUrlOverrideToChain(polygonMumbai, _generatePrivyRpcUrl(SHIELD3_API_KEY, '0x13881'))
    const sepoliaOverride = addRpcUrlOverrideToChain(sepolia, _generatePrivyRpcUrl(SHIELD3_API_KEY, '0xaa36a7'))
    return {
        ...privyClientConfig,
        supportedChains: [
            mainnetOverride,
            goerliOverride,
            polygonOverride,
            mumbaiOverride,
            sepoliaOverride,
            ...(privyClientConfig?.supportedChains ?? []),
        ],
    }
}

const _generatePrivyRpcUrl = (apiKey: string, chainId: string) => {
    const url = new URL(`${SHIELD3_RPC_URL}/${chainId}/${apiKey}/rpc`)
    return url.toString()
}
