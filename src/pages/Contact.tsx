import { motion } from "framer-motion";
import { FadeUp } from "@/components/layout/PageTransition";
import { GlowButton } from "@/components/ui/GlowButton";
import { 
  Mail, Phone, MapPin, Send, 
  Github, Linkedin 
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "javeed3082@gmail.com", href: "mailto:javeed3082@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 99430 86228", href: "tel:+919943086228" },
  { icon: MapPin, label: "Location", value: "Chennai, TN", href: "https://www.google.com/maps/search/?api=1&query=Chennai%2C%20Tamil%20Nadu" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jaaveed-mohamed/", color: "210 80% 50%" },
  { icon: Github, label: "GitHub", href: "https://github.com/Javeed-me/", color: "0 0% 50%" },
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
    const subject = encodeURIComponent(formData.subject || `Portfolio enquiry from ${formData.name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:javeed3082@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <FadeUp delay={0.4}>
              <h2 className="font-display text-2xl font-bold mb-8">Contact Information</h2>
            </FadeUp>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass rounded-xl p-6 flex items-start gap-4 group hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-muted-foreground block mb-1">{info.label}</span>
                    <p className="font-medium group-hover:text-primary transition-colors text-lg">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <FadeUp delay={0.6}>
              <div className="mt-12">
                <h3 className="font-display text-lg font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass rounded-lg p-4 group hover:border-primary/50 transition-all"
                      title={social.label}
                    >
                      <social.icon 
                        size={28} 
                        className="transition-colors group-hover:text-primary" 
                        style={{ color: `hsl(${social.color})` }}
                      />
                    </motion.a>
                  ))}
                </div>
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
                      name={field.name}
                      required
                      autoComplete={field.name === "email" ? "email" : field.name}
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
                    name="message"
                    required
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
