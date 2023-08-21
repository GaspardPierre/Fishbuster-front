import React from 'react';
import { useSpring, animated } from 'react-spring';

function Bubble() {
  const [props, set] = useSpring(() => ({
    from: { bottom: '0%' },
    to: { bottom: '100%' },
    config: { duration: 3000 },
    onRest: () => set({ reset: true }), // Réinitialise l'animation une fois terminée
  }));

  return (
    <animated.div
      style={{
        ...props,
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: 'white',
        position: 'absolute',
        left: `${Math.random() * 100}%`, // Position aléatoire pour la bulle
      }}
    ></animated.div>
  );
}
export default Bubble