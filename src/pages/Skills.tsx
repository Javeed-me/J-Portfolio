import { motion, useInView } from "framer-motion";
import { FadeUp } from "@/components/layout/PageTransition";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

const skills = [
  { name: "React / Next.js", level: 95, color: "61 93% 50%" },
  { name: "TypeScript", level: 90, color: "210 100% 50%" },
  { name: "Node.js", level: 88, color: "120 50% 45%" },
  { name: "Python", level: 85, color: "45 90% 50%" },
  { name: "Three.js / WebGL", level: 82, color: "280 70% 50%" },
  { name: "PostgreSQL / MongoDB", level: 85, color: "24 95% 60%" },
  { name: "AWS / Cloud", level: 80, color: "200 90% 50%" },
  { name: "Docker / DevOps", level: 78, color: "190 80% 50%" },
];

const toolsAndTech = [
  { name: "Git", icon: "📦" },
  { name: "Figma", icon: "🎨" },
  { name: "VS Code", icon: "💻" },
  { name: "Postman", icon: "📮" },
  { name: "Jira", icon: "📋" },
  { name: "Notion", icon: "📓" },
  { name: "Slack", icon: "💬" },
  { name: "Linux", icon: "🐧" },
];

const AnimatedSkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = skill.level;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, skill.level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-primary font-display font-bold">{count}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
          style={{
            background: `linear-gradient(90deg, hsl(${skill.color}), hsl(${skill.color} / 0.7))`,
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
          <FadeUp>
            <span className="text-primary font-display font-semibold mb-4 block">
              Expertise
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Skills bars */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <AnimatedSkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          {/* 3D Sphere */}
          <FadeUp delay={0.3}>
            <div className="glass rounded-3xl p-8 overflow-hidden">
              <SkillSphere />
            </div>
          </FadeUp>
        </div>

        {/* Tools grid */}
        <div className="mt-24">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Tools & Technologies
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toolsAndTech.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center group cursor-pointer"
              >
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {tool.icon}
                </motion.div>
                <span className="font-medium group-hover:text-primary transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
