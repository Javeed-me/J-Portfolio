import { motion, useInView } from "framer-motion";
import { FadeUp } from "@/components/layout/PageTransition";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

const levelMap = {
  Beginner: 20,
  Intermediate: 40,
  Advanced: 60,
  Expert: 80,
  Master: 100,
};

type SkillLevel = keyof typeof levelMap;

const skills = [
  {name: "Python", level: "Master" as SkillLevel, color: "80 93% 80%" },
  { name: "React", level: "Expert" as SkillLevel, color: "61 93% 50%" },
  { name: "TypeScript", level: "Expert" as SkillLevel, color: "210 100% 50%" },
  { name: "Node.js", level: "Advanced" as SkillLevel, color: "120 50% 45%" },
  { name: "SQLite / MongoDB", level: "Expert" as SkillLevel, color: "24 95% 60%" },
];

const toolsAndTech = [
  { name: "Git", icon: "🔧" },
  { name: "Cursor", icon: "💻" },
  { name: "Postman", icon: "📡" },
  { name: "Docker", icon: "🐳" },
  { name: "Linux", icon: "🐧" },
  { name: "Cloud Tech", icon: "☁️" },
];

const AnimatedSkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const levelValue = levelMap[skill.level];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="font-medium group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-primary font-display font-bold text-base ml-4">
          {skill.level}
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
        <motion.div
          className="h-full rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${levelValue}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1.2, ease: "easeOut" }}
          style={{
            background: `linear-gradient(90deg, hsl(${skill.color}), hsl(${skill.color} / 0.7))`,
            boxShadow: `0 0 12px hsl(${skill.color} / 0.5)`,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-shimmer"
            animate={{ x: ["-200%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const RotatingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <Sphere args={[2, 64, 64]}>
          <MeshDistortMaterial
            color="#f97316"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </mesh>
    </Float>
  );
};

const SkillSphere = () => {
  return (
    <div className="h-80 w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f97316" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <Suspense fallback={null}>
          <RotatingSphere />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Skills = () => {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start relative">
          {/* Skills bars - Left side */}
          <div className="space-y-8">
            {skills.map((skill, i) => (
              <AnimatedSkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          {/* Divider line - Optional subtle separator */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

          {/* Tools grid - Right side */}
          <div className="lg:pl-8">
            <FadeUp delay={0.3}>
              <h2 className="font-display text-3xl font-bold mb-8">
                Tools & Technologies
              </h2>
            </FadeUp>

            <div className="grid grid-cols-3 gap-4">
              {toolsAndTech.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="group"
                >
                  <div className="relative glass rounded-2xl p-6 text-center cursor-pointer overflow-hidden h-full flex flex-col items-center justify-center min-h-[140px]">
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        className="text-5xl mb-3 inline-block"
                        whileHover={{ scale: 1.3, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {tool.icon}
                      </motion.div>
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                        {tool.name}
                      </h3>
                    </div>
                    
                    {/* Border animation on hover */}
                    <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/60 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
