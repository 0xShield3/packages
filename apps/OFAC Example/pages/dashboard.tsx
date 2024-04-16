import { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import Head from 'next/head';
import { bigIntToHex } from '@ethereumjs/util'; // Import toHex from @ethereumjs/util
import { useRouter } from "next/router";



export default function SendTransactionButton() {
  const { user, sendTransaction, ready, authenticated } = usePrivy();
  const router = useRouter();
  
  useEffect(() => {
    if (!ready || !authenticated) router.push("/");
  }, [ready, authenticated]);

  const unsignedTxDefaults = {
    to: '0x01e2919679362DFbC9EE1644BA9C6DA6D624DEad',
    chainId: 5,
    value: bigIntToHex(BigInt('250000000000000000')), // Convert default amount to hex using BN for 1.1 ETH in wei
  };

  const [toAddress, setToAddress] = useState(unsignedTxDefaults.to);
  const [amount, setAmount] = useState('0.25'); // Keep amount in decimal as a string for user input

  const uiConfig = {
    header: 'Send ETH (goerli)',
    description: 'Send a protected transaction',
    buttonText: 'Submit'
  };

  return (
    <>
      <Head>
        <title>Privy x Shield3 Demo</title>
      </Head>

      <main className="flex flex-col items-center min-h-screen px-4 sm:px-20 py-6 sm:py-10 bg-privy-light-blue">
        <h1 className="text-2xl font-semibold">Privy x Shield3 Demo</h1>
        
        <label className="mt-2">
          To Address:
          <input
            className="ml-2 p-2 border rounded"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            placeholder="To Address"
          />
        </label>

        <label className="mt-2">
          Amount (ETH):
          <input
            className="ml-2 p-2 border rounded"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount in ETH"
          />
        </label>

        <button
          className="mt-2 text-sm bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 py-2 px-4 rounded-md text-white"
          disabled={!user?.wallet}
          onClick={async () => {
            const unsignedTx = { 
              ...unsignedTxDefaults, 
              to: toAddress, 
              value: bigIntToHex(BigInt(Math.floor(parseFloat(amount) * 1e6)) * BigInt(10**12)) // Convert amount to wei in hex
            };
            await sendTransaction(unsignedTx, uiConfig);
          }}
        >
          Send ETH
        </button>
        <label className="mt-2">
          Your address: 
        <div>{user?.wallet?.address || 'No wallet detected'}</div>
        </label>
      </main>
    </>
  );
}