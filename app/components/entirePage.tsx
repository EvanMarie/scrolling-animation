import { StackProps, VStack } from "@chakra-ui/react";
import { scrollBarStyles } from "~/style/customTheme";

interface EntirePageProps extends StackProps {
  children: React.ReactNode;
}

export default function EntirePage({ children }: EntirePageProps) {
  return (
    <VStack
      w="100vw"
      h="100vh"
      overflowX="hidden"
      overflowY="auto"
      direction="column"
      align="center"
      position="relative"
      spacing={0}
      pt="5vh"
      pb="25vh"
      sx={scrollBarStyles}
    >
      {children}
    </VStack>
  );
}
