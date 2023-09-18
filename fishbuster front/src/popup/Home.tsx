import React from "react";
import fishbuster from"../../public/Fishbuster.png";
import Bubble from "./Bubble";
import {useSpring, animated } from 'react-spring';
import '../../index.css';
import logo from '../../public/logo.png ';


function Home() {
  
// animation of the fishbuster avatar
  const fishbusterProps = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0%)' },

    config: { tension: 400, friction: 10},
    delay: 2000, // control the delay of the animation
  });
  return (
    <div className="relative h-screen overflow-hidden ">

     {Array.from({ length: 10 }).map((_, index) => (
      <Bubble key={index} />
    ))}
   <div className="flex flex-col items-center justify-center h-screen  w-full space-y-4 bg-blue-500">
    <div className="py-4 flex justify-center ">
    <h1 className="text-xl font-bold z-50 font-font-pixel">
Fishbuster
</h1>

    </div>
  
   <animated.div style={fishbusterProps} className="flex justify-center">
          <img src={fishbuster} alt="fishbuster avatar" className="w-1/3" />
        </animated.div>


<p className="text-base font-font-pixel z-50">
Seuil d'activation 55%
</p>

<div className="flex justify-space-between font-font-pixel">
<button className="bg-blue-700 hover:bg-blue-800 transition ease-in-out delay-300 text-sm px-1 text-gray-200 py-1 mx-1 rounded-md z-50 font-font-pixel">
  Sites bloqués
</button>
<button className="bg-blue-700 hover:bg-blue-800 transition ease-in-out delay-300 text-sm px-1 mx-1 py-1 text-gray-200 rounded-md  z-50 font-font-pixel">
  Paramètres
</button>
<button className="bg-blue-700 hover:bg-blue-800 transition ease-in-out delay-300 text-sm px-1 py-1 mx-1 text-gray-200 rounded-md z-50 font-font-pixel">
  Signaler ce site
</button>
</div>
</div>
</div>

);
}
  
   



export default Home;
