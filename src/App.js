import "./App.css";
import Aboutus from "./pages/Aboutus";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import TermsAndConditions from "./pages/TermsAndConditions";
// import CustomCursor from "./CustomCursor.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import noise from "./images/noise.png";
import Navbar from "./components/Basic Components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import DisableRightClick from "./DisableRightClick";
// import Navbar2 from "./components/Basic Components/Navbar2";
gsap.registerPlugin(ScrollTrigger);

function App() {

  const left1Ref = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".navart",
      },
    });

    const el2 = left1Ref.current;

    tl.fromTo(
          el2,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, delay: 0.5}
      )

  }, []);

  return (
    <div className="App" style={{background:{noise}}}>
      <DisableRightClick/>
      {/* <CustomCursor/> */}
      <div className="navart" ref={left1Ref}>
      <Navbar/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/terms"
            element={<TermsAndConditions heading="Terms And Conditions" />}
          />
          <Route
            path="/privacypolicy"
            element={<TermsAndConditions heading="Privacy Policy" />}
          />
          <Route
            path="/cookiepolicy"
            element={<TermsAndConditions heading="Cookie Policy" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
