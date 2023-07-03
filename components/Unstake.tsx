import { Box, Card, Heading, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import { Web3Button } from "@thirdweb-dev/react";
import { useState } from 'react';

export default function Unstake() {
  const [amount, setAmount] = useState("");

  return (
    <div>
      <Card p={5} mt={5} bg="#C7DDFF">
        <Heading textAlign="center" style={{ color: '#3A619C' }} fontSize="2xl">
          Unstake Your $QDNA
        </Heading>
        <SimpleGrid columns={1}>
          <Card p={2} m={2} bg="#3A619C">
            <Box textAlign="center" mb={5}>
              {/* Render any additional content here */}
            </Box>
            <SimpleGrid columns={1} spacing={5}>
              <Stack spacing={5}>
              <Input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="amount"
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '4px',
                  border: '1.25px solid #3A619C',
                  boxShadow: 'inset 0 1px 3px rgba(58, 97, 156)',
                  width: '100%',
                  background: 'white',
                  color: 'rgba(0, 0, 0, 0.3)', // Faded color for placeholder
                }}
              />

                <Web3Button
                  contractAddress="0x80B275ca1434EB942da1cAfC194663aD56f721f8"
                  action={(contract) => {
                    contract.call("unstake", [amount]);
                  }}
                >
                  Unstake $QDNA
                </Web3Button>
              </Stack>
            </SimpleGrid>
          </Card>
        </SimpleGrid>
      </Card>
    </div>
  );
}
