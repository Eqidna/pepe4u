import { ConnectWallet, useAddress, ThirdwebProvider, useContract, useMetadata } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Container, Heading, Flex, Box, Center } from "@chakra-ui/react";
import Airdrop from "../components/Airdrop";
import Pepe4uBalance from "../components/pepe4uBalance";
import Mint from "../components/Mint";
import Image from "next/image";
import LeftImage from "../assets/Logopit_1690200637187.png";
import RightImage from "../assets/Logopit_1690200637187.png";
import MemecoinImage from "../assets/Logopit_1690200637187.png";
import GifImage from "../assets/meta-chart (1).png";
import TokenomicsImage2 from "../assets/TokenomicsG.png";
import LeftImage2 from "../assets/Logopit_1690200637187.png";
import RightImage2 from "../assets/Logopit_1690200637187.png";
import LeftImage3 from "../assets/Logopit_1690200637187.png";
import AirdropEligibilityChecker from "../components/Eligibility";
import LeftImage4 from "../assets/Logopit_1690200637187.png";
import React from 'react';
import DexCheck from "../components/DexChart";

const contractAddress = "0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useMetadata(contract);

  return (
    <>
      {address ? (
        <Container maxW="500px">
        <Flex justifyContent="space-between" alignItems="center" flexDirection="column">
          <Box>
            <Pepe4uBalance />
          </Box>
          <Box>
            <AirdropEligibilityChecker />
          </Box>
          <Box>
            <Airdrop />
          </Box>
          <Box>
            <Mint />
          </Box>
          <Box>
           
          </Box>
          
        </Flex>
      </Container>
      
      
      ) : (
        <Container maxW="1200px" centerContent>
          <Heading color="white" fontSize="50px">
            PEPE 4 YOU!
          </Heading>

          <Flex h="20vh" justifyContent="center" alignItems="center">
            <Heading color="white" fontSize="25px">
              Please connect your wallet to continue!
            </Heading>
          </Flex>
        </Container>
      )}

      <Container maxW="1200px">
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={`${styles.title} ${styles.reduceSpace}`}>
              <b>Pepe4U, because YOU mint its supply!</b>{" "}
              <a
                href="https://polygonscan.com/address/0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41"
                className={styles.link}
                target="_blank"
              >
                <span
                  className={styles.description}
                  style={{
                    color: "WHITE",
                    fontSize: "35px",
                    fontWeight: "bold",
                  }}
                ></span>
              </a>
            </h1>
            <p
              className={`${styles.description} ${styles.reduceSpace}`}
              style={{
                color: "WHITE",
                wordWrap: "break-word",
                fontWeight: "bold",
              }}
            >
              Time for a new kind of memecoin.{" "}
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={TokenomicsImage2}
                alt="Tokenomics Image"
                width={350} // Set the desired width of the image
                height={300} // Set the desired height of the image
              />
            </div>

            <p
              className={`${styles.description} ${styles.reduceSpace}`}
              style={{
                color: "white",
                wordWrap: "break-word",
                fontWeight: "bold",
                flex: "1",
                margin: "0 20px",
              }}
            >
              $Pepe4U, got that real meme energy!
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={MemecoinImage}
                alt="Memecoin Image"
                width={200} // Set the desired width of the image
                height={200} // Set the desired height of the image
              />
            </div>
            <Flex alignItems="center" flexWrap="wrap">
              <div style={{ position: "relative" }}>
                <Image
                  src={LeftImage}
                  alt="Left Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className={styles.image}
                />
              </div>
              <p
                className={`${styles.description} ${styles.reduceSpace}`}
                style={{
                  color: "white",
                  wordWrap: "break-word",
                  fontWeight: "bold",
                  flex: "2",
                  margin: "0 20px",
                }}
              >
                $Pepe4U holds the key to the future, eagerly awaiting your
                arrival. 
              </p>
             
              <div style={{ position: "relative" }}>
                <Image
                  src={RightImage}
                  alt="Right Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className={styles.image}
                />
              </div>
              
            </Flex>
            <Flex alignItems="center" flexWrap="wrap">
              <div style={{ position: "relative" }}>
                <Image
                  src={LeftImage}
                  alt="Left Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className={styles.image}
                />
              </div>
              <p
  className={`${styles.description} ${styles.reduceSpace}`}
  style={{
    color: "white",
    wordWrap: "break-word",
    fontWeight: "bold",
    flex: "1",
    margin: "0 20px",
  }}
>
  Brace yourself to reshape the rules, surpass your limits.
  <br /><br />
  Follow these steps to obtain legendary status!
  <ul>
    <li>Claim your PEPE4U Airdrop.</li>
    <li>HODL your PEPE4U.</li>
    <li>Mint your 2% PEPE4U interest every 30 days.</li>
  </ul>
</p>

              
              
              <div style={{ position: "relative" }}>
                <Image
                  src={RightImage}
                  alt="Right Image"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className={styles.image}
                />
              </div>
              
            </Flex>
            

            
            <div className={styles.connect}></div>
<div className={styles.grid}>
  <a
    href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41&chainId=137"
    className={`${styles.card} ${styles.sameSize}`}
    target="_blank"
  >
    <h2
      className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
      style={{ color: "white", fontSize: "20px" }}
    >
      BUY $PEPE4U
    </h2>
    <p className={styles.paragraph} style={{ color: "white" }}>
      Now Available on Uniswap, Polygon Mainnet
    </p>
  </a>
</div>

<div className={styles.connect}></div>
<div className={styles.grid}>
  <a
    href="https://polygonscan.com/address/0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41"
    className={`${styles.card} ${styles.sameSize}`}
    target="_blank"
  >
    <h2
      className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
      style={{ color: "white", fontSize: "20px" }}
    >
      Polygonscan $PEPE4U
    </h2>
    <p className={styles.paragraph} style={{ color: "white" }}>
      View the Contract Overview, execute functions, view tx and more.
    </p>
  </a>
</div>

<div className={styles.grid}>
  <a
    href="https://www.dextools.io/app/en/polygon/pair-explorer/0x364cec393abbda65f887e497dfbdcc2a5a0fd66f"
    className={`${styles.card} ${styles.sameSize}`}
    target="_blank"
  >
    <h2
      className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
      style={{ color: "white", fontSize: "20px" }}
    >
      DEXTOOLS $PEPE4U
    </h2>
    <p className={styles.paragraph} style={{ color: "white" }}>
      Everything in one place.
    </p>
  </a>
</div>

<div className={styles.connect}></div>
<div className={styles.grid}>
  <a
    href="https://twitter.com/EqidnaTokenQDNA"
    className={`${styles.card} ${styles.sameSize}`}
    target="_blank"
  >
    <h2
      className={`${styles.heading} ${styles.boldText} ${styles.centered}`}
      style={{ color: "white", fontSize: "20px" }}
    >
      Follow Pepe4U on Twitter
    </h2>
    <p className={`${styles.paragraph} ${styles.centered}`} style={{ color: "white" }}>
      Stay up to date on all things #Pepe4u.
    </p>
  </a>
</div>


            <div className={styles.connect}></div>
            <div className={styles.grid}>
              <p
                className={`${styles.description} ${styles.reduceSpace}`}
                style={{ color: "white" }}
              ></p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={GifImage}
                  alt="GIF Image"
                  width={650} // Set the desired width of the image
                  height={300} // Set the desired height of the image
                />
              </div>

              <Flex h="2vh" justifyContent="center" alignItems="center"></Flex>
            </div>
          </main>
        </div>
      </Container>
      <Container maxW="800px" centerContent>
        <Flex h="2vh" justifyContent="center" alignItems="center"></Flex>
        <Heading color="white" fontSize="50px">
          How to buy
        </Heading>

        <div className={styles.grid}>
          <div className={styles.outerContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={LeftImage3}
                alt="Left Image"
                width={140}
                height={140}
              />
            </div>
            <a
              href="https://metamask.io/"
              className={`${styles.card} ${styles.widerContainer}`}
              target="_blank"
            >
              <div className={styles.cardContent}>
                <h2
                  className={`${styles.heading} ${styles.centered} ${styles.largeText}`}
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Create a Wallet
                </h2>

                <p className={styles.paragraph} style={{ color: "white" }}>
                  Download MetaMask or your wallet of choice from the app store
                  or Google Play Store for free. Desktop users can download the
                  Google Chrome extension by visiting metamask.io.
                </p>
              </div>
            </a>
           
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.outerContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={RightImage}
                alt="Right Image"
                width={140}
                height={140}
              />
            </div>
            <a
              href="https://portfolio.metamask.io/buy"
              className={`${styles.card} ${styles.widerContainer}`}
              target="_blank"
            >
              <div className={styles.cardContent}>
                <h2
                  className={`${styles.heading} ${styles.centered} ${styles.largeText}`}
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Get Some $MATIC
                </h2>

                <p className={styles.paragraph} style={{ color: "white" }}>
                  Have $MATIC in your wallet to switch to $PEPE4U. If you dont
                  have any Polygon MATIC, you can buy directly on metamask,
                  transfer from another wallet, or buy on another exchange and
                  send it to your wallet.
                </p>
              </div>
            </a>
           
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.outerContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={LeftImage2}
                alt="Left Image"
                width={140}
                height={140}
              />
            </div>
            <a
              href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41&chainId=137"
              className={`${styles.card} ${styles.widerContainer}`}
              target="_blank"
            >
              <div className={styles.cardContent}>
                <h2
                  className={`${styles.heading} ${styles.centered} ${styles.largeText}`}
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Go to Uniswap
                </h2>

                <p className={styles.paragraph} style={{ color: "white" }}>
                  Connect to Uniswap. Go to app.uniswap.org in google chrome or
                  on the browser inside your Metamask app. Connect your wallet.
                  Paste the $PEPE4U token address into Uniswap, select Pepe4U,
                  and confirm. When Metamask prompts you for a wallet signature,
                  sign.
                </p>
              </div>
            </a>
            
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.outerContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={LeftImage4}
                alt="Left Image"
                width={140}
                height={140}
              />
            </div>

            <a
              href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41&chainId=137"
              className={`${styles.card} ${styles.widerContainer}`}
              target="_blank"
            >
              <div className={styles.cardContent}>
                <h2
                  className={`${styles.heading} ${styles.centered} ${styles.largeText}`}
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Switch $MATIC for $PEPE4U
                </h2>
                <p className={styles.paragraph} style={{ color: "white" }}>
                  We have ZERO taxes so you dont need to worry about buying
                  with a specific slippage, although you may need to use
                  slippage during times of market volatility.
                </p>
              </div>
            </a>

            <div className={styles.imageContainer}>
              <Image
                src={RightImage2}
                alt="Right Image"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>

        <div>
          <Flex h="10vh" justifyContent="center" alignItems="center">
            <Heading color="white" fontSize="20px"></Heading>
          </Flex>
        </div>

        <div>
  <Flex h="15vh" justifyContent="center" alignItems="center" mb={4}>
    <p
      style={{
        color: "white",
        fontSize: "22px",
        fontWeight: "bold",
        wordWrap: "break-word",
        maxWidth: "500px",
      }}
    >
      PEPE4U COIN is for the people, by the people!
    </p>
  </Flex>
  <Flex h="15vh" justifyContent="center" alignItems="center" mb={4}>
    <p
      style={{
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        wordWrap: "break-word",
        maxWidth: "500px",
      }}
    >
      You can receive this coin through a completely free airdrop, with the only condition being that you possess Polygon Matic to cover the gas fees.
    </p>
  </Flex>
</div>

<div>
<Flex h="10vh" justifyContent="center" alignItems="center" mb={4}>
  <p
    style={{
      color: "white",
      fontWeight: "bold",
      fontSize: "20px",
      wordWrap: "break-word",
      maxWidth: "500px",
      marginBottom: "20px", // Increase the margin bottom for larger spacing
    }}
  >
    $PEPE4U is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. 
  </p>
  </Flex>
</div>

<div>
  <p
    style={{
      color: "white",
      fontWeight: "bold",
      fontSize: "20px",
      wordWrap: "break-word",
      maxWidth: "500px",
      marginBottom: "20px", // Increase the margin bottom for larger spacing
    }}
  >
    The coin is completely useless and for entertainment purposes only.
  </p>
  
</div>



      </Container>
    </>
  );
};

export default Home;
