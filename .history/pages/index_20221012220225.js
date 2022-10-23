import React from "react"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Whatwedo from "../components/Whatwedo"


export default function Home() {
  return (
    <section id="home">
    <div className="h-screen scroll">
      <Nav/>
      <Hero/>
      <section id="whatwedo">
        <Whatwedo/>
      </section>
    </div>
    </section>
  )
}
