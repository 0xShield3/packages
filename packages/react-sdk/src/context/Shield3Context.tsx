"use client"
import { type TransactionLike, Transaction, JsonRpcProvider } from 'ethers'
import { createContext, useContext } from 'react';
import React from 'react';
import type { Address } from '../types';
import { type SimulateResponse, simulate } from '../shield3/simulate';
import { getNetworkFromChainId } from '../shield3/chainIds';



interface Shield3ContextResult {
  shield3Client: {
    getPolicyResults: (transaction: TransactionLike, from: Address) => Promise<SimulateResponse | undefined>;
    setApiKey: (apiKey: string) => void;
  };
}

const Shield3Context = createContext<Shield3ContextResult | undefined>(undefined);

interface MyAppContextProps {
  apiKey: string;
  children?: React.ReactNode;
}

export {type SimulateResponse}

export const Shield3Provider: React.FC<MyAppContextProps> = ({ children, apiKey}) => {
  let currentApiKey = apiKey
  const shield3Client = {
    getPolicyResults: async (transaction: TransactionLike, from: Address): Promise<SimulateResponse | undefined> => {
      try {
        if (!from) {throw new Error("From_address is undefined. Verify how this is being passed to this sdk, and make sure a wallet is connected when interacting.")}
        if (!apiKey) {throw new Error("Shield3 API Key is undefined. Make sure the following is configured properly: \n In nextjs: The variable SHIELD3_API_KEY is defined in your .env.local, and correctly passed to the context provider.\n In react: The variable REACT_APP_SHIELD3_API_KEY is defined in your .env, and correctly passed to the context provider.")}
        if (!transaction.chainId) {throw new Error("ChainId is undefined")}
        const network = getNetworkFromChainId(Number(transaction.chainId))
        const url = `https://rpc.shield3.com/v3/${network}/${currentApiKey}/rpc`


        const client = new JsonRpcProvider(url, undefined, { staticNetwork: true })

        const tx = Transaction.from(transaction)
        
        return await simulate(client, tx, from)
      } catch (error) {
        console.error('@Shield3/react-sdk error:', error);
      }
    },
    setApiKey: (apiKey: string) => {
      currentApiKey = apiKey
    }
  };


  return <Shield3Context.Provider value={{ shield3Client }}>{children}</Shield3Context.Provider>;
};

export const useShield3Context = () => {
  const context = useContext(Shield3Context);
  if (!context) {
    throw new Error('useMyAppContext must be used within a MyAppProvider');
  }
  return context;
};