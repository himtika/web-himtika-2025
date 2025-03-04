import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section className="pt-[125px] pb-28 px-6 sm:px-16 md:px-12 lg:px-28 bg-yellowBG text-black  transition-all duration-500 selection:bg-purple selection:text-white">
                <h1 className="font-[Caveat] font-bold text-6xl sm:text-7xl text-purple mt-4 mb-4 sm:mb-0 leading-10 transition-all duration-500 text-center">
                    Himtalks
                </h1>
                <div className="w-full flex flex-col lg:flex-col-reverse items-center text-center transition-all duration-500">
                    <div className="flex items-start justify-center">
                        <Image
                            src="/himtalks/illustrasion-hero.svg"
                            width="500"
                            height="429"
                            alt="illustrasion"
                            className="w-80 h-56 md:w-96 md:h-80 lg:w-[500px] lg:h-[380px]"
                        />
                    </div>
                    <p className="font-normal text-sm sm:text-base text-center text-darkPurple leading-6 sm:leading-7 mt-7 max-w-md sm:max-w-lg md:max-w-xl flex justify-center mx-auto transition-all duration-500">
                    Sampaikan kritik, saran, atau cerita anonimmu, dan ekspresikan perasaanmu melalui fitur songfess. Yuk, mulai berbagi dan berkomunikasi bersama kami!
                    </p>
                </div>
            </section>
        </>
    );
}