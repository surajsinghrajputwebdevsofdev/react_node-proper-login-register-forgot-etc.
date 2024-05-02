import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Linkkepages(abc) {
        const {Component_101}=abc;
        const navigate = useNavigate();
        useEffect(()=>{
            let userId = localStorage.getItem('userId');
            if(userId !== null){
                navigate("/home")  
            }
        });
      return (
        <div>
            <Component_101/>
        </div>
      )
    }
    

export default Linkkepages