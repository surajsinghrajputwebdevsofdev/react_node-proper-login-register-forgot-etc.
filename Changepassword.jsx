import React, { useState } from 'react';
import axios from 'axios'; 
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

function Changepassword() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        newPassword: '' 
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { email, password, newPassword } = formData;
            const response = await axios.post('http://localhost:8081/Changepass', { email, password, newPassword });

            const userData = response.data;
        
            const userDataa = JSON.parse(localStorage.getItem('userData')) || [];
            if (userData && userData.token ) {
                localStorage.setItem('token', userData.token);
              navigate("/home");

            console.log(response.data); 
            Swal.fire({
              title: "Success",
              text: "Password changed successfully",
              icon: "success",
              confirmButtonText: "OK",
            });
            navigate("/profile");
          } else {
                Swal.fire({
                  title: "Warning !!!",
                  text: "Wrong username or password",
                  icon: "warning",
                  confirmButtonText: "OK",
                });
              }
        } catch (error) {
            console.error('Error changing password:', error.response.data);
            Swal.fire({
              title: "Error",
              text: "Something went wrong",
              icon: "error",
              confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="alert alert-warning alert-dismissible fade show">
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Password guidelines!</strong> A password can be reset when you forget your password or request a password change.
                <a className="close" data-dismiss="alert" aria-label="Close"></a>
            </div>
            <div className='row m-2 p-2 shadow'>
                <div className="card text-center mx-auto shadow">
                    <div className="card-header bg-danger text-white shadow">
                        𝐂𝐡𝐚𝐧𝐠𝐞 𝐩𝐚𝐬𝐬𝐰𝐨𝐫𝐝 !
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
                                <label className='col-sm-4'> 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</label>
                                <div className='col-sm-8'>
                                    <input
                                        type='password'
                                        name='password'
                                        className='form-control'
                                        placeholder='Enter current password'
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-4'>𝐍𝐞𝐰 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</label>
                                <div className='col-sm-8'>
                                    <input
                                        type='password'
                                        name='newPassword' 
                                        className='form-control'
                                        placeholder='Enter new password'
                                        value={formData.newPassword} 
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='card-footer text-muted'>
                                <button type="submit" className='btn btn-info'>
                                𝘾𝙝𝙖𝙣𝙜𝙚
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Changepassword;
