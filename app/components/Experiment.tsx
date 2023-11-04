import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  VStack,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  Center,
  Wrap,
  WrapItem,
  HStack,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import AnimationContainer from "./AnimationContainer";
import {
  ButtonStyles,
  InputStyles,
  colors,
  largeTextShadow,
  mainShadow,
} from "~/style/customTheme"; // Replace with actual path to your custom button styles
import { AnimatePresence, motion } from "framer-motion";
import CustomTooltip from "./customTooltip";
import { AiOutlineInfoCircle } from "react-icons/ai/index.js";

// Preset values for select options - replace these with your actual options
const transitionTypeOptions = [
  { label: "Tween", value: "tween" },
  { label: "Spring", value: "spring" },
  { label: "Inertia", value: "inertia" },
  { label: "Keyframes", value: "keyframes" },
  { label: "Just", value: "just" }, // Immediate changes without an animation.
];

const easingFunctions = [
  {
    label: "Linear",
    value: "linear",
    description: "Animates with a constant speed from start to end.",
  },
  {
    label: "Ease",
    value: "ease",
    description:
      "Starts slow, accelerates in the middle, and then slows down again before ending.",
  },
  {
    label: "Ease-In",
    value: "easeIn",
    description:
      "Starts slow and accelerates until the end, making the stop feel more abrupt.",
  },
  {
    label: "Ease-Out",
    value: "easeOut",
    description:
      "Starts fast and decelerates towards the end, making the stop feel softer.",
  },
  {
    label: "Ease-In-Out",
    value: "easeInOut",
    description:
      "Starts slow, accelerates in the middle, and then slows down before ending.",
  },
  {
    label: "Circ-In",
    value: "circIn",
    description:
      "Starts slow and increases in velocity following a circular curve.",
  },
  {
    label: "Circ-Out",
    value: "circOut",
    description:
      "Begins fast and decreases in velocity following a circular curve.",
  },
  {
    label: "Circ-In-Out",
    value: "circInOut",
    description:
      "Starts and ends slow, with a circular motion acceleration in the middle.",
  },
  {
    label: "Back-In",
    value: "backIn",
    description:
      "Starts by moving backwards, then inverts and accelerates forward.",
  },
  {
    label: "Back-Out",
    value: "backOut",
    description:
      "Starts moving forward, then overshoots the end before settling.",
  },
  {
    label: "Back-In-Out",
    value: "backInOut",
    description:
      "Starts by moving backwards, then accelerates past the end position, and settles back at the end.",
  },
  {
    label: "Anticipate",
    value: "anticipate",
    description:
      "Starts with a small backward movement, then accelerates forward.",
  },
];

// Initialize default values - replace with your actual default values
const defaultAnimationProps = {
  offscreenX: 200,
  offscreenY: -200,
  onscreenX: 0,
  onscreenY: 0,
  rotation: 2,
  initialScale: 0.5,
  animatedScale: 1,
  initialOpacity: 0,
  animatedOpacity: 1,
  transitionBounce: 0.25,
  transitionDuration: 0.5,
  delay: 0,
  damping: 10,
  stiffness: 100,
  mass: 1,
  transitionType: "tween", // This should match one of the values from transitionTypeOptions,
  easing: "linear", // This should match one of the values from easingFunctions
};

