import { Flex } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

interface AnimationContainerProps {
  offscreenY?: number;
  offscreenX?: number;
  onscreenY?: number;
  onscreenX?: number;
  rotation?: number;
  transitionType?: string;
  transitionBounce?: number;
  transitionDuration?: number;
  imageWidth?: string;
  imageHeight?: string;
  children?: React.ReactNode;
  delay?: number;
  damping?: number; // affects how many times element bounces / oscillates
  stiffness?: number; // affects how immediately it snaps to the end position
  mass?: number; // affects how much the element overshoots the end position
}

export default function AnimationContainer({
  offscreenY = 500,
  offscreenX = 0,
  onscreenY = 50,
  onscreenX = 0,
  rotation = 0,
  transitionType = "spring",
  transitionBounce = 0.5,
  transitionDuration = 1,
  delay = 0.05,
  damping = 20,
  stiffness = 123,
  mass = 2.5,
  children,
}: AnimationContainerProps) {
  const itemVariants: Variants = {
    initial: {
      y: offscreenY,
      x: offscreenX,
      opacity: 0,
      scale: 0.8, // Added for illustrative purposes, adjust as needed.
    },
    animate: {
      y: onscreenY,
      x: onscreenX,
      rotate: rotation,
      opacity: 1,
      scale: 1, // Added for illustrative purposes, adjust as needed.
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
      alignItems="center"
      justifyContent="center"
      position="relative"
      initial="initial"
      animate="animate"
      // The below properties may not be required as they seem to be specific to some custom
      // logic you might have had. Adjust as needed:
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <Flex as={motion.div} variants={itemVariants}>
        {children}
      </Flex>
    </Flex>
  );
}
