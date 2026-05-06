"use client";

import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "/exclusive", label: "Exclusive" },
  { href: "/tour", label: "Tour" },
  { href: "/shop", label: "Shop" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`w-full sticky top-0 z-50 text-white flex flex-col items-center transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent border-b border-white/5 py-8"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 flex justify-between items-center">

          {/* Left spacer / mobile menu */}
          <div className="w-24 flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </motion.button>
          </div>

          {/* Logo – center */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Osita David"
                width={200}
                height={60}
                className="object-contain w-28 md:w-44"
                priority
              />
            </Link>
          </motion.div>

          {/* Icons – right */}
          <div className="flex items-center gap-5 w-24 justify-end">
            {[
              { Icon: Search, label: "Search" },
              { Icon: User, label: "Profile", href: "/sign-in" },
              { Icon: ShoppingCart, label: "Cart" },
            ].map(({ Icon, label, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {href ? (
                  <Link href={href} aria-label={label}>
                    <Icon size={18} strokeWidth={1.5} className="text-zinc-300 hover:text-white transition-colors" />
                  </Link>
                ) : (
                  <button aria-label={label}>
                    <Icon size={18} strokeWidth={1.5} className="text-zinc-300 hover:text-white transition-colors" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop nav */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hidden md:flex mt-6 gap-12 text-[11px] tracking-[0.25em] font-medium"
        >
          {navLinks.map(({ href, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
            >
              <Link href={href} className="uppercase text-zinc-400 hover:text-white transition-colors duration-300 relative group">
                {label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[1px] bg-white"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 2rem 2rem)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 2rem 2rem)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 2rem 2rem)" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center gap-10"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-white"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            {navLinks.map(({ href, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl uppercase tracking-[0.3em] text-white hover:text-zinc-400 transition-colors"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
