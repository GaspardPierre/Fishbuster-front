import NavBar from "../components/NavBar/NavBar";
import fish from"../assets/home.jpg";
import DomainInput from "../components/DomainInput/DomainInput";

export default function Home() {
  return (
    <div>
        <NavBar />
        <DomainInput/>
        <div
        className="w-full">
            <img src={fish} alt="fish" className="w-full"/> 
        </div>
      
    </div>
  )
}
