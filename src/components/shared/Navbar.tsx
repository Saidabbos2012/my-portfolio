'use client'

import { menuList } from "@/constants";
import { styles } from "@/styles/styles";
import { scrollToSection } from "@/utils/scrollToSection";
import { AlignJustifyIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [activeBars, setActiveBars] = useState<boolean>(false)

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-[#00094a] shadow-[0_10px_50px_#0ef]">
            <div className={`${styles.container} flex justify-between items-center py-[40px]`}>
                <Link style={{ fontFamily: `var(--font-liber-mono)` }} className="font-bold lg:text-3xl xl:text-4xl md:text-4xl sm:text-3xl text-2xl text-[#0ef] text-shadow-[0_0_30px_#0ef,0_0_50px_#0ef]" href={'/'}>My Portfolio</Link>

                <button onClick={() => setActiveBars(prev => !prev)} className="block lg:hidden cursor-pointer">{activeBars ? <XIcon className="size-8 text-[crimson] relative z-25" /> : <AlignJustifyIcon className="size-8 text-[#0ef]" />}</button>

                <ul className={`${activeBars ? 'fixed inset-0 bg-gray-700 z-20 flex flex-col justify-center items-center gap-[20px] lg:hidden' : 'hidden lg:!flex lg:gap-[14px] xl:gap-[30px] items-center'}`}>
                    {
                        menuList.map(({ id, linkName, slug }) => {
                            return <li key={id}>
                                <button
                                    style={{ fontFamily: `var(--font-liber-mono)` }} className="relative font-bold xl:text-[24px] lg:text-[22px] text-[24px] tracking-[1px] text-[#0ef] cursor-pointer
             text-shadow-[0_0_30px_#0ef,0_0_50px_#0ef] hover:scale-110 transition-all duration-500
             before:content-[''] before:absolute before:bottom-0 before:left-1/2
             before:h-[2px] before:w-0 before:bg-[#0ef] before:transition-all before:duration-500
             before:transform before:-translate-x-1/2 hover:before:w-full" onClick={() => scrollToSection(slug)}>{linkName}</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}