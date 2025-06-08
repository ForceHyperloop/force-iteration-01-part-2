import { StarsBackground } from "./ui/StarsBackground";
import { ShootingStars } from "./ui/ShootingStars";
import Hero from "./Hero";
import About from "./About";
import RecentWorks from "./RecentWorks";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="fixed inset-0 ">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="min-w-screen min-h-screen bg-neutral-900 pt-[calc(4rem+1vh)]">
        <div id="home" className="scroll-mt-20">
          <Hero />
        </div>
        <div id="about" className="scroll-mt-20">
          <About />
        </div>
        <div id="recent" className="scroll-mt-20">
          <RecentWorks />
        </div>
        <div id="footer" className="scroll-mt-20 flex flex-col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
