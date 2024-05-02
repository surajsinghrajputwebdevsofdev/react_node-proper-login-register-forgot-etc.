import React from 'react'
import { Link } from 'react-router-dom';

function Profile() {
  return (
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a           className='btn btn-outline-danger navbar-brand my-2 text-dark my-sm-1 '
href="#">𝕾𝖊𝖙𝖙𝖎𝖓𝖌𝖘</a> &nbsp;
      </li>
      <Link class="nav-item navbar-brand " to='/changepasswoed'>
        <a           className='btn btn-outline-danger navbar-brand my-2 text-dark my-sm-1 '
 href="#">
  
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
</svg>   
 </a>
      </Link>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Ｍｙ ｐｒｏｆｉｌｅ</h5>
    <p class="card-text">ʷᵒʳᵏ ⁱⁿ ᵖʳᵒᵍʳᵉˢˢ</p>
    <a href="#" class="btn btn-primary">ωα†ïηg</a>
  </div>
</div>  )
}

export default Profile