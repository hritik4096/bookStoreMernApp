import { BrowserRouter as Router,Routes ,Route, Navigate } from "react-router-dom";

import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
   <Router>
   
   <Routes>

   <Route path="/" element={<Home/>} ></Route>
   <Route path="/Course" element={authUser?<Courses/>:<Navigate to="/signup"></Navigate>} ></Route>
   <Route path="/Signup" element={<Signup/>}></Route>
   <Route path="/About" element={<About/>}></Route>
   <Route path="/Contact" element={<Contact/>}></Route>
   </Routes>
   <Toaster/>


   </Router>

  );
}

export default App;
