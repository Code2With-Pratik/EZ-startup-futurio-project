import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    Contact
} from "./components";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white scroll-smooth">
        <div>
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
      <div>
    <Contact/>
    <ToastContainer />
    <Footer/>
      </div>
     <HomeButton /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
