import { Box, HStack, Image } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParallaxColumn } from "~/components/Parallax";

const imageContainer = {
  w: "100%",
  h: "100%",
  position: "relative",
  display: "flex",
};

const imageStyles = {
  objectFit: "cover",
  w: "100%",
  h: "auto",
  rounded: "md",
  shadow: "15px 5px 20px rgba(0,0,0,0.7)",
};

export default function Parallax() {
  const refContainer = useRef(null);
  //offset = when to start and stop tracking scroll - ["start end", "end start"]
  //start = top of the container end = bottom of the container
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ["start end", "end start"],
  });

  //useTransform = transform the value of the scrollYProgress to a new value
  //useTransform(scrollYProgress, [0, 1], [0, 1000]) = when scrollYProgress is 0, y = 0
  //when scrollYProgress is 1, y = 1000
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  return (
    <>
      <div style={{ paddingTop: "50vh" }}></div>
      <HStack
        w="100vw"
        h="200vh"
        spacing="2vw"
        padding="2vw"
        ref={refContainer}
      >
        <ParallaxColumn y={parallaxY}>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage1.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage2.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage3.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage4.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage5.png" sx={imageStyles} />
          </Box>
        </ParallaxColumn>
        <ParallaxColumn>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage10.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage9.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage8.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage7.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage6.png" sx={imageStyles} />
          </Box>
        </ParallaxColumn>
        <ParallaxColumn>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage11.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage12.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage13.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage14.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage15.png" sx={imageStyles} />
          </Box>
        </ParallaxColumn>
        <ParallaxColumn>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage21.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage19.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage18.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage17.png" sx={imageStyles} />
          </Box>
          <Box sx={imageContainer}>
            <Image src="images/parallaxImage16.png" sx={imageStyles} />
          </Box>
        </ParallaxColumn>
      </HStack>
      <div style={{ paddingTop: "100vh" }}></div>
    </>
  );
}
