import { Flex, Image } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { mainShadow, sz } from "~/style/customTheme";

interface FlyCardProps {
  offscreenY?: number;
  offscreenX?: number;
  onscreenY?: number;
  onscreenX?: number;
  rotation?: number;
  transitionType?: string;
  transitionBounce?: number;
  transitionDuration?: number;
  image: string;
  imageWidth?: string;
  imageHeight?: string | object;
  delay?: number;
  damping?: number; // affects how many times element bounces / oscillates
  stiffness?: number; // affects how immediately it snaps to the end position
  mass?: number; // affects how much the element overshoots the end position
}

export default function FlyInCard({
  offscreenY = 500,
  offscreenX = 0,
  onscreenY = 50,
  onscreenX = 0,
  rotation = -3,
  transitionType = "spring",
  transitionBounce = 0.5,
  transitionDuration = 1,
  image,
  imageWidth = "auto",
  imageHeight = { base: "40vh", sm: "30vh", md: "40vh" },
  delay = 0.05,
  damping = 20,
  stiffness = 123,
  mass = 2.5,
}: FlyCardProps) {
  const imageVariants: Variants = {
    offscreen: {
      y: offscreenY,
      x: offscreenX,
    },
    onscreen: {
      y: onscreenY,
      x: onscreenX,
      rotate: rotation,
      transition: {
        damping: damping,
        stiffness: stiffness,
        mass: mass,
        type: transitionType,
        bounce: transitionBounce,
        duration: transitionDuration,
        delay: delay,
      },
    },
  };

  return (
    <Flex
      as={motion.div}
      align-items="center"
      justify-content="center"
      position="relative"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <Flex as={motion.div} variants={imageVariants} fontSize="10vh">
        <Image
          w={imageWidth}
          h={imageHeight}
          src={image}
          rounded={sz.sm}
          shadow={mainShadow}
          zIndex={100}
        />
      </Flex>
    </Flex>
  );
}
