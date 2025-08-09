import { projects } from "@/constants";
import { styles } from "@/styles/styles";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects-page" className={`${styles.container} mt-[200px]`}>
            <h2 style={{ fontFamily: `var(--font-liber-mono)` }} className={`${styles.title} text-center mb-[60px]`}>My Latest <span className="text-[#0ef]">Projects</span></h2>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-[40px]">
                {
                    projects.map(({ id, image, title, desc }) => {
                        return <div key={id} className="relative group rounded-2xl overflow-hidden opacity-70">
                            <Image className="w-full h-[250px] object-cover rounded-2xl transform duration-500 group-hover:scale-110" src={image} alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t px-[15px] from-[#33958d] to-transparent translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-center text-center">
                                <h3 className="font-semibold text-[22px] text-[#ffffff] mb-[10px]">{title}</h3>
                                <p className="font-semibold text-[18px] text-[#ededed]">{desc}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}
