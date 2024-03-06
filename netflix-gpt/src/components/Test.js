import React, { useState } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const Test = () => {
  const [liked,setLiked]=useState(false);
  return (
    <div className="bg-black">
      <p>Hit a like </p>
      <div className="inline-flex items-center justify-center cursor-pointer hover:scale-125" onClick={()=>setLiked(prev=>!prev)}>
        <BsFillHandThumbsUpFill size={40} color={liked?"blue":"white"}/>
      </div>
    </div>
  );
};

export default Test;
