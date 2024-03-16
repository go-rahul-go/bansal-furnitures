
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Bed from "./pages/Bed"
import ModernBed from "./pages/ModernBed";
import NormalBeds from "./pages/NormalBeds";
import Tables from "./pages/Tables";
import DiningTable from "./pages/DiningTable"
import CoffeeTable from "./pages/CoffeeTable";
import Chairs from "./pages/Chairs";
import GardenChairs from "./pages/GardenChairs";
import OfficeFurniture from "./pages/OfficeFurniture";
import AllMandir from "./pages/AllMandir";
import Mandir from "./pages/Mandir";
import AllProducts from "./pages/AllProducts";
import AllSofa from "./pages/AllSofa";
import Sofa from "./pages/Sofa"
import AllPlyboard from "./pages/AllPlyboard";
import Plyboard from "./pages/Plyboard";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/beds" element={<Bed/>}/>
        <Route path="/modern_beds" element={<ModernBed/>}/>
        <Route path="/bed" element={<NormalBeds/>}/>
        <Route path="/tables" element={<Tables/>}/>
        <Route path="/dining-table" element={<DiningTable/>}/>
        <Route path="/coffee-table" element={<CoffeeTable/>}/>
        <Route path="/chairs" element={<Chairs/>}/>
        <Route path="/plastic-chairs" element={<GardenChairs/>}/>
        <Route path="/office-furniture" element={<OfficeFurniture/>}/>
        <Route path="/mandirs" element={<AllMandir/>}/>
        <Route path="/mandir" element={<Mandir/>}/>
        <Route path="/all-products" element={<AllProducts/>}/>
        <Route path="/all-sofa" element={<AllSofa/>}/>
        <Route path="/sofa" element={<Sofa/>}/>
        <Route path="/all-plyboards" element={<AllPlyboard/>}/>
        <Route path="/plyboard" element={<Plyboard/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
      </Routes>
      
    </>
  )

}

export default App;
