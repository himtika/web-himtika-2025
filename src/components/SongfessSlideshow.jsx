"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const songfessData = [
    {
        id: "1",
        to: "Jokowi Pramono",
        message: "kamu mau ga jadi kadiv aku",
        songTitle: "Apocalypse",
        artist: "Cigarettes After Sex",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
    },
    {
        id: "2",
        to: "Ademaman",
        message: "masih ada notes kita di gallery, full of plans yang gapernah kejadian",
        songTitle: "Apocalypse",
        artist: "Cigarettes After Sex",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
    },
    {
        id: "3",
        to: "Raisa",
        message: "Setiap lihat kamu, aku jadi inget lagu 'Could It Be'",
        songTitle: "Could It Be",
        artist: "Raisa",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
    },
    {
        id: "4",
        to: "Dinda",
        message: "Aku pengen nyanyiin 'Beautiful in White' buat kamu",
        songTitle: "Beautiful in White",
        artist: "Shane Filan",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
    },
    {
        id: "5",
        to: "Andi",
        message: "Dari awal ketemu, aku udah tau kamu 'Perfect'",
        songTitle: "Perfect",
        artist: "Ed Sheeran",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
    },
    {
        id: "6",
        to: "Nabila",
        message: "Lagu 'Yellow' selalu ngingetin aku ke kamu",
        songTitle: "Yellow",
        artist: "Coldplay",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
    },
    {
        id: "7",
        to: "Budi",
        message: "Kamu itu ibarat 'Fix You' dalam hidupku",
        songTitle: "Fix You",
        artist: "Coldplay",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
    },
    {
        id: "8",
        to: "Siti",
        message: "Seandainya aku bisa nyanyiin 'Just the Way You Are' buat kamu tiap hari",
        songTitle: "Just the Way You Are",
        artist: "Bruno Mars",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
        },
    {
        id: "9",
        to: "Rizky",
        message: "Kalau hidup ini lagu, kamu itu 'Shape of You'",
        songTitle: "Shape of You",
        artist: "Ed Sheeran",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
    },
    {
        id: "10",
        to: "Nadrina",
        message: "Kamu itu seperti 'You Are The Reason' kenapa aku semangat tiap hari",
        songTitle: "You Are The Reason",
        artist: "Calum Scott",
        date: "January 32, 2025",
        image: "/songfess/image-song-example.png",
    },
    ];


