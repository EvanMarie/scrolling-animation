import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import AnimationContainer from "./AnimationContainer";
import type { AnimationContainerProps } from "./AnimationContainer";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs/index.js";
import { ButtonStyles } from "~/style/customTheme";

interface AnimationExampleProps extends AnimationContainerProps {
  label: string;
  props?: any;
}

export default function AnimationExample({
  label,
  ...props
}: AnimationExampleProps) {
  const [offscreen, setOffscreen] = useState(true);
  return (
    <Stack
      w="100%"
      spacing={1}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-between" }}
    >
      <HStack
        w={{ base: "90%", md: "50%" }}
        h="100px"
        px={2}
        spacing={4}
        justify={{ base: "space-between", md: "start" }}
      >
        <Flex w="80%">
          <Text fontWeight="500">{label}</Text>
        </Flex>
        <Flex w="20%">
          <Button
            onClick={() => setOffscreen(!offscreen)}
            px={1}
            sx={ButtonStyles}
          >
            {offscreen ? <BsEyeFill /> : <BsEyeSlashFill />}
          </Button>
        </Flex>{" "}
      </HStack>
      <Flex w={{ base: "100%", md: "50%" }} justify="center" h="100px">
        {!offscreen ? (
          <AnimationContainer {...props} w="350px">
            {label}
          </AnimationContainer>
        ) : null}{" "}
      </Flex>
    </Stack>
  );
}
