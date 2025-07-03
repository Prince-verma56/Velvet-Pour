import React from 'react';
import { navLinks } from './Constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


function Navbar() {

useGSAP(()=>{
    const navTween = gsap.timeline({
        scrollTrigger:{
            trigger:"nav",
            start:"bottom top",
            end:""
        }

    });


navTween.fromTo('nav',{backgroundColor:'transparent'} , {
    backgroundColor: '#00000050',
    backgroundFilter:'blur(10px)',
    duration:1,
    ease:'power2.inOut'
})


})



    return (
        <nav className="fixed w-full top-0 left-0 z-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
                    <p className='text-4xl text-white '>Velvet Pour</p>
                </a>
                <ul className="flex gap-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="text-white hover:text-blue-400 transition"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
