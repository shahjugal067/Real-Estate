import { Button, Input } from '@material-tailwind/react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { app } from '../firebase'
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage'

const Profile = () => {
  const fileRef = useRef(null)
  const { currentUser} = useSelector((state)=> state.user)
  const [file,setFile] = useState(undefined);
  console.log(file)

  useEffect(()=>{
    if(file){
      handleFileUpload(file);
    }
  },[file]);

  const handleFileUpload = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = await uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      })

  }
  return (
    <div className=' p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-6'>Profile</h1>
      <form action="" className='flex flex-col gap-4'>
        <input onChange={(e)=>setFile(e.target.files[0])}
         type="file" ref={fileRef} hidden accept='image/*' />
        <img onClick={()=> fileRef.current.click()} src={currentUser.avatar} alt="profile" 
         className='rounded-full cursor-pointer h-24 w-24 object-cover self-center mt-2'/>
         <Input label='username' type='text' id='username' placeholder='Name..' className='border p-3 rounded-lg' />
         <Input label='email' type='email' id='email' placeholder='email..' className='border p-3 rounded-lg' />
         <Input label='password' type='password' id='password' placeholder='password..' className='border p-3 rounded-lg' />
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