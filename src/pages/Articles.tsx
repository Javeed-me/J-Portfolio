import { motion } from "framer-motion";
import { TiltCard } from "@/components/3d/TiltCard";
import { FadeUp } from "@/components/layout/PageTransition";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Building Immersive 3D Experiences with Three.js and React",
    excerpt: "Learn how to create stunning 3D web experiences using React Three Fiber and modern web technologies.",
    image: "/placeholder.svg",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "Tutorial",
    color: "24 95% 60%",
  },
  {
    id: 2,
    title: "The Future of Web Development: AI and Machine Learning",
    excerpt: "Exploring how AI is transforming the way we build and interact with web applications.",
    image: "/placeholder.svg",
    date: "Jan 10, 2024",
    readTime: "12 min read",
    category: "Insights",
    color: "280 70% 50%",
  },
  {
    id: 3,
    title: "Mastering CSS Animations for Better User Experience",
    excerpt: "A comprehensive guide to creating smooth, performant animations that delight users.",
    image: "/placeholder.svg",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    category: "Tutorial",
    color: "210 100% 60%",
  },
  {
    id: 4,
    title: "TypeScript Best Practices for Large Scale Applications",
    excerpt: "Essential patterns and practices for building maintainable TypeScript applications.",
    image: "/placeholder.svg",
    date: "Dec 28, 2023",
    readTime: "10 min read",
    category: "Best Practices",
    color: "200 80% 50%",
  },
  {
    id: 5,
    title: "Modern State Management: Beyond Redux",
    excerpt: "Exploring alternatives to Redux and when to use different state management solutions.",
    image: "/placeholder.svg",
    date: "Dec 20, 2023",
    readTime: "9 min read",
    category: "Architecture",
    color: "150 70% 50%",
  },
  {
    id: 6,
    title: "Performance Optimization Techniques for React Apps",
    excerpt: "Practical tips and tricks to make your React applications blazing fast.",
    image: "/placeholder.svg",
    date: "Dec 15, 2023",
    readTime: "11 min read",
    category: "Performance",
    color: "340 70% 50%",
  },
];

const ArticleCard = ({ article, index }: { article: typeof articles[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TiltCard className="group cursor-pointer h-full">
        <article className="glass rounded-2xl overflow-hidden h-full flex flex-col">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden">
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, hsl(${article.color} / 0.3), hsl(${article.color} / 0.1))`,
              }}
            />
            <motion.img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: `hsl(${article.color})`,
                  color: "hsl(220 20% 4%)",
                }}
              >
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-6 line-clamp-2 flex-1">
              {article.excerpt}
            </p>

            <motion.div
              className="flex items-center gap-2 text-primary font-medium"
              animate={{ x: isHovered ? 5 : 0 }}
            >
              Read More
              <ArrowRight size={16} />
            </motion.div>
          </div>

          {/* Glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: `0 0 60px -10px hsl(${article.color} / 0.3)`,
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </article>
      </TiltCard>
    </motion.div>
  );
};

const Articles = () => {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-primary font-display font-semibold mb-4 block">
              Blog
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Articles</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, design, and technology
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {/* Load More */}
        <FadeUp delay={0.6}>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-3 rounded-full font-medium hover:bg-primary/10 transition-colors"
            >
              Load More Articles
            </motion.button>
          </div>
        </FadeUp>
      </div>
    </main>
  );
};

export default Articles;
