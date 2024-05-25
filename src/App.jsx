import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { PlaceOrder } from "./pages/PlaceOrder/PlaceOrder";
import { Footer } from "./components/Footer/Footer";
import { DevFooter } from "./components/DevFooter/DevFooter";

function App() {
  return (
    <>
      {/* Define routes for different pages */}
      <Router>
        <div className="w-[90%] tabletSm:w-4/5 xl:max-w-7xl mx-auto font-Outfit">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
          </Routes>
        </div>
        <Footer />
        <DevFooter />
      </Router>
    </>
  );
}

export default App;
