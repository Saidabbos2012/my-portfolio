// src/utils/scrollToSection.ts
export function scrollToSection(id: string, offset = -200) {
    const element = document.getElementById(id);
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
}