import { motion } from "framer-motion";
import { TiltCard } from "@/components/3d/TiltCard";
import { FadeUp } from "@/components/layout/PageTransition";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and AI-powered recommendations.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    color: "24 95% 60%",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Analytics dashboard with machine learning insights and interactive data visualizations.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "Python", "D3.js", "TensorFlow"],
    color: "280 70% 50%",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "Social Network App",
    description: "Real-time social platform with messaging, stories, and advanced privacy controls.",
    image: "/placeholder.svg",
    tags: ["React Native", "Firebase", "GraphQL"],
    color: "210 100% 60%",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "Blockchain DeFi",
    description: "Decentralized finance application for crypto trading and yield farming.",
    image: "/placeholder.svg",
    tags: ["Solidity", "Web3.js", "React", "Ethereum"],
    color: "150 70% 50%",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 5,
    title: "Health & Fitness App",
    description: "Personal health tracker with workout plans, nutrition logging, and progress analytics.",
    image: "/placeholder.svg",
    tags: ["Flutter", "Dart", "Firebase", "HealthKit"],
    color: "340 70% 50%",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 6,
    title: "AR Experience",
    description: "Augmented reality application for interactive product visualization and gaming.",
    image: "/placeholder.svg",
    tags: ["Unity", "ARKit", "C#", "Blender"],
    color: "45 90% 50%",
    github: "https://github.com",
    live: "https://example.com",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TiltCard className="group cursor-pointer">
        <div className="glass rounded-2xl overflow-hidden">
          {/* Image area */}
          <div className="relative aspect-video overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br"
              style={{
                background: `linear-gradient(135deg, hsl(${project.color} / 0.3), hsl(${project.color} / 0.1))`,
              }}
            />
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-background/80 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: `0 0 60px -10px hsl(${project.color} / 0.3)`,
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </TiltCard>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-primary font-display font-semibold mb-4 block">
              My Work
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills in full-stack development, 
              UI/UX design, and creative problem-solving.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
