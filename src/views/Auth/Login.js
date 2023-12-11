import React, { useState } from 'react';
import LoginImage from '../../assets/images/login.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/authSlicer';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const onChange = (element) => {
      setUser({...user , [element.target.name]:element.target.value })
  }
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: user.email, password: user.password }))
      .then(() => {
        // If login is successful, navigate to the "AddData" page
        navigate('/AddData');
      });
  }
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);


  return (
    <div className="flex justify-center items-center bg-blue-100 md:my-20 w-full md:w-3/5 mx-auto rounded-md shadow-md">
      <div className="flex flex-col md:flex-row rounded-md p-8">
        <div className="w-full md:w-1/2">
          <img alt="" src={LoginImage} className="w-full h-full object-contain" />
        </div>
        <div className="w-full md:w-1/2 p-8  md:p-0">
          <h2 className="text-2xl font-bold mb-4">Login Yourself!</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="mb-0">
              <label htmlFor="email" className="text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"  
                placeholder="Enter Email"
                className="border-2 p-2 w-full"
                onChange={onChange}
              />
            </div>
            <div className="mb-0">
              <label htmlFor="password" className="text-sm font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password" 
                placeholder="Enter Password"
                className="border-2 p-2 w-full"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 w-full"
            >
              {loading ? 'Login...' : 'Login'}
            </button>
            {error && <div className="text-red-500 text-center mt-2">{error}</div>}
            <Link to="/register" className="text-gray-400 mt-2">
              Don't have an Account? Register
            </Link>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
