import { LucideIcon } from "lucide-react"
import { StaticImageData } from "next/image"

export interface IMenuList {
    id: number,
    linkName: string,
    slug: string
}

export interface IServices {
    id: number,
    icons: LucideIcon,
    title: string,
    desc: string
}

export interface ISkills {
    id: number,
    title: string,
    number: string,
    progressNumber: number
}

export interface IProjects {
    id: number,
    image: StaticImageData,
    title: string,
    desc: string
}

export interface IContactCards {
    id: number,
    icons: LucideIcon,
    title: string,
    subTitle: string
}