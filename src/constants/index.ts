import { IContactCards, IMenuList, IProjects, IServices, ISkills } from "@/types";
import { CodeXml, Globe, LaptopMinimalCheck, Mail, MapPin, Megaphone, Palette, Phone, Search, Smartphone } from "lucide-react";

export const menuList: IMenuList[] = [
    {
        id: 0,
        linkName: 'Home',
        slug: 'home-page'
    },

    {
        id: 1,
        linkName: 'About',
        slug: 'about-page'
    },

    {
        id: 2,
        linkName: 'Services',
        slug: 'services-page'
    },

    {
        id: 3,
        linkName: 'Skils',
        slug: 'skils-page'
    },

    {
        id: 4,
        linkName: 'Projects',
        slug: 'projects-page'
    },

    {
        id: 5,
        linkName: 'Contact',
        slug: 'contact-page'
    },
]

export const services: IServices[] = [
    {
        id: 0,
        icons: Smartphone,
        title: "Responsive Design",
        desc: "We create modern designs that are 100% responsive for mobile and tablet devices. They look great on any screen size.",
    },

    {
        id: 1,
        icons: LaptopMinimalCheck,
        title: "UI/UX Optimization",
        desc: "We provide a user-friendly interface, fast navigation, and an intuitive experience for users — every click counts.",
    },
    {
        id: 2,
        icons: Palette,
        title: "Creative Branding",
        desc: "We will make your brand stand out through creative design, color psychology, and branding-appropriate graphic elements.",
    },

    {
        id: 3,
        icons: CodeXml,
        title: "Frontend Development",
        desc: "We create fast, interactive, and robust web interfaces using HTML, CSS, JavaScript, and modern frameworks.",
    },

    {
        id: 4,
        icons: Search,
        title: "SEO Optimization",
        desc: "Technical and content-based SEO service to help your site rank higher in Google and other search engines.",
    },

    {
        id: 5,
        icons: Megaphone,
        title: "Digital Marketing",
        desc: "We will present your brand to a wide audience through targeted advertising, social media strategies, and digital marketing.",
    },
]

export const skiils: ISkills[] = [
    {
        id: 0,
        title: 'Next Js',
        number: '90%',
        progressNumber: 90
    },

    {
        id: 1,
        title: 'React Js',
        number: '85%',
        progressNumber: 85
    },

    {
        id: 2,
        title: 'Javascript',
        number: '75%',
        progressNumber: 75
    },

    {
        id: 3,
        title: 'Tailwindcss',
        number: '85%',
        progressNumber: 85
    },

    {
        id: 4,
        title: 'Typescript',
        number: '80%',
        progressNumber: 80
    },
]

import portfolioImage1 from "@/assets/images/portfolioImage1.png"
import portfolioImage2 from "@/assets/images/portfolioImage2.png"
import portfolioImage3 from "@/assets/images/portfolioImage3.png"
import portfolioImage4 from "@/assets/images/portfolioImage4.png"
import portfolioImage5 from "@/assets/images/portfolioImage5.png"
import portfolioImage6 from "@/assets/images/portfolioImage6.png"

export const projects: IProjects[] = [
    {
        id: 0,
        image: portfolioImage1,
        title: "Flight Booking Platform",
        desc: "An intuitive platform to explore, compare, and book flights seamlessly. Focused on fast search and responsive UI for a smooth travel planning experience."
    },

    {
        id: 1,
        image: portfolioImage2,
        title: "E-Bike Online Store",
        desc: "Modern e-commerce site designed for selling electronic bikes. Features clean layout, interactive product displays, and smooth shopping experience."
    },

    {
        id: 2,
        image: portfolioImage3,
        title: "Custom WordPress Layout",
        desc: "A sleek WordPress-powered layout built with responsive components, focusing on user-friendly design and accessible content sections."
    },

    {
        id: 3,
        image: portfolioImage4,
        title: "Custom WordPress Layout",
        desc: "A sleek WordPress-powered layout built with responsive components, focusing on user-friendly design and accessible content sections."
    },

    {
        id: 4,
        image: portfolioImage5,
        title: "Problem-Solving Agency Site",
        desc: "Corporate-style website for a consulting agency offering strategic solutions to complex problems. Includes multilingual UI and clean layout."
    },

    {
        id: 5,
        image: portfolioImage6,
        title: "General Online Shop",
        desc: "A versatile and modern storefront template suitable for various product categories. Features category filtering, responsive grid, and product previews."
    },
]

export const contactCards: IContactCards[] = [
    {
        id: 0,
        icons: Phone,
        title: 'Call Us On',
        subTitle: '+99 887 80 43'
    },

    {
        id: 1,
        icons: MapPin,
        title: 'Office',
        subTitle: '44 Street Islamobod'
    },

    {
        id: 2,
        icons: Mail,
        title: 'Emai',
        subTitle: 'saidakmal81.s@gmail.com'
    },

    {
        id: 3,
        icons: Globe,
        title: 'Wbsite',
        subTitle: 'www.portfolio-me.com'
    },
]