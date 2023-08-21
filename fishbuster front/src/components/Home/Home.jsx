
import fishbuster from"../../../public/Fisbuster.png"
import Bubble from "../Bubble/Bubble";
function Home() {
    const bubbleCount = new Array(10).fill(null);

    return (
        <div className="relative h-screen overflow-hidden">
         {Array.from({ length: 10 }).map((_, index) => (
          <Bubble key={index} />
        ))}
       <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-blue-500">
  <div className="flex  justify-center">
    <img src={fishbuster} className="w-1/3"/>
  </div>

  <h1 className="text-xl font-bold">
    Fishbuster
  </h1>

  <p className="text-base">
    Seuil d'activation 55%
  </p>

  <div className="flex space-x-4">
    <button className="bg-blue-700 px-4 py-2 rounded-md">
      Sites bloqués
    </button>
    <button className="bg-blue-700 px-4 py-2 rounded-md">
      Paramètres
    </button>
    <button className="bg-blue-700 px-4 py-2 rounded-md">
      Signaler ce site
    </button>
  </div>
</div>
</div>

  );
}
  
   



export default Home;
