import { motion } from "framer-motion";
import { FadeUp } from "@/components/layout/PageTransition";
import { GlowButton } from "@/components/ui/GlowButton";
import { 
  Mail, Phone, MapPin, Send, 
  Github, Linkedin, Instagram, Twitter, 
  Youtube, MessageCircle 
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  { icon: Phone, label: "Phone", value: "+1 234 567 890", href: "tel:+1234567890" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
];

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:hello@example.com", color: "24 95% 60%" },
  { icon: Phone, label: "Phone", href: "tel:+1234567890", color: "120 50% 45%" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/1234567890", color: "142 70% 45%" },
  { icon: MessageCircle, label: "Telegram", href: "https://t.me/username", color: "200 80% 55%" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "210 80% 50%" },
  { icon: Github, label: "GitHub", href: "https://github.com", color: "0 0% 50%" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "340 75% 55%" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "200 90% 55%" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com", color: "0 90% 55%" },
  { icon: Mail, label: "Portfolio", href: "/", color: "280 70% 50%" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Form submitted! In a real app, this would send your message.");
  };

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-primary font-display font-semibold mb-4 block">
              Get In Touch
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </FadeUp>
        </div>

        {/* Contact Icons Grid */}
        <FadeUp delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass rounded-xl p-4 text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at center, hsl(${social.color} / 0.2), transparent 70%)`,
                  }}
                />
                
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon 
                    size={28} 
                    className="mx-auto mb-2 transition-colors" 
                    style={{ color: `hsl(${social.color})` }}
                  />
                </motion.div>
                <span className="text-sm font-medium relative z-10 group-hover:text-primary transition-colors">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <FadeUp delay={0.4}>
              <h2 className="font-display text-2xl font-bold mb-8">Contact Information</h2>
            </FadeUp>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-6 flex items-center gap-4 group hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{info.label}</span>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <FadeUp delay={0.8}>
              <div className="glass rounded-2xl p-8 text-center">
                <h3 className="font-display text-xl font-bold mb-4">
                  Ready to start a project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm available for freelance work and full-time positions.
                </p>
                <GlowButton size="lg">
                  <Mail size={20} />
                  Hire Me Now
                </GlowButton>
              </div>
            </FadeUp>
          </div>

          {/* Contact Form */}
          <FadeUp delay={0.5}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold mb-8">Send a Message</h2>

              <div className="space-y-6">
                {[
                  { name: "name", label: "Your Name", type: "text" },
                  { name: "email", label: "Your Email", type: "email" },
                  { name: "subject", label: "Subject", type: "text" },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <motion.label
                      className={`absolute left-4 transition-all pointer-events-none ${
                        focusedField === field.name || formData[field.name as keyof typeof formData]
                          ? "top-2 text-xs text-primary"
                          : "top-4 text-muted-foreground"
                      }`}
                    >
                      {field.label}
                    </motion.label>
                    <motion.input
                      type={field.type}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.name]: e.target.value })
                      }
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-secondary/50 rounded-xl px-4 pt-6 pb-2 outline-none border border-transparent focus:border-primary transition-colors"
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                ))}

                <div className="relative">
                  <motion.label
                    className={`absolute left-4 transition-all pointer-events-none ${
                      focusedField === "message" || formData.message
                        ? "top-2 text-xs text-primary"
                        : "top-4 text-muted-foreground"
                    }`}
                  >
                    Your Message
                  </motion.label>
                  <motion.textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full bg-secondary/50 rounded-xl px-4 pt-6 pb-2 outline-none border border-transparent focus:border-primary transition-colors resize-none"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>

                <GlowButton size="lg" className="w-full">
                  <Send size={20} />
                  Send Message
                </GlowButton>
              </div>
            </form>
          </FadeUp>
        </div>
      </div>
    </main>
  );
};

export default Contact;
