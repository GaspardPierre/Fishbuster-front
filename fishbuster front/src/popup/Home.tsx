import React from "react";
import fishbuster from"../../public/Fishbuster.png";
import Bubble from "./Bubble";
import {useSpring, animated } from 'react-spring';
import "../../index.css"


function Home() {
  
// animation of the fishbuster avatar
  const fishbusterProps = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0%)' },

    config: { tension: 400, friction: 20},
    delay: 2000, // control the delay of the animation
  });
  return (
    <div className="relative h-screen overflow-hidden">
     {Array.from({ length: 10 }).map((_, index) => (
      <Bubble key={index} />
    ))}
   <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-blue-500">
   <animated.div style={fishbusterProps} className="flex justify-center">
          <img src={fishbuster} alt="fishbuster avatar" className="w-1/3" />
        </animated.div>
<h1 className="text-xl font-bold z-50 font-font-pixel">
Fishbuster
</h1>

<p className="text-base -z-50">
Seuil d'activation 55%
</p>

<div className="flex justify-center-around">
<button className="bg-blue-700 px-4 py-1 rounded-md z-50 font-font-pixel">
  Sites bloqués
</button>
<button className="bg-blue-700 px-4 py-1 rounded-md  z-50 font-font-pixel">
  Paramètres
</button>
<button className="bg-blue-700 px-4 py-1 rounded-md -z-50 font-font-pixel">
  Signaler ce site
</button>
</div>
</div>
</div>

);
}
  
   



export default Home;
