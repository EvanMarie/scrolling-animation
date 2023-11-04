import { StackProps, VStack } from "@chakra-ui/react";
import { useLocation } from "@remix-run/react";
import { scrollBarStyles } from "~/style/customTheme";

interface EntirePageProps extends StackProps {
  children: React.ReactNode;
}

export default function EntirePage({ children }: EntirePageProps) {
  const pathname = useLocation().pathname;
  const isExperiment = pathname === "/experiment";
  return (
    <VStack
      w="100vw"
      h="100vh"
      overflowX="hidden"
      // overflowY={isExperiment ? "hidden" : "auto"}
      overflowY="auto"
      direction="column"
      align="center"
      position="relative"
      spacing={0}
      pt="5vh"
      pb={isExperiment ? "1vh" : "25vh"}
      sx={isExperiment ? {} : scrollBarStyles}
    >
      {children}
    </VStack>
  );
}
