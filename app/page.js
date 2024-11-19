"use client";

import Image from "next/image";
import { CarousellPortfolio, ContactUs, ContentCard, Navbar } from "./components";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const sections = ['home', 'portfolio', 'about', 'contact'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [isPanelShown, setIsPanelShown] = useState(false);

  // Manage Tailwind class for body scroll
  useEffect(() => {
    if (isPanelShown) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden'); // Cleanup on unmount
  }, [isPanelShown]);

  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: portfolioRef, inView: portfolioInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.8 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (homeInView) setActiveSection('home');
    else if (portfolioInView) setActiveSection('portfolio');
    else if (aboutInView) setActiveSection('about');
    else if (contactInView) setActiveSection('contact');
  }, [homeInView, portfolioInView, aboutInView, contactInView]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-items-center">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />

      <div
        id="home"
        ref={homeRef}
        className="w-full bg-green-500 bg-opacity-15 align-middle justify-items-center mb-4"
      >
        <div className="w-full p-2 lg:w-8/12 flex flex-col lg:flex-row items-center justify-items-center min-h-[60vh]">
          <div className="flex-1 flex-col">
            <h1 className="text-black text-4xl font-bold">We Help brands grow online</h1>
            <span className="text-black">
              It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </span>
            <button className="btn-primary">Schedule a call</button>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <section className="flex flex-col gap-10 lg:w-8/12" >
          
          <ContentCard />
          <ContentCard inverted={true} />
        </section>
      <div className="flex flex-col gap-10 lg:w-8/12">
        <section id="portfolio" ref={portfolioRef} className="lg:pt-20">
          <CarousellPortfolio
            showPanel={() => setIsPanelShown(true)} // Pass function reference
            closePanel={() => setIsPanelShown(false)} // Pass function reference
          />
        </section>

        <section id="about" ref={aboutRef}>
          <h1 className="text-black text-center text-4xl font-bold">Who tf is Grass Konbini?</h1>
          <ContentCard />
          <ContentCard inverted={true} />
        </section>

        <section id="contact" ref={contactRef}>
          <ContactUs />
        </section>
      </div>

      <footer className="row-start-3 min-h-[5vh] w-full bg-slate-800 text-xl font-bold flex gap-6 flex-wrap mt-[10vh] items-center justify-center">
        Grass Konbini 2024
      </footer>
    </div>
  );
}
