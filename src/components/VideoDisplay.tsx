"use client";

import { motion } from "framer-motion";

interface VideoDisplayProps {
  videoId?: string;
}

export function VideoDisplay({ videoId = "rYEDA3JcQqw" }: VideoDisplayProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-24 px-6 md:px-12 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="w-full max-w-5xl rounded-sm overflow-hidden border border-white/5 bg-zinc-900/20 aspect-video relative shadow-2xl"
      >
        {/* Placeholder gradient before iframe loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black -z-10" />
        
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0&modestbranding=1&color=white`}
          title="Osita David - Featured Track"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 text-center flex flex-col items-center"
      >
        <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase mb-3">Featured Video</p>
        <h3 className="text-white text-xl md:text-2xl tracking-widest uppercase mb-6 font-medium">
          Latest Release
        </h3>
        <a 
          href="https://www.youtube.com/@ositadavd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3 border border-white/20 text-white font-medium tracking-widest uppercase text-xs hover:bg-white hover:text-black transition-all duration-300"
        >
          Subscribe on YouTube
        </a>
      </motion.div>
    </div>
  );
}
