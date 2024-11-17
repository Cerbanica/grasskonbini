"use client"
import React from 'react'

const ContentCard = ({inverted=false}) => {
  return (
<div className={`flex ${inverted ? 'lg:flex-row-reverse' : 'lg:flex-row'}  flex-col-reverse text-black font-light `}>
  <div className='flex-1  min-h-[30vh] items-center justify-center p-4  lg:p-10 '>
    <span>
      It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
      McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
      words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
      literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
      Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
      ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
    </span>
  </div>
  <div className='flex-1  min-h-[30vh] items-center justify-center relative '>



  <div className="absolute inset-0 bg-cover bg-center rounded-2xl"
       style={{
         backgroundImage: `url('https://i5.walmartimages.com/seo/Canon-EOS-4000D-DSLR-Camera-EF-S-18-55-mm-f-3-5-5-6-III-Lens_7446dc1e-5d9f-4943-be75-5d17eee9db8d_1.426f180a993ce5c99f3e318f8b086f30.jpeg')`,
       }}>
  </div>



  </div>
</div>

  )
}

export default ContentCard
