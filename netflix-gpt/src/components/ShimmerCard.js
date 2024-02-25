import React from 'react';
import { ShimmerContentBlock } from "react-shimmer-effects";

const ShimmerCard = () => {
  return (
    <div className='md:mx-2 my-[3%] w-[85%]'>
      {[...Array(5)].map(()=> (
         <ShimmerContentBlock
         title
         text
         cta
         thumbnailWidth={370}
         thumbnailHeight={470}
         className={{"background-color":"black"}}
       />
      ))}
     
    </div>
  )
}

export default ShimmerCard