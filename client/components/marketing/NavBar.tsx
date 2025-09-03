import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function NavBar() {
  const { scrollY } = useScroll();
  const [elevated, setElevated] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setElevated(latest > 4);
  });

  return (
    <motion.div
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={
        "sticky top-0 z-40 w-full border-b border-border/60 backdrop-blur bg-background/70"
      }
      style={{
        boxShadow: elevated ? "0 1px 0 0 hsl(var(--border))" : undefined,
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center gap-4">
          <Link
            to="/"
            className="font-semibold tracking-tight text-foreground/90"
          >
            <span className="text-primary">Aegis</span> Intelligence
          </Link>
          <div className="hidden md:flex items-center gap-6 mx-auto text-sm text-foreground/80">
            <a
              href="#solutions"
              className="hover:text-foreground transition-colors"
            >
              Solutions
            </a>
            <a
              href="#platform"
              className="hover:text-foreground transition-colors"
            >
              Platform
            </a>
            <a
              href="#resources"
              className="hover:text-foreground transition-colors"
            >
              Resources
            </a>
            <a
              href="#company"
              className="hover:text-foreground transition-colors"
            >
              Company
            </a>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/auth">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/auth">Request Access</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
