import React from 'react'
import { Link } from 'react-router-dom'
import './LeftMenu.css';
function LeftMenu() {
  return (
    <div className='side'>
      <div className='side-bar'>
        <ul className='list'>
          <li className='mt-3'><Link to="home"><i className="fa-solid fa-house"></i> Home</Link></li>
          <li><Link to="card"><i className="fa-solid fa-cart-shopping"></i> Card List</Link></li>
          <li><Link to="tablelist"><i className="fa-solid fa-users"></i> Employe List</Link></li>
          <li><Link to="charts"><i className="fa-solid fa-chart-simple"></i> Charts</Link></li>
          <li><Link to="profile"><i className="fa-solid fa-user"></i> Profile</Link></li>
          <li><Link><i className="fa-solid fa-gear"></i> Setting</Link></li>
          <li><Link><i className="fa-solid fa-question"></i> Help</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default LeftMenu