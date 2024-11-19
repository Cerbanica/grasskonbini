"use client"

import Image from "next/image";
import { CarousellPortfolio, ContactUs, ContentCard, Navbar, Swiper2 } from "./components";
import { useState ,useEffect} from "react";
/* import { supabase } from "@/utils/supabaseClient"; */





export default  function Home() {
/* const fetchdata =async ()=>{

  const { data: projects, error } = await supabase.from('projects').select('*');
  if (error) {
    console.error('Error fetching projects:', error);
    return <div>Error loading projects.</div>;
  }

} */
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


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };




  return (
    <div className="flex flex-col items-center justify-items-center" >
      <Navbar scrollToSection={scrollToSection}/>
      <div className="w-full bg-green-500 bg-opacity-15  align-middle justify-items-center mb-4 ">
        <div className="w-8/12 flex flex-row items-center justify-items-center min-h-[60vh]">
        <div className="flex-1 flex-col">

        <h1 className="text-black text-4xl font-bold">We Help brands grow online</h1>
        <span className="text-black">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>
        <button className="btn-primary">Schedule a call</button>
        </div>
        <div className="flex-1">

        </div>

        </div>
       
      </div>

      <div className="flex flex-col gap-4 lg:w-8/12 ">
     


      
    
      <ContentCard inverted={true}/>
      <ContentCard/>
    

     
      <div id="portfolio" className="lg:pt-20">

      <CarousellPortfolio
      showPanel={() => setIsPanelShown(true)} // Pass function reference
      closePanel={() => setIsPanelShown(false)} // Pass function reference
    />

      <ContentCard/>
      <ContentCard inverted={true}/>

      </div>
      <div id="contact"><ContactUs/></div>
      
      </div>


      <footer className="row-start-3 w-full bg-slate-800 text-xl font-bold flex gap-6 flex-wrap items-center justify-center">
        
        Grass konbini 2024
      </footer>
    </div>
  );
}

/*   return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.image_url} alt={project.title} className="mt-4" />
            <a href={project.youtube_url} className="text-blue-500 mt-2 block">
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
 */