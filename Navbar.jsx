
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [userData, setUserData] = useState(localStorage.getItem('userData'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  const handleLogout = () => {
    localStorage.removeItem(userId);
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
        window.location.reload();
    setUserData(null); 
  };
  const renderButtons = () => {
    if (userId !== null) {
      return (
        <div>
        <button
          className='btn btn-outline-success navbar-brand my-2 text-dark my-sm-1'
          onClick={handleLogout}
        >
          ᒪᗝǤᗝᑌ丅
        </button>
        <Link className='navbar-brand' to='/profile'>
        𝐩𝐫𝐨𝐟𝐢𝐥𝐞
      </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="navbar-brand" to="/register">
          RegᎥຮτer
          </Link>
          <Link className="navbar-brand" to="/login">
          LᴏɢIɴ 
          </Link>
        </div>
      );
    }
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-warning'>
      <Link className='navbar-brand' to='/'>
      ᕼᗝᗰᗴ
      </Link>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>{renderButtons()}</li>
    
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;
