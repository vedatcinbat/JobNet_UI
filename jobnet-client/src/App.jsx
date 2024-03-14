import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./Styles/HeaderStyle.css"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Companies from "./pages/Companies.jsx"
import Jobs from "./pages/Jobs.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/companies" element={<Companies />}/>
              <Route path="/jobs" element={<Jobs />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
