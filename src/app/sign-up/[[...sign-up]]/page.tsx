"use client";

import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";

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
        <div className="backdrop-blur-xl bg-[#050505]/80 border border-white/10 rounded-none p-6 sm:p-10 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-[0.2em] uppercase text-white mb-2">Join The Movement</h1>
            <p className="text-[10px] tracking-widest text-zinc-500 uppercase">Create an account for exclusive access</p>
          </div>
          
          <SignUp 
            appearance={{
              elements: {
                rootBox: "w-full mx-auto",
                card: "bg-transparent shadow-none w-full p-0 m-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                dividerLine: "bg-white/10",
                dividerText: "text-zinc-500 tracking-widest text-[10px] uppercase",
                formFieldLabel: "text-zinc-400 tracking-widest text-[10px] uppercase mb-2",
                formFieldInput: "bg-black border border-white/10 rounded-none text-white focus:border-white/40 focus:ring-0 text-sm py-3 px-4 transition-colors",
                formButtonPrimary: "bg-white text-black hover:bg-zinc-200 rounded-none tracking-widest text-[10px] uppercase font-bold py-4 mt-4 transition-colors",
                socialButtonsBlockButton: "border border-white/10 hover:bg-white/5 bg-transparent rounded-none text-white tracking-widest text-[10px] uppercase py-4 transition-colors",
                socialButtonsBlockButtonText: "font-medium",
                footerActionText: "text-zinc-500 text-[10px] tracking-widest uppercase",
                footerActionLink: "text-white hover:text-zinc-300 tracking-widest text-[10px] transition-colors uppercase ml-2",
                identityPreviewText: "text-zinc-400 text-xs",
                identityPreviewEditButton: "text-white text-xs hover:text-zinc-300 transition-colors"
              }
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
