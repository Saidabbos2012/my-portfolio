'use client'

import { styles } from "@/styles/styles";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import HeaderBannerBg from "@/assets/images/HeaderBannerBg.jpg"
import { scrollToSection } from "@/utils/scrollToSection";

export default function HeaderBanner() {
    return (
        <div id="home-page" className={`${styles.container} mt-[180px] xl:mt-[220px]`}>
            <div className="xl:space-y-0 space-y-20 xl:flex gap-[50px] items-center">
                <div>
                    <h1 className={`${styles.HeaderBannerTitle}`}>Hello, my name is <span style={{ fontFamily: `var(--font-liber-mono)` }} className={`${styles.HeaderBannerSubTitle}`}>Saidabbos Saidikromov</span></h1>
                    <h3 className={`${styles.HeaderBannerTitle} mb-8 my-5 md:my-[10px]`}>
                        I am a
                        <span
                            style={{ fontFamily: `var(--font-liber-mono)` }}
                            className={`${styles.HeaderBannerSubTitle} sm:w-auto w-[220px] sm:h-auto h-[80px] sm:inline sm:ml-[10px]`}
                        >
                            <Typewriter
                                words={[
                                    'Frontend Developer',
                                    'React Js Engineer',
                                    'UI & UX Developer',
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </h3>
                    <p className="font-medium text-[16px] md:text-[20px] text-[#ededed] leading-[30px] mb-[30px]">
                        With over 2 years of practical experience, I craft modern, user-friendly websites with clean interfaces and seamless UX. My focus is on delivering visually engaging and high-performance digital experiences.
                    </p>
                    <button
                        onClick={() => scrollToSection('about-page')}
                        style={{ fontFamily: `var(--font-liber-mono)` }}
                        className={`${styles.btn} lg:w-auto w-full`}>More About Me</button>
                </div>
                <Image className={`${styles.image}`} src={HeaderBannerBg} alt="HeaderBannerImg" />
            </div>
        </div>
    )
}
