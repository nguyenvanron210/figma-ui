import "./App.css";

function App() {
  return (
    <div className="dashboard-dark">
      <h1 className="logo">
        <strong>ForShop</strong>
      </h1>
      <div className="navigation">
        <span className="span1">Dashboard</span>
        <span>Orders</span>
        <span>Products</span>
        <span>Marketing</span>
        <span>Rates</span>
        <span>Reports</span>
      </div>
      <div className="bg">
        <h1 className="welcome">
          Welcome, <strong>Damian</strong>
        </h1>
        <div className="top-actions">
          <input placehoder="Search for products..."></input>
          <button></button>
        </div>
        <div className="summary-stats">
          <div className="orders">
            <div className="retangle-3"></div>
          </div>
          <div className="profit">
            <div className="retangle-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
