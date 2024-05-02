import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Swal from "sweetalert2";
function Forgotpassword() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        newPassword: '',
        confirmpassword: '' 
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { email, newPassword, confirmpassword } = formData;
            const response = await axios.post('http://localhost:8081/forgotpassword', { email, newPassword, confirmpassword });

            const userData = response.data;
        
            const userDataa = JSON.parse(localStorage.getItem('userData')) || [];
            if (userData && userData.token ) {
                localStorage.setItem('token', userData.token);
              navigate("/home");

            console.log(response.data); 
            Swal.fire({
              title: "Success",
              text: "New Password Add successfully",
              icon: "success",
              confirmButtonText: "OK",
            });
            navigate("/profile");
          } else {
                Swal.fire({
                  title: "Warning !!!",
                  text: "Wrong username please enter valid username",
                  icon: "warning",
                  confirmButtonText: "OK",
                });
              }
        } catch (error) {
            console.error('Error changing password:', error.response.data);
            Swal.fire({
              title: "Error",
              text: "Something went wrong !!!",
              icon: "error",
              confirmButtonText: "OK",
            });
        }
    };
  return (
    <div className="alert alert-danger alert-dismissible fade show">
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Password guidelines!</strong> A password can be reset when you forget your password or request a password change.
                <a className="close" data-dismiss="alert" aria-label="Close"></a>
            </div>
            <div className='row m-2 p-2 shadow'>
                <div className="card text-center mx-auto shadow">
                    <div className="card-header bg-danger text-white shadow">
                    𝘍𝘰𝘳𝘨𝘰𝘵 𝘱𝘢𝘴𝘴𝘸𝘰𝘳𝘥 ??
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className='form-group row'>
                                <label className='col-sm-4'>𝐄𝐦𝐚𝐢𝐥</label>
                                <div className='col-sm-8'>
                                    <input
                                        type='text'
                                        name='email'
                                        className='form-control'
                                        placeholder='Enter your email'
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-4'> 𝐍𝐞𝐰 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</label>
                                <div className='col-sm-8'>
                                    <input
                                        type='password'
                                        name='newPassword'
                                        className='form-control'
                                        placeholder='Enter your new password'
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-4'>𝐂𝐨𝐧𝐟𝐢𝐫𝐦 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</label>
                                <div className='col-sm-8'>
                                    <input
                                        type='password'
                                        name='confirmpassword' 
                                        className='form-control'
                                        placeholder='Enter new password'
                                        value={formData.confirmpassword} 
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='card-footer text-muted'>
                                <button type="submit" className='btn btn-info'>
                                𝐒𝐮𝐛𝐦𝐢𝐭
                                </button>
                            </div>
                            <div>   
          <Link  to="/register">Create an account</Link>
          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Forgotpassword