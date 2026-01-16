import { motion, useMotionValue, useSpring } from "framer-motion";
import { FloatingIcons } from "@/components/3d/FloatingIcons";
import { GlowButton } from "@/components/ui/GlowButton";
import { FadeUp } from "@/components/layout/PageTransition";
import { ArrowDown, Sparkles } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Floating Icons */}
      <div className="absolute inset-0 opacity-60">
        <FloatingIcons />
      </div>

      {/* Parallax effect on content */}
      <motion.div
        className="container mx-auto px-6 lg:px-12 relative z-10"
        style={{
          x: useSpring(mousePosition.x * 0.02 - 20, springConfig),
          y: useSpring(mousePosition.y * 0.02 - 20, springConfig),
        }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeUp delay={0.2}>
              <motion.div
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Available for work</span>
              </motion.div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                Hi, I'm{" "}
                <span className="gradient-text-warm">Creative</span>
                <br />
                Developer
              </h1>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                I craft immersive digital experiences through code, design, and creativity. 
                Specializing in full-stack development with a passion for stunning interfaces.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="flex flex-wrap gap-4">
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

            {/* Stats */}
            <FadeUp delay={0.6}>
              <div className="flex gap-12 mt-12">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "50+", label: "Projects Done" },
                  { value: "30+", label: "Happy Clients" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <div className="font-display text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Visual Side */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Glow behind image area */}
              <div className="absolute inset-0 glow-primary rounded-3xl blur-3xl opacity-30" />
              
              {/* Placeholder for profile visual */}
              <motion.div
                className="relative glass rounded-3xl p-8 aspect-square max-w-md mx-auto overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mb-6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="text-2xl font-display font-bold">Your Photo</span>
                  <span className="text-muted-foreground">Replace with your image</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About content */}
          <div>
            <FadeUp>
              <span className="text-primary font-display font-semibold mb-4 block">
                About Me
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Passionate About Creating{" "}
                <span className="gradient-text">Digital Excellence</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a full-stack developer with 5+ years of experience building 
                web applications that not only work flawlessly but also look stunning. 
                My journey started with a curiosity for how things work and evolved 
                into a passion for creating impactful digital experiences.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                technical articles and mentoring.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Three.js", "Python", "AWS"].map((skill, i) => (
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

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎓", title: "Computer Science", subtitle: "B.Tech Graduate" },
              { icon: "🏆", title: "Award Winner", subtitle: "Hackathon Champion" },
              { icon: "💼", title: "Industry Expert", subtitle: "5+ Years Experience" },
              { icon: "🌟", title: "Open Source", subtitle: "500+ Contributions" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 text-center group cursor-pointer"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </motion.div>
            ))}
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
