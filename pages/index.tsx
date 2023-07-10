import { ConnectWallet, useAddress, ThirdwebProvider, useContract, useMetadata } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Container, Heading, Flex, Box, Center } from "@chakra-ui/react";
import Airdrop from "../components/Airdrop";
import Pepe4uBalance from "../components/pepe4uBalance";
import Mint from "../components/Mint";
import Image from "next/image";
import LeftImage from "../assets/left-image.png";
import RightImage from "../assets/right-image.png";
import MemecoinImage from "../assets/memecoin-image.png";
import GifImage from "../assets/your-gif-image.gif";
import TokenomicsImage2 from "../assets/TokenomicsG.png";
import LeftImage2 from "../assets/pepe-frog.gif";
import RightImage2 from "../assets/pepe-thank-you.gif";
import LeftImage3 from "../assets/pepe-peppo.gif";

const contractAddress = "0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useMetadata(contract);

  return (
    <>
      {address ? (
        <Container maxW="1100px">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Airdrop />
            </Box>
            <Box>
              <Pepe4uBalance />
            </Box>
            <Box>
              <Mint />
            </Box>
          </Flex>
        </Container>
      ) : (
        <Container maxW="1000px" centerContent>
          <Flex h="2vh" justifyContent="center" alignItems="center"></Flex>

          <Heading color="white" fontSize="100px">
            PEPE 4 YOU!
          </Heading>

          <Flex h="10vh" justifyContent="center" alignItems="center">
            <Heading color="white" fontSize="25px">
              Please connect your wallet to continue!
            </Heading>
          </Flex>
        </Container>
      )}

      <Container maxW="1500px">
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
                width={300} // Set the desired width of the image
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
                height={150} // Set the desired height of the image
              />
            </div>
            <Flex alignItems="center" flexWrap="wrap">
              <div style={{ position: "relative", width: "300px", height: "300px" }}>
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
                $Pepe4U holds the key to the future, eagerly awaiting your
                arrival. Brace yourself to reshape the rules, surpass your
                limits, and ascend to legendary status!
              </p>
              <div style={{ position: "relative", width: "300px", height: "300px" }}>
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
        
      
        <a href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41&chainId=137" className={`${styles.card} ${styles.sameSize}`} target="_blank">
          <h2 className={styles.heading} style={{ color: "white" }}>
            BUY $PEPE4U
          </h2>
          <p className={styles.paragraph} style={{ color: "white" }}>
            Now Available on Uniswap, Polygon Mainnet
          </p>
        </a>

        <a href="https://polygonscan.com/address/0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41" className={`${styles.card} ${styles.sameSize}`} target="_blank">
          <h2 className={styles.heading} style={{ color: "white" }}>
            Polygonscan $PEPE4U
            </h2>
          <p className={styles.paragraph} style={{ color: "white" }}>
            View the Contract Overview, execute functions, view tx and more.
          </p>
        </a>

  <a
    href="https://twitter.com/EqidnaTokenQDNA"
    className={`${styles.card} ${styles.sameSize}`}
    target="_blank"
  >
    <h2 className={`${styles.heading} ${styles.boldText} ${styles.centered}`} style={{ color: "white" }}>
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
            width={300} // Set the desired width of the image
            height={300} // Set the desired height of the image
            />
              </div>

              <Flex h="2vh" justifyContent="center" alignItems="center"></Flex>


            </div>
          </main>
        </div>
      </Container>
      <Container maxW="1000px" centerContent>
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
        width={100}
        height={100}
      />
    </div>
    <a
      href="https://metamask.io/"
      className={`${styles.card} ${styles.widerContainer}`}
      target="_blank"
    >
      <div className={styles.cardContent}>
      <h2 className={`${styles.heading} ${styles.centered} ${styles.largeText}`} style={{ color: "white" }}>
  Create a Wallet
</h2>

        <p className={styles.paragraph} style={{ color: "white" }}>
          Download MetaMask or your wallet of choice from the app store or Google Play Store for free. Desktop users can download the Google Chrome extension by visiting metamask.io.
        </p>
      </div>
    </a>
    <div className={styles.imageContainer}>
      <Image
        src={RightImage}
        alt="Right Image"
        width={100}
        height={100}
      />

      
    </div>
  </div>
</div>

<div className={styles.grid}>
  <div className={styles.outerContainer}>
    <div className={styles.imageContainer}>
      <Image
        src={LeftImage}
        alt="Left Image"
        width={100}
        height={100}
      />
    </div>
    <a
      href="https://portfolio.metamask.io/buy"
      className={`${styles.card} ${styles.widerContainer}`}
      target="_blank"
    >
      <div className={styles.cardContent}>
      <h2 className={`${styles.heading} ${styles.centered} ${styles.largeText}`} style={{ color: "white" }}>
      Get Some $MATIC
</h2>

        <p className={styles.paragraph} style={{ color: "white" }}>
        Have $MATIC in your wallet to switch to $PEPE4U. If you dont have any Polygon MATIC, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
        </p>
      </div>
    </a>
    <div className={styles.imageContainer}>
    <Image
            src={GifImage}
            alt="GIF Image"
            width={100} // Set the desired width of the image
            height={100} // Set the desired height of the image
            />

      
    </div>
  </div>
</div>

<div className={styles.grid}>
  <div className={styles.outerContainer}>
    <div className={styles.imageContainer}>
      <Image
        src={LeftImage2}
        alt="Left Image"
        width={100}
        height={100}
      />
    </div>
    <a
      href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41&chainId=137"
      className={`${styles.card} ${styles.widerContainer}`}
      target="_blank"
    >
      <div className={styles.cardContent}>
      <h2 className={`${styles.heading} ${styles.centered} ${styles.largeText}`} style={{ color: "white" }}>
      Go to Uniswap
</h2>

        <p className={styles.paragraph} style={{ color: "white" }}>
        Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE4U token address into Uniswap, select Pepe4U, and confirm. When Metamask prompts you for a wallet signature, sign.
        </p>
      </div>
    </a>
    <div className={styles.imageContainer}>
      <Image
        src={RightImage}
        alt="Right Image"
        width={100}
        height={100}
      />

      
    </div>
  </div>
</div>

<div className={styles.grid}>
  <div className={styles.outerContainer}>
    <div className={styles.imageContainer}>
      <Image
        src={LeftImage}
        alt="Left Image"
        width={100}
        height={100}
      />
    </div>
    
    <a href="https://app.uniswap.org/#/swap?inputCurrency=MATIC&outputCurrency=0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41&chainId=137"
      className={`${styles.card} ${styles.widerContainer}`}
      target="_blank"
    >
      <div className={styles.cardContent}>
        <h2 className={`${styles.heading} ${styles.centered} ${styles.largeText}`} style={{ color: "white" }}>
          Switch $MATIC for $PEPE4U
        </h2>
        <p className={styles.paragraph} style={{ color: "white" }}>
          We have ZERO taxes so you dont need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.
        </p>
      </div>
    </a>
    
    <div className={styles.imageContainer}>
      <Image
        src={RightImage2}
        alt="Right Image"
        width={100}
        height={100}
      />
    </div>
  </div>
</div>

<div>

  <Flex h="10vh" justifyContent="center" alignItems="center">
  <Heading color="white" fontSize="20px">
  
  

  </Heading>
</Flex>

  </div>

<div>
  <Flex h="10vh" justifyContent="center" alignItems="center">
    <p style={{ color: "white", fontSize: "20px", fontWeight: "bold", wordWrap: "break-word", maxWidth: "500px" }}>
      Pepe4U coin has no association with Matt Furie or his creation Pepe the Frog.
      </p>
      
       
      
    
  </Flex>
  <Flex h="10vh" justifyContent="center" alignItems="center">
    <p style={{ color: "white", fontSize: "20px", fontWeight: "bold", wordWrap: "break-word", maxWidth: "500px" }}>
    This token is simply paying homage to a meme we all love and recognize.
      </p>
      
       
      
    
  </Flex>
</div>



<div>
  <p style={{ color: "white", fontWeight: "bold", fontSize: "20px", wordWrap: "break-word", maxWidth: "500px" }}>
    $PEPE4U is a meme coin with no intrinsic value or expectation of financial return. 
    There is no formal team or roadmap. 
    The coin is completely useless and for entertainment purposes only.
  </p>
</div>


  


  

  <div>

  <Flex h="10vh" justifyContent="center" alignItems="center">
  <Heading color="white" fontSize="20px">
  
  

  </Heading>
</Flex>

  </div>

      </Container>
    </>
  );
};

export default Home;
