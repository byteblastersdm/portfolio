import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Tech from "@/components/ui/Tech";
import Experience from "@/components/ui/Experience";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Tech/>
      <Contact/>
    </main>
  )
}
