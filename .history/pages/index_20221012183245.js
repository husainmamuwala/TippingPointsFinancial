import React from "react"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Whatwedo from "../components/What"


export default function Home() {
  return (
    <div className="h-screen w-screen ">
      <Nav/>
      <Hero/>
      <section id="#whatwedo">
      <Whatwedo/>
      </section>
    </div>
  )
}
