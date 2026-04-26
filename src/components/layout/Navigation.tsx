import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/resume", label: "Experience" },
  { path: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block w-full"
      >
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="glass rounded-2xl px-8 py-4 flex items-center justify-between">
            <Link to="/" className="font-display text-2xl font-bold gradient-text-warm">
              Portfolio
            </Link>
            
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-5 py-3 text-base font-medium transition-colors hover:text-primary"
                >
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* <Link
              to="/contact"
              className="relative overflow-hidden rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-all hover:scale-105"
            >
              <span className="relative z-10">Hire Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                animate={{ x: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ width: "200%" }}
              />
            </Link> */}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="glass rounded-full p-3"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 glass-subtle p-6 pt-20"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? "bg-primary/20 text-primary"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