const AnimationCustomizer = () => {
  const [animationProps, setAnimationProps] = useState(defaultAnimationProps);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleChange = (
    name: keyof typeof defaultAnimationProps,
    value: string
  ) => {
    const numberValue = parseFloat(value);
    setAnimationProps((prev) => ({
      ...prev,
      [name]: isNaN(numberValue) ? value : numberValue,
    }));
  };

  const handleSelectChange = ({
    name,
    value,
  }: {
    name: keyof typeof defaultAnimationProps;
    value: string | number;
  }) => {
    setAnimationProps((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetAnimation = () => {
    // Toggle the animation state to false to reset
    setIsAnimating(false);
  };

  const triggerAnimation = () => {
    resetAnimation();
    // Immediately trigger a re-render with a new key
    setAnimationKey((prevKey) => prevKey + 1);
    setIsAnimating(true);
  };

  type AnimationPropsKeys = keyof typeof defaultAnimationProps;
  const labels: Record<AnimationPropsKeys, string> = {
    offscreenX:
      "X-axis offscreen starting position. Range: typically -1000 to 1000 pixels.",
    offscreenY:
      "Y-axis offscreen starting position. Range: typically -1000 to 1000 pixels.",
    onscreenX:
      "X-axis onscreen end position. Range: typically -1000 to 1000 pixels.",
    onscreenY:
      "Y-axis onscreen end position. Range: typically -1000 to 1000 pixels.",
    rotation: "Rotation angle at the start. Range: 0 to 360 degrees.",
    initialScale:
      "Scale of the element before animation. Range: 0.0 (invisible) to 1.0 (full size).",
    animatedScale:
      "Scale of the element after animation. Range: 0.0 (invisible) to 1.0 (full size).",
    initialOpacity:
      "Opacity of the element before animation. Range: 0.0 (transparent) to 1.0 (opaque).",
    animatedOpacity:
      "Opacity of the element after animation. Range: 0.0 (transparent) to 1.0 (opaque).",
    transitionBounce:
      "Bounce effect intensity. Range: 0 (no bounce) to 1 (very bouncy).",
    transitionDuration:
      "Duration of the animation in seconds. Range: 0.1 to 10 seconds.",
    delay: "Delay before animation starts in seconds. Range: 0 to 10 seconds.",
    damping:
      "Damping power of the animation. Lower values result in more oscillation.",
    stiffness:
      "Stiffness of the animation. Higher values make the animation snappier.",
    mass: "Mass of the element affects how the animation feels. Higher mass means more inertia.",
    transitionType:
      "Specifies the easing function for the animation, such as linear, ease-in, ease-out, etc., which determines the rate of change of the animation over time.",
    easing:
      "Easing function for the animation, such as 'linear', 'easeIn', 'easeOut', or a cubic bezier array like [0.17, 0.67, 0.83, 0.67].",
  };

  const renderEasingFunctionSelect = () => {
    if (animationProps.transitionType === "tween") {
      return (
        <FormControl w="auto">
          <VStack w="auto" spacing={0}>
            {" "}
            {/* Changed from 50% to auto */}
            <HStack spacing={1}>
              <CustomTooltip label={labels["easing"]} placement="bottomRight">
                <Box mb="2px">
                  <AiOutlineInfoCircle />
                </Box>{" "}
              </CustomTooltip>
              <FormLabel
                fontSize={{ base: "xs", md: "sm" }}
                textShadow={largeTextShadow}
                mb="3px"
                whiteSpace="nowrap"
              >
                Easing Function
              </FormLabel>
            </HStack>
            <Select
              size={{ base: "xs", md: "sm" }}
              value={animationProps.easing || easingFunctions[0].value} // Add easing to your state if not present
              sx={InputStyles}
              onChange={(e) =>
                handleSelectChange({ name: "easing", value: e.target.value })
              }
            >
              {easingFunctions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </VStack>
        </FormControl>
      );
    }
    return null;
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="xl" color={colors.lightBlue} fontWeight="semiBold">
        Animation Customizer
      </Text>
      <Wrap
        justify="space-evenly"
        spacingX={3}
        spacingY={0}
        px={4}
        maxW="1000px"
      >
        {" "}
        {/* Adjust spacing as needed */}
        {Object.entries(defaultAnimationProps).map(([key, value]) => {
          if (typeof value === "number") {
            return (
              <WrapItem key={key} w={{ base: "150px", md: "170px" }}>
                {" "}
                {/* Set a fixed width for WrapItem */}
                <FormControl w="full" minW="120px" p="2">
                  {" "}
                  {/* Use 'full' for width to take up WrapItem space */}
                  <HStack spacing={1}>
                    <CustomTooltip
                      label={labels[key as AnimationPropsKeys]}
                      placement="bottomRight"
                    >
                      <Box mb="2px">
                        <AiOutlineInfoCircle />
                      </Box>
                    </CustomTooltip>
                    <FormLabel
                      fontSize={{ base: "xs", md: "sm" }}
                      textShadow={largeTextShadow}
                      mb="3px"
                    >
                      {key}
                    </FormLabel>
                  </HStack>
                  <NumberInput
                    defaultValue={value}
                    sx={InputStyles}
                    size={{ base: "xs", md: "sm" }}
                    width="100px"
                    value={animationProps[key as keyof typeof animationProps]}
                    onChange={(valueString, valueAsNumber) =>
                      handleChange(
                        key as keyof typeof defaultAnimationProps,
                        valueString // corrected, use either valueString or valueAsNumber
                      )
                    }
                  >
                    <NumberInputField />
                  </NumberInput>
                </FormControl>
              </WrapItem>
            );
          }
          return null;
        })}
        {/* Render SelectInputField for transitionType */}
        <FormControl w="auto" minW="120px" p="2">
          {" "}
          {/* Added minimum width and padding */}
          <HStack w="100%" spacing={6} align="end">
            <VStack w="50%" spacing={0}>
              <HStack spacing={1}>
                <CustomTooltip
                  label={labels["transitionType"] || ""}
                  placement="bottomRight"
                >
                  <Box mb="2px">
                    <AiOutlineInfoCircle />
                  </Box>
                </CustomTooltip>
                <FormLabel
                  fontSize={{ base: "xs", md: "sm" }}
                  textShadow={largeTextShadow}
                  mb="3px"
                >
                  Transition Type
                </FormLabel>
              </HStack>

              <Select
                size={{ base: "xs", md: "sm" }}
                value={animationProps.transitionType}
                sx={InputStyles}
                onChange={(e) =>
                  handleSelectChange({
                    name: "transitionType",
                    value: e.target.value,
                  })
                }
              >
                {transitionTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </VStack>
            {renderEasingFunctionSelect()}

            <Flex w="200px" h="full" justify="end">
              <Button {...ButtonStyles} onClick={triggerAnimation} size="sm">
                Animate
              </Button>
            </Flex>
            <Button {...ButtonStyles} onClick={resetAnimation} size="sm">
              Reset
            </Button>
          </HStack>
        </FormControl>
      </Wrap>

      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key={animationKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Center w="100%" minH="50vh">
              <AnimationContainer
                key={animationKey}
                {...animationProps}
                bg="transparent"
              >
                <Image
                  src="/images/fall1.png"
                  w="250px"
                  h="250px"
                  rounded="md"
                  shadow={mainShadow}
                />
              </AnimationContainer>
            </Center>
          </motion.div>
        )}
      </AnimatePresence>
    </VStack>
  );
};

export default AnimationCustomizer;
