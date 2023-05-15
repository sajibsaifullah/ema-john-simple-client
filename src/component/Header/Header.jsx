import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  // console.log(user?.email)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/signup">SignUp</Link> */}
        {
          user && 
          <span className="text-white">
            Welcome, &nbsp; {user.email}
            <button className="btn-logOut" onClick={handleLogOut}>Log Out</button>
          </span>
        }
      </div>
    </nav>
  );
};

export default Header;
<h2>This is a header</h2>;
