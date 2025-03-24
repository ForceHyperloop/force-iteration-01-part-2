import { StarsBackground } from "./ui/StarsBackground";
import { ShootingStars } from "./ui/ShootingStars";
import Hero from "./Hero";
import NavBar from "./NavBar";
import About from "./About";
import RecentWorks from "./RecentWorks";
import Contact from "./Contact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full bg-[rgba(22,22,23,1)] z-50">
        <NavBar />
      </div>

      <div className="fixed inset-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="w-screen min-h-screen bg-neutral-900 pt-[calc(4rem+1vh)]">
        <Hero />
        <About />
        <RecentWorks />
        <Contact />
      </div>
    </div>
  );
}

export default App;
