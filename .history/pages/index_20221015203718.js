import React from "react"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Objectives from "../components/Objectives"
import Whatwedo from "../components/Whatwedo"


export default function Home() {
  return (
    
    <div className="h-screen">
      <Nav/>
      <section id="home">
        <Hero/>
      </section>
      <section id="whatwedo">
        <Whatwedo/>
      </section>
      <section id="objectives">
        <Cards/>
      </section>
    </div>
   
  )
}
