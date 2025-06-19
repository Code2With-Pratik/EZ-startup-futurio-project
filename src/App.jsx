import { BrowserRouter } from "react-router-dom";
import {
   Navbar,
    Hero,
    About,
    Services,
    Connect,
    Features,
    FeedbackSection,
    Footer,
    HomeButton,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <Navbar />
        <Hero />
      </div>
      <About/> 
      <div>
        <Services/>
        <Features/>
      </div>
      <div>
        <Connect/>
        <FeedbackSection/>
      </div>
    <Footer/>
     <HomeButton /> 
    </BrowserRouter>
  );
}

export default App;
