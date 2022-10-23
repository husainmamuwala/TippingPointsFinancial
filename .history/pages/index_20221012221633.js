import React from "react"
import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Whatwedo from "../components/Whatwedo"


export default function Home() {
  return (
    
    <div className="h-screen overflow-scroll">
      <Nav/>
      {/* <Hero/> */}
      <section id="whatwedo">
        <Whatwedo/>
      </section>
    </div>
   
  )
}
