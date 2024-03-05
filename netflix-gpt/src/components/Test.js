import React from "react";

import { ShimmerPostItem } from "react-shimmer-effects";

const Test = () => {
  return (
    <div className="flex gap-2 h-[10%]">
      {[...Array(5)].map(() => (
        <ShimmerPostItem title text cta imageWidth={120} imageHeight={80} />
      ))}
    </div>
  );
};

export default Test;
