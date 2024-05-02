import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Privatepages(abc) {
    const {Component}=abc;
    const navigate = useNavigate();
    useEffect(()=>{
        let userId = localStorage.getItem('userId');
        if(userId === null){
            navigate("/login")  
        }
    });
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Privatepages