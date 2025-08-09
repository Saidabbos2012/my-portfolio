import { contactCards } from "@/constants";
import { styles } from "@/styles/styles";
import Footer from "./shared/Footer";

export default function Contact() {
    return (
        <section id="contact-page" className={`${styles.container} mt-[200px]`}>
            <h2 style={{ fontFamily: `var(--font-liber-mono)` }} className={`${styles.title} text-center`}>Contact <span className="text-[#0ef]">Me</span></h2>
            <div className="pb-[80px]">
                <h3 style={{ fontFamily: `var(--font-liber-mono)` }} className={`${styles.contactTitle}`}>Do you have any questions? <span className={`${styles.contactSubTitle}`}>I'm AT your serivces</span></h3>
                <div className="lg:space-y-0 space-y-14 sm:grid sm:grid-cols-2 lg:flex lg:gap-[22px] xl:gap-[80px] justify-center mt-[60px]">
                    {
                        contactCards.map(({ id, icons: Icon, title, subTitle }) => {
                            return <div
                                className=" flex flex-col items-center text-center gap-[20px]"
                                key={id}>
                                <Icon className="text-[#0ef] size-9" />
                                <h3 className="font-semibold text-[20px] text-[#ededed]">{title} <span className="block font-medium">{subTitle}</span></h3>
                            </div>
                        })
                    }
                </div>
                <Footer />
            </div>
        </section>
    )
}
