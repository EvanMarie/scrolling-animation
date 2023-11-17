import { type MotionValue, motion } from "framer-motion";

export function ParallaxColumn({
  children,
  y,
}: {
  children: React.ReactNode;
  y: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{
        y,
        display: "flex",
        flexDirection: "column",
        width: "25%",
        height: "100%",
        gap: "2vw",
        minWidth: "250px",
      }}
    >
      {children}
    </motion.div>
  );
}
