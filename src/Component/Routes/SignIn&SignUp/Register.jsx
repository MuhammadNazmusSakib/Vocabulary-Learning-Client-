import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contex } from '../../ContexApi/Contex';
// import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const {createNewUser} = useContext(Contex)
  
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   photoURL: '',
  //   password: '',
  // });
  // const [passwordError, setPasswordError] = useState('');

  //                            Handle input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  //                                Validate password
  // const validatePassword = (password) => {
  //   if (password.length < 6) {
  //     return 'Password must be at least 6 characters long.';
  //   }
  //   if (!/[A-Z]/.test(password)) {
  //     return 'Password must have at least one uppercase letter.';
  //   }
  //   if (!/[a-z]/.test(password)) {
  //     return 'Password must have at least one lowercase letter.';
  //   }
  //   return '';
  // };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target)
    const name = form.get("name")
    const email = form.get("email")
    const photo = form.get("photo")
    const password = form.get("password")
    console.log({name,email, photo, password})

    createNewUser(email, password)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });

    // const error = validatePassword(formData.password);
    // if (error) {
    //   setPasswordError(error);
    //   return;
    // }

    //                                   Simulate successful registration
  //   if (formData.email && formData.password && formData.name) {
  //     console.log('User registered with data:', formData);
  //     toast.success('Registration successful!');
  //     navigate('/');
  //   } else {
  //     toast.error('Registration failed. Please fill in all fields.');
  //   }
  };

  //                                    Handle Google Login (placeholder functionality)
  // const handleGoogleLogin = () => {
  //   toast.info('Google login not implemented yet.');
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              // value={formData.name}
              // onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              // value={formData.email}
              // onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              id="photoURL"
              name="photo"
              type="url"
              placeholder="Enter a photo URL"
              // value={formData.photoURL}
              // onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              // value={formData.password}
              // onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {/* {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )} */}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Social Login */}
        <div className="text-center mt-6">
          <button
            className="flex items-center justify-center w-full bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-600 transition duration-200"
            // onClick={handleGoogleLogin}
          >
            Sign up with Google
          </button>
        </div>

        {/* Redirect to Login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => navigate('/login')}
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
