import TopNavBar from "./layouts/topNavBar";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div>
      <TopNavBar>
        <Home />
      </TopNavBar>
    </div>
  );
}
