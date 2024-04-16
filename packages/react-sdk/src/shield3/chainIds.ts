export enum SupportedNetworks {
    ARBITRUM_MAINNET = '0xa4b1', //42161
    ARBITRUM_SEPOLIA = '0x066eee', //421614
    BASE_MAINNET = '0x2105', //8453
    BASE_SEPOLIA = '0x014a34', //84532
    BSC_MAINNET = '0x38', // 56
    CELO_MAINNET = '0xa4ec', //42220
    ETHEREUM_MAINNET = '0x01', // 1
    OPTIMISM_MAINNET = '0x0a', // 10
    POLYGON_AMOY = '0x013882', // 80002
    POLYGON_MAINNET = '0x89', // 137
    SEPOLIA = '0xaa36a7', // 11155111
}

export const chainIdToNetwork: Record<number, SupportedNetworks> = {
    1: SupportedNetworks.ETHEREUM_MAINNET,
    10: SupportedNetworks.OPTIMISM_MAINNET,
    56: SupportedNetworks.BSC_MAINNET,
    137: SupportedNetworks.POLYGON_MAINNET,
    80002: SupportedNetworks.POLYGON_AMOY,
    42220: SupportedNetworks.CELO_MAINNET,
    42161: SupportedNetworks.ARBITRUM_MAINNET,
    421614: SupportedNetworks.ARBITRUM_SEPOLIA,
    8453: SupportedNetworks.BASE_MAINNET,
    84532: SupportedNetworks.BASE_SEPOLIA,
    11155111: SupportedNetworks.SEPOLIA,
}

export const getNetworkFromChainId = (chainId: number): SupportedNetworks => {
    if (chainId in chainIdToNetwork) {
        return chainIdToNetwork[chainId]
    } else {
        throw new Error(`Unsupported chainId: ${chainId}`)
    }
}
