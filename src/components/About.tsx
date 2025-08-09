import { styles } from "@/styles/styles";
import Image from "next/image";
import AboutImg from "@/assets/images/HeaderBannerBg.jpg"
import { Download } from "lucide-react";

export default function About() {
    return (
        <section id="about-page" className={`${styles.container} mt-[200px]`}>
            <div className="xl:space-y-0 space-y-15 xl:flex xl:flex-row-reverse gap-[90px] items-center">
                <div>
                    <h2 style={{ fontFamily: `var(--font-liber-mono)` }} className={`${styles.title}`}>About <span className="text-[#0ef]">Me</span></h2>
                    <h3 className="font-semibold text-3xl lg:text-4xl text-[#ededed] my-[20px]">I am a <span className="text-[#0ef]">Frontend Developer.</span></h3>
                    <p className={`${styles.desc}`}>
                        As a frontend developer with 2+ years of experience, I specialize in transforming creative ideas into fully functional, modern web experiences. I combine strong UI/UX principles with advanced frontend technologies to build intuitive, responsive, and accessible interfaces.
                    </p>
                    <p className={`${styles.desc} mb-[20px]`}>
                        I&apos;m passionate about creating clean, scalable code and pixel-perfect designs that bring real value to users. I&apos;ve worked on diverse projects — from personal portfolios to complex e-commerce platforms — always prioritizing performance and user satisfaction.
                    </p>
                    <a
                        href="/cv.pdf"
                        download
                        style={{ fontFamily: `var(--font-liber-mono)` }}
                        className={`${styles.btn} inline-flex items-center gap-[15px] justify-center`}
                    >
                        <Download />
                        Download CV
                    </a>
                </div>
                <Image className={`${styles.image}`} src={AboutImg} alt="AboutImg" />
            </div>
        </section>
    )
}
