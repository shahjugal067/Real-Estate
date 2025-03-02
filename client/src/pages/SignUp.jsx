import React, { useState } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
 
const  SignUp =()=> {

  const navigate = useNavigate()
  const [formData,setFormData] = useState({});
  const [error,setError]= useState(null);
  const [loading,setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]:e.target.value}) 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success === false){
      setError(data.message);
      setLoading(false);
      return
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in');
    console.log(data)
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className='mt-8 animate-pulse text-green-600 text-center items-center justify-center'>
        Sign Up
      </Typography>
      <Typography  color="gray" className="mt-3 mb-8 animate-pulse text-blue-gray-400 font-normal text-center items-center justify-center">
         Enter your details to register.
      </Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <div className="mb-1 flex flex-col gap-6">
        <PersonOutlineIcon className='w-5 h-5 absolute text-center items-center mt-2 ml-3 text-yellow-800'/>
          <Input
            size="lg" type='text' name='username' id='username' onChange={handleChange} 
            placeholder="Enter Name..."
            className=" text-center !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          
         <div>
         <MailOutlineIcon className='w-5 h-5 absolute text-center items-center mt-2 ml-3 text-yellow-800'/>
          <Input
            size="lg" type='email' name='email' id='email' onChange={handleChange}
            placeholder="name@mail.com"
            className="text-center !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
         </div>
         <div>
         <VisibilityIcon className='w-5 h-5 absolute text-center items-center mt-2 ml-3 text-yellow-800'/>
          <Input
            type="password" name='password' id='password' onChange={handleChange}
            size="lg"
            placeholder="Enter Password"
            className=" text-center !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
         </div>
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button disabled={loading} type='submit'  className="mt-6" fullWidth>
          {loading ? 'Loading...' : 'Sign Up'}
        </Button>
        <OAuth/>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={'/sign-in'} className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
    {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
}

export default SignUp