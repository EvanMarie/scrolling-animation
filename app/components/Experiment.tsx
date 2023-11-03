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
} from "@chakra-ui/react";
import AnimationContainer from "./AnimationContainer";
import {
  ButtonStyles,
  InputStyles,
  colors,
  largeTextShadow,
} from "~/style/customTheme"; // Replace with actual path to your custom button styles
import { AnimatePresence, motion } from "framer-motion";
import CustomTooltip from "./customTooltip";

// Preset values for select options - replace these with your actual options
const transitionTypeOptions = [
  { label: "Spring", value: "spring" },
  { label: "Linear", value: "linear" },
  { label: "Ease", value: "ease" },
  { label: "Ease-In", value: "easeIn" },
  { label: "Ease-Out", value: "easeOut" },
  { label: "Ease-In-Out", value: "easeInOut" },
  { label: "Circ-In", value: "circIn" },
  { label: "Circ-Out", value: "circOut" },
  { label: "Circ-In-Out", value: "circInOut" },
  { label: "Back-In", value: "backIn" },
  { label: "Back-Out", value: "backOut" },
  { label: "Back-In-Out", value: "backInOut" },
  { label: "Anticipate", value: "anticipate" },
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
  transitionType: "spring", // This should match one of the values from transitionTypeOptions
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

  const handleSelectChange = (
    name: keyof typeof defaultAnimationProps,
    value: string
  ) => {
    setAnimationProps((prev) => ({ ...prev, [name]: value }));
  };

  const triggerAnimation = () => {
    setIsAnimating(!isAnimating);
    setAnimationKey((prevKey) => prevKey + 1);
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
  };

  return (
    <VStack spacing={4} pt={6} h="85vh">
      <Text fontSize="xl" color={colors.lightBlue} fontWeight="semiBold">
        Animation Customizer
      </Text>
      <Wrap justify="flex-start" spacingX={3} spacingY={0} px={4}>
        {" "}
        {/* Adjust spacing as needed */}
        {Object.entries(defaultAnimationProps).map(([key, value]) => {
          if (typeof value === "number") {
            return (
              <WrapItem key={key} w="160px">
                {" "}
                {/* Set a fixed width for WrapItem */}
                <FormControl w="full" minW="120px" p="2">
                  {" "}
                  {/* Use 'full' for width to take up WrapItem space */}
                  <CustomTooltip
                    label={labels[key as AnimationPropsKeys]}
                    placement="bottom"
                  >
                    <FormLabel
                      fontSize="sm"
                      textShadow={largeTextShadow}
                      mb="3px"
                    >
                      {key}
                    </FormLabel>
                  </CustomTooltip>
                  <NumberInput
                    defaultValue={value}
                    sx={InputStyles}
                    size="sm"
                    width="100px"
                    value={animationProps[key as keyof typeof animationProps]}
                    onChange={(valueString) =>
                      handleChange(
                        key as keyof typeof defaultAnimationProps,
                        valueString
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
          <FormLabel fontSize="sm" textShadow={largeTextShadow}>
            Transition Type
          </FormLabel>
          <Select
            size="sm"
            value={animationProps.transitionType}
            sx={InputStyles}
            onChange={(e) =>
              handleSelectChange("transitionType", e.target.value)
            }
          >
            {transitionTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
      </Wrap>

      <Button {...ButtonStyles} onClick={triggerAnimation}>
        Trigger Animation
      </Button>

      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key={animationKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Center w="100%" minH="350px">
              <AnimationContainer
                key={animationKey}
                {...animationProps}
                bg={colors.brightOrange}
              >
                ANIMATE ME!
              </AnimationContainer>
            </Center>
          </motion.div>
        )}
      </AnimatePresence>
    </VStack>
  );
};

export default AnimationCustomizer;
