import { motion } from "framer-motion";
import { TiltCard } from "@/components/3d/TiltCard";
import { FadeUp } from "@/components/layout/PageTransition";
import { ExternalLink, Code2, Trophy, Star, GitBranch } from "lucide-react";

const codingProfiles = [
  {
    name: "LeetCode",
    username: "@coder",
    stats: "500+ Problems Solved",
    icon: Code2,
    color: "45 90% 50%",
    url: "https://leetcode.com",
    rank: "Top 5%",
  },
  {
    name: "GitHub",
    username: "@developer",
    stats: "1000+ Contributions",
    icon: GitBranch,
    color: "0 0% 60%",
    url: "https://github.com",
    rank: "Active Contributor",
  },
  {
    name: "HackerRank",
    username: "@coder",
    stats: "Gold Badge × 5",
    icon: Trophy,
    color: "120 60% 45%",
    url: "https://hackerrank.com",
    rank: "5 Star",
  },
  {
    name: "CodeChef",
    username: "@coder",
    stats: "Rating: 1800+",
    icon: Star,
    color: "24 95% 50%",
    url: "https://codechef.com",
    rank: "4 Star",
  },
  {
    name: "Codeforces",
    username: "@coder",
    stats: "Rating: 1500+",
    icon: Code2,
    color: "210 100% 60%",
    url: "https://codeforces.com",
    rank: "Specialist",
  },
  {
    name: "SkillRack",
    username: "@coder",
    stats: "2000+ Points",
    icon: Trophy,
    color: "280 70% 50%",
    url: "https://skillrack.com",
    rank: "Diamond",
  },
];

const ProfileCard = ({ profile, index }: { profile: typeof codingProfiles[0]; index: number }) => {
  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <TiltCard className="group cursor-pointer h-full">
        <div className="glass rounded-2xl p-6 h-full relative overflow-hidden">
          {/* Background glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: `radial-gradient(circle at center, hsl(${profile.color} / 0.2), transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                className="p-3 rounded-xl"
                style={{ background: `hsl(${profile.color} / 0.2)` }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <profile.icon
                  size={28}
                  style={{ color: `hsl(${profile.color})` }}
                />
              </motion.div>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2 }}
              >
                <ExternalLink size={20} className="text-muted-foreground" />
              </motion.div>
            </div>

            {/* Info */}
            <h3 className="font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors">
              {profile.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">{profile.username}</p>

            {/* Stats */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Stats</span>
                <span className="font-medium">{profile.stats}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Rank</span>
                <span
                  className="font-semibold px-2 py-0.5 rounded-full text-xs"
                  style={{
                    background: `hsl(${profile.color} / 0.2)`,
                    color: `hsl(${profile.color})`,
                  }}
                >
                  {profile.rank}
                </span>
              </div>
            </div>
          </div>

          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: `0 0 40px -10px hsl(${profile.color} / 0.4)`,
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </TiltCard>
    </motion.a>
  );
};

const Profiles = () => {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-primary font-display font-semibold mb-4 block">
              Competitive Programming
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Coding <span className="gradient-text">Profiles</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out my competitive programming journey and achievements across various platforms
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfiles.map((profile, i) => (
            <ProfileCard key={profile.name} profile={profile} index={i} />
          ))}
        </div>

        {/* Stats Summary */}
        <FadeUp delay={0.6}>
          <div className="mt-16 glass rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Problems Solved" },
                { value: "1000+", label: "GitHub Commits" },
                { value: "15+", label: "Badges Earned" },
                { value: "Top 5%", label: "Global Ranking" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <div className="font-display text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
};

export default Profiles;
