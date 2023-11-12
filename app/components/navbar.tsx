import { Flex, HStack } from "@chakra-ui/react";
import { NavLink } from "@remix-run/react";
import React from "react";
import { colors, largeTextShadow, mainShadow } from "~/style/customTheme";

interface NavButtonProps {
  label: string;
  link: string;
}
export function NavButton({ label, link }: NavButtonProps) {
  return (
    <Flex color={colors.lightBlue} textShadow={largeTextShadow}>
      <NavLink to={link}>{label}</NavLink>
    </Flex>
  );
}

export default function NavBar() {
  return (
    <HStack
      h="5vh"
      w="100vw"
      bg={colors.deepRed}
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
      justify="center"
      shadow={mainShadow}
      spacing={8}
    >
      <NavButton label="Home" link="/" />
      <NavButton label="Scroll" link="/scrolly" />
      <NavButton label="Cards" link="/animated-cards" />
      <NavButton label="More" link="/more" />
      <NavButton label="Play" link="/experiment" />
      <NavButton label="Theme" link="/theme-examples" />
    </HStack>
  );
}
