import { Box, Image, Text, VStack, Wrap } from "@chakra-ui/react";
import { colors, radius, sz } from "./customTheme";

const exampleBoxMedium = {
  w: "10vw",
  h: "10vw",
  rounded: radius,
};

const exampleBoxLarge = {
  w: "20vw",
  h: "20vw",
  rounded: radius,
};

const wrapStyles = {
  w: "100%",
  justify: "center",
  p: sz.lg,
  spacingX: sz["2xl"],
  spacingY: sz.xl,
  fontSize: "sm",
};

export function ColorExamples() {
  return (
    <Wrap {...wrapStyles}>
      <VStack>
        <Box {...exampleBoxMedium} bg={colors.creme} />
        <Text>creme</Text>
      </VStack>
      <VStack>
        <Box {...exampleBoxMedium} bg={colors.lightOrange} />
        <Text>lightOrange</Text>
      </VStack>
      <VStack>
        <Box {...exampleBoxMedium} bg={colors.mediumOrange} />
        <Text>mediumOrange</Text>
      </VStack>
      <VStack>
        <Box {...exampleBoxMedium} bg={colors.brightOrange} />
        <Text>brightOrange</Text>
      </VStack>
      <VStack>
        <Box {...exampleBoxMedium} bg={colors.deepRed} />
        <Text>deepRed</Text>
      </VStack>
      <VStack>
        <Box {...exampleBoxMedium} bg={colors.blue} />
        <Text>blue</Text>
      </VStack>
      <VStack>
        <Box {...exampleBoxMedium} bg={colors.lightBlue} />
        <Text>lightBlue</Text>
      </VStack>
    </Wrap>
  );
}

export function ThemeImages() {
  return (
    <Wrap {...wrapStyles}>
      <Image {...exampleBoxLarge} src="/images/fall1.png" />
      <Image {...exampleBoxLarge} src="/images/fall2.png" />
      <Image {...exampleBoxLarge} src="/images/fall3.png" />
      <Image {...exampleBoxLarge} src="/images/fall4.png" />
      <Image {...exampleBoxLarge} src="/images/fall5.png" />
      <Image {...exampleBoxLarge} src="/images/fall6.png" />
    </Wrap>
  );
}
