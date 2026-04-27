import { motion } from "framer-motion";
import { TiltCard } from "@/components/3d/TiltCard";
import { FadeUp } from "@/components/layout/PageTransition";
import { GlowButton } from "@/components/ui/GlowButton";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Python Intern",
      company: "Infogro Technologies",
      period: "June 2025 - July 2025",
      description: "Worked as a Python Intern, contributing to backend development and building efficient data-driven applications.",
    },
    {
      title: "Cybersecurity Intern",
      company: "UptoSkills",
      period: "2025",
      description: "Worked as a Cybersecurity Intern, performing vulnerability assessments and enhancing application security.",
    },
  ];

  const education = [
    {
      degree: "MCA",
      institution: "Hindustan College",
      period: "2024 - 2026",
      grade: "CGPA: 8.4/10",
    },
    {
      degree: "BSc. Computer Science",
      institution: "Don Bosco College",
      period: "2021 - 2024",
      grade: "CGPA:7.3/10",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Experience</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get a comprehensive overview of my experience, skills, and achievements.
            </p>
          </FadeUp>
        </div>

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
                    <span>-</span>
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
                    <span>-</span>
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
