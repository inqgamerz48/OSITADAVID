"use client";

import Link from "next/link";
import { Camera, Headphones, Mic2, Tv } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full bg-black text-white px-6 py-16 flex flex-col items-center text-[10px] sm:text-xs tracking-widest text-[#a1a1aa] uppercase font-medium"
        >

            {/* Links */}
            <div className="flex flex-col items-center gap-3 mb-6">
                <Link href="#" className="hover:text-white transition-colors relative group">
                    Terms & Conditions
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
                <Link href="#" className="hover:text-white transition-colors relative group">
                    Privacy Policy
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
                <Link href="#" className="hover:text-white transition-colors relative group">
                    Cookies
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
                <Link href="#" className="hover:text-white transition-colors relative group">
                    Do Not Sell My Information
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
                </Link>
            </div>

            {/* Copyright */}
            <div className="mb-6 opacity-70 text-center leading-relaxed">
                @XI100 / YVNG ROCKSTARS&trade; <br className="sm:hidden" /> ALL RIGHTS RESERVED
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5">
                <motion.a whileHover={{ y: -3, color: "#fff" }} href="https://open.spotify.com/artist/3d5DZ5YLW77RNM62AFObl5" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="transition-colors">
                    <Headphones size={16} strokeWidth={1.5} />
                </motion.a>
                <motion.a whileHover={{ y: -3, color: "#fff" }} href="https://music.apple.com/us/artist/osita-david/1825984531" target="_blank" rel="noopener noreferrer" aria-label="Apple Music" className="transition-colors">
                    <Mic2 size={16} strokeWidth={1.5} />
                </motion.a>
                <motion.a whileHover={{ y: -3, color: "#fff" }} href="https://www.instagram.com/ositadavd" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors">
                    <Camera size={16} strokeWidth={1.5} />
                </motion.a>
                <motion.a whileHover={{ y: -3, color: "#fff" }} href="https://soundcloud.com/ositadavid" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud" className="transition-colors">
                    <Headphones size={16} strokeWidth={1.5} />
                </motion.a>
                <motion.a whileHover={{ y: -3, color: "#fff" }} href="https://www.youtube.com/@ositadavd" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors">
                    <Tv size={16} strokeWidth={1.5} />
                </motion.a>
            </div>

        </motion.footer>
    );
}
