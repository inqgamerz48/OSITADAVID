"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { VideoDisplay } from "@/components/VideoDisplay";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1, ease } },
};

export default function Home() {
  const featuredProduct = products.find((p) => p.id === "5") || products[0];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="w-full flex flex-col items-center min-h-screen overflow-x-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

        {/* Parallax ambient glow */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]" />
        </motion.div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          style={{ opacity }}
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-6xl mx-auto px-4"
        >
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-sm border border-white/5 bg-zinc-900/20 backdrop-blur-sm"
          >
            {/* Shimmer border */}
            <motion.div
              animate={{ x: ["0%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent z-20"
            />

            <div className="flex flex-col md:flex-row w-full items-center">

              {/* Left: Brand */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-10 md:p-16 z-10">
                <motion.div variants={fadeUp} className="mb-8">
                  <Image
                    src="/logo.webp"
                    alt="Osita David"
                    width={300}
                    height={80}
                    className="object-contain w-48 md:w-64"
                    priority
                  />
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="text-zinc-400 tracking-[0.25em] text-[11px] max-w-sm mb-12 uppercase leading-loose"
                >
                  Join the movement. Access exclusive drops,<br />unreleased tracks, and tour access.
                </motion.p>

                <motion.div variants={fadeUp} className="flex gap-4 flex-wrap justify-center">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/exclusive"
                      className="relative overflow-hidden group px-8 py-4 bg-white text-black font-semibold tracking-[0.2em] uppercase text-[11px] inline-block"
                    >
                      <motion.span
                        className="absolute inset-0 bg-zinc-200"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      <span className="relative z-10">Unlock Exclusive</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/shop"
                      className="relative overflow-hidden group px-8 py-4 border border-white/20 text-white font-medium tracking-[0.2em] uppercase text-[11px] inline-block hover:border-white/60 transition-colors duration-300"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/5"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      <span className="relative z-10">Enter Shop</span>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Pulsing live indicator */}
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-2 mt-10"
                >
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-white inline-block"
                  />
                  <span className="text-zinc-500 tracking-widest text-[9px] uppercase">New Drop Available</span>
                </motion.div>
              </div>

              {/* Right: Featured Product */}
              <motion.div
                variants={slideRight}
                className="w-full md:w-1/2 bg-[#050505] p-8 md:p-16 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/5 relative overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/10" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/10" />

                <motion.p
                  initial={{ opacity: 0, letterSpacing: "0.1em" }}
                  animate={{ opacity: 1, letterSpacing: "0.3em" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-[9px] tracking-[0.3em] text-zinc-600 uppercase mb-8"
                >
                  Featured Drop
                </motion.p>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-full max-w-xs"
                >
                  <ProductCard product={featuredProduct} index={0} />
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-zinc-600 tracking-widest text-[9px] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="w-full overflow-hidden border-y border-white/5 bg-[#050505] py-4 relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase flex items-center gap-12">
              Osita David
              <span className="text-white/10 mx-2">✦</span>
              YGR
              <span className="text-white/10 mx-2">✦</span>
              Exclusive Drops
              <span className="text-white/10 mx-2">✦</span>
              Yvng Rockstars
              <span className="text-white/10 mx-2">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── VIDEO SECTION ── */}
      <VideoDisplay />

      {/* ── SOCIAL LINKS STRIP ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto px-4 py-20 flex flex-col items-center gap-8"
      >
        <p className="text-[9px] tracking-[0.4em] text-zinc-600 uppercase">Find Me On</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { label: "Spotify", href: "https://open.spotify.com/artist/3d5DZ5YLW77RNM62AFObl5" },
            { label: "YouTube", href: "https://www.youtube.com/@ositadavd" },
            { label: "Apple Music", href: "https://music.apple.com/us/artist/osita-david/1825984531" },
            { label: "SoundCloud", href: "https://soundcloud.com/ositadavid" },
            { label: "Instagram", href: "https://www.instagram.com/ositadavd" },
          ].map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4, color: "#ffffff" }}
              className="px-6 py-3 border border-white/10 text-zinc-500 tracking-widest uppercase text-[10px] hover:border-white/30 transition-all duration-300"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.section>

    </main>
  );
}
