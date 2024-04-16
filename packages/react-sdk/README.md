
# Shield3 React SDK

The Shield3 React SDK provides a convenient way to integrate Shield3's policy simulation and transaction analysis capabilities into your React applications. By leveraging the `Shield3Provider` and the `useShield3Context` hook, developers can easily query policy results for Ethereum transactions, helping to ensure that transactions comply with specified policies before being sent to the network.

## Features

- **Policy Simulation**: Simulate transactions against Shield3's policy engine to get immediate feedback on compliance.
- **Easy Integration**: Seamlessly integrates with React applications, providing context and hooks to interact with the Shield3 API.
- **Customizable**: Configure with your own API key and chain ID to connect to the appropriate network.


## Installation

To install the Shield3 React SDK, run the following command in your project directory:


To install the Shield3 React SDK, run the following command in your project directory:

`npm install @shield3/react-sdk`

## Usage

To use the Shield3 React SDK in your React application, follow these steps:

### 1. Wrap your application with `Shield3Provider`

First, import `Shield3Provider` from the SDK and wrap your application's root component. This requires an `apiKey` for authenticating with the Shield3 API and a `chainId` to specify the blockchain network.

```jsx
import { Shield3Provider } from '@shield3/react-sdk';

function App() {
  return (
    <Shield3Provider apiKey="your_api_key_here" chainId={1}> {/* Use the appropriate chain ID */}
      {/* Your app components */}
    </Shield3Provider>
  );
}

export default App;
```

### 2. Use `useShield3Context` to access the SDK functionality

Anywhere in your component tree that is wrapped by `Shield3Provider`, you can use `useShield3Context` to access the SDK's functionality. This hook provides access to the `shield3Client`, which includes the `getPolicyResults` method for simulating transactions.

```jsx
import { useShield3Context } from '@shield3/react-sdk';
import { useState } from 'react';

function TransactionSimulator() {
  const { shield3Client } = useShield3Context();
  const [result, setResult] = useState(null);

  const simulateTransaction = async (transaction) => {
    const policyResults = await shield3Client.getPolicyResults(transaction, 'your_account_address');
    setResult(policyResults);
  };

  // Your UI logic here

  return (
    <div>
      {/* Your UI components */}
    </div>
  );
}

export default TransactionSimulator;
```

### 3. Simulating Transactions

To simulate a transaction, call `getPolicyResults` with the transaction object and the sender's address. This method returns policy simulation results, which can be used to determine whether a transaction complies with the set policies.

```jsx
const transaction = {
  to: '0x...',
  value: '0x...',
  data: '0x...',
  // Other transaction fields
};

simulateTransaction(transaction);
```

### 4. Handling Policy Results

The policy results returned by `getPolicyResults` include the following fields:
- decision (string): The decision of the policy engine (e.g., 'Allow', 'Block').
- transaction (object): The transaction object that was simulated with granular policy decision results.

## Support

For issues, questions, or contributions, please refer to the GitHub repository or contact support through the Shield3 support channels.

---

This README provides a basic overview of integrating the Shield3 React SDK into your applications. For more detailed documentation, including API references and advanced configurations, please refer to the official documentation.