import { StarsBackground } from "./ui/StarsBackground";
import { ShootingStars } from "./ui/ShootingStars";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import RecentWorks from "./RecentWorks";
import Contact from "./Contact";

function App() {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-neutral-900">
      <div className="fixed inset-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="relative z-10 text-white ">
        <Hero />
        <NavBar />
        <About />
        <RecentWorks />
        <Contact />
      </div>
    </div>
  );
}

export default App;
