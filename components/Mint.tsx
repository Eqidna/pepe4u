import { Box, Card, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Web3Button } from "@thirdweb-dev/react";

export default function Mint() {
  return (

    <Card p={5} mt={5}>
    <Heading textAlign="center" style={{ color: 'red' }} fontSize="2xl">Mint New $QDNA Tokens</Heading>
    <SimpleGrid columns={1}>
      <Card p={2} m={2}>
        <Box textAlign="center" mb={5}>
          {/* Render any additional content here */}
        </Box>
        <SimpleGrid columns={1} spacing={5}>
          <Stack spacing={5}>

         

    <Web3Button
      contractAddress="0x80B275ca1434EB942da1cAfC194663aD56f721f8"
      action={(contract) => {
        contract.call("mint", [])
      }}
    >
      Mint $QDNA
    </Web3Button>

 </Stack>
          </SimpleGrid>
        </Card>
      </SimpleGrid>
    </Card>

  )
}