import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios'

function Login() {
  const navigate = useNavigate();
    const [form,setForm]= useState({
             email:"",
             password:"",
           }); 
         const[formError,setFormError] = useState({
             email:"",
             password:"",
           });   
       const changeHandler = (e) => {
         setForm({ ...form,[e.target.name]: e.target.value});
       };
      
        async function loginuser() {
          try {
            const response = await axios.post("http://localhost:8081/login", form);
            const userData = response.data;
        
            const userDataa = JSON.parse(localStorage.getItem('userData')) || [];
            const user = userDataa.find(u => u.email === form.email && u.password === form.password);
            if (userData && userData.token && userData && userData.id) {
                localStorage.setItem('token', userData.token);
                  localStorage.setItem('userId', userData.id);
              navigate("/home");
              Swal.fire({
                title: "Success",
                text: "Login successful",
                icon: "success",
                confirmButtonText: "OK",
              });
              window.location.reload();
            } else {
              Swal.fire({
                title: "Warning !!!",
                text: "Wrong username or password",
                icon: "warning",
                confirmButtonText: "OK",
              });
            }
          } catch (error) {
            Swal.fire({
              title: "Warning !!!",
              text: "Not registered?",
              icon: "warning",
              confirmButtonText: "OK",
            });             
          }
        }
        
      
       function onRegisterSubmit() {
         let errors = false;
         let error = {
         email:"",
         password:"",
         };
         if (form.email.trim().length === 0 || !form.email.includes("@gmail.com")) {
           errors = true;
           error = { ...error, email: "please enter email.... " };
         }
         if (form.password.trim().length === 0) {
           errors = true;
           error = { ...error, password: "please enter password...." };
         }
           if (errors) {
             setFormError(error);
           } else {
             setFormError({}); 
             loginuser();
             const userData = JSON.parse(localStorage.getItem('userData')) || [];
             const user = userData.find(u => u.email === form.email && u.password === form.password);
            //  if (user) {
            //          Swal.fire({
            //            title: "Success",
            //            text: "Login successfully",
            //            icon: "success",
            //            confirmButtonText: "OK",
            //          });  
            //          navigate("/home")  
            //        localStorage.setItem('userId', userData.id);
       
            //          window.location.reload();
            //         } else {
            //          Swal.fire({
            //            title: "Warning !!!",
            //            text: "Not registered?",
            //            icon: "warning",
            //            confirmButtonText: "OK",
            //          });             }         
            }
              }
         return (
    <div>
    <div className='row m-2 p-2 shadow'>
    <div class="card text-center mx-auto shadow">
<div class="card-header bg-danger text-white shadow">
Ｌｏｇｉｎ
</div>
<div class="card-body">
  <div className='form-group row'>
    <label className='col-sm-4'>Email</label>
    <div className='col-sm-8'>
      <input name='email' className='form-control'
       onChange={changeHandler} value={form.email} placeholder='Enter Email Address'/>
        <p className='text-danger'>{formError.email}</p>
    </div>
  </div>
  <div className='form-group row'>
    <label className='col-sm-4'>password</label>
    <div className='col-sm-8'>
      <input type='password' name='password' className='form-control'
       onChange={changeHandler} value={form.password} placeholder='Enter password'/>
        <p className='text-danger'>{formError.password}</p>
    </div>
  </div>
</div>
<div class='card-footer text-muted'>
       <button className='btn btn-info'  onClick={() =>
            {onRegisterSubmit();    
            }} >  
       𝐒𝐮𝐛𝐦𝐢𝐭
        </button>
       </div>
       <div>   
          <Link  to="/register">Create an account</Link>
          </div>
          <div>   
          <Link  to="/forgotpassword">𝘧𝘰𝘳𝘨𝘰𝘵 𝘱𝘢𝘴𝘴𝘸𝘰𝘳𝘥 ?? </Link>
          </div>
      </div>
    </div>
  </div>  
  )
}

export default Login

