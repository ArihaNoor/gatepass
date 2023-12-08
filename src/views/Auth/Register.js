import React, { useState } from "react";
import RegisterImage from '../../assets/images/register.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/authSlicer";

const RegisterForm = () => {

  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const onChange = (element) => {
      setUser({...user , [element.target.name]:element.target.value })
  }
  const dispatch = useDispatch();

 const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(registerUser({ username: user.username, email: user.email, password: user.password }));
 }
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);


  return (
    <div className="flex justify-center items-center bg-blue-100 md:my-5 w-full md:w-3/5 mx-auto rounded-md shadow-md">
      <div className="flex flex-col md:flex-row rounded-md">
        <div className="w-full md:w-1/2">
          <img alt="" src={RegisterImage} className="w-full h-full object-contain" />
        </div>
        <div className="w-full md:w-1/2 p-8"> 
          <h2 className="text-2xl font-bold mb-4">Register Yourself!</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit} > 
            <div className="mb-0">
              <label htmlFor="username" className="text-sm font-bold">Username</label>
              <input type="text" id="username" name="username" placeholder="Enter Username" className="border-2 p-2 w-full" onChange={onChange} />
            </div>
            <div className="mb-0">
              <label htmlFor="email" className="text-sm font-bold">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter Email" className="border-2 p-2 w-full" onChange={onChange} />
            </div>
            <div className="mb-0"> 
              <label htmlFor="password" className="text-sm font-bold">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter Password" className="border-2 p-2 w-full" onChange={onChange} />
            </div>
            <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 w-full">
            {loading ? 'Creating Account...' : 'Create Account'}
            </button>
            {error && <div className="text-red-500 text-center mt-2">{error}</div>}
            <Link to="/" className='text-gray-400 mt-2'>Already have an Account?</Link> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
