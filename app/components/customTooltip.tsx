import React, { useState, useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { colors } from "~/style/customTheme";

interface CustomTooltipProps {
  label?: string;
  bg?: string;
  color?: string;
  w?: string;
  h?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  fontSize?: string;
  children?: React.ReactNode;
  displacementPercentage?: string;
  display?: string;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";
}

export default function CustomTooltip({
  label,
  bg = colors.lightBlue,
  color = colors.creme,
  w = "350px",
  h = "350px",
  fontSize = "1rem",
  children,
  placement = "top",
  display,
  displacementPercentage = "110%",
}: CustomTooltipProps) {
  const [isHovered, setHovered] = useState(false);
  const ref = useRef(null);

  let placementStyles;
  switch (placement) {
    case "top":
      placementStyles = {
        bottom: displacementPercentage,
        left: "50%",
        transform: "translateX(-50%)",
      };
      break;
    case "bottom":
      placementStyles = {
        top: displacementPercentage,
        left: "50%",
        transform: "translateX(-50%)",
      };
      break;
    case "left":
      placementStyles = {
        top: "50%",
        right: displacementPercentage,
        transform: "translateY(-50%)",
      };
      break;
    case "right":
      placementStyles = {
        top: "50%",
        left: displacementPercentage,
        transform: "translateY(-50%)",
      };
      break;
    case "topLeft":
      placementStyles = { bottom: "100%", right: "0%" };
      break;
    case "topRight":
      placementStyles = { bottom: "100%", left: "0%" };
      break;
    case "bottomLeft":
      placementStyles = { top: "110%", right: "0%" };
      break;
    case "bottomRight":
      placementStyles = { top: "100%", left: "0%" };
      break;
    default:
      placementStyles = {};
  }

  return !label ? (
    children
  ) : (
    <Box
      position="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      _hover={{ cursor: "pointer" }}
      ref={ref}
      display={display}
    >
      {children}
      {isHovered && (
        <Flex
          {...placementStyles}
          justify="center"
          px="8px"
          py="4px"
          zIndex="tooltip"
          lineHeight="1rem"
          w={w}
          h={h}
          bg={bg}
          color={color}
          fontSize={fontSize}
          fontWeight="500"
          rounded="md"
          position="absolute"
          shadow="2px 2px 5px rgba(0,0,0,0.5)"
          textShadow="none"
          whiteSpace="nowrap"
        >
          {label}
        </Flex>
      )}
    </Box>
  );
}
