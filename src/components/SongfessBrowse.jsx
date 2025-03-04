"use client";
import Link from "next/link";
import Image from "next/image";
import { songfessData } from "./SongfessSlideshow";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";


export default function SongfessBrowse() {
    const [isDragging, setIsDragging] = useState(false);
    const controls = useAnimation();
    const containerRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeout = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState("");
    const [filteredData, setFilteredData] = useState(songfessData);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (!isSearching) { 
            controls.set({ x: "100%" }); // biar tidak delay
            controls.start({
                x: ["100%", "-100%"],
                transition: { repeat: Infinity, duration: 70, ease: "linear" },
            });
        } else {
            controls.stop();
        }

        return () => {
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
        console.log("Songfess Data:", songfessData); // Cek apakah data ada saat komponen dirender
        console.log("Is Searching:", isSearching);
    }, [controls, isSearching]);

    // const handleScroll = () => {
    //     setIsScrolling(true);
    //     controls.stop();

    //     if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    //     scrollTimeout.current = setTimeout(() => {
    //     setIsScrolling(false);
    //     controls.start({
    //         x: ["100%", "-100%"],
    //         transition: { repeat: Infinity, duration: 20, ease: "linear" },
    //     });
    //     }, 100); // 🔹 Setelah scroll, animasi lanjut setelah 2 detik
    // };

    // const handleSearch = (e) => {
    //     const searchTerm = e.target.value;
    //     setValue(searchTerm);
        
    //     if (searchTerm.trim() === "") {
    //         setFilteredData(songfessData);
    //         setIsSearching(false);
    //         controls.start({ 
    //             x: ["100%", "-100%"], 
    //             transition: { repeat: Infinity, duration: 50, ease: "linear" } 
    //         });
    //     } else {
    //         const filtered = songfessData.filter(songfess => 
    //             songfess.to.toLowerCase().includes(searchTerm.toLowerCase())
    //         );
    //         setFilteredData(filtered);
    //         setIsSearching(true);
    //     }
    // };

    // const handleInteraction = (e) => {
    //     const searchTerm = e.target.value.toLowerCase();
    //     setValue(searchTerm);
    //     (e) => setValue(e.target.value); // 🔹 Pastikan value diperbarui

    //     if (Array.isArray(songfessData)) {
    //         const filtered = songfessData.filter(item =>
    //             item.to && item.to.toLowerCase().includes(searchTerm)
    //         );
    //         setFilteredData(filtered);
    //     }

    //     // Jika ada hasil pencarian, hentikan animasi
    //     if (searchTerm && filteredData.length > 0) {
    //         controls.stop();
    //         controls.set({ x: "0%" }); // 🔹 Reset posisi ke tengah
    //     } else if (searchTerm && filteredData.length === 0) {
    //         controls.stop();
    //         controls.set({ x: "0%" }); // 🔹 Reset posisi ke tengah
    //     } else {
    //         // Jika input kosong, lanjutkan animasi
    //         setIsScrolling(true);
    //         controls.start({
    //             x: ["100%", "-100%"],
    //             transition: { repeat: Infinity, duration: 70, ease: "linear" },
    //         });

    //         if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    //         scrollTimeout.current = setTimeout(() => {
    //             setIsScrolling(false);
    //         }, 100);
    //     }
    // };

    const handleInteraction = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setValue(searchTerm);
    
        // 🔹 Pastikan data utama (songfessData) tidak kosong sebelum melakukan filter
        if (!songfessData || songfessData.length === 0) {
            controls.stop();
            controls.set({ x: "0%" }); // Hentikan dan posisikan di tengah
            setFilteredData([]); // Kosongkan data hasil filter
            return;
        }
    
        // 🔹 Filter data berdasarkan input pencarian
        const filtered = songfessData.filter(item =>
            item.to && item.to.toLowerCase().includes(searchTerm)
        );
        setFilteredData(filtered);
    
        // 🔹 Jika ada hasil pencarian, berhenti di tengah
        if (searchTerm && filtered.length > 0) {
            controls.stop();
            controls.set({ x: "0%" });
            setIsScrolling(false);
        } 
        
        // 🔹 Jika pencarian ada tapi tidak ada hasil, tetap berhenti
        else if (searchTerm && filtered.length === 0) {
            controls.stop();
            controls.set({ x: "0%" });
            setIsScrolling(false);
        } 
        
        // 🔹 Jika input kosong dan songfessData ada, lanjutkan animasi
        else {
            setIsScrolling(true);
            controls.start({
                x: ["100%", "-100%"],
                transition: { repeat: Infinity, duration: 70, ease: "linear" },
            });
    
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    
            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false);
            }, 100);
        }
    };

    return (
        <>
            <section className="pt-36 pb-28 px-6 sm:px-16 md:px-12 lg:px-28 bg-yellowBG text-black transition-all duration-500 selection:bg-purple selection:text-white">
                <h1 className="font-[Caveat] font-bold text-4xl sm:text-[42px] md:text-5xl lg:text-6xl md:max-w-[850px] text-purple mt-4 mb-4 lg:mb-0 leading-10 transition-all duration-500 text-center mx-auto">
                    Explore the messages waiting for you
                </h1>
                <p className="font-normal text-sm sm:text-base text-center text-darkPurple leading-6 sm:leading-7 mt-2 lg:mt-5 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full flex justify-center mx-auto transition-all duration-500">
                Ada pesan yang menunggu untuk kamu dengarkanーtemukan Songfess yang ditujukan untukmu.
                </p>

                <div className="relative mt-10 mb-16 w-full max-w-2xl mx-auto">
                    {/* Input Field */}
                    <input
                        type="text"
                        id="floatingInput"
                        placeholder=" "
                        onFocus={() => setIsFocused(true)} 
                        onBlur={() => setIsFocused(false)} 
                        className={`peer w-full rounded-full px-4 py-3 text-sm text-darkPurple focus:outline-none focus:border-purple transition-all peer ${value ? "border-2 border-purple" : "border-2 border-white" }`}
                        value={value}
                        onChange={handleInteraction}
                        onScroll={handleInteraction}
                        autoComplete="off"
                    />
                    
                    {/* Floating Label */}
                    <label
                        htmlFor="floatingInput"
                        className={`absolute left-4 transition-all py-[2px] px-2 rounded-xl bg-white duration-700 
                            ${isFocused || value ? "-top-3 text-xs text-darkPurple" : "top-3 text-sm text-darkPurple"}`}
                    >
                        Enter recipient name
                    </label>

                    {/* Search Icon */}
                    <div className="absolute right-0 top-1/2 p-2 cursor-default h-full rounded-e-full -translate-y-1/2">
                        <div className="bg-purple rounded-full p-2">
                            <Image
                                src="/icons/search.svg"
                                width={16}
                                height={16}
                                alt="Search"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-full overflow-x-scroll custom-scrollbar2 transition-all duration-500 p-5 bg-yellowBG">
                    <motion.div
                        initial={{ opacity: 1, x: "100%" }}
                        ref={containerRef}
                        className="flex space-x-4 w-max"
                        animate={controls}
                        onScroll={handleInteraction}
                    >
                        {filteredData.length > 0 ? (
                            filteredData.map((songfess, index) => (
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
                                        <p className="text-black font-semibold text-2xl font-[Caveat] line-clamp-2 overflow-hidden text-ellipsis">Tidak ada Songfess yang tersedia</p>  
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