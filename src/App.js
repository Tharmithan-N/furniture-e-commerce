import BtmFooter from "./layouts/btmFooter";
import TopNavBar from "./layouts/topNavBar";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div>
      <BtmFooter>
        <TopNavBar>
          <Home />
        </TopNavBar>
      </BtmFooter>
    </div>
  );
}
