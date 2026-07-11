import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/api-svg.svg";


export default function Header() {
    return (
        <nav className="w-full py-4 px-8 h-16 bg-gray-50 shadow-md border-b-1 border-gray-200">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold flex gap-2 items-center">
                    <div className="relative h-10 w-10 overflow-hidden">
                        <Image src={logo} alt="Logo" fill className="object-cover" />
                    </div>
                    <Link href="/">
                        <h1 className="hover:text-[#f56565] transition-colors">Random API</h1>
                    </Link>
                </div>
                <div className="flex gap-8">
                    <Link href="/" className="hover:text-[#f56565] transition-colors font-medium">
                        Home
                    </Link>
                    <Link href="/docs" className="hover:text-[#f56565] transition-colors font-medium">
                        Docs
                    </Link>
                    <Link href="https://github.com/mabdullah356/randomApi" target="_blank" className="flex hover:text-[#f56565] transition-colors text-xl items-center">
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </nav>
    );
}