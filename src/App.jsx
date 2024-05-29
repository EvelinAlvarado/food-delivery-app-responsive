import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { PlaceOrder } from "./pages/PlaceOrder/PlaceOrder";
import { Footer } from "./components/Footer/Footer";
import { DevFooter } from "./components/DevFooter/DevFooter";
import { useState, useEffect } from "react";
import { LoginPopUp } from "./components/LoginPopUp/LoginPopUp";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (showLogin) {
      // Add no-scroll class to body when LoginPopUp is shown
      document.body.classList.add("no-scroll");
    } else {
      // Remove no-scroll class from body when LoginPopUp is hidden
      document.body.classList.remove("no-scroll");
    }

    // Clean up the effect by removing the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showLogin]);

  return (
    <>
      {/* Define routes for different pages */}
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <Router>
        <div className="w-[90%] tabletSm:w-4/5 xl:max-w-7xl mx-auto">
          <NavBar setShowLogin={setShowLogin} />
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
