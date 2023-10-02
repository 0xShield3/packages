# @shield3/privy

`@shield3/privy` is a configuration package for the Privy `@privy-io/react-auth` library that enables Shield3 RPC integration. It simplifies the setup process for connecting to the Shield3 API by providing a convenient configuration function.

## Installation

To install `@shield3/privy`, use your preferred package manager:

```shell
npm install @shield3/privy
yarn add @shield3/privy
pnpm add @shield3/privy
```

## Usage

To use `@shield3/privy`, you need to import and call the `initShield3PrivyConfig` function with your Shield3 API key and optional Privy configuration.

```tsx
import initShield3PrivyConfig from '@shield3/privy';

const privyProviderConfig = {
    // Your Privy configuration options (optional)
};

const shield3PrivyConfig = initShield3PrivyConfig(<YOUR_SHIELD3_API_KEY>, privyProviderConfig);

return (
    <PrivyProvider config={shield3PrivyConfig}>
        <Component {...pageProps} />
    </PrivyProvider>
    );
```

### Parameters

- `SHIELD3_API_KEY` (string): Your Shield3 API key, which is required for authentication.

- `privyClientConfig` (PrivyClientConfig type): An optional configuration object for Privy. This object allows you to customize the behavior of the Privy client. Refer to the [Privy documentation](https://docs.privy.io/reference/react-auth/modules#privyclientconfig) for available configuration options.

## License

This package is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.
