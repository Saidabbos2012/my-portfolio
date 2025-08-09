import Skils from "@/assets/images/Skils";
import About from "@/components/About";
import Contact from "@/components/Contact";
import HeaderBanner from "@/components/HeaderBanner";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeaderBanner />
      <About />
      <Services />
      <Skils />
      <Projects />
      <Contact />
    </div>
  )
}
