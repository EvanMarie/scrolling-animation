import { keyframes } from "@emotion/react";
import type { SystemStyleObject } from "@chakra-ui/react";

type AnimationStyles = {
  bounceInLeft: SystemStyleObject;
  bounceInRight: SystemStyleObject;
};

export const bounceInLeftKeyframes = keyframes`
  0% { transform: translateX(-2000px); animation-timing-function: ease-in; opacity: 0; }
  60% { transform: translateX(30px); animation-timing-function: ease-out; }
  80% { transform: translateX(-10px); }
  100% { transform: translateX(0); opacity: 1; }
`;

export const bounceInRightKeyframes = keyframes`
  0% { transform: translateX(2000px); animation-timing-function: ease-in; opacity: 0; }
  60% { transform: translateX(-30px); animation-timing-function: ease-out; }
  80% { transform: translateX(10px); }
  100% { transform: translateX(0); opacity: 1; }
`;

export const styles: AnimationStyles = {
  bounceInLeft: {
    animation: `${bounceInLeftKeyframes} 2s ease-in-out forwards`,
  },
  bounceInRight: {
    animation: `${bounceInRightKeyframes} 2s ease-in-out forwards`,
  },
};
