"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import  Carousel  from './Carousel';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'

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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStppDmXFdWFXwbb37TpMkKK-WBxOFqTlSl2w&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg",
  ];

  const showPanel=()=>{
    setIsPanelShown(true)
  }
  return (
    <>
    {isPanelShown&&(
    <div onClick={()=>setIsPanelShown(false)} className="fixed inset-0 cursor-pointer text-black bg-gray-900 backdrop-blur-md bg-opacity-20 flex items-center justify-center z-50">
    <div  onClick={(e) => e.stopPropagation()}  className="cursor-default w-full lg:w-8/12 flex flex-col lg:flex-row bg-white rounded-2xl lg:p-4 h-full lg:h-[80vh]">
  
    <div className='flex-1  items-center justify-center p-2 hidden lg:flex '><Carousel images={images}/></div>
    <div className='flex-1 border-0 border-l  max-h-[90vh] lg:max-h-[80vh] overflow-y-auto' >
      <div className='sticky top-0 bg-white p-2 z-50 border-0 border-b'>
      
      <h1 className='text-black text-4xl'>Project Title</h1>
      <h1 className='text-lg text-slate-500'>Project Durations/ etc</h1>
      
      </div>
      <div className='flex-1  items-center justify-center  lg:hidden '><Carousel images={images}/></div>
     
    <div className=' p-2 bg-white pt-4'>

    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
rary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
9
8
7
6
5
4
3
2
1
</div>
    <div className='fixed lg:sticky bottom-0 w-full bg-white p-2 lg:p-4 flex border-0 border-t gap-2 justify-between'>

    
      
      <button className='flex flex-row gap-2  font-bold p-2    px-4 justify-start '> <ArrowLongLeftIcon className='w-6'/>Previous</button>
    
      <button className=' flex flex-row gap-2 bg-konbini p-2 px-4 rounded-lg justify-center  font-bold'>Next Project <ArrowLongRightIcon className='w-6'/> </button>
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
