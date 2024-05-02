import React, { useEffect, useState } from 'react'
import {useNavigate, Link } from 'react-router-dom'
import Swal from "sweetalert2";
import axios from 'axios'

function Register() {
  const navigate = useNavigate();
    const [form,setForm]= useState({
   firstname:"",
        lastname:"",
        email:"",
        password:"",
        address: "",
        dob:"",
        confirmpassword:"",
      }); 
    const[formError,setFormError] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        address: "",
        dob:"",
       confirmpassword:"",

      });
      
  const changeHandler = (e) => {
    setForm({ ...form,[e.target.name]: e.target.value});
  };
  function saveUser(){
    try {
     
      axios.post("http://localhost:8081/register",form).then((d)=>{
      })
    } catch (error) {
    }
  }
  
  function onRegisterSubmit() {
    let errors = false;
    let error = {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    address: "",
    dob:"",
    confirmpassword:"",
    };
  
    if (form.firstname.trim().length === 0) {
      errors = true;
      error = { ...error, firstname: "Please enter firstname.... :)" };
    }
    if (form.lastname.trim().length === 0) {
      errors = true;
      error = { ...error, lastname: "Please enter lastname...." };
    }
    if (form.email.trim().length === 0 || !form.email.includes("@gmail.com")) {
      errors = true;
      error = { ...error, email: "Please enter email...." };
    }
    if (form.password.trim().length === 0) {
      errors = true;
      error = { ...error, password: "Please enter password...." };
    }
    if (form.confirmpassword.trim().length === 0) {
      errors = true;
      error = { ...error, confirmpassword: "Please enter confirm password...." };
    }
    if (form.address.trim().length === 0) {
        errors = true;
        error = { ...error, address: "Please enter address...." };
      }
      if (form.dob.trim().length === 0) {
        errors = true;
        error = { ...error, dob: " Please enter DOB...." };
      }
      if (errors) {
        setFormError(error);
      } else {
        setFormError({});
        saveUser();
        const userData = JSON.parse(localStorage.getItem("userData")) || [];
        const emailExists = userData.some(user => user.email === form.email);
        if (emailExists) {
          Swal.fire({
            title: "𝐖𝐚𝐫𝐧𝐢𝐧𝐠 !!!",
            text: "User with this email already exists",
            icon: "warning",
            confirmButtonText: "OK",
          });
          return; 
        }
        else if (form && form.password === form.confirmpassword) {
          let data=localStorage.getItem("userData");
          let userData=data? JSON.parse(data) :[];
          const userId = Date.now().toString();
          const userDataWithId = { ...form, id: userId };
          userData.push(userDataWithId);
          localStorage.setItem("userData",JSON.stringify(userData));
          
          
          Swal.fire({
            title: "Success",
            text: "Register successfully",
            icon: "success",
            confirmButtonText: "OK",
          });         
          navigate("/login")            

        }
        else{
            Swal.fire({
                title: "Warning !!!",
                text: "Password cannot be same",
                icon: "warning",
                confirmButtonText: "OK",
              }); 
        }
      }
  } 
  return (
 <div>
      <div className='row m-2 p-2 shadow'>
      <div className="card text-center mx-auto shadow">
  <div className="card-header bg-danger text-white shadow">
  ｒｅｇｉｓｔｅｒ
  </div>
  <div className="card-body">
    <div className='form-group row'>
      <label className='col-sm-4'>Firstname</label>
      <div className='col-sm-8'>
        <input type='text' name='firstname' className='form-control' 
         onChange={changeHandler} value={form.firstname}placeholder='Enter First Name'/>
        <p className='text-danger'>{formError.firstname}</p>
      </div>
    </div>
    <div className='form-group row'>
      <label className='col-sm-4'>LastName</label>
      <div className='col-sm-8'>
        <input type='text' name='lastname' className='form-control' 
         onChange={changeHandler} value={form.lastname} placeholder='Enter Last Name'/>
        <p className='text-danger'>{formError.lastname}</p>
      </div>
    </div>
    <div className='form-group row'>
      <label className='col-sm-4'>Email</label>
      <div className='col-sm-8'>
        <input type='text' name='email' className='form-control' 
        onChange={changeHandler} value={form.email} placeholder='Enter Email Address'/>
        <p className='text-danger'>{formError.email}</p>
      </div>
    </div>
    <div className='form-group row'>
      <label className='col-sm-4'>Password</label>
      <div className='col-sm-8'>
        <input type='password' name='password' className='form-control'
        onChange={changeHandler} value={form.password} placeholder='Enter password'/>
        <p className='text-danger'>{formError.password}</p>
      </div>
    </div>
    <div className='form-group row'>
      <label className='col-sm-4'>Confirm Password</label>
      <div className='col-sm-8'>
        <input type='password' name='confirmpassword' className='form-control' onChange={changeHandler} value={form.confirmpassword} 
        placeholder='Enter your confirmpassword...'/>
        <p className='text-danger'>{formError.confirmpassword}</p>
      </div>
    </div>
    <div className='form-group row'>
      <label className='col-sm-4'>Address</label>
      <div className='col-sm-8'>
        <input type='text' name='address' className='form-control' onChange={changeHandler} value={form.address} 
        placeholder='Enter your Address'/>
        <p className='text-danger'>{formError.address}</p>
      </div>
    </div>
    <div className='form-group row'>
      <label className='col-sm-4'>date of birth</label>
      <div className='col-sm-8'>
        <input type='date' name='dob' className='form-control' 
         onChange={changeHandler} value={form.dob} placeholder='Enter your DOB'/>
        <p className='text-danger'>{formError.dob}</p>
      </div>
    </div>
  </div>
  <div className='card-footer text-muted'>
         <button className='btn btn-info' onClick={() =>
            {onRegisterSubmit();
            }}>  
             𝐒𝐮𝐛𝐦𝐢𝐭
          </button>         
         </div>
         <div>   
          <Link  to="/login">Already registered?  </Link>
          </div>
        </div>
      </div>
    </div>  )
}

export default Register