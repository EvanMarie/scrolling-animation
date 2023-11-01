import { Box, HStack, VStack } from "@chakra-ui/react";
import FlyInCard from "~/components/FlyCard";
import { scrollBarStyles } from "~/style/customTheme";

export default function AnimatedCards() {
  const images = [
    "/images/fall1.png",
    "/images/fall2.png",
    "/images/fall3.png",
    "/images/fall4.png",
    "/images/fall5.png",
    "/images/fall6.png",
    "/images/fall7.png",
    "/images/fall8.png",
    "/images/fall9.png",
    "/images/fall10.png",
    "/images/fall11.png",
    "/images/fall12.png",
    "/images/fall13.png",
    "/images/fall14.png",
    "/images/fall3.png",
    "/images/fall4.png",
    "/images/fall5.png",
    "/images/fall6.png",
  ];

  return (
    <>
      <VStack w="100%" spacing="100px" py="10px">
        <VStack spacing="100px">
          <FlyInCard
            image="/images/fall1.png"
            delay={1}
            offscreenY={1000}
            transitionDuration={2}
          />
          <FlyInCard
            image="/images/fall2.png"
            offscreenX={0}
            onscreenX={0}
            offscreenY={-1000}
            onscreenY={20}
            rotation={10}
            transitionDuration={2}
          />
          <FlyInCard
            image="/images/fall3.png"
            offscreenX={-1100}
            onscreenX={0}
            offscreenY={0}
            onscreenY={0}
            rotation={-4}
            transitionDuration={2}
          />
        </VStack>
        <Box
          position="relative"
          w="98vw"
          overflowX="auto"
          h={{ base: "60vh", sm: "50vh", md: "60vh" }}
          px={{ base: "5vw" }}
          overflowY="hidden"
          sx={scrollBarStyles}
          zIndex={1}
        >
          <HStack
            w="max-content"
            h="100%"
            spacing={5}
            zIndex={1}
            align="center"
          >
            {images.map((image, index) => (
              <FlyInCard key={index} image={image} offscreenY={1000} />
            ))}
          </HStack>
        </Box>
      </VStack>
    </>
  );
}
