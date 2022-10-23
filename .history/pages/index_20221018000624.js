import React from "react"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Cards from "../components/Cards"
import Whatwedo from "../components/Whatwedo"
import Footer from "../components/Footer"


export default function Home() {
  return (
    
    <div className="h-screen flex">
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
      </main>
      <Footer/>
    </div>
   
  )
}
