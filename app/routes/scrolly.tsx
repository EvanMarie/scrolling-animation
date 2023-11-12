import { Flex, Text, VStack } from "@chakra-ui/react";
import EntirePage from "~/components/entirePage";

export default function ScrollY() {
  return (
    <VStack>
      <EntirePage align="center">
        <Flex h="100%" w="100%" justify="center" align="center">
          <Text>PAGE ONE</Text>
        </Flex>
      </EntirePage>

      <EntirePage align="center">
        <Text>PAGE TWO</Text>
      </EntirePage>

      <EntirePage align="center">
        <Text>PAGE THREE</Text>
      </EntirePage>
    </VStack>
  );
}
