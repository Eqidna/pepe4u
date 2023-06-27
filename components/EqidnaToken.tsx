import React from "react";
import { useBalance, useContract } from "@thirdweb-dev/react";
import { Box, Card, Heading, SimpleGrid, Stack, Text, Image } from "@chakra-ui/react";
import { ethers } from "ethers";
const tokenAddress = "0x80B275ca1434EB942da1cAfC194663aD56f721f8";

function EqidnaTokenBalance() {
  const { data, isLoading, error } = useBalance(tokenAddress);
  const balanceWithDecimal = data ? ethers.utils.formatUnits(data.value.toString(), 18) : null;

  const { contract } = useContract(tokenAddress);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <Card p={2} mt={2}>
      <Heading textAlign="center" style={{ color: 'red' }} fontSize="2xl">EQIDNA TOKEN</Heading>
      <SimpleGrid columns={1}>
        <Box textAlign="center" mb={1}>
        
        </Box>
        <Card p={2} m={2}>
          <Box textAlign="center" mb={5}></Box>
          <SimpleGrid columns={1} spacing={2}>
            <Stack spacing={2}>
              {balanceWithDecimal && (
                <Text textAlign="center" fontSize="xl">
                  Your $QDNA Balance: {balanceWithDecimal}
                </Text>
              )}
              {tokenAddress && (
                <Text textAlign="center" fontSize="l">
                  Contract Address:{" "}
                  <a href={`https://polygonscan.com/address/0x80B275ca1434EB942da1cAfC194663aD56f721f8`}>
                    <Text as="span" fontWeight="bold" color="red">
                      {tokenAddress}
                    </Text>
                  </a>
                </Text>
              )}
            </Stack>
          </SimpleGrid>
        </Card>
      </SimpleGrid>
    </Card>
  );
}

export default EqidnaTokenBalance;
