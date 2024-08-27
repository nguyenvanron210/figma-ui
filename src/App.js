import "./App.css";
import Navigation from "./components/Navigation.js";
import Welcome from "./components/Welcome.js";
import SummaryStats from "./components/SummaryStats.js";
import TopSellingProducts from "./components/TopSellingProducts.js";
import Logo from "./components/Logo.js";
import TopActions from "./components/TopActions.js";
import UniqueVisitors from "./components/UniqueVisitors.js";
import vector1 from "./img/vector-1.png";
import vector2 from "./img/vector-2.png";

import { ChartRight } from "./components/ChartRight.js";

function App() {
  return (
    <div className="dashboard-dark">
      <div className="dashboard-dark__left">
        <Logo />
        <Navigation />
        {/* <img srcSet={vector1} alt="vector-1" className="vector-1" />
        <img srcSet={vector2} alt="vector-2" className="vector-2" /> */}
      </div>
      <div className="dashboard-dark__right">
        <div className="dashboard-dark__container-left">
          <Welcome />
          <SummaryStats />
          <ChartRight />
        </div>
        <div className="dashboard-dark__container-right">
          <TopActions />
          <TopSellingProducts />
          <UniqueVisitors />
        </div>
      </div>
      <Logo />
      <Navigation />
      <img srcSet={vector1} alt="vector-1" className="vector-1" />
      <img srcSet={vector2} alt="vector-2" className="vector-2" />
    </div>
  );
}

export default App;
