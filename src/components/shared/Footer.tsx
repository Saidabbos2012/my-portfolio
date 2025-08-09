import ContactForm from "@/components/ContactForm";
import { styles } from "@/styles/styles";

export default function Footer() {
    return (
        <footer>
            <h3
                style={{ fontFamily: `var(--font-liber-mono)` }}
                className={`${styles.contactTitle} mb-[80px]`}>
                Send me your phone number
                <span className={`${styles.contactSubTitle}`}>I&apos;m very responsive to phone calls</span>
            </h3>
            <ContactForm />
        </footer>
    )
}
