import { HStack, Image } from "@chakra-ui/react";
import { ParallaxColumn } from "~/components/Parallax";

const imageStyles = {
  w: "100%",
  h: "auto",
  objectFit: "cover",
  objectPosition: "center",
  rounded: "md",
  shadow: "15px 5px 20px rgba(0,0,0,0.7)",
};
export default function Parallax() {
  return (
    <HStack w="100vw" h="200vh" spacing="2vw" padding="2vw">
      <ParallaxColumn>
        <Image src="images/parallaxImage1.png" sx={imageStyles} />
        <Image src="images/parallaxImage2.png" sx={imageStyles} />
        <Image src="images/parallaxImage3.png" sx={imageStyles} />
        <Image src="images/parallaxImage4.png" sx={imageStyles} />
        <Image src="images/parallaxImage5.png" sx={imageStyles} />
      </ParallaxColumn>
      <ParallaxColumn>
        <Image src="images/parallaxImage10.png" sx={imageStyles} />
        <Image src="images/parallaxImage7.png" sx={imageStyles} />
        <Image src="images/parallaxImage8.png" sx={imageStyles} />
        <Image src="images/parallaxImage9.png" sx={imageStyles} />
        <Image src="images/parallaxImage6.png" sx={imageStyles} />
      </ParallaxColumn>
      <ParallaxColumn>
        <Image src="images/parallaxImage11.png" sx={imageStyles} />
        <Image src="images/parallaxImage12.png" sx={imageStyles} />
        <Image src="images/parallaxImage13.png" sx={imageStyles} />
        <Image src="images/parallaxImage14.png" sx={imageStyles} />
        <Image src="images/parallaxImage15.png" sx={imageStyles} />
      </ParallaxColumn>
      <ParallaxColumn>
        <Image src="images/parallaxImage16.png" sx={imageStyles} />
        <Image src="images/parallaxImage17.png" sx={imageStyles} />
        <Image src="images/parallaxImage18.png" sx={imageStyles} />
        <Image src="images/parallaxImage19.png" sx={imageStyles} />
        <Image src="images/parallaxImage20.png" sx={imageStyles} />
      </ParallaxColumn>
    </HStack>
  );
}
