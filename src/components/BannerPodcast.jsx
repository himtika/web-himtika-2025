"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BannerPodcast(){
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
        
        setTimeout(() => {
            setIsClicked(false);
        }, 2000)
    }
    return (
        <>
            <section className="pt-14 lg:pt-28 pb-28 px-6 sm:px-16 md:px-14 lg:px-28 bg-yellowBG text-black transition-all duration-500 selection:bg-purple selection:text-white">
                <div className="w-full flex items-center justify-center">
                    {/*w-[80%] max-w-4xl   (Jika banner podcastnya tidak full layar)*/}
                    <div className="relative w-full h-auto md:h-full rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/podcast/podcast.svg"
                            width="1024"
                            height="512"
                            alt="podcast"
                            className="w-full h-[512px] md:h-full object-cover aspect-[9/16] md:aspect-auto"
                        />

                        {/* Overlay
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div> */}

                        {/* Konten di atas gambar */}
                        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-white">
                            <h1 className="text-2xl font-semibold font-[Plus Jakarta Sans]">Obrolan Seru & Relatable</h1>
                            <p className="text-sm font-medium max-w-xl mt-4 font-[Plus Jakarta Sans]">
                                Dari cinta, persahabatan, hingga perjalanan hidup, semua dikemas dalam diskusi ringan dan menyenangkan.
                            </p>

                            {/* Tombol */}
                            <div className="mt-4 flex space-x-4">
                                <button onClick={handleClick} className={` transition duration-300 font-[Plus Jakarta Sans] ${isClicked ? "w-32 h-10 bg-pink-300 hover:bg-pink-300 border-pink-300 hover:text-white text-white rounded-lg" : "w-32 h-10 border border-white text-white rounded-lg hover:bg-white active:bg-pink-300 active:text-white active:border-pink-300 hover:text-darkPurple"}`}>
                                See more
                                </button>
                                <button className="relative w-32 h-10 text-white rounded-lg overflow-hidden group">
                                    {/* Background default */}
                                    <span className="absolute inset-0 bg-gradient-to-t from-[#6D2199] to-purple transition-all duration-300 group-hover:opacity-0"></span>

                                    {/* Background saat hover */}
                                    <span className="absolute inset-0 bg-gradient-to-t from-purple to-[#6D2199] transition-all duration-300 opacity-0 group-hover:opacity-100"></span>

                                    {/* Teks tombol */}
                                    <span className="relative z-10 font-[Plus Jakarta Sans]">Play</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}