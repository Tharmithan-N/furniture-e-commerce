import BtmFooter from "./layouts/btmFooter";
import TopNavBar from "./layouts/topNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

export default function App() {
  return (
    <Router>
      <div>
        <BtmFooter>
          <TopNavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<Shop />} />
              <Route path="/contact" element={<Shop />} />
            </Routes>
          </TopNavBar>
        </BtmFooter>
      </div>
    </Router>
  );
}
