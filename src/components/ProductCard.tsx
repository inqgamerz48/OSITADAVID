"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/lib/products";

interface ProductCardProps {
    product: Product;
    index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center group cursor-pointer"
        >
            <div className="w-full aspect-[4/5] relative bg-[#0a0a0a] overflow-hidden mb-5">
                {/* Image wrapper with scale effect on hover */}
                <motion.div
                    className="w-full h-full relative origin-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                    {/* Using img for external placeholder or real Next Image if domain is configured */}
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                        loading="lazy"
                    />
                </motion.div>
            </div>

            {/* Product Details */}
            <div className="text-center flex flex-col gap-1.5 uppercase">
                <h3 className="text-sm tracking-widest font-medium text-white group-hover:text-gray-300 transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm tracking-wider text-gray-400 font-light">
                    {product.price}
                </p>
            </div>
        </motion.div>
    );
}
