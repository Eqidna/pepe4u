import { ConnectWallet, useAddress, ThirdwebProvider, useContract, useMetadata } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Container, Heading, Flex, Box } from "@chakra-ui/react";
import EqidnaTokenBalance from "../components/EqidnaToken";
import Airdrop from "../components/Airdrop";
import Mint from "../components/Mint";
import Stake from "../components/Stake";
import ClaimReward from "../components/ClaimReward";
import Unstake from "../components/Unstake";

const contractAddress = "0x80B275ca1434EB942da1cAfC194663aD56f721f8";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useMetadata(contract);

  return (
    <>
      {address ? (
        <Container maxW="600px">
          <EqidnaTokenBalance />
          <Airdrop />
          <Mint />
          <Stake />
          <ClaimReward />
          <Unstake />
        </Container>
      ) : (
        <Container maxW="1000px" centerContent>
          <Flex h="8vh" justifyContent="center" alignItems="center">
  <Heading color="red" fontSize="22px">Welcome to The Eqidna Project.  Please connect your wallet!</Heading>
</Flex>

        </Container>
      )}

      <Container maxW="1225px">
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={`${styles.title} ${styles.reduceSpace}`}>
              EQIDNA TOKEN{" "}
              <a href="https://polygonscan.com/address/0x80B275ca1434EB942da1cAfC194663aD56f721f8" className={styles.link}>
                <span className={styles.description} style={{ color: "red", fontSize: "40px", fontWeight: "bold" }}>
                  $QDNA!
                </span>
              </a>
            </h1>
            <p className={`${styles.description} ${styles.reduceSpace}`} style={{ color: "red", wordWrap: "break-word" , fontWeight: "bold" }}>
  Join the tribe and reap the rewards with #Eqidna.{" "}

  <code className={styles.code}>$QDNA</code>
</p>
<p className={`${styles.description} ${styles.reduceSpace}`} style={{ color: "black", wordWrap: "break-word" }}>
Eqidna allows you to stake and mint rewards directly from your wallet.{" "} </p>


            <div className={styles.connect}></div>
            <div className={styles.grid}>
              <a href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0x80B275ca1434EB942da1cAfC194663aD56f721f8&chainId=137"
                className={`${styles.card} ${styles.sameSize}`}>
                <h2 className={styles.heading} style={{ color: "white" }}>
                  BUY $QDNA
                </h2>
                <p className={styles.paragraph} style={{ color: "red" }}>
                  Now Available on Uniswap, Polygon Mainnet. More exchanges to be added!
                </p>
              </a>

              <a href="https://polygonscan.com/address/0x80B275ca1434EB942da1cAfC194663aD56f721f8"
                className={`${styles.card} ${styles.sameSize}`}>
                <h2 className={styles.heading} style={{ color: "white" }}>
                  Polygonscan $QDNA
                </h2>
                <p className={styles.paragraph} style={{ color: "red" }}>
                  View the Contract Overview, execute functions, view tx and more.
                </p>
              </a>

              <a href="https://twitter.com/EqidnaTokenQDNA" className={`${styles.card} ${styles.sameSize}`}>
                <h2 className={styles.heading} style={{ color: "white" }}>
                  Follow @EqidnaTokenQDNA
                </h2>
                <p className={styles.paragraph} style={{ color: "red" }}>
                  Stay up to date on all things #Eqidna $QDNA.
                </p>
              </a>
            </div>

            <div className={styles.connect}></div>
            <div className={styles.grid}>
              <a href="https://jolly-bird-0117.on.fleek.co" className={`${styles.card} ${styles.sameSize}`}>
                <h2 className={styles.heading} style={{ color: "white" }}>
                  Learn more: $QDNA
                </h2>
                <p className={styles.paragraph} style={{ color: "red" }}>
                  Want to know more about Eqidna? Click here!
                </p>
              </a>

              <a href="https://github.com/Eqidna/QDNA" className={`${styles.card} ${styles.sameSize}`}>
                <h2 className={styles.heading} style={{ color: "white" }}>
                  github @Eqidna
                </h2>
                <p className={styles.paragraph} style={{ color: "red" }}>View our code! #Eqidna $QDNA.
                </p>
              </a>

              <a href="https://www.coingecko.com/" className={`${styles.card} ${styles.sameSize}`}>
                <h2 className={styles.heading} style={{ color: "white" }}>
                  Coingecko $QDNA
                </h2>
                <p className={styles.paragraph} style={{ color: "red" }}>
                  Coming Soon. Stay Tuned!
                </p>
              </a>
              <p className={`${styles.description} ${styles.reduceSpace}`} style={{ color: "red" }}>
                {" "}
                <code className={styles.code}>Welcome to The Eqidna Project.</code>
              </p>
            </div>
          </main>
        </div>
      </Container>
    </>
  );
};

export default Home;
