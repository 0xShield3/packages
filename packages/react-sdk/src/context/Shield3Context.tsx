import { TransactionLike, Transaction, JsonRpcProvider } from 'ethers'
import React, { createContext, useContext } from 'react';
import { Address } from '../types';
import { SimulateResponse, simulate } from '../shield3/simulate';
import { getNetworkFromChainId } from '../shield3/chainIds';



interface Shield3ContextResult {
  shield3Client: {
    getPolicyResults: (transaction: TransactionLike, from: Address) => Promise<SimulateResponse | undefined>;
  };
}

const Shield3Context = createContext<Shield3ContextResult | undefined>(undefined);

interface MyAppContextProps {
  apiKey: string;
  chainId: number;
  children?: React.ReactNode;
}

export const Shield3Provider: React.FC<MyAppContextProps> = ({ children, apiKey, chainId }) => {
  const shield3Client = {
    getPolicyResults: async (transaction: TransactionLike, from: Address): Promise<SimulateResponse | undefined> => {
      console.log(`Getting policy results for transaction: ${JSON.stringify(transaction, null, 2)} from : ${from}`)
      try {
        const network = getNetworkFromChainId(chainId)
        const url = `https://rpc.shield3.com/v3/${network}/${apiKey}/rpc`


        const client = new JsonRpcProvider(url, undefined, { staticNetwork: true })

        const tx = Transaction.from(transaction)

        return await simulate(client, tx, from)
      } catch (error) {
        console.error('Error:', error);
      }
    },
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