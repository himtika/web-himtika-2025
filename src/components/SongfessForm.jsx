"use client";
import Image from "next/image";
import { Fragment, useState, useRef } from "react";
import { Combobox, ComboboxInput, Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion, AnimatePresence } from "framer-motion";
import clsx from 'clsx'

// object untuk isi dropdown lagu
const songs = [
    { 
        id: "1",
        songTitle: "Apocalypse",
        artist: "Cigarettes After Sex",
        image: "/songfess/kyoukawallpaper.jpg" 
    },
    { 
        id: "2",
        songTitle: "Blue",
        artist: "Young Kai",
        image: "/songfess/kyoukawallpaper.jpg" 
    },
    { 
        id: "3",
        songTitle: "Ano Yume Wo Nazotte",
        artist: "YOASOBI",
        image: "/songfess/kyoukawallpaper.jpg" 
    },
    { 
        id: "4",
        songTitle: "FIRE BIRD",
        artist: "Roselia",
        image: "/songfess/kyoukawallpaper.jpg" 
    },
    { 
        id: "5",
        songTitle: "lemon",
        artist: "Yurisa",
        image: "/songfess/kyoukawallpaper.jpg" 
    },
]

export default function SongfessForm() {
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState(null);
    const [query, setQuery] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        recipient: "",
    });

    const filteredSong =
    query === ''
        ? songs
        : songs.filter((song) =>
            song.songTitle
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, '')) ||
            song.artist
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    
    // function untuk mengatur discard semua input
    const handleChangeDiscard = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleDiscard = () => {
        setFormData({ name: "", recipient: ""});
        setSelected(null);
        setMessage("");
        textareaRef.current.style.height = "auto"; // Reset height
        setIsClicked(true);
        
        setTimeout(() => {
            setIsClicked(false);
        }, 2000)
    };

    // function untuk tombol delay 1 detik ketika di klik
    const handleClick = () => {
        setIsClicked(true);
        
        setTimeout(() => {
            setIsClicked(false);
        }, 2000)
    }

    const [message, setMessage] = useState("");
    const textareaRef = useRef(null);

    // function untuk textarea supaya menurun kebawah dan tidak ada scroll bar
    const handleChange = (e) => {
        setMessage(e.target.value);
        textareaRef.current.style.height = "auto"; // Reset height
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Sesuaikan dengan konten
    };

    return (
        <>
            <section className="relative pt-28 md:pt-36 pb-28 px-6 sm:px-16 md:px-16 lg:px-28 bg-dual text-black transition-all duration-500 selection:bg-purple selection:text-white">
                <Image
                    src="/chat-anonym/bear-purple.svg"
                    width="210"
                    height="256"
                    alt="bear-purple-illustrasion"
                    className="absolute w-[110px] h-[150px] top-[310px] sm:top-[320px] sm:w-[150px] sm:h-[190px] md:top-60 md:w-[160px] md:h-[200px] lg:w-auto lg:h-auto lg:top-[300px] left-0 transition-all duration-500"
                />
                <Image
                    src="/chat-anonym/bear-yellow.svg"
                    width="105"
                    height="128"
                    alt="bear-yellow-illustrasion"
                    className="absolute top-[320px] -right-5 sm:top-52 sm:right-0 md:top-72 md:right-5 lg:top-96 lg:right-24 transition-all duration-500"
                />
                <h1 className="font-[Caveat] font-bold max-w-md text-5xl md:max-w-xl lg:max-w-full sm:text-6xl md:text-[64px] lg:text-7xl text-purple mt-4 mb-4 sm:mb-2 transition-all duration-500 mx-auto text-center">
                    Send your songfess on Himtalks
                </h1>
                <p className="font-medium text-sm md:text-base text-center text-darkPurple leading-6 sm:leading-7 mt-7 lg:mt-8 max-w-sm sm:max-w-md lg:max-w-3xl flex justify-center mx-auto transition-all duration-500">
                Jangan simpan ceritamu sendiri. Biarkan musik menjadi jembatan untuk menyampaikan perasaanmu.
                </p>

                <div className="bg-darkPurple w-full lg:w-[750px] mt-24 md:mt-16 p-8 text-white rounded-2xl mx-auto selection:bg-white selection:text-darkPurple transition-all duration-500">
                    <form method="post" action="">
                            <div className="w-full">
                                <div className="mb-6">
                                    <h3 className="font-handlee font-bold text-xl font-[Plus Jakarta Sans] cursor-default selection:bg-white selection:text-darkPurple">Send ur Songfess</h3>
                                </div>
                                <div className="mb-6">
                                    <label className="text-white font-normal text-sm font-[Plus Jakarta Sans] selection:bg-white selection:text-darkPurple">Enter ur name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        placeholder="Masukkan nama anda (anonymous) ..." 
                                        value={formData.name}
                                        onChange={handleChangeDiscard}
                                        required 
                                        className="w-full mt-1 font-[Plus Jakarta Sans] font-medium text-sm text-darkPurple rounded-md bg-white p-[11px]  focus:outline-none focus:bg-white focus:placeholder-white placeholder:text-darkPurple/50 placeholder:italic hover:placeholder-darkPurple/90 selection:bg-darkPurple selection:text-white" />
                                </div>
                                <div className="mb-6 relative">
                                    <label className="text-white font-normal text-sm font-[Plus Jakarta Sans] selection:bg-white selection:text-darkPurple">Recipient name</label>
                                    <input 
                                        type="text" 
                                        id="recipient" 
                                        name="recipient" 
                                        value={formData.recipient}
                                        onChange={handleChangeDiscard}
                                        placeholder="Masukkan nama penerima ..." 
                                        required 
                                        className="w-full mt-1 font-[Plus Jakarta Sans] font-medium text-sm text-darkPurple rounded-md bg-white p-[11px] focus:outline-none focus:bg-white focus:placeholder-white f  placeholder:text-darkPurple/50 placeholder:italic hover:placeholder-darkPurple/90 selection:bg-darkPurple selection:text-white" />
                                </div>
                                <div className="mb-6 relative">
                                    <label className="text-white font-normal text-sm font-[Plus Jakarta Sans] selection:bg-white selection:text-darkPurple">Choose song</label>
                                
                                    <Combobox value={selected} onChange={setSelected}>
                                        <div className="relative w-full mt-1">
                                            {/* Input Field */}
                                            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white shadow-md text-left focus:outline-none focus:ring-2 focus:ring-darkPurple sm:text-sm">
                                                <Combobox.Input
                                                    className="w-full font-[Plus Jakarta Sans] font-medium text-sm text-darkPurple rounded-md bg-white p-[11px] focus:outline-none focus:bg-white focus:placeholder-white f  placeholder:text-darkPurple/50 placeholder:italic hover:placeholder-darkPurple/90 selection:bg-darkPurple selection:text-white"
                                                    displayValue={(song) => song ? `${song.songTitle}  •  ${song.artist}` : "" }
                                                    onChange={(event) => setQuery(event.target.value)}
                                                    placeholder="Masukkan lagu ..."
                                                />
                                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </Combobox.Button>
                                            </div>

                                            {/* Options List */}
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                afterLeave={() => setQuery('')}
                                            >
                                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50 custom-scrollbar">
                                                    {filteredSong.length === 0 && query !== '' ? (
                                                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                                            Nothing found.
                                                        </div>
                                                    ) : (
                                                        filteredSong.map((song) => (
                                                            <Combobox.Option
                                                                key={song.id}
                                                                className={({ selected, active }) =>
                                                                    `relative flex items-center gap-3 cursor-pointer select-none py-2 px-4 ${
                                                                        active ? 'bg-purple text-white' : 'text-gray-900'
                                                                    }`
                                                                }
                                                                value={song}
                                                            >
                                                                {({ selected, active }) => (
                                                                    <div className="flex items-center w-full">
                                                                        {/* Gambar Lagu */}
                                                                        <div className="w-12 h-12 flex-shrink-0">
                                                                            <img
                                                                                src={song.image}
                                                                                alt={song.songTitle}
                                                                                className="w-full h-full object-cover rounded-md"
                                                                            />
                                                                        </div>

                                                                        {/* Judul dan Artist */}
                                                                        <div className="ml-4 flex flex-col">
                                                                            <span className={`text-sm font-medium truncate ${active ? 'text-white' : selected ? 'text-darkPurple' : 'text-black'}`}>
                                                                                {song.songTitle}
                                                                            </span>
                                                                            <span className={`text-xs ${active ? 'text-white' : selected ? 'text-darkPurple/80' : 'text-gray-500'}`}>
                                                                                {song.artist}
                                                                            </span>
                                                                        </div>

                                                                        {/* Check Icon */}
                                                                        {selected && (
                                                                            <span className={`absolute right-4 ${active ? 'text-white' : 'text-darkPurple'}`}>
                                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </Combobox.Option>
                                                        ))
                                                    )}
                                                </Combobox.Options>
                                            </Transition>
                                        </div>
                                    </Combobox>
                                </div>
                                <div className="mb-6 relative">
                                    <label className="text-white font-normal text-sm font-[Plus Jakarta Sans] selection:bg-white selection:text-darkPurple">
                                        Message
                                    </label>
                                    <textarea
                                        ref={textareaRef}
                                        id="message"
                                        name="message"
                                        placeholder="Type ur message ..."
                                        required
                                        value={message}
                                        onChange={handleChange}
                                        className="w-full mt-1 font-[Plus Jakarta Sans] font-medium text-sm text-darkPurple rounded-md bg-white p-[11px] border-white focus:outline-none focus:bg-white focus:placeholder-white placeholder:text-darkPurple/50 placeholder:italic hover:placeholder-darkPurple/90 selection:bg-darkPurple selection:text-white resize-none overflow-hidden"
                                        rows={1}
                                    />      
                                </div>
                                <div className="flex max-w-64 w-full gap-4">
                                    <button onClick={handleDiscard} type="button" name="discard" className={`selection:bg-white selection:text-darkPurple transition-all duration-500 font-[Poppins] rounded-md w-full font-medium hover:text-darkPurple py-2 ${isClicked ? "border-2 border-pink-300 bg-pink-300 hover:bg-pink-300  hover:text-white text-white rounded-lg" : "text-white rounded-lg hover:bg-white active:bg-pink-300 active:text-white active:border-pink-300 hover:text-darkPurple hover:border-white border-2 border-purple" }`} >Discard</button>
                                    <button name="submit" className="text-white font-[Poppins] rounded-md w-full bg-purple font-medium hover:bg-white hover:text-darkPurple py-2 transition-all duration-500 selection:bg-white selection:text-purple">Submit</button>
                                </div>
                            </div>
                    </form>
                </div>
            </section>
        </>
    );
}