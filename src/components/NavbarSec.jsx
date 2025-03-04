import Link from "next/link";

export default function NavbarSec(){
    return (
        <>
            <nav className="w-full fixed px-28 py-5 bg-gradient-to-r from-pinkNavbar via-pinkNavbar to-purpleNavbar text-white z-50 transition-all duration-500">
                <div className="flex justify-between items-center selection:bg-white selection:text-purple">
                        <Link href="/himtalks" className="font-[Plus Jakarta Sans] font-semibold text-[32px] text-yellowBright">Himtalks</Link>
                        <ul className="flex gap-[70px]">
                            <li>
                                <Link href="/himtalks/" className="font-[Plus Jakarta Sans] font-medium text-xl">Home</Link>
                            </li>
                            <li>
                                <Link href="/himtalks/songfess" className="font-[Plus Jakarta Sans] font-medium text-xl">Songfess</Link>
                            </li>
                            <li>
                                <Link href="/himtalks/chat-anonym" className="font-[Plus Jakarta Sans] font-medium text-xl">Chat Anonym</Link>
                            </li>
                            <li>
                                <Link href="/himtalks/podcast" className="font-[Plus Jakarta Sans] font-medium text-xl">Podcast</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </>
    )
}