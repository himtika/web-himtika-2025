import Link from "next/link";
import Image from "next/image";

export default function AboutUs(){
    return (
        <>
            <div className="pt-12 lg:pt-20 pb-28 px-6 sm:px-16 md:px-12 lg:px-28 bg-yellowBG text-black transition-all duration-500 selection:bg-purple selection:text-white">
                <div className="grid lg:grid-cols-2 grid-cols-1 w-full lg:gap-5 xl:gap-0">
                    <div className="w-full flex items-start md:justify-start xl:justify-center transition-all duration-500">
                        <Image
                            src="/himtalks/about-us.svg"
                            width="450"
                            height="450"
                            alt="illustrasion"
                            className="hidden lg:block"
                        />      
                    </div>
                    <div className="w-full flex flex-col lg:flex-row items-center">
                        <div>
                            <h1 className="w-full font-[Caveat] font-bold text-6xl md:text-7xl text-purple text-center -mb-8 lg:mb-0 lg:text-left transition-all duration-500">
                                About us
                            </h1>
                            <div className="flex justify-center transition-all duration-500">
                                <Image
                                    src="/himtalks/about-us.svg"
                                    width="450"
                                    height="50"
                                    alt="illustrasion"
                                    className="block w-96 h-80 md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[380px] lg:hidden"
                                />   
                            </div>
                            <p className="font-[Plus Jakarta Sans] font-normal text-base text-center text-darkPurple leading-6 max-w-xl w-full mx-auto lg:text-justify lg:mt-6">
                            Himtalks adalah platform yang bertujuan menjadi penghubung dan sarana komunikasi antara pengurus Himtika dengan anggota maupun mahasiswa lainnya. Himtalks menyediakan fasilitas untuk menyampaikan kritik dan saran yang membangun, serta memungkinkan pengiriman pesan anonim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}