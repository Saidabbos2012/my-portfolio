import { services } from "@/constants";
import { styles } from "@/styles/styles";

export default function Services() {
    return (
        <section id="services-page" className={`${styles.container} mt-[200px]`}>
            <h2 style={{ fontFamily: `var(--font-liber-mono)` }} className={`${styles.title} text-center mb-[80px]`}>My <span className="text-[#0ef]">Services</span></h2>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-[40px]">
                {
                    services.map(({ id, icons: Icon, title, desc }) => {
                        return <div key={id} className="group lg:p-[30px] md:p-[25px] p-[22px] border-2 border-[#0ef] rounded-2xl flex flex-col items-center text-center gap-[24px] opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-500">
                            <Icon className="size-15 text-[#0ef] group-hover:scale-110 transition-all duration-500" />
                            <h3 className="font-medium text-[20px] md:text-[22px] lg:text-[24px] text-[#ededed]">{title}</h3>
                            <p className="font-medium text-[16px] lg:text-[17px] text-[#ededed]">{desc}</p>
                        </div>
                    })
                }
            </div>
        </section>
    )
}