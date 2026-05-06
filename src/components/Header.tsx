"use client";

import { Search, User, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Header() {
    return (
        <motion.header 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full bg-black/80 backdrop-blur-md text-white px-6 py-8 flex flex-col items-center relative z-50 border-b border-white/5"
        >
            {/* Top row: Logo and Icons */}
            <div className="w-full max-w-[1400px] flex justify-between items-center">
                {/* Empty left to balance absolute positioning of icons if needed, but flex-between works if logo is absolute center */}
                <div className="w-24 hidden md:block"></div>

                {/* Logo */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center justify-center"
                >
                    <Link href="/">
                        <Image src="/logo.webp" alt="Osita David Logo" width={200} height={60} className="object-contain w-32 md:w-48" priority />
                    </Link>
                </motion.div>

                {/* Icons */}
                <div className="flex items-center gap-5">
                    <motion.button whileHover={{ scale: 1.1, opacity: 0.8 }} aria-label="Search" className="transition-opacity">
                        <Search size={20} strokeWidth={1.5} />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1, opacity: 0.8 }} aria-label="Profile" className="transition-opacity">
                        <Link href="/sign-in"><User size={20} strokeWidth={1.5} /></Link>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1, opacity: 0.8 }} aria-label="Cart" className="transition-opacity">
                        <ShoppingCart size={20} strokeWidth={1.5} />
                    </motion.button>
                </div>
            </div>

            {/* Nav links */}
            <motion.nav 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12 text-[11px] md:text-sm tracking-widest font-medium"
            >
                <Link href="/exclusive" className="hover:opacity-60 transition-opacity uppercase relative group">
                    Exclusive
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
                <Link href="/tour" className="hover:opacity-60 transition-opacity uppercase relative group">
                    Tour
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
                <Link href="/shop" className="hover:opacity-60 transition-opacity uppercase relative group">
                    Shop
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
            </motion.nav>
        </motion.header>
    );
}
