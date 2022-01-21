import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import Logo from '../Logo'
import AccountButton from '../TopBar/components/AccountButton'


import './nav.css'
function TopBar2(){
  const [showLinks, setShowLinks] = useState(false);

  return (<div className="Navbar">
    <div className="left-side-empty">&nbsp;</div>
    <div className="leftSide">
      <Logo />
      <div className="links" id={showLinks ? "hidden" : ""}>
      <NavLink exact activeClassName="active" to="/" onClick={()=> setShowLinks(false)}>
        Home 
      </NavLink>
      <NavLink exact activeClassName="active" to="/farms" onClick={()=> setShowLinks(false)}>
       Farm
      </NavLink>
      <NavLink exact activeClassName="active" to="/staking" onClick={()=> setShowLinks(false)}>
        Staking
      </NavLink>
        
        <div className="xs-menu-btn">
          <AccountButton/>
        </div>
      </div>
    </div>
    <div className="rightSide">
      <div className="rlinks">
        <AccountButton/>
      </div>
      {/* <button className="openButton" >Open</button> */}
      <FaBars className="bars" onClick={()=> setShowLinks(!showLinks)}/>
    </div>
  </div>);
}

export default TopBar2;