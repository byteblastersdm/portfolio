import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Tech from "@/components/ui/Tech";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero/>
      <About/>
      <Projects/>
      <Tech/>
      <Contact/>
    </main>
  )
}
