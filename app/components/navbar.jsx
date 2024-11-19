import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = ({ scrollToSection, activeSection }) => {
  const navItems = ['home', 'portfolio', 'about', 'contact'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Initial state should be false

  return (
    <>
      <div className="w-full flex justify-center sticky top-0 z-50 text-black bg-white border-b">
        <div className="flex justify-between lg:w-8/12 w-full p-4 lg:pb-0">
          <div className="h-full py-auto">
            <Image
              src="/konbinilogofull2.png"
              alt="logo"
              width={200}
              height={250}
              className="object-contain"
            />
          </div>

          <div className="hidden lg:flex flex-row">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'border-konbini border-b-4 pb-3' : 'text-gray-500 pb-2'} flex-1 min-w-40`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="my-auto" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              className="block lg:hidden"
            >
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
            </svg>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div   onClick={() => {
          
          setMobileMenuOpen(false); // Close the menu after clicking an item
        }} className=" bg-gray-900/60 h-[100vh] fixed top-0 rounded-b-xl w-full lg:hidden shadow-lg z-50">
          <div className="flex flex-col border-b bg-white text-black fixed w-full top-0 ">
            <div className='flex justify-center py-4 border-b'>

            <Image
              src="/konbinilogofull2.png"
              alt="logo"
              width={200}
              height={250}
              className="object-contain"
            />
            </div>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setMobileMenuOpen(false); // Close the menu after clicking an item
                }}
                className="py-3 border-b  text-center"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
           
          </div>
         

        </div>
      )}
    </>
  );
};

export default Navbar;
