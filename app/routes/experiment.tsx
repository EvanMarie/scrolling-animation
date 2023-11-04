import { Flex } from "@chakra-ui/react";
import AnimationCustomizer from "~/components/Experiment";

export default function AnimationExperimentation() {
  return (
    <Flex w="100vw" h="100vh" pt="1vh" justify="center">
      <AnimationCustomizer />
    </Flex>
  );
}
