import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";

import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
   <Router>
   
   <Routes>

   <Route path="/" element={<Home/>} ></Route>
   <Route path="/Course" element={<Courses/>} ></Route>
   <Route path="/Signup" element={<Signup/>}></Route>
   <Route path="/About" element={<About/>}></Route>
   <Route path="/Contact" element={<Contact/>}></Route>
   </Routes>


   </Router>

  );
}

export default App;
