import {BrowserRouter,Routes,  Route} from "react-router-dom";
import Solutions from "./components/Solutions";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/testimonials" element={<Testimonials />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/partners" element={<Partners />} />
      <Route exact path="/solutions" element={<Solutions />} />
      <Route exact path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