export default function SongfessSlideshow() {
    const [isDragging, setIsDragging] = useState(false);
    const controls = useAnimation();
    const containerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const startAnimation = () => {
            controls.set({ x: "100%" }); // Langsung set posisi awal
            controls.start({
            x: ["100%", "-100%"],
            transition: { repeat: Infinity, duration: 70, ease: "linear" }, // 🔹 Diperlambat jadi 40s
        });
        };

        startAnimation();

        return () => {
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, [controls]);

    const handleScroll = () => {
        setIsScrolling(true);
        controls.stop();

        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

        scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
            controls.start({
                x: ["100%", "-100%"],
                transition: { repeat: Infinity, duration: 70, ease: "linear" },
            });
        }, 100); // 🔹 Setelah scroll, animasi lanjut setelah 2 detik
    };

    return (
        <>
            <section className="pb-28 px-6 sm:px-16 md:px-12 lg:px-28 bg-yellowBG text-black transition-all duration-500 selection:bg-purple selection:text-white">
                <div className="relative w-full overflow-x-scroll custom-scrollbar2 p-5 bg-yellowBG">
                    <motion.div
                        ref={containerRef}
                        className="flex space-x-4 w-max"
                        animate={controls}
                        onScroll={handleScroll}
                    >
                    {songfessData.length > 0 ? (
                        songfessData.map((songfess, index) => (
                            <Link key={songfess.id} href={`/himtalks/songfess/${songfess.id}`} passHref>
                                <motion.div
                                    key={index}
                                    className="w-[400px] bg-white rounded-2xl shadow-md"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="px-5 pt-5 pb-1">
                                        <p className="text-[#707070] text-sm font-medium font-[Plus Jakarta Sans]">To: 
                                            <span className="text-black"> {songfess.to}</span>
                                        </p>
                                        <div className="h-[80px] flex items-center mt-2">
                                            <p className="text-black font-semibold text-2xl font-[Caveat] line-clamp-2 overflow-hidden text-ellipsis">{songfess.message}</p>  
                                        </div>
                                    </div>
                                    <div className="bg-purple px-4 py-4 rounded-2xl">
                                        <div className="flex gap-2 items-center w-full">
                                            <Image
                                                src={songfess.image}
                                                width={33}
                                                height={33}
                                                alt="Song Image"
                                                draggable={false}
                                                className="rounded-lg"
                                            />
                                            <div className="w-full px-2 rounded-md flex items-center justify-between">
                                                <div className="w-full">
                                                    <p className="text-white text-sm font-medium">{songfess.songTitle}</p>
                                                    <p className="text-white text-sm font-normal">{songfess.artist}</p>
                                                </div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.08 10.68C15.24 8.4 8.82 8.16 5.16 9.3C4.56 9.48 3.96 9.12 3.78 8.58C3.6 7.98 3.96 7.38 4.5 7.2C8.76 5.94 15.78 6.18 20.22 8.82C20.76 9.12 20.94 9.84 20.64 10.38C20.34 10.8 19.62 10.98 19.08 10.68ZM18.96 14.04C18.66 14.46 18.12 14.64 17.7 14.34C14.46 12.36 9.54 11.76 5.76 12.96C5.28 13.08 4.74 12.84 4.62 12.36C4.5 11.88 4.74 11.34 5.22 11.22C9.6 9.9 15 10.56 18.72 12.84C19.08 13.02 19.26 13.62 18.96 14.04ZM17.52 17.34C17.28 17.7 16.86 17.82 16.5 17.58C13.68 15.84 10.14 15.48 5.94 16.44C5.52 16.56 5.16 16.26 5.04 15.9C4.92 15.48 5.22 15.12 5.58 15C10.14 13.98 14.1 14.4 17.22 16.32C17.64 16.5 17.7 16.98 17.52 17.34ZM12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))
                    ) : (
                        <motion.div
                            className="w-[400px] bg-white rounded-2xl shadow-md"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="px-5 pt-5 pb-1">
                                <p className="text-[#707070] text-sm font-medium font-[Plus Jakarta Sans]">To: 
                                    <span className="text-black"></span>
                                </p>
                                <div className="h-[80px] flex items-center mt-2">
                                    <p className="text-black font-semibold text-2xl font-[Caveat] line-clamp-2 overflow-hidden text-ellipsis">Tidak ada songfess yang terkirim</p>  
                                </div>
                            </div>
                            <div className="bg-purple px-4 py-4 rounded-2xl">
                                <div className="flex gap-2 items-center w-full">
                                    <Image
                                        src="/icons/silang.svg"
                                        width={33}
                                        height={33}
                                        alt="Song Image"
                                        draggable={false}
                                        className="rounded-lg"
                                    />
                                    <div className="w-full px-2 rounded-md flex items-center justify-between">
                                        <div className="w-full">
                                            <p className="text-white text-sm font-medium"></p>
                                            <p className="text-white text-sm font-normal"></p>
                                        </div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.08 10.68C15.24 8.4 8.82 8.16 5.16 9.3C4.56 9.48 3.96 9.12 3.78 8.58C3.6 7.98 3.96 7.38 4.5 7.2C8.76 5.94 15.78 6.18 20.22 8.82C20.76 9.12 20.94 9.84 20.64 10.38C20.34 10.8 19.62 10.98 19.08 10.68ZM18.96 14.04C18.66 14.46 18.12 14.64 17.7 14.34C14.46 12.36 9.54 11.76 5.76 12.96C5.28 13.08 4.74 12.84 4.62 12.36C4.5 11.88 4.74 11.34 5.22 11.22C9.6 9.9 15 10.56 18.72 12.84C19.08 13.02 19.26 13.62 18.96 14.04ZM17.52 17.34C17.28 17.7 16.86 17.82 16.5 17.58C13.68 15.84 10.14 15.48 5.94 16.44C5.52 16.56 5.16 16.26 5.04 15.9C4.92 15.48 5.22 15.12 5.58 15C10.14 13.98 14.1 14.4 17.22 16.32C17.64 16.5 17.7 16.98 17.52 17.34ZM12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0Z" fill="white"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    </motion.div>
                </div>
            </section>
        </>
    );
}