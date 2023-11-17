import { VStack } from "@chakra-ui/react";

export function ParallaxColumn({ children }: { children: React.ReactNode }) {
  return (
    <VStack w="25%" h="100%" spacing="2vw">
      {children}
    </VStack>
  );
}
