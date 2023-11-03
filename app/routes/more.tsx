import { VStack } from "@chakra-ui/react";
import AnimationExample from "~/components/AnimationExample";

export default function More() {
  return (
    <VStack spacing={10} py={6} w={{ base: "100%", sm: "80%", md: "90%" }}>
      {/* <Divider py={5} borderColor={colors.lightBlue} /> */}
      <AnimationExample
        label="offscreen (x: -500, y: -500)"
        offscreenX={-500}
        offscreenY={-500}
        onscreenX={0}
        onscreenY={0}
        transitionDuration={2}
      />

      <AnimationExample
        label="offscreen (x: 500, y: 500)"
        offscreenX={500}
        offscreenY={500}
        onscreenX={0}
        onscreenY={0}
        transitionDuration={2}
      />
      <AnimationExample
        label="offscreen (x: -100, y: -100)"
        offscreenX={-100}
        offscreenY={-100}
        onscreenX={0}
        onscreenY={0}
        transitionDuration={2}
      />

      <AnimationExample
        label="offscreen (x: 100, y: 100)"
        offscreenX={100}
        offscreenY={100}
        onscreenX={0}
        onscreenY={0}
        transitionDuration={2}
      />
    </VStack>
  );
}
