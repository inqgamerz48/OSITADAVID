"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { VideoDisplay } from "@/components/VideoDisplay";

export default function Home() {
  // Find a hoodie to feature, specifically the "YGR HOODIE" or fallback to first product
  const featuredProduct = products.find(p => p.id === "5") || products[0];

  return (
    <main className="w-full flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center min-h-[70vh] gap-10 mt-10 md:mt-20 px-4 md:px-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full max-w-6xl overflow-hidden rounded-sm border border-white/5 bg-zinc-900/20"
        >
          <div className="flex flex-col md:flex-row w-full items-center">
            
            {/* Left Side: Brand & Funnel */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-8 md:p-12 z-10">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                <Image 
                  src="/logo.webp" 
                  alt="Osita David Logo" 
                  width={300} 
                  height={80} 
                  className="object-contain w-48 md:w-64" 
                  priority 
                />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-zinc-400 tracking-widest text-xs md:text-sm max-w-md mb-10 uppercase leading-loose"
              >
                Join the movement. Access exclusive drops, unreleased tracks, and tour access.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex gap-4 flex-wrap justify-center"
              >
                <Link href="/exclusive" className="px-6 py-3 bg-white text-black font-medium tracking-widest uppercase text-xs hover:bg-zinc-200 transition-colors">
                  Unlock Exclusive
                </Link>
                <Link href="/shop" className="px-6 py-3 border border-white/20 text-white font-medium tracking-widest uppercase text-xs hover:bg-white/10 transition-colors">
                  Enter Shop
                </Link>
              </motion.div>
            </div>

            {/* Right Side: Featured Hoodie */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="w-full md:w-1/2 bg-[#050505] p-8 md:p-16 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/5"
            >
              <p className="text-[10px] tracking-widest text-zinc-500 uppercase mb-6">Featured Drop</p>
              <div className="w-full max-w-xs">
                <ProductCard product={featuredProduct} index={0} />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Video Display Section */}
      <VideoDisplay />
      
    </main>
  );
}
