import NavBar from "../components/NavBar/NavBar";
import fish from"../assets/home.jpg";

export default function Home() {
  return (
    <div>
        <NavBar />
        <div
        className="w-full">
            <img src={fish} alt="fish" className="w-full"/> 
        </div>
      
    </div>
  )
}
