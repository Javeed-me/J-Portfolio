import { motion, useMotionValue, useSpring } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { FadeUp } from "@/components/layout/PageTransition";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      cursorX.set(clientX);
      cursorY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax effect on content */}
      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10 w-full"
        style={{
          x: useSpring(mousePosition.x * 0.01, springConfig),
          y: useSpring(mousePosition.y * 0.01, springConfig),
        }}
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-6 items-center justify-items-center w-full">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeUp delay={0.3}>
              <div>
                <h1 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="gradient-text-warm">Jaaveed</span>
                </h1>
                <h2 className="font-display text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  A Creative Developer
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed">
                I craft immersive digital products through code, design, and creativity.
                Specializing in Software development with a passion for stunning interfaces.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/projects">
                  <GlowButton size="lg">
                    View My Work
                  </GlowButton>
                </Link>
                <Link to="/contact">
                  <GlowButton variant="outline" size="lg">
                    Let's Talk
                  </GlowButton>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Visual Side */}
          <div className="order-1 lg:order-2 relative w-full h-96 flex items-center justify-center">
            {/* Floating Badges - Orbiting
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {["React", "Three.js", "AWS", "UI/UX"].map((skill, i) => {
                const angle = (i / 4) * Math.PI * 2;
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={skill}
                    className="absolute glass px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/50 bg-primary/10 whitespace-nowrap"
                    style={{
                      left: `calc(55% + ${x}px)`,
                      top: `calc(55% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </motion.div> */}

            {/* Profile Image Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative z-10"
            >
              {/* Glow */}
              <div className="absolute -inset-12 glow-primary rounded-3xl blur-3xl opacity-40" />

              {/* Image Container */}
              <motion.div
                className="relative rounded-4xl p-1 w-96 h-96 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-80" />

                {/* Image */}
                <div className="absolute inset-1 rounded-3xl bg-background overflow-hidden">
                  <img
                    src="images/myimage.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-6 relative -mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-center">
          <div className="max-w-4xl w-full px-4 mx-auto">
            <FadeUp>
              <span className="text-primary font-display font-semibold mb-2 block text-lg">
                About Me
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display font-bold mb-4">
                <span className="block text-xl sm:text-3xl ">
                  Passionate About Creating
                </span>
                <span className="block gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Software Products
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-sm sm:text-base md:text-base text-muted-foreground mb-4 leading-relaxed">
                I'm a Software developer building
                web applications that not only work flawlessly but also look stunning.
                My journey started with a curiosity for how things work and evolved
                into a passion for creating impactful digital experiences.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-sm sm:text-base md:text-base text-muted-foreground mb-4 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                pitching new ideas of projects, or studying latest tech.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {["Python", "React", "JavaScript", "Node.js", "Mongodb", "Web-Security", "SQL", "API"].map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="glass px-4 py-2 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <About />
    </main>
  );
};

export default Index;
