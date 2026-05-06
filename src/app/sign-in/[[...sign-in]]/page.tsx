"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center relative overflow-hidden px-4">
      
      {/* Cinematic Background effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="z-10 w-full max-w-md"
      >
        <div className="backdrop-blur-xl bg-[#050505]/80 border border-white/10 p-10 shadow-2xl text-center">
          <h1 className="text-2xl font-bold tracking-[0.2em] uppercase text-white mb-2">Welcome Back</h1>
          <p className="text-[10px] tracking-widest text-zinc-500 uppercase mb-8">Authenticate to access exclusive drops</p>
          <p className="text-zinc-400 text-xs tracking-wider mb-8">Authentication coming soon. Stay tuned for exclusive access.</p>
          <Link href="/" className="px-8 py-3 bg-white text-black font-medium tracking-widest uppercase text-xs hover:bg-zinc-200 transition-colors">
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
