import "./App.css";
import Navigation from "./components/Navigation.js";
import Welcome from "./components/Welcome.js";
import SummaryStats from "./components/SummaryStats.js";
import TopSellingProducts from "./components/TopSellingProducts.js";
import Logo from "./components/Logo.js";
import Chart from "./components/Chart.js";
import TopActions from "./components/TopActions.js";
import UniqueVisitors from "./components/UniqueVisitors.js";
import vector1 from "./img/vector-1.png";
import vector2 from "./img/vector-2.png";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function App() {
  return (
    <div className="dashboard-dark">
      <div className="bg">
        <Welcome />
        <TopActions />
        <SummaryStats />
        <TopSellingProducts />
        <UniqueVisitors />
        <div className="sales-statistics-chart">
          <h3 className="h3-sales-statistics">Sales statistics</h3>
          <button className="retangle-monthly">
            Monthly
            <ExpandMoreOutlinedIcon className="ml-[30px] text-[#7979B2]" />
          </button>
          <Chart />
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
