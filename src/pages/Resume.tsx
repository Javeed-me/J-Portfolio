import { motion } from "framer-motion";
import { TiltCard } from "@/components/3d/TiltCard";
import { FadeUp } from "@/components/layout/PageTransition";
import { GlowButton } from "@/components/ui/GlowButton";
import { Download, Eye, FileText, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download animation
    setTimeout(() => {
      setIsDownloading(false);
      // In a real app, trigger actual PDF download here
      alert("Resume download would start here. Add your PDF to public folder.");
    }, 1500);
  };

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React and Node.js.",
    },
    {
      title: "Full Stack Developer",
      company: "StartUp Inc",
      period: "2020 - 2022",
      description: "Built and deployed multiple client-facing applications and internal tools.",
    },
    {
      title: "Frontend Developer",
      company: "Web Agency",
      period: "2019 - 2020",
      description: "Created responsive and interactive user interfaces for various clients.",
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Tech University",
      period: "2015 - 2019",
      grade: "CGPA: 8.9/10",
    },
    {
      degree: "Higher Secondary Education",
      institution: "City School",
      period: "2013 - 2015",
      grade: "95%",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-primary font-display font-semibold mb-4 block">
              My Resume
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Download My <span className="gradient-text">Resume</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a comprehensive overview of my experience, skills, and achievements
            </p>
          </FadeUp>
        </div>

        {/* Resume Card */}
        <FadeUp delay={0.3}>
          <div className="max-w-lg mx-auto mb-24">
            <TiltCard>
              <motion.div
                className="glass rounded-3xl p-8 relative overflow-hidden group"
                whileHover={{ boxShadow: "0 0 60px hsl(var(--glow-primary) / 0.3)" }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent"
                  animate={{
                    background: [
                      "linear-gradient(135deg, hsl(24 95% 60% / 0.1), hsl(280 70% 50% / 0.05), transparent)",
                      "linear-gradient(135deg, hsl(280 70% 50% / 0.1), hsl(210 100% 60% / 0.05), transparent)",
                      "linear-gradient(135deg, hsl(24 95% 60% / 0.1), hsl(280 70% 50% / 0.05), transparent)",
                    ],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className="p-6 rounded-2xl bg-primary/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <FileText size={48} className="text-primary" />
                    </motion.div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-center mb-2">
                    Resume_2024.pdf
                  </h3>
                  <p className="text-center text-muted-foreground mb-8">
                    Updated January 2024 • 2 Pages
                  </p>

                  <div className="flex gap-4">
                    <GlowButton
                      onClick={handleDownload}
                      className="flex-1"
                      size="lg"
                    >
                      {isDownloading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Download size={20} />
                          Download
                        </>
                      )}
                    </GlowButton>
                    <GlowButton variant="outline" className="flex-1" size="lg">
                      <Eye size={20} />
                      Preview
                    </GlowButton>
                  </div>
                </div>

                {/* Download animation overlay */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isDownloading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={isDownloading ? { y: [0, 20, 0] } : {}}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <Download size={64} className="text-primary" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </TiltCard>
          </div>
        </FadeUp>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-primary" size={28} />
                <h2 className="font-display text-2xl font-bold">Experience</h2>
              </div>
            </FadeUp>

            <div className="space-y-6">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass rounded-xl p-6 relative group hover:border-primary/50 transition-colors"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-xl" />
                  <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary" size={28} />
                <h2 className="font-display text-2xl font-bold">Education</h2>
              </div>
            </FadeUp>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass rounded-xl p-6 relative group hover:border-primary/50 transition-colors"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-glow-blue rounded-l-xl" />
                  <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium">{edu.grade}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
