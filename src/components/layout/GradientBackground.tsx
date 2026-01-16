import { motion } from "framer-motion";

export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden gradient-bg-animated">
      {/* Primary orb */}
      <motion.div
        className="blur-orb blur-orb-primary w-[600px] h-[600px]"
        initial={{ x: "-50%", y: "-50%" }}
        animate={{
          x: ["-50%", "-30%", "-50%"],
          y: ["-50%", "-30%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ left: "20%", top: "30%" }}
      />

      {/* Secondary orb */}
      <motion.div
        className="blur-orb blur-orb-secondary w-[500px] h-[500px]"
        initial={{ x: "50%", y: "50%" }}
        animate={{
          x: ["50%", "30%", "50%"],
          y: ["50%", "70%", "50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ right: "10%", bottom: "20%" }}
      />

      {/* Blue orb */}
      <motion.div
        className="blur-orb blur-orb-blue w-[400px] h-[400px]"
        animate={{
          x: ["0%", "-20%", "0%"],
          y: ["0%", "20%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ left: "60%", top: "60%" }}
      />

      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
