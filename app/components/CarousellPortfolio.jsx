"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import  Carousel  from './Carousel';

const Items = () => {

  return (
    <div
  className="min-h-[20vh] relative  p-2 rounded-lg cursor-pointer overflow-hidden"
 
>
  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
       style={{
         backgroundImage: `url('https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg')`,
       }}>
  </div>

  <h1
  className="absolute bottom-0 pt-2 left-0 w-full text-center text-white text-xl font-bold p-2 rounded"
  style={{
    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.6))", // Gradient from transparent to semi-transparent
  }}
>
  Project Title
</h1>
</div>

  )
};

const CarousellPortfolio = () => {
  const [count, setCount] = useState(6);
  const [isPanelShown, setIsPanelShown]=useState(false);
  const images = [
    "https://sc04.alicdn.com/kf/Hd0f37f1f32204d46be198031c193e20ea.jpg",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStppDmXFdWFXwbb37TpMkKK-WBxOFqTlSl2w&s",
  ];

  const showPanel=()=>{
    setIsPanelShown(true)
  }
  return (
    <>
    {isPanelShown&&(
    <div onClick={()=>setIsPanelShown(false)} className="fixed inset-0 cursor-pointer text-black bg-gray-900 backdrop-blur-md bg-opacity-20 flex items-center justify-center z-50">
    <div  onClick={(e) => e.stopPropagation()}  className="cursor-default w-full lg:w-8/12 flex flex-col lg:flex-row bg-slate-50 rounded-2xl p-4 lg:min-h-[80vh]">
  
    <div className='flex-1 flex items-center justify-center p-2 '><Carousel images={images} /></div>
    <div className='flex-1 border-0 border-l  max-h-[80vh] overflow-y-auto'>
      <div className='sticky top-0 bg-white p-2 border-0 border-b'>
      
      <h1 className='text-black text-4xl'>Project Title</h1>
      <h1 className='text-lg text-slate-500'>Project Durations/ etc</h1>
      
      </div>
      
     
    <div className=' p-2'>

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.






    </div>
    <div className='sticky bottom-0  bg-white p-4 flex flex-row gap-2'>

    
      <button className='flex-1 btn-base'>Previous</button>
      <button className='flex-1 btn-primary'>Next Project</button>
    </div>
     </div>
      
    </div>
    
  </div>
  
      )}
    <div className='flex flex-col text-black'>
      <div id="portfolio" className='w-full text-center  text-4xl font-bold'> Portfolio</div>
      <div className='w-full flex flex-col lg:grid lg:grid-cols-3 gap-2 px-2 lg:p-0'>
        {Array.from({ length: count }).map((_, index) => (
          <motion.div
          onClick={()=>showPanel()}
            key={index}
            initial={{ opacity: 0, y: 20 }} // Start slightly below
            animate={{ opacity: 1, y: 0 }}  // Fade in and move to original position
            transition={{ duration: 0.5, delay: (index % 6) * 0.1 + 0.1 }} // Reset delay every 5 items

          >
            <Items />
          </motion.div>
        ))}






      </div>
      <button
        className=" mt-2"
        onClick={() => setCount(count + 6)} // Increase count by 3 on each click
      >
        View More
      </button>
    </div>
    </>
  )
}

export default CarousellPortfolio
