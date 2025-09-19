// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import AddCart from "./pages/AddCart";
import { CartProvider } from "./context/CartContext";  // ✅ Import provider
import Checkout from "./pages/Checkout"; // ✅ 

function App() {
  return (
    <CartProvider>   {/* ✅ Wrap everything inside provider */}
      <div className="min-h-screen bg-salad-gradient90 ">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/product/:name" element={<Product />} />
            <Route path="/addcart" element={<AddCart />} /> {/* lowercase path */}
            <Route path="/checkout" element={<Checkout />} /> {/* lowercase path */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
