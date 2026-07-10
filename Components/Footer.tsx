import Link from "next/link";
import Image from "next/image";
import abdullah from "@/public/abdullah.jpg";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 text-center py-4 px-8 border-t-2 border-gray-800">
            <div className=" flex justify-center items-center gap-2">
                <div className="relative">
                    <Image
                        src={abdullah}
                        alt="Logo"
                        width={180}
                        height={180}
                        className="w-20 h-20 rounded-full grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                </div>
                <p className="text-gray-400 text-sm">
                    Developed by <Link href="https://muhammad-abdullah-me.vercel.app/" target="_blank" className="text-gray-300 font-medium hover:text-white transition-colors duration-300 ease-in-out">Muhammd Abdullah</Link>
                </p>
            </div>
        </footer>
    )
}