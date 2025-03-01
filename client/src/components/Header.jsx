import LoginIcon from '@mui/icons-material/Login';
import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon, SignalIcon, UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
   
  export function NavbarDark() {
    return (
      <Navbar
        variant="gradient"
        color="blue-gray"
        className=" sticky top-0 bg-black px-0 py-0 w-full !rounded-none z-50"
      > 
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-44 ml-4 cursor-pointer py-1.5"
          >
           Real-Estate
          </Typography>
          
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              variant="surface"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
          <div className="ml-auto flex gap-1 md:mr-4">
            <ul className="flex gap-4">
               <Link to={'/'}>
               <li className="hover:text-red-700 cursor-pointer hidden sm:inline">Home</li>
               </Link> 
               <Link to={'/about'}>
               <li className="hover:text-red-700 cursor-pointer hidden sm:inline">About</li>
               </Link> 
               <Link to={'/sign-in'} >
               <li className="hover:text-green-900 cursor-pointer relative hover:scale-105 transition-all">
                <LoginIcon className="h-6 w-6 "/></li>
               </Link>
                 
            </ul>
            
          </div>
         
        </div>
      </Navbar>
    );
  }