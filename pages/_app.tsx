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
  useContract,
} from "@thirdweb-dev/react";
import {
  Polygon,
  Ethereum,
  Binance,
  Optimism,
  EthereumClassic,
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
        background: "linear-gradient(to right, #005E02, #00D305, #007F03 )",
      }}
    >
      <ThirdwebProvider
        activeChain={activeChain}
        supportedChains={[
          Polygon,
          Ethereum,
          Binance,
          Optimism,
          EthereumClassic,
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
    )
  }
  
  function Component() {
    const { contract, isLoading } = useContract("0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41");
  
  
}

export default MyApp;
