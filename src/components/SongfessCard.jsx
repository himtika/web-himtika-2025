"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function SongfessCard(){
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
                <div className="grid gap-[50px] sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 max-w-[770px] mx-auto">
                    {/* Card 1 */}
                    <div className="">
                        <div 
                            onMouseEnter={handleMouseEnterCard}
                            onMouseLeave={handleMouseLeaveCard}
                            className={` rounded-2xl shadow-lg overflow-hidden transition-all duration-700 group max-w-full sm:max-w-[400px] md:max-w-[450px] mx-auto lg:max-w-full ${isHoverCard ? "bg-purple scale-105" : "hover:bg-purple hover:scale-105 bg-white scale-100"}`}>
                            <div className={`relative min-h-60 bg-[#F5E8FF] flex items-center justify-center transition-all duration-700 ${isHoverCard ? "bg-white" : "group-hover:bg-white bg-[#F5E8FF]" }`}>
                                <Image
                                    src="/songfess/songfess-image-card-1.svg"
                                    width={150}
                                    height={163}
                                    alt="Chat Anonym"
                                    draggable={false}
                                    className="object-contain absolute top-14"
                                />
                            </div>
                            <div className="px-5 pb-5 pt-10 font-[Plus Jakarta Sans] text-white">
                                <h3 className={`block mb-3 font-semibold text-2xl transition-all duration-700 ${isHoverCard ? "text-white " : "group-hover:text-white text-darkPurple"}`}>
                                Explore the messages waiting for you.
                                </h3>
                                <p className={`font-normal text-sm mb-6 leading-6 transition-all duration-700 ${isHoverCard ? "text-white" : "group-hover:text-white text-darkPurple"}`}>
                                    Ada pesan yang menunggu untuk kamu dengarkan—temukan Songfess yang ditujukan untukmu.
                                </p>
                                <Link 
                                    href="/himtalks/songfess/browse-songfess"
                                    className="inline-flex justify-center items-center gap-2 bg-purple hover:bg-white text-white hover:text-purple py-2 px-4 rounded-lg hover:opacity-80 transition duration-500 group-hover:bg-darkPurple peer"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    >
                                    <p className="font-light font-[Poppins] text-sm peer-hover:text-purple text-white transition-all duration-500">
                                        Browse Now
                                    </p>
                                    <svg 
                                        width="28" 
                                        height="28" 
                                        viewBox="0 0 32 32" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`transition-transform duration-700 ${isHover ? "scale-90 rotate-45" : "peer-hover:scale-90 peer-hover:rotate-45 scale-100 rotate-0"}`}
                                        >
                                        <path d="M28 28L22.2 22.2M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="">
                        <div 
                            onMouseEnter={handleMouseEnterCard2}
                            onMouseLeave={handleMouseLeaveCard2}
                            className={` rounded-2xl shadow-lg overflow-hidden transition-all duration-700 group min-h-60 max-w-full sm:max-w-[400px] md:max-w-[450px] mx-auto lg:max-w-full ${isHoverCard2 ? "bg-purple scale-105" : "hover:bg-purple hover:scale-105 bg-white scale-100"}`}>
                            <div className={`min-h-60 bg-[#F5E8FF] flex items-center justify-center transition-all duration-700 ${isHoverCard2 ? "bg-white" : "group-hover:bg-white bg-[#F5E8FF]" }`}>
                                <Image
                                    src="/songfess/songfess-image-card-2.svg"
                                    width="244"
                                    height="201"
                                    alt="Songfess"
                                    draggable="false"
                                    className="object-contain"
                                />
                            </div>
                            <div className="px-5 pb-5 pt-10 font-[Plus Jakarta Sans] text-white">
                                <h3 className={`block mb-3 font-semibold text-2xl transition-all duration-700 ${isHoverCard2 ? "text-white " : "group-hover:text-white text-darkPurple"}`}>
                                Reveal your untold story. Feel it, sing it.
                                </h3>
                                <p className={`font-normal text-sm mb-6 leading-6 transition-all duration-700 ${isHoverCard2 ? "text-white" : "group-hover:text-white text-darkPurple"}`}>
                                    Jangan simpan ceritamu sendiri. Biarkan musik menjadi jembatan untuk menyampaikan perasaanmu.
                                </p>
                                <Link 
                                    href="/himtalks/songfess/form-songfess"
                                    className="inline-flex justify-center items-center gap-2 bg-purple hover:bg-white text-white hover:text-purple py-2 px-4 rounded-lg hover:opacity-80 transition duration-500 group-hover:bg-darkPurple peer"
                                    onMouseEnter={handleMouseEnterButton2}
                                    onMouseLeave={handleMouseLeaveButton2}
                                    >
                                    <p className="font-light font-[Poppins] text-sm peer-hover:text-purple text-white transition-all duration-500">
                                        Send Now
                                    </p>
                                    <svg 
                                        role="img" 
                                        className={`transition-transform duration-700 ${isHoverButton2 ? "rotate-90" : " peer-hover:rotate-90 rotate-0"}`}  width="33" 
                                        height="32" 
                                        viewBox="0 0 33 32" 
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.8335 22.6667L23.1668 9.33337M23.1668 9.33337H9.8335M23.1668 9.33337V22.6667" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}