import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  walletConnect,
  ConnectWallet,
  coinbaseWallet,
  localWallet,
  magicLink,
  metamaskWallet,
  paperWallet,
  safeWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import {
  EthereumClassic,
  Ethereum,
  Binance,
  Polygon,
  Optimism,
  Dogechain,
  Arbitrum,
} from "@thirdweb-dev/chains";
import { Web3Button } from "@thirdweb-dev/react";
import "../styles/globals.css";
import React from "react";
import { Container, Flex, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        background: "linear-gradient(to left, #FF3E00, #FF0000, #AA1111, #000000, #000000, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #FFFFFF, #000000, #000000, #AA1111, #FF0000, #FF3E00 )",
      }}
    >
      <ThirdwebProvider
        activeChain={activeChain}
        supportedChains={[
          EthereumClassic,
          Ethereum,
          Binance,
          Optimism,
          Polygon,
          Arbitrum,
          Dogechain,
        ]}
        supportedWallets={[
          metamaskWallet(),
          walletConnect(),
          coinbaseWallet(),
          safeWallet(),
        ]}
      >
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThirdwebProvider>
    </div>
  );
}

export default MyApp;
