"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Lock, Image as ImageIcon, Music, ShoppingBag, ExternalLink } from "lucide-react";
import Image from "next/image";
import { products } from "@/lib/products";

export default function ExclusivePage() {
  // MOCK DATA for local preview without env keys
  // Changed to true to view the dashboard as requested!
  const isSubscribed = true;
  
  const [isPlaying, setIsPlaying] = useState(false);
  
  if (!isSubscribed) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 bg-black/60 backdrop-blur-xl p-12 border border-white/10 flex flex-col items-center"
        >
          <Lock className="w-8 h-8 mb-6 text-zinc-500" />
          <h1 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-4">Premium Access Required</h1>
          <p className="text-zinc-400 tracking-wider max-w-md text-sm leading-relaxed">
            This content is strictly for Osita David exclusive members. Subscribe to unlock unreleased tracks, exclusive merchandise, and behind-the-scenes content.
          </p>
          <form action="/api/checkout/subscription" method="POST">
            <button type="submit" className="px-8 py-4 bg-white text-black font-medium tracking-[0.2em] uppercase text-[10px] hover:bg-zinc-200 transition-colors mt-8">
              Subscribe Now - $10/mo
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Early access product
  const earlyAccessProduct = products[0];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-7xl mx-auto flex flex-col gap-16 px-4 md:px-8 py-12"
    >
      <header className="border-b border-white/10 pb-8">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-[#a1a1aa] tracking-[0.3em] uppercase mb-2 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Access Granted
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl tracking-[0.2em] uppercase font-light"
        >
          The Vault
        </motion.h1>
      </header>

      {/* AUDIO PLAYER SECTION */}
      <section>
        <h2 className="text-sm text-zinc-500 tracking-[0.2em] uppercase flex items-center gap-2 mb-6">
          <Music size={16} /> Unreleased Audio
        </h2>
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-zinc-900/40 border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm"
        >
          <div className="w-full md:w-48 h-48 bg-black border border-white/5 relative flex items-center justify-center overflow-hidden group">
            <Image src="/products/12.png" alt="Track Art" fill className="object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                {isPlaying ? <Pause className="ml-0" fill="currentColor" /> : <Play className="ml-1" fill="currentColor" />}
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-2xl tracking-widest uppercase mb-1">VIXEN (Demo File)</h3>
                <p className="text-zinc-500 text-xs tracking-wider uppercase">Produced by XI100</p>
              </div>
              <span className="text-xs text-zinc-500 tracking-widest font-mono">
                {isPlaying ? "01:24" : "00:00"} / 03:45
              </span>
            </div>
            
            {/* Custom Audio Progress Bar */}
            <div className="w-full h-1 bg-white/10 relative cursor-pointer group">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "35%" : "0%" }}
                transition={{ duration: isPlaying ? 2 : 0 }}
              ></motion.div>
              {/* Hover scrubber indicator */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[35%] w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TWO COLUMNS: EARLY ACCESS & COMMUNITY */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-sm text-zinc-500 tracking-[0.2em] uppercase flex items-center gap-2">
            <ShoppingBag size={16} /> Early Access Drop
          </h2>
          <div className="bg-[#050505] border border-white/10 p-8 flex flex-col items-center justify-center text-center group">
            <div className="relative w-48 h-64 mb-6 overflow-hidden border border-white/5">
              <Image src={earlyAccessProduct.image} alt={earlyAccessProduct.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-lg tracking-widest uppercase mb-2">{earlyAccessProduct.name}</h3>
            <p className="text-zinc-500 text-xs tracking-widest mb-6">Available to public in 48 hours</p>
            <button className="px-8 py-3 bg-white text-black text-[10px] tracking-widest uppercase font-bold hover:bg-zinc-200 transition-colors w-full">
              Purchase Before Drop
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-sm text-zinc-500 tracking-[0.2em] uppercase flex items-center gap-2">
            <ExternalLink size={16} /> Inner Circle
          </h2>
          <div className="bg-[#050505] border border-white/10 p-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl tracking-widest uppercase mb-4 font-light">Osita Syndicate</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Connect directly with Osita David and other premium members in our private Discord server. Participate in exclusive Q&A sessions and get sneak peeks at upcoming projects.
              </p>
            </div>
            <button className="px-8 py-3 border border-white/20 text-white text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-full flex items-center justify-center gap-2">
              Join Discord Server
            </button>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="mb-20">
        <h2 className="text-sm text-zinc-500 tracking-[0.2em] uppercase flex items-center gap-2 mb-6">
          <ImageIcon size={16} /> Behind The Scenes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div whileHover={{ scale: 0.98 }} className="relative aspect-square border border-white/10 overflow-hidden cursor-pointer">
            <Image src="/products/2.png" alt="Gallery" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" />
          </motion.div>
          <motion.div whileHover={{ scale: 0.98 }} className="relative aspect-[3/4] border border-white/10 overflow-hidden cursor-pointer md:col-span-2 md:row-span-2">
            <Image src="/products/11.png" alt="Gallery" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" />
          </motion.div>
          <motion.div whileHover={{ scale: 0.98 }} className="relative aspect-square border border-white/10 overflow-hidden cursor-pointer">
            <Image src="/products/10.png" alt="Gallery" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" />
          </motion.div>
          <motion.div whileHover={{ scale: 0.98 }} className="relative aspect-square border border-white/10 overflow-hidden cursor-pointer">
            <Image src="/products/7.png" alt="Gallery" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" />
          </motion.div>
          <motion.div whileHover={{ scale: 0.98 }} className="relative aspect-square border border-white/10 overflow-hidden cursor-pointer">
            <Image src="/products/8.png" alt="Gallery" fill className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" />
          </motion.div>
        </div>
      </section>
      
    </motion.div>
  );
}
