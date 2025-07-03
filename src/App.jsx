import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger , SplitText} from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lenis from 'lenis'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'

function App() {


// Initialize Lenis
const lenis = new Lenis({
  duration:2.5,
  lerp:11,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  return (

   <>
   
       <main>
        <Navbar/>
        <Hero/>
        <Cocktails/>
        <About/>
        <Art/>
        <Menu/>
        <Contact/>
    </main>

   </>


  )
}

export default App