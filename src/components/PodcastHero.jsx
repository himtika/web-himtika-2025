import Link from "next/link";
import Image from "next/image";

export default function PodcastHero() {
    return (
        <>
            <section className="pt-[125px] pb-28 px-6 sm:px-16 md:px-12 lg:px-28 bg-yellowBG text-black  transition-all duration-500 selection:bg-purple selection:text-white">
                <h1 className="font-[Caveat] font-bold text-5xl sm:text-6xl max-w-lg sm:max-w-xl md:max-w-3xl mx-auto text-purple mt-4 mb-4 sm:mb-0 leading-10 transition-all duration-500 text-center">
                Every story deserves to be heard, every voice deserves to be felt.
                </h1>
                <div className="w-full flex flex-col lg:flex-col-reverse items-center text-center transition-all duration-500">
                    <div className="flex items-start justify-center">
                        <Image
                            src="/podcast/Friends.svg"
                            width="512"
                            height="512"
                            alt="illustrasion"
                            className="w-80 h-72 md:w-96 md:h-80 lg:w-[512px] lg:h-[512px]"
                        />
                    </div>
                    <p className="font-normal text-sm sm:text-base text-center text-darkPurple leading-6 sm:leading-7 mt-7 max-w-md sm:max-w-lg md:max-w-xl flex justify-center mx-auto transition-all duration-500">
                    Let your thoughts flow, let your voice be the melody.
                    </p>
                </div>
            </section>
        </>
    );
}