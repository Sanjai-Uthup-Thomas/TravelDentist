'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
type CardProps = {
    index: number;
    imageSrc: string;
    title: string;
    description: [];
    link: string;
    alt: string;
  };
const Card = ({ index, imageSrc, title, description, link, alt }: CardProps) => {
    const isEvenIndex = index % 2 === 0;

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4">
            {/* Left Box (Image) */}
            <motion.div
                className={`w-full md:w-[400px] h-[300px] bg-pink-200 rounded-xl shadow-lg flex items-center justify-center overflow-hidden ${isEvenIndex ? "md:order-1" : "md:order-2"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src={imageSrc}
                    alt={alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                    priority
                />
            </motion.div>

            {/* Right Box (Content) */}
            <motion.div
                className={`w-full md:w-[600px] h-[400px] bg-white flex flex-col p-6 ${isEvenIndex ? "md:order-2" : "md:order-1"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <motion.h2
                    className="text-2xl font-bold text-pink-400 mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h2>

                <motion.div
                    className="flex-1 space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {description.map((text: string, idx: number) => (
                        <p key={idx} className="text-lg font-semibold text-pink-400">
                            {text}
                        </p>
                    ))}
                </motion.div>

                <motion.div
                    className="flex flex-1 justify-center items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Link
                        href={link}
                        className="inline-block bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        LEARN MORE
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Card;
