import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { currentUser} = useSelector((state)=> state.user)
  return (
    <div className=' p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-6'>Profile</h1>
      <form action="" className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt="profile" 
         className='rounded-full cursor-pointer h-24 w-24 object-cover self-center mt-2'/>
         <Input type='text' id='username' placeholder='Name..' className='border p-3 rounded-lg' />
         <Input type='email' id='email' placeholder='email..' className='border p-3 rounded-lg' />
         <Input type='password' id='password' placeholder='password..' className='border p-3 rounded-lg' />
         <Button className='bg-blue-600 hover:bg-blue-700'>Update</Button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-600 cursor-pointer'>Delete Account</span>
        <span className='text-red-600 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile