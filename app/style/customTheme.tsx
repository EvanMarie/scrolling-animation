import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const radius = "sm";
export const shadow = "0px 0px 10px rgba(0,0,0,0.7)";
export const mainShadow = "2px 2px 8px rgba(0, 0, 0, 0.9)";
export const subtleShadow = "rgba(0, 0, 0, 0.07) 0px 1px 2px";

export const largeShadow = "rgb(38, 57, 77) 0px 20px 30px -10px";
export const subtleTextShadow = "2px 2px 2px rgba(0, 0, 0, 0.9)";
export const largeTextShadow = "2px 3px 5px rgba(0, 0, 0, 0.9)";
export const lightTextShadow = "2px 2px 2px rgba(148, 208, 255, 0.9)";
export const shadow3D =
  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";

const customTransition = {
  enter: {
    duration: 0.5, // time in seconds
    ease: [0.4, 0, 0.2, 1], // custom easing
  },
  exit: {
    duration: 0.5, // time in seconds
    ease: [0.4, 0, 0.2, 1], // custom easing
  },
};

export const colors = {
  darkBurgundy: "#270113",
  deepRed: "#600C1F",
  yellow: "#F1B304",
  lightOrange: "#D57A03",
  mediumOrange: "#b0471a",
  brightOrange: "#FF1D0D",
  creme: "#D7B399",
  blue: "#398CBF",
  lightBlue: "#A3D2E2",
};

export const sz = {
  xxs: "1.2vh",
  xs: "1.4vh",
  sm: "1.6vh",
  md: "2vh",
  lg: "2.3vh",
  xl: "2.6vh",
  "2xl": "3vh",
  "3xl": "3.25vh",
  "4xl": "3.5vh",
  "5xl": "3.75vh",
  "6xl": "4vh",
  "7xl": "5vh",
  "8xl": "6vh",
  "9xl": "7vh",
};

const CustomTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "orange",
  }),
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },

    breakpoints: {
      base: "0em", // 0px
      sm: "37em", // ~600px
      md: "53em", // 848px
      lg: "75em", // 1200px
      xl: "80em", // 1280px);
      xxl: "90em", // 1440px;
    },
    fontSizes: {
      xxs: "1.2vh",
      xs: "1.4vh",
      sm: "1.6vh",
      md: "2vh",
      lg: "2.3vh",
      xl: "2.6vh",
      "2xl": "3vh",
      "3xl": "3.25vh",
      "4xl": "3.5vh",
      "5xl": "3.75vh",
      "6xl": "4vh",
      "7xl": "5vh",
      "8xl": "6vh",
      "9xl": "7vh",
    },
    styles: {
      global: {
        html: {
          scrollBehavior: "smooth",
          overflowX: "hidden",
          scrollbarWidth: "thin",
          overflowY: "hidden",
        },
        body: {
          overflowX: "hidden",
          overflowY: "hidden",
          fontSize: "2vh",
          bg: colors.darkBurgundy,
          color: colors.creme,
        },
        a: {
          color: colors.lightBlue,
          textShadow: largeTextShadow,
          _hover: {
            color: colors.brightOrange,
          },
          fontWeight: "600",
          _active: {
            bg: "purple.200",
          },
        },
      },

      components: {
        Fade: {
          defaultProps: {
            transition: customTransition,
          },
        },
      },
    },
  }
);

export default CustomTheme;

export const scrollBarStyles = {
  // For Chrome, Safari, and newer versions of Edge
  "&::-webkit-scrollbar": {
    width: "7px",
    height: "7px",
    backgroundColor: colors.deepRed,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: colors.lightOrange,
    borderRadius: "7px",
    minHeight: "50px",
    maxHeight: "150px",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: colors.lightOrange,
    transition: "all 0.3s ease-in-out",
  },
};

export const InputStyles = {
  variant: "filled",
  rounded: radius,
  bg: "gray.900",
  w: "100%",
  maxW: "600px",
  color: "gray.50",
  shadow: shadow,
  borderColor: "gray.600",
  focusBorderColor: "teal.300",
  _hover: {
    bg: "gray.800",
    borderColor: "teal.300",
    shadow: largeShadow,
  },
  _focus: {
    bg: "gray.800",
    borderColor: "teal.300",
  },
  transition: "all 0.3s ease-in-out",
};
