"use client";
import Image from "next/image";
import Link from "next/link";
import { songfessData } from "@/src/components/SongfessSlideshow";
import { useParams } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment, useRef } from "react";
import html2canvas from "html2canvas";

export default function SongfessDetailPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const timeoutRef = useRef(null);
  const modalRef = useRef(null);
  
  const params = useParams();
  const { id } = params;

  const downloadImage = async () => {
    if (modalRef.current){
      const canvas = await html2canvas(modalRef.current, { useCORS: true, scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;

      const songfessItem = songfessData.find((item) => item.id === id);
      const fileName = `${songfessItem ? songfessItem.to + "-songfess-card" : "songfess-card"}.png`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleMouseEnter = () => {
    {/*batalin timeout sebelumnya biar tidak kepending*/}
    clearTimeout(timeoutRef.current);
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    {/*bikin delay 1 detik*/}
    timeoutRef.current = setTimeout(() => {
        setIsHover(false);
    }, 700);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const songfess = songfessData.find((item) => item.id === id);

  if (!songfess) {
    return <h1 className="text-2xl mt-10">Songfess tidak ditemukan</h1>;
  }

  return (
      <>
        <section className="relative pt-[125px] pb-28 px-6 sm:px-16 md:px-12 lg:px-28 bg-yellowBG text-black transition-all duration-500 selection:bg-purple selection:text-white">
          <Image
            src="/chat-anonym/bear-purple.svg"
            width="420"
            height="512"
            alt="bear-purple-illustrasion"
            className="absolute w-[110px] h-[150px] top-24 sm:top-[352px] sm:w-[170px] sm:h-[210px] md:top-64 md:w-[250px] md:h-[290px] lg:w-[360px] lg:h-[452px] xl:w-[420px] xl:h-[512px] lg:top-[300px] left-0 transition-all duration-500 z-10"
          />
          <Image
            src="/chat-anonym/bear-yellow.svg"
            width="262"
            height="320"
            alt="bear-yellow-illustrasion"
            className="absolute w-[120px] h-[160px] top-20 right-0 sm:top-96 sm:right-0 md:top-72 lg:right-2 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-[302px] lg:h-[360px] lg:top-80 xl:right-24 transition-all duration-500 z-10"
          />
          <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={openModal} 
            className={`bg-white modal-card max-w-[849px] p-10 rounded-xl shadow-md text-center mx-auto transition-all duration-1000 ${isHover 
                        ? "scale-105"
                        : "hover:scale-105 scale-100"}`} >
            <div className="max-w-[547px] mx-auto ">
              <h1 className="text-5xl md:text-[64px] leading-none font-[Caveat] font-normal text-purple">
                  Hello, <span className="text-6xl md:text-[64px] font-bold tracking-tight block md:inline">{songfess.to}</span>
              </h1>
              <p className="text-darkPurple text-sm md:text-base font-medium leading-5 mt-7 md:mt-6">
                  There's someone sending you a song, they want you to hear this song
                  that maybe you'll like :)
              </p>
              <div className="rounded-lg bg-[#F5E8FF] max-w-96 mx-auto p-3 mt-7 md:mt-9">
                {/* menyimpan detail lagu */}
                <div className="w-full flex items-center md:items-end gap-4">
                  {/* Image Song */}
                  <div>
                    <Image
                        src={songfess.image}
                        width={128}
                        height={128}
                        alt="Song Image"
                        draggable={false}
                        className="rounded-md"
                    />
                  </div>
                  {/* Title and Artist Song */}
                  <div className="">
                    <h3 className="mb-2 font-[Plus Jakarta Sans] font-semibold text-darkPurple text-2xl tracking-tight text-left">{songfess.songTitle}</h3>
                    <div className="mb-2 flex flex-col-reverse items-start sm:flex sm:flex-row sm:items-end gap-2">
                      <p className="rounded-sm bg-darkPurple text-white text-xs max-w-16 font-light tracking-tight px-2 py-[1px] cursor-default">Preview</p>
                      <p className="font-[Plus Jakarta Sans] text-sm font-medium tracking-tight -mb-1 sm:mb-0">{songfess.artist}</p>
                    </div>
                    <Link href="#" className="flex gap-2">
                      <Image
                        src="/icons/add-plus.svg"
                        width={17}
                        height={17}
                        alt="Add"
                        draggable={false}
                      />
                      <p className="font-medium text-sm tracking-tight text-darkPurple hover:underline">Save on spotify</p>
                    </Link>
                  </div>
                </div>

                {/* div tombol */}
                <div className="w-full mt-2 flex justify-end items-center gap-3">
                  {/* titik tiga */}
                  <div className="relative hover:bg-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500">
                    <Image
                      src="/icons/more-option.svg"
                      width={19}
                      height={4}
                      alt="Add"
                      draggable={false}
                      className="absolute right-[6px]"
                    />
                  </div>
                  {/* tombol pause */}
                  <div className="relative bg-white w-8 h-8 rounded-full flex items-center justify-center">
                    <Image
                      src="/icons/pause.svg"
                      width={11}
                      height={15}
                      alt="Add"
                      draggable={false}
                      className="absolute right-[9px]"
                    />
                  </div>
                </div>
              </div>
              <p className="text-darkPurple font-medium leading-5 mt-6 md:mt-8">
                Also, here's a message from the sender:
              </p>
              <p className="font-semibold mt-4 text-purple text-4xl sm:text-5xl font-[Caveat]">"{songfess.message}"</p>
              <p className="text-darkPurple/80 font-medium leading-5 mt-4 md:mt-6">Sent on {songfess.date}</p>
            </div>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
              <div className="fixed inset-0 bg-black/80" />
              </Transition.Child>
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-out duration-1000"
                    enterFrom="translate-x-full opacity-0"
                    enterTo="translate-x-0 opacity-100"
                    leave="transform transition ease-in duration-1000"
                    leaveFrom="translate-x-0 opacity-100"
                    leaveTo="translate-x-full opacity-0"
                  >
                  <Dialog.Panel
                    ref={modalRef}
                    className={`relative bg-white w-full max-w-[849px] p-8 rounded-xl shadow-md text-center mx-auto transition-all duration-1000`} >
                      <div className="max-w-[547px] mx-auto ">
                        <Dialog.Title className="text-5xl md:text-[64px] font-[Caveat] font-normal text-purple">
                            Hello, <span className="text-6xl md:text-[64px] font-bold tracking-tight block md:inline">{songfess.to}</span>
                        </Dialog.Title>
                        <p className="text-darkPurple text-sm md:text-base font-medium leading-5 mt-7 md:mt-9">
                            There's someone sending you a song, they want you to hear this song
                            that maybe you'll like :)
                        </p>
                        <div className="rounded-lg bg-[#F5E8FF] max-w-96 mx-auto p-3 mt-7 md:mt-9">
                          {/* menyimpan detail lagu */}
                          <div className="w-full flex items-center md:items-end gap-4">
                            {/* Image Song */}
                            <div>
                              <Image
                                  src={songfess.image}
                                  width={128}
                                  height={128}
                                  alt="Song Image"
                                  draggable={false}
                                  className="rounded-md"
                              />
                            </div>
                            {/* Title and Artist Song */}
                            <div className="flex items-end">
                              <div>
                                <h3 className="mb-4 font-[Plus Jakarta Sans] font-semibold text-darkPurple text-2xl tracking-tight text-left">{songfess.songTitle}</h3>
                                <div className="flex flex-col-reverse items-start sm:flex sm:flex-row sm:items-center gap-2 relative">
                                  <button className="rounded-lg bg-darkPurple text-white text-[12px] font-light tracking-tight px-2 cursor-default flex items-end">
                                    <p className="leading-[14px]">Preview</p>
                                  </button>
                                  <span className="font-[Plus Jakarta Sans] text-sm font-medium tracking-tight absolute -top-1 translate-x-16">{songfess.artist}</span>
                                </div>
                                <Link href="#" className="mt-1 flex items-center gap-2">
                                  <Image
                                    src="/icons/add-plus.svg"
                                    width={17}
                                    height={17}
                                    alt="Add"
                                    draggable={false}
                                  />
                                  <p className="font-medium text-sm tracking-tight text-darkPurple hover:underline">Save on spotify</p>
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* div tombol */}
                          <div className="w-full mt-2 flex justify-end items-center gap-3">
                            {/* titik tiga */}
                            <div className="relative hover:bg-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500">
                              <Image
                                src="/icons/more-option.svg"
                                width={19}
                                height={4}
                                alt="Add"
                                draggable={false}
                                className="absolute right-[6px]"
                              />
                            </div>
                            {/* tombol pause */}
                            <div className="relative bg-white w-8 h-8 rounded-full flex items-center justify-center">
                              <Image
                                src="/icons/pause.svg"
                                width={11}
                                height={15}
                                alt="Add"
                                draggable={false}
                                className="absolute right-[9px]"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-darkPurple font-medium leading-5 mt-6 md:mt-8 mb-3">
                          Also, here's a message from the sender:
                        </p>
                        <p className="font-semibold text-purple text-4xl sm:text-5xl font-[Caveat] mb-4 md:mb-7">"{songfess.message}"</p>
                        <p className="text-darkPurple/80 font-medium leading-5">Sent on {songfess.date}</p>
                      </div>
                  </Dialog.Panel>
                  </Transition.Child>
                  {/* Tombol Download (diluar Dialog.Panel agar tidak ikut tertangkap) */}
                  <button
                    onClick={downloadImage}
                    className="absolute top-5 left-5 bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-700 transition-all z-100"
                  >
                    Download as PNG
                  </button>
                  <button onClick={closeModal} className="bg-purple rounded-md p-2 text-white absolute top-5 right-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 fill-current">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </Dialog>
          </Transition>
        </section>
      </>
    );
}
