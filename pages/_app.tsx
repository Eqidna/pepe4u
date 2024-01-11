import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import {
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #23253e, #BED6FE, #23253e )",
      }}
      >
      < ThirdwebProvider
      activeChain="polygon"
      clientId="249b8123e743d58e62b3a721af430a68" // You can get a client id from dashboard settings
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
