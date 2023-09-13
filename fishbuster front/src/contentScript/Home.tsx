
import fishbuster from"../../public/Fishbuster.png";
import Bubble from "./Bubble";
import {useSpring, animated } from 'react-spring';

function Home() {


  const fishbusterProps = useSpring({
    from: { transform: 'translateX(100%)' }, // Part de l'extérieur de l'écran (à gauche)
    to: { transform: 'translateX(0%)' },
  // Arrive à sa position finale
    config: { tension: 200, friction: 50},
    delay: 2000, // Contrôle la vitesse et le rebond de l'animation
  });
  return (
    <div className="relative h-screen overflow-hidden bg-blue-600">
     {Array.from({ length: 10 }).map((_, index) => (
      <Bubble key={index} />
    ))}
   <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-blue-600">
   <animated.div style={fishbusterProps} className="flex justify-center">
          <img src={fishbuster} className="w-1/3" />
        </animated.div>
<h1 className="text-xl font-bold z-50">
Fishbuster
</h1>

<p className="text-base -z-50">
Seuil d'activation 55%
</p>

<div className="flex space-x-4">
<button className="bg-blue-700 px-4 py-2 rounded-md z-50">
  Sites bloqués
</button>
<button className="bg-blue-700 px-4 py-2 rounded-md z-50">
  Paramètres
</button>
<button className="bg-blue-700 px-4 py-2 rounded-md -z-50">
  Signaler ce site
</button>
</div>
</div>
</div>

);
}
  
   



export default Home;
