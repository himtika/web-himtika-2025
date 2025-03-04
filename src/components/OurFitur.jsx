"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function OurFitur(){
    const [isHover, setIsHover] = useState(false);
    const [isHoverButton2, setIsHoverButton2] = useState(false);
    const [isHoverButton3, setIsHoverButton3] = useState(false);
    const [isHoverCard, setIsHoverCard] = useState(false);
    const [isHoverCard2, setIsHoverCard2] = useState(false);
    const [isHoverCard3, setIsHoverCard3] = useState(false);
    const timeoutRef = useRef(null);
    const timeoutRefButton2 = useRef(null);
    const timeoutRefButton3 = useRef(null);
    const timeoutRefCard = useRef(null);
    const timeoutRefCard2 = useRef(null);
    const timeoutRefCard3 = useRef(null);

        const handleMouseEnter = () => {
            {/*batalin timeout sebelumnya biar tidak kepending*/}
            clearTimeout(timeoutRef.current);
            setIsHover(true);
        }

        const handleMouseLeave = () => {
            {/*bikin delay 1 detik*/}
            timeoutRef.current = setTimeout(() => {
                setIsHover(false);
            }, 700);
        }

        const handleMouseEnterButton2 = () => {
            {/*batalin timeout sebelumnya biar tidak kepending*/}
            clearTimeout(timeoutRefButton2.current);
            setIsHoverButton2(true);
        }

        const handleMouseLeaveButton2 = () => {
            {/*bikin delay 1 detik*/}
            timeoutRefButton2.current = setTimeout(() => {
                setIsHoverButton2(false);
            }, 700);
        }

        const handleMouseEnterButton3 = () => {
            {/*batalin timeout sebelumnya biar tidak kepending*/}
            clearTimeout(timeoutRefButton3.current);
            setIsHoverButton3(true);
        }

        const handleMouseLeaveButton3 = () => {
            {/*bikin delay 1 detik*/}
            timeoutRefButton3.current = setTimeout(() => {
                setIsHoverButton3(false);
            }, 700);
        }

        const handleMouseEnterCard = () => {
            {/*batalin timeout sebelumnya biar tidak kepending*/}
            clearTimeout(timeoutRefCard.current);
            setIsHoverCard(true);
        }

        const handleMouseLeaveCard = () => {
            {/*bikin delay 1 detik*/}
            timeoutRefCard.current = setTimeout(() => {
                setIsHoverCard(false);
            }, 500);
        }

        const handleMouseEnterCard2 = () => {
            {/*batalin timeout sebelumnya biar tidak kepending*/}
            clearTimeout(timeoutRefCard2.current);
            setIsHoverCard2(true);
        }

        const handleMouseLeaveCard2 = () => {
            {/*bikin delay 1 detik*/}
            timeoutRefCard2.current = setTimeout(() => {
                setIsHoverCard2(false);
            }, 500);
        }

        const handleMouseEnterCard3 = () => {
            {/*batalin timeout sebelumnya biar tidak kepending*/}
            clearTimeout(timeoutRefCard3.current);
            setIsHoverCard3(true);
        }

        const handleMouseLeaveCard3 = () => {
            {/*bikin delay 1 detik*/}
            timeoutRefCard3.current = setTimeout(() => {
                setIsHoverCard3(false);
            }, 500);
        }

    return (
        <>
            <section className="pt-20 lg:pt-[135px] pb-28 px-7 md:px-16 lg:px-28 bg-yellowBG text-black  transition-all duration-500 selection:bg-purple selection:text-white">
                <div className="w-full text-center mb-14 lg:mb-20">
                    <h1 className="font-[Caveat] font-bold text-6xl md:text-7xl text-purple mt-4">
                        Our Fitur
                    </h1>
                    <p className="font-normal text-base text-center text-darkPurple leading-7 mt-4 lg:max-w-xl flex justify-center mx-auto">
                    Himtalks hadir dengan tiga fitur utama yang menarik, yaitu Pesan Anonym, Songfess, dan Podcast.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {/* Card 1 */}
                    <div className="">
                        <div 
                            onMouseEnter={handleMouseEnterCard}
                            onMouseLeave={handleMouseLeaveCard}
                            className={` rounded-2xl shadow-lg overflow-hidden transition-all duration-700 group max-w-full sm:max-w-[400px] md:max-w-[500px] mx-auto lg:max-w-full ${isHoverCard ? "bg-white scale-105" : "hover:bg-white hover:scale-105 bg-purple scale-100"}`}>
                            <div className={`min-h-60 bg-chatAnonymBG flex items-center justify-start  transition-all duration-700 ${isHoverCard ? "bg-white" : "group-hover:bg-white bg-chatAnonymBG" }`}>
                                <Image
                                    src="/chat-anonym/chat-anonym-asset.svg"
                                    width={265}
                                    height={189}
                                    alt="Chat Anonym"
                                    draggable={false}
                                    className="object-contain"
                                />
                            </div>
                            <div className="px-5 pb-5 pt-10 font-[Plus Jakarta Sans] text-white">
                                <h3>
                                    <Link href="#" className={`block mb-3 font-semibold text-2xl transition-all duration-700 ${isHoverCard ? "text-black " : "group-hover:text-black text-white"}`}>
                                    Chat Anonym
                                    </Link>
                                </h3>
                                <p className={`font-normal text-sm mb-6 leading-6 transition-all duration-700 ${isHoverCard ? "text-black" : "group-hover:text-black text-white"}`}>
                                    Kirimkan pesanmu tanpa mengungkap identitas melalui fitur Pesan Anonim,
                                </p>
                                <button 
                                    className="inline-flex justify-center items-center gap-2 bg-darkPurple py-2 px-4 rounded-lg hover:opacity-80 transition duration-500 peer"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    >
                                    <Link href="#" className="font-light font-[Poppins] text-sm text-white">
                                        Send Now
                                    </Link>
                                    <svg className={`transition-transform duration-700 ${isHover ? "rotate-90" : "peer-hover:rotate-90 rotate-0"}`}  width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.8335 22.6667L23.1668 9.33337M23.1668 9.33337H9.8335M23.1668 9.33337V22.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="">
                        <div 
                            onMouseEnter={handleMouseEnterCard2}
                            onMouseLeave={handleMouseLeaveCard2}
                            className={` rounded-2xl shadow-lg overflow-hidden transition-all duration-700 group min-h-60 max-w-full sm:max-w-[400px] md:max-w-[500px] mx-auto lg:max-w-full ${isHoverCard2 ? "bg-white scale-105" : "hover:bg-white hover:scale-105 bg-purple scale-100"}`}>
                            <div className={`min-h-60 bg-songfessBG flex items-center justify-center transition-all duration-700 ${isHoverCard2 ? "bg-white" : "group-hover:bg-white bg-songfessBG" }`}>
                                <Image
                                    src="/songfess/songfess-asset.svg"
                                    width="288"
                                    height="192"
                                    alt="Songfess"
                                    draggable="false"
                                    className="object-contain"
                                />
                            </div>
                            <div className="px-5 pb-5 pt-10 font-[Plus Jakarta Sans] text-white">
                                <h3>
                                    <Link href="#" className={`block mb-3 font-semibold text-2xl transition-all duration-700 ${isHoverCard2 ? "text-black " : "group-hover:text-black text-white"}`}>
                                    Songfess
                                    </Link>
                                </h3>
                                <p className={`font-normal text-sm mb-6 leading-6 transition-all duration-700 ${isHoverCard2 ? "text-black" : "group-hover:text-black text-white"}`}>
                                    Ekspresikan perasaanmu melalui fitur 
                                    <span className="block">Songfess!</span> 
                                </p>
                                <button 
                                    className="inline-flex justify-center items-center gap-2 bg-darkPurple py-2 px-4 rounded-lg hover:opacity-80 transition duration-500 peer"
                                    onMouseEnter={handleMouseEnterButton2}
                                    onMouseLeave={handleMouseLeaveButton2}
                                    >
                                    <Link href="#" className="font-light font-[Poppins] text-sm text-white">
                                        Send Now
                                    </Link>
                                    <svg className={`transition-transform duration-700 ${isHoverButton2 ? "rotate-90" : "peer-hover:rotate-90 rotate-0"}`}  width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.8335 22.6667L23.1668 9.33337M23.1668 9.33337H9.8335M23.1668 9.33337V22.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div 
                        onMouseEnter={handleMouseEnterCard3}
                        onMouseLeave={handleMouseLeaveCard3}
                        className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-700 group min-h-60 max-w-full sm:max-w-[400px] md:max-w-[500px] mx-auto lg:max-w-full ${isHoverCard3 ? "bg-white scale-105" : "hover:bg-white hover:scale-105 bg-purple scale-100"}`}>
                        <div className={`bg-podcastBG flex items-center justify-center transition-all duration-700 ${isHoverCard3 ? "bg-white" : "group-hover:bg-white bg-podcastBG" }`}>
                            <Image 
                                src="/podcast/podcast-asset.svg" 
                                width={341}
                                height={264} 
                                alt="Podcast"
                                draggable="false" 
                                className="object-contain"
                            />
                        </div>  
                        <div className="px-5 pb-5 pt-10 font-[Plus Jakarta Sans] text-white">
                            <h3>
                                <Link href="#" className={`block mb-3 font-semibold text-2xl transition-all duration-700 ${isHoverCard3 ? "text-black " : "group-hover:text-black text-white"}`}>
                                Podcast
                                </Link>
                            </h3>
                            <p className={`font-normal text-sm mb-6 leading-6 transition-all duration-700 ${isHoverCard3 ? "text-black" : "group-hover:text-black text-white"}`}>
                                🎧 Dengarkan, resapi, dan temukan kisah yang relate denganmu!
                            </p>
                            <button 
                                className="inline-flex justify-center items-center gap-2 bg-darkPurple py-2 px-4 rounded-lg hover:opacity-80 transition duration-500 peer"
                                onMouseEnter={handleMouseEnterButton3}
                                onMouseLeave={handleMouseLeaveButton3}
                                >
                                <Link href="#" className="font-light font-[Poppins] text-sm text-white">
                                    Play Now
                                </Link>
                                <svg className={`transition-transform duration-700 ${isHoverButton3 ? "rotate-90" : "peer-hover:rotate-90 rotate-0"}`}  width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.8335 22.6667L23.1668 9.33337M23.1668 9.33337H9.8335M23.1668 9.33337V22.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}