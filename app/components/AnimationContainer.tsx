import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { colors, shadow3D, sz } from "~/style/customTheme";

export interface AnimationContainerProps {
  offscreenY?: number;
  offscreenX?: number;
  onscreenY?: number;
  onscreenX?: number;
  rotation?: number;
  initialScale?: number;
  animatedScale?: number;
  initialOpacity?: number;
  animatedOpacity?: number;
  transitionType?: string;
  transitionBounce?: number;
  transitionDuration?: number;
  imageWidth?: string;
  imageHeight?: string;
  children?: React.ReactNode;
  delay?: number;
  damping?: number; // affects how many times the element bounces / oscillates
  stiffness?: number; // affects how immediately it snaps to the end position
  mass?: number; // affects how much the element overshoots the end position
  bg?: string;
  color?: string;
  rounded?: string;
  shadow?: string;
  w?: string;
  h?: string;
  animationKey?: number; // added prop for re-triggering animations
}

export default function AnimationContainer({
  offscreenY = 500,
  offscreenX = 0,
  onscreenY = 50,
  onscreenX = 0,
  rotation = 0,
  initialScale = 0.5,
  animatedScale = 1,
  initialOpacity = 0,
  animatedOpacity = 1,
  transitionType = "spring",
  transitionBounce = 0.5,
  transitionDuration = 1,
  delay = 0.05,
  damping = 20,
  stiffness = 123,
  mass = 2.5,
  bg = colors.lightBlue,
  color = colors.darkBurgundy,
  rounded = sz.xs,
  shadow = shadow3D,
  w = "fit-content",
  h = "fit-content",
  children,
  animationKey = 0, // using the new prop here
}: AnimationContainerProps) {
  const itemVariants: Variants = {
    initial: {
      y: offscreenY,
      x: offscreenX,
      opacity: initialOpacity,
      scale: initialScale,
    },
    animate: {
      y: onscreenY,
      x: onscreenX,
      rotate: rotation,
      opacity: animatedOpacity,
      scale: animatedScale,
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
      key={animationKey} // This key change will force re-animations
      alignItems="center"
      justifyContent="center"
      position="relative"
      initial="initial"
      animate="animate"
      variants={itemVariants}
      bg={bg}
      color={color}
      rounded={rounded}
      shadow={shadow}
      px={4}
      py={2}
      fontWeight={500}
      fontSize="lg"
      w={w}
      h={h}
      justify="center"
    >
      {children}
    </Flex>
  );
}
