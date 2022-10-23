import React from "react"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Whatwedo from "../components/Whatwedo"


export default function Home() {
  return (
    <section>
      
    </section>
    <div className="h-screen">
      <Nav/>
      <Hero/>
      <section id="whatwedo">
        <Whatwedo/>
      </section>
    </div>
  )
}
