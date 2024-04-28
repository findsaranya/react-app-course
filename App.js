import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

const resStyle = {
  backgroundColor: "pink",
};
const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ychB0gzKUiciTunIPeII_aIoptW3k81YQpa0wryEFA&s"
        className="logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search">SearchBar</div>
    <div className="res-container">
      <RestaurantCard restName="KFC" cuisine="Burger,Continental" />
      <RestaurantCard restName="McDonalds" cuisine="Burger,Continental" />
    </div>
  </div>
);

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={resStyle}>
      <img
        src="https://shireenanwer.com/wp-content/uploads/2023/02/Untitled-design-98.png"
        alt="res-logo"
      />
      <h3>{props.restName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>34 min</h4>
    </div>
  );
};

const AppLayout = () => (
  <div className="app-layout">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <AppLayout />
  //</StrictMode>
);
