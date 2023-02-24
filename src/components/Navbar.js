import React from 'react'
import { Link } from "react-router-dom";
import image from "../Vaaan-logo.png";
function Navbar() {
  return (
    <div className='navbar'>

        <div className='navbar-logo'>
          <a href="http://vaaaninfra.com/" target="_blank"  >
          <img src={image} alt="Vaaan Infra"  height="30" width="30" />
          </a>
          {/* <img src={image} alt="Vaaan Infra"  height="30" width="30" />
          <a href="http://vaaaninfra.com/" target="_blank" >
          VaaaNInfra
          </a> */}
          </div>
        <ul className='navbar-menu'>
            {/* <li><a href="/">Home</a></li> */}
            {/* <li><a href="/blog">Blog</a></li> */}
            {/* <li><Link to="/">Home</Link></li> */}
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/UserDashboard">User Dashboard</Link></li>
            <li><Link to="/Admin">Admin</Link></li>
            <li><Link to="/Management">Management</Link></li>
            <li><Link to="/Controllers">Controllers</Link></li>
            <li><Link to="/Report">Report</Link></li>
            <li><Link to="/">Log out</Link></li>

        </ul>


    </div>
  )
}

export default Navbar