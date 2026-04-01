"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-medium tracking-wide">
          Girish Kumar<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation - A simple CSS solution or a small menu could go here, but I will keep it minimal. */}
        <div className="md:hidden flex gap-4 text-sm font-medium">
           {/* To keep it simple, we show a simplified nav or menu button. For now let's just show main links if they fit or a horizontal scroll */}
           <nav className="flex gap-4 overflow-x-auto pb-1 hide-scrollbar">
             {navLinks.map(link => (
                <Link key={link.name} href={link.href} className={`whitespace-nowrap ${pathname === link.href ? "text-accent" : "text-muted-foreground"}`}>
                  {link.name}
                </Link>
             ))}
           </nav>
        </div>
      </div>
    </header>
  );
}
