import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./companents/Header";
import Basket from "./companents/Basket";
import Hero from "./companents/Hero";
import AddProduct from "./companents/AddProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Hero/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
