import React from 'react'

const Navbar = ({scrollToSection}) => {
  
  return (
    <div className='w-full flex justify-center sticky  top-0 z-50 text-black  bg-white border-b'>
        <div className='flex justify-between lg:w-8/12  p-4 lg:pb-0 ' >

       
        <span className='text-2xl  '>Grass Konbini</span>
        <div className='hidden lg:flex flex-row '>

        <button className='flex-1 min-w-40 border-konbini border-b-4 pb-3' >Home</button>
          <button  onClick={() => scrollToSection('portfolio')} className='flex-1 min-w-40 pb-2'>Portfolio</button>
          <button className='flex-1 min-w-40 pb-2'>About Us</button>
          <button  onClick={() => scrollToSection('contact')} className='flex-1 min-w-40 pb-2'>Contact us</button>

        </div>
        

        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" fill='white' className='block lg:hidden'> 
<path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
</svg>
</div>
      
    </div>
  )
}

export default Navbar
