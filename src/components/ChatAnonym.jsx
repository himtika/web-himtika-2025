"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion, AnimatePresence } from "framer-motion";
import clsx from 'clsx'

// object untuk isi dropdown Kategori Pesan
const pilihan = [
    { id: 1, name: 'Kritik' },
    { id: 2, name: 'Saran' }
]

export default function ChatAnonym() {
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        recipient: "",
    });
    
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
            <section className="relative pt-36 sm:pt-44 pb-28 px-6 sm:px-16 md:px-16 lg:px-28 bg-dual text-black transition-all duration-500 selection:bg-purple selection:text-white">
                <Image
                    src="/chat-anonym/bear-purple.svg"
                    width="210"
                    height="256"
                    alt="bear-purple-illustrasion"
                    className="absolute w-[110px] h-[150px] top-[340px] sm:top-[352px] sm:w-[150px] sm:h-[190px] md:top-60 md:w-[160px] md:h-[200px] lg:w-auto lg:h-auto lg:top-[300px] left-0 transition-all duration-500"
                />
                <Image
                    src="/chat-anonym/bear-yellow.svg"
                    width="105"
                    height="128"
                    alt="bear-yellow-illustrasion"
                    className="absolute top-[350px] -right-5 sm:top-52 sm:right-0 md:top-72 md:right-5 lg:top-96 lg:right-24 transition-all duration-500"
                />
                <h1 className="font-[Caveat] font-bold max-w-[350px] md:max-w-full text-6xl md:text-[64px] lg:text-7xl text-purple mt-4 mb-4 sm:mb-2 transition-all duration-500 mx-auto text-center">
                    Speak freely, stay anonymous
                </h1>
                <p className="font-medium text-base text-center text-darkPurple leading-6 sm:leading-7 mt-7 lg:mt-9 max-w-sm sm:max-w-md lg:max-w-xl flex justify-center mx-auto transition-all duration-500">
                Kirimkan pesanmu tanpa mengungkap identitas melalui fitur Pesan Anonim
                </p>

                <div className="bg-darkPurple w-full lg:w-[750px] mt-24 md:mt-16 p-8 text-white rounded-2xl mx-auto selection:bg-white selection:text-darkPurple transition-all duration-500">
                    <form method="post" action="">
                            <div className="w-full">
                                <div className="mb-6">
                                    <h3 className="font-handlee font-bold text-xl font-[Plus Jakarta Sans] cursor-default selection:bg-white selection:text-darkPurple">Send ur Anonym Chat</h3>
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
                                    <label className="text-white font-normal text-sm font-[Plus Jakarta Sans] selection:bg-white selection:text-darkPurple">Message category</label>
                                    <Listbox value={selected} onChange={setSelected}>
                                        {({ open }) => (
                                            <div>
                                                <ListboxButton
                                                className={clsx(
                                                    'relative block w-full selection:bg-darkPurple selection:text-white rounded-md font-[Plus Jakarta Sans] bg-white p-[10px] mt-1 text-left font-medium text-sm/6  hover:text-darkPurple focus:bg-white focus:placeholder-white',
                                                    selected
                                                    ? "text-darkPurple hover:text-darkPurple font-semibold not-italic " // Jika sudah memilih
                                                    : "text-darkPurple/50 italic font-medium" // Jika belum memilih
                                                )}
                                                >
                                                {selected ? selected.name : "Pilih kategori ..."}
                                                <ChevronDownIcon
                                                    className={clsx(
                                                        "group pointer-events-none absolute top-3.5 right-2.5 size-4 fill-darkPurple transition-transform duration-500",
                                                        { "rotate-180" : open }
                                                    )} 
                                                    aria-hidden="true"
                                                />
                                                </ListboxButton>

                                                <AnimatePresence>
                                                    {open && (
                                                        <ListboxOptions
                                                            static
                                                            as={motion.div}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 1 }}
                                                            // anchor="bottom"
                                                            className={clsx(
                                                                'w-full mt-2 rounded-md border-2 border-white bg-white p-1 transition-all duration-500 [--anchor-gap:var(--spacing-1)] focus:outline-none'
                                                            )}
                                                        >
                                                            {pilihan.map((person) => (
                                                                <ListboxOption
                                                                    key={person.id}
                                                                    value={person}
                                                                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-darkPurple data-[focus]:text-white"
                                                                >
                                                                    <CheckIcon className="invisible size-5 fill-darkPurple group-data-[selected]:visible group-hover:fill-white group-data-[focus]:fill-white" />
                                                                    <div className="text-sm/6 text-darkPurple group-hover:text-white group-data-[focus]:text-white">{person.name}</div>
                                                                </ListboxOption>
                                                            ))}
                                                        </ListboxOptions>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )}
                                    </Listbox>
                                    {/* <Listbox value={selected} onChange={setSelected}>
                                        {({ open }) => (
                                            <div>
                                                <ListboxButton
                                                className={clsx(
                                                    'relative block w-full rounded-md font-[Plus Jakarta Sans] bg-white p-[10px] mt-1 text-left font-medium text-sm/6  hover:text-darkPurple focus:bg-white focus:placeholder-white',
                                                    selected
                                                    ? "text-darkPurple hover:text-darkPurple font-semibold not-italic " // Jika sudah memilih
                                                    : "text-darkPurple/50 italic font-medium" // Jika belum memilih
                                                )}
                                                >
                                                {selected ? selected.name : "Pilih kategori ..."}
                                                <ChevronDownIcon
                                                    className={clsx(
                                                        "group pointer-events-none absolute top-3.5 right-2.5 size-4 fill-darkPurple transition-transform duration-500",
                                                        { "rotate-180" : open }
                                                    )} 
                                                    aria-hidden="true"
                                                />
                                                </ListboxButton>
                                                <ListboxOptions
                                                anchor="bottom"
                                                transition
                                                className={clsx(
                                                    'w-[var(--button-width)] mt-3 rounded-xl border-2 border-white bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                                                    'transition duration-500 ease-in-out data-[leave]:data-[closed]:opacity-0'
                                                )}
                                                >
                                                {pilihan.map((person) => (
                                                    <ListboxOption
                                                    key={person.id}
                                                    value={person}
                                                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-darkPurple data-[focus]:text-white"
                                                    >
                                                    <CheckIcon className="invisible size-5 fill-darkPurple group-data-[selected]:visible group-hover:fill-white group-data-[focus]:fill-white" />
                                                    <div className="text-sm/6 text-darkPurple group-hover:text-white group-data-[focus]:text-white">{person.name}</div>
                                                    </ListboxOption>
                                                ))}
                                                </ListboxOptions>
                                            </div>
                                        )}
                                    </Listbox> */}
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