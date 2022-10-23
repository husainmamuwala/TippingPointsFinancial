import React from "react"
import Hero from "../components/Hero"
import Nav from "../components/Nav"


export default function Home() {
  return (
    <div className="h-screen ">
      <Nav/>
      <section id="whatwedo">
        <Hero/>
      </section>
    </div>
  )
}
