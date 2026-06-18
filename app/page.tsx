import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Initiatives } from "@/components/initiatives"
import { Timeline } from "@/components/timeline"
import { Members } from "@/components/members"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Initiatives />
        <Timeline />
        <Members />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
