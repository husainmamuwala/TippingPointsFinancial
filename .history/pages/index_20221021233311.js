import React from "react"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Cards from "../components/Cards"
import Whatwedo from "../components/Whatwedo"
import Footer from "../components/Footer"
import Whyus from "../components/Whyus"



export default function Home() {
  return (
    
    <div className="h-screen md:scrollbar md:scrollbar-thumb-[#7BE0B0] ">
      <Nav/>
      <main>
      <section id="home">
        <Hero/>
      </section>
      <section id="whatwedo">
        <Whatwedo/>
      </section>
      <section id="objectives">
        <Cards/>
      </section>
      <section id="whyus">
        <Whyus/>
      </section>
      <Investors/>
      </main>
      <Footer/>
    </div>
   
  )
}
