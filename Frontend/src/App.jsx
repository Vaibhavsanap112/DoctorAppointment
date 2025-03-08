import React from "react";
import "../src/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppoiontments from "./pages/MyApoitment";
import Appoitment from "./pages/Appoitment";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        <Route
          path="/doctors/:speciality"
          element={<Doctors></Doctors>}
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/my-profile" element={<MyProfile></MyProfile>}></Route>
        <Route
          path="/my-appoitments"
          element={<MyAppoiontments></MyAppoiontments>}
        ></Route>
        <Route
          path="/appointment/:docId"
          element={<Appoitment></Appoitment>}
        ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
