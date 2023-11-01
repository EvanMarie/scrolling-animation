import { Text, VStack } from "@chakra-ui/react";
import AnimationContainer from "~/components/AnimationContainer";

export default function More() {
  return (
    <VStack spacing={10} py={6}>
      {/* <Divider py={5} borderColor={colors.lightBlue} /> */}
      <AnimationContainer
        offscreenX={-1000}
        offscreenY={-1000}
        onscreenX={0}
        onscreenY={0}
        transitionDuration={2}
      >
        <Text fontSize="lg">offscreen (x: -1000, y: -1000) </Text>
        <br />
      </AnimationContainer>
    </VStack>
  );
}
