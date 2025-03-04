"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { songfessData } from "./SongfessSlideshow";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const navRef = useRef(null);
    const pathname = usePathname();
    const activ = usePathname();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // function untuk mengatur jika navbar mode mobie di klik di luar navbar, maka navbar akan tertutup
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)){
                setIsOpen(false);
            }
        } 

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // function untuk mengatur navbar mode mobile dan mode dekstop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false); // Tutup navbar saat masuk ke mode desktop (lg:)
                setIsDesktop(true);
            } else {
                setIsDesktop(false)
            }
        };
    
        // Jalankan sekali saat component pertama kali dimuat
        handleResize();
    
        // Tambahkan event listener
        window.addEventListener("resize", handleResize);
    
        // Bersihkan event listener saat component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // function untuk menutup navbar mobile ketika berpindah halamana
    useEffect(() => {
        setIsOpen(false); // Tutup navbar setiap kali pathname berubah
    }, [pathname]); // Gunakan pathname sebagai dependensi

    return (
        <>
            <header className="w-full fixed px-6 py-5 bg-gradient-to-r from-pinkNavbar via-pinkNavbar to-purpleNavbar text-white z-50 transition-all duration-500 sm:px-16 lg:px-28 lg:py-6">
                <div className="flex justify-between items-center selection:bg-white selection:text-purple">
                        <Link href="/himtalks" className="font-[Plus Jakarta Sans] font-semibold text-2xl md:text-3xl lg:text-4xl text-yellowBright transition-all duration-500">Himtalks</Link>
                        <div ref={navRef}>
                            {!isDesktop && (
                                <button
                                onClick={toggleNavbar}
                                id="hamburger"
                                name="hamburger"
                                type="button"
                                className="block lg:hidden"
                                >
                                    <span
                                        className={`sm:w-[30px] sm:my-[6px] w-7 h-[3px] my-[5px] rounded-full block bg-white origin-top-left transition duration-500 ease-in-out ${isOpen ? "rotate-45 translate-x-2 -translate-y-[2px]" : ""}`}
                                    ></span>
                                    <span
                                        className={`sm:w-[30px] sm:my-[6px] w-7 h-[3px] my-[5px] rounded-full block bg-white transition duration-500 ease-in-out ${isOpen ? "scale-0" : ""}`} 
                                    ></span>
                                    <span
                                        className={`sm:w-[30px] sm:my-[6px] w-7 h-[3px] my-[5px] rounded-full block bg-white origin-bottom-left transition duration-500 ease-in-out ${isOpen ? "-rotate-45 translate-x-2" : ""}`}
                                    ></span>
                                </button>   
                            )}

                            {/* Navbar Mode Mobile */}
                            {!isDesktop && (
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.nav 
                                            initial={{ opacity: 0, y: 0 }} // Mulai dengan opacity 0 dan naik ke atas
                                            animate={{ opacity: 1, y: 0 }} // Muncul dengan fade-in
                                            exit={{ opacity: 0, y: 0 }} // Menghilang dengan fade-out ke atas
                                            transition={{ duration: 0.3 }} // Durasi animasi
                                            className={`absolute transform p-5 bg-white shadow-lg rounded-lg left-5 right-5 sm:left-16 sm:right-16 top-[77px] md:top-20 transition-all duration-500`} >
                                            <ul className="flex flex-col items-center gap-4 text-center">
                                                <Link href="/himtalks/" className={
                                                    activ === "/himtalks"
                                                    ? "w-full rounded-md py-1 text-white bg-purple font-[Plus Jakarta Sans] font-normal text-lg transition-all duration-500"
                                                    : "w-full rounded-md py-1 text-darkPurple lg:text-white hover:bg-purple hover:text-white font-[Plus Jakarta Sans] font-normal text-lg transition-all duration-500"} >
                                                    <li>Home</li>
                                                </Link>
                                                <Link href="/himtalks/songfess" className={
                                                    activ === "/himtalks/songfess" || activ.startsWith("/himtalks/songfess/")
                                                    ? "w-full rounded-md py-1 text-white bg-purple font-[Plus Jakarta Sans] font-normal text-lg transition-all duration-500"
                                                    : "w-full rounded-md py-1 text-darkPurple lg:text-white hover:bg-purple hover:text-white font-[Plus Jakarta Sans] font-normal text-lg transition-all duration-500"
                                                } >
                                                    <li>Songfess</li>
                                                </Link>
                                                <Link href="/himtalks/chat-anonym" className={
                                                    activ === "/himtalks/chat-anonym"
                                                    ? "w-full rounded-md py-1 text-white bg-purple font-[Plus Jakarta Sans] font-normal text-lg transition-all duration-500"
                                                    : "w-full rounded-md py-1 text-darkPurple lg:text-white hover:bg-purple hover:text-white font-[Plus Jakarta Sans] font-normal text-lg transition-all duration-500"
                                                } >
                                                    <li>Chat Anonym</li>
                                                </Link>
                                                <Link href="/himtalks/podcast" className={
                                                    activ === "/himtalks/podcast"
                                                    ? "w-full rounded-md py-1 text-white bg-purple font-[Plus Jakarta Sans] font-normal text-lg transition-all duration-500"
                                                    : "w-full rounded-md py-1 text-darkPurple lg:text-white hover:bg-purple hover:text-white font-[Plus Jakarta Sans] font-normal text-lg transition-all duration-500"
                                                } >
                                                    <li>Podcast</li>
                                                </Link>
                                            </ul>
                                        </motion.nav>
                                    )}
                                </AnimatePresence> 
                            )}
                            
                            {/* Navbar Mode Desktop */}
                            {isDesktop && (
                                <nav className={`lg:block`} >
                                    <ul className="flex gap-[70px] text-center">
                                        <li className="text-white">
                                            <Link href="/himtalks/" className="font-[Plus Jakarta Sans] font-medium text-xl">Home</Link>
                                        </li>
                                        <li className="w-full rounded-md py-1 text-darkPurple hover:bg-purple hover:text-white lg:hover:bg-transparent lg:text-white lg:py-0 lg:rounded-none lg:w-auto transition duration-500">
                                            <Link href="/himtalks/songfess" className="font-[Plus Jakarta Sans] font-medium text-xl">Songfess</Link>
                                        </li>
                                        <li className="w-full rounded-md py-1 text-darkPurple hover:bg-purple hover:text-white lg:hover:bg-transparent lg:hover:text-white lg:text-white lg:py-0 lg:rounded-none lg:w-auto transition duration-500">
                                            <Link href="/himtalks/chat-anonym" className="font-[Plus Jakarta Sans] font-medium text-xl">Chat Anonym</Link>
                                        </li>
                                        <li className="w-full rounded-md py-1 text-darkPurple hover:bg-purple hover:text-white lg:hover:bg-transparent lg:text-white lg:py-0 lg:rounded-none lg:w-auto transition duration-500">
                                            <Link href="/himtalks/podcast" className="font-[Plus Jakarta Sans] font-medium text-xl">Podcast</Link>
                                        </li>
                                    </ul>
                                </nav>
                            )}
                        </div>
                </div>
            </header>
        </>
    )
}