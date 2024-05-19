import { LOGO_URL } from "../utils/constants";

export default Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} className="logo" />
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
