import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function Bubble() {
  // Generate random size for each bubble
  const [size, setSize] = useState(Math.random() * (50 - 10) + 10); // Taille entre 10px et 50px

  // Generate random duration for each bubble
  const randomDuration = Math.random() * (5000 - 2000) + 2000; // Durée entre 2s et 5s

  const randomOpacity = Math.random() * (0.8 - 0.4) + 0.4;

  const [props, set] = useSpring(() => ({
    from: { bottom: '0%' },
    to: { bottom: '100%' },
    config: { duration: randomDuration },
    onRest: () => set({ reset: true }),
  }));

  return (
    <animated.div
    className=" shadow-lg bg-gradient-to-r from-blue-100 to-blue-300 randomOpacity * 100"
      style={{
        ...props,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'absolute',
        left: `${Math.random() * 100}%`,
      }}
    ></animated.div>
  );
}

export default Bubble;
