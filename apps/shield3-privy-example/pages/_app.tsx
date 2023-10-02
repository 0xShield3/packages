import type { AppProps } from "next/app";
import { PrivyProvider } from "@privy-io/react-auth";
import { useRouter } from "next/router";
import initShield3PrivyConfig from "@shield3/privy";

const privyConfig = initShield3PrivyConfig(
  process.env.NEXT_PUBLIC_SHIELD3_API_KEY || "",
  {
    // Privy provider config
    appearance: {
      accentColor: "#000000",
      showWalletLoginFirst: true,
    },
  },
);
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      config={privyConfig}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  );
}
