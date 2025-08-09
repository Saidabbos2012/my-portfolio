'use client'

import { Progress } from "@/components/ui/progress";
import { skiils } from "@/constants";
import { styles } from "@/styles/styles";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Skils() {
    return (
        <div id="skils-page" className={`${styles.container} mt-[100px] md:mt-[200px]`}>
            <h2 style={{ fontFamily: `var(--font-liber-mono)` }} className={`${styles.title} text-center mb-[80px]`}>My <span className="text-[#0ef]">Skills</span></h2>
            <div className="lg:flex justify-between">
                <div>
                    <h3 className="font-semibold text-2xl sm:text-3xl text-[#ededed]">Profissanal skills & experences</h3>
                    <p className="xl:max-w-[820px] lg:max-w-[480px] font-medium text-[18px] text-[#ededed] leading-[35px] my-[20px]">
                        I specialize in frontend development, with strong expertise in modern technologies like React, Tailwind CSS, and TypeScript. I’m passionate about creating clean, responsive, and interactive UIs that deliver great user experiences. I have a deep understanding of component-based architecture and strive to write reusable, maintainable code.
                    </p>
                    <button
                        onClick={() => scrollToSection('projects-page')}
                        style={{ fontFamily: `var(--font-liber-mono)` }}
                        className={`${styles.btn} md:!px-[50px] md:!text-[22px] !px-[20px] !text-[18px] mb-[50px]`}>Explore My Projects</button>
                </div>
                <div>
                    {
                        skiils.map(({ id, title, number, progressNumber }) => {
                            return <div key={id}>
                                <p className="flex justify-between font-bold text-[18px] text-[#ededed] mb-[10px]">{title} <span>{number}</span></p>
                                <Progress value={progressNumber} className="lg:w-[400px] w-full xl:w-[400px] mb-[16px] [&>div]:bg-[#0ef] bg-[#ededed]" />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}