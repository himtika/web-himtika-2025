import Link from "next/link";
import Image from "next/image";

export default function SongfessHero() {
    return (
        <>
            <section className="pt-24 md:pt-[125px] pb-28 px-6 sm:px-16 md:px-12 lg:px-28 bg-yellowBG text-black  transition-all duration-500 selection:bg-purple selection:text-white">
                <h1 className="font-[Caveat] font-bold text-4xl sm:text-[42px] md:text-5xl lg:text-6xl md:max-w-[850px] text-purple mt-4 mb-4 lg:mb-0 leading-10 transition-all duration-500 text-center mx-auto">
                    Even the toughest feelings can be shared in unique and meaningful ways.
                </h1>
                <div className="w-full flex flex-col lg:flex-col-reverse items-center text-center transition-all duration-500">
                    <div className="flex items-start justify-center">
                        <Image
                            src="/songfess/Music - Celebrate.svg"
                            width="445"
                            height="445"
                            alt="illustrasion"
                            className="w-80 h-56 md:w-[350px] md:h-[350px] lg:w-[445px] lg:h-[445px] transition-all duration-500"
                        />
                    </div>
                    <p className="font-normal text-sm sm:text-base text-center text-darkPurple leading-6 sm:leading-7 mt-2 lg:mt-7 max-w-md sm:max-w-lg md:max-w-xl flex justify-center mx-auto transition-all duration-500">
                    Let the song speak the words you can't say.
                    </p>
                </div>
            </section>
        </>
    );
}