import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import bubbleImage from '../../../public/bubble.png';

function Bubble() {
  // Generate random size for each bubble
  const [size, setSize] = useState(Math.random() * (60 - 10) + 10); // Taille entre 10px et 50px

  // Generate random duration for each bubble
  const randomDuration = Math.random() * (6000 - 1000) + 1000; // Durée entre 2s et 5s

  const randomOpacity = Math.random() * (0.8 - 0.4) + 0.4;

  const [props, set] = useSpring(() => ({
    from: { bottom: '0%' },
    to: { bottom: '100%' },
    config: { duration: randomDuration },
    onRest: () => set({ reset: true }),
  }));

  return (
    <animated.div
    className=" shadow-lg bg-gradient-to-r from-blue-100 to-blue-300 "
      style={{
        ...props,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        backgroundImage: `url(${bubbleImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        opacity: randomOpacity,
        left: `${Math.random() * 100}%`
      }}
    ></animated.div>
  );
}

export default Bubble;
