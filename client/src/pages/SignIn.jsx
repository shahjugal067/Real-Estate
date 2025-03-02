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
import { useDispatch, useSelector } from 'react-redux';
import { singInStart,singInSuccess,singInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
 
const  SignIn =()=> {

  const navigate = useNavigate()
  const [formData,setFormData] = useState({});
  const {loading,error} = useSelector(state => state.user);
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]:e.target.value}) 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(singInStart());
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success === false){
      dispatch(singInFailure(data.message));
      return
    }
   dispatch(singInSuccess(data));
    navigate('/');
    console.log(data)
    } catch (error) {
     dispatch(singInFailure(error.message));
    }
  };
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className='mt-8 text-center items-center justify-center'>
        Sign In
      </Typography>
      <Typography color="gray" className="mt-3 mb-6 font-normal text-center items-center justify-center">
         Enter your details to Login.
      </Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        
        <div className='flex flex-col gap-4'>
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
          {loading ? 'Loading...' : 'Sign In'}
        </Button>
        <OAuth/>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Dont have an account?{" "}
          <Link to={'/sign-up'} className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
    {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
}

export default SignIn