import { motion } from "framer-motion";
import { TiltCard } from "@/components/3d/TiltCard";
import { FadeUp } from "@/components/layout/PageTransition";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Simple-Triage-Navigator",
    description: "A Python Healthcare solution with real-time and AI-powered recommendations.",
    image: "/images/simple.png",
    tags: ["Python","React","LLM", "SQLite"],
    color: "24 95% 60%",
    github: "https://github.com/Javeed-me/Simple-Triage-Navigator",
    live: "",  
  },
  {
    id: 2,
    title: "Niralverse",
    description: "Niralverse is a lightweight web-based platform designed to conduct live debugging competitions in coding events and hackathons.",
    image: "/images/niral.avif",
    tags: ["HTML", "CSS3", "JavaScript", "Vercel", "API"],
    color: "210 100% 60%",
    github: "https://github.com/Javeed-me/Niralverse",
    live: "https://niralverse.vercel.app/",
  },
  {
    id: 3,
    title: "Antivirus-Webtool-Prototype",
    description: "The Antivirus Webtool Prototype is an application designed to simulate how antivirus solutions can be integrated into a web-based environment. It provides users with an interactive interface to test, analyze, and visualize security checks in real time.",
    image: "/images/anti.jpg",
    tags: ["HTML5", "CSS3", "Python", "Firebase"],
    color: "280 70% 50%",
    github: "https://github.com/Javeed-me/Antivirus-Webtool-Prototype-frontend",
    live: "",
  },
  {
    id: 4,
    title: "To-Do-task",
    description: "A simple and efficient task management application built with React Native and Firebase.",
    image: "/images/tasktodo.avif",
    tags: ["React Native", "Node.js", "JavaScript"],
    color: "210 100% 60%",
    github: "https://github.com/Javeed-me/To-Do-task",
    live: "https://to-do-task-peach.vercel.app/",
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
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projects showcasing my skills in python Full-Stack, AI, LLM, UI/UX, and creative problem-solving with end to end.
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
