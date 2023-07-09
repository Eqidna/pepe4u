import { Box, Card, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { Web3Button } from "@thirdweb-dev/react";

export default function Mint() {
  return (

    <Card p={5} mt={5} bg="#D0FFC7">
    <Heading textAlign="center" bg="blue.500"
        bgGradient="linear(to-r, blue.500, green.500)"
        borderRadius="md"
        p={1} fontSize="xl"
        style={{ color: 'white' }}>Mint PEPE4U</Heading>
    <SimpleGrid columns={1} width="275px" mx="auto">
      <Card p={2} m={2} bg="blue.500"
        bgGradient="linear(to-r, blue.500, green.500)"
        borderRadius="md"
        >
        <Box textAlign="center" mb={1}>
          {/* Render any additional content here */}
        </Box>
        <SimpleGrid columns={1} spacing={5}>
          <Stack spacing={5}>

         

    <Web3Button
      contractAddress="0xD4B35b6Cc6aa684Cb2BB4113cDFc19d5ffFF7c41"
      action={(contract) => {
        contract.call("mint", [])
      }}
    >
      Mint $PEPE4U
    </Web3Button>

 </Stack>
          </SimpleGrid>
        </Card>
      </SimpleGrid>
    </Card>

  )
}