import { motion } from "framer-motion";
import { ReactNode } from "react";

export const FadeUp = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    }}
    className={className}
  >
    {children}
  </motion.div>
);
