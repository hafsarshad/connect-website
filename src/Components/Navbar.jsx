import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import NavIcon from '../Images/HomeImages/bars-solid.svg';
import Logo from '../Images/HomeImages/logo.svg';

const NavBar = () => {
  const [Open , setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!Open);
  };
    return (
 <>
     <div className='hidden lg:block  '>
     <nav className=' flex justify-between items-center '>
          <div className=''>
            <img src={Logo} alt="" />
          </div>
        <ul className=' flex  text-center text-white' >
            <li className='cursor-pointer px-5 py-4'><Link to='/'>Home</Link></li>
            <li className=' px-5 py-4'><Link to='/'>About</Link></li>
            <li className=' px-5 py-4 relative cursor-pointer group show'>Services
              <ul className= ' w-52 rounded space-y-4 absolute hidden group-[.show:hover]:block'  >
                  <li>TALENT ACQUISITION</li>
                  <li>TALENT MANAGEMENT</li>
                  <li>JANITORIAL SERVICES</li>
              </ul>
            </li>
            <li className=' px-5 py-4'><Link to='/'>Added value</Link>  </li>
            <li className=' px-5 py-4'> <Link to='/'>Blog</Link></li>
            <li className=' px-5 py-4'> <Link to='/'>Foundation</Link></li>
            <li className=' px-5 py-4'><Link to='/'>Join our teeam</Link></li>
            <li className=' px-5 py-4'><Link to='/'>GET A QUOTE</Link></li> 
        </ul>
       </nav>
     </div>
        
<div className='sm:block lg:hidden'>
      <nav className=' text-white flex justify-between'>
          <div className=''>
            <img src={Logo} alt="" />
          </div>
        <img className=' rounded-xl h-10 w-11  'src={ NavIcon} onClick={toggleNavbar}/>
      </nav>
       <div className={` mb-3  text-white  ${
        Open ? 'block' : 'hidden'}`}>
      <ul className= 'bg-slate-60'>
           <li className='cursor-pointer px-1 py-2'><Link to='/'>Home</Link></li>
           <li className=' px-1 py-2'><Link to='/'>About</Link></li>
           <li className=' px-1 py-2 relative cursor-pointer group show'>Services
             <ul className= ' left-32 top-2 w-43 rounded space-y-4 absolute hidden group-[.show:hover]:block'  >
                 <li>TALENT ACQUISITION</li>
                 <li>TALENT MANAGEMENT</li>
                 <li>JANITORIAL SERVICES</li>
              </ul>
           </li>
           <li className=' px-1 py-2'><Link to='/'>Added value</Link>  </li>
           <li className=' px-1 py-2 '> <Link to='/'>Blog</Link></li>
           <li className=' px-1 py-2'> <Link to='/'>Foundation</Link></li>
           <li className=' px-1 py-2'><Link to='/'>Join our teeam</Link></li>
           <li className=' px-1 py-2 '><Link to='/'>GET A QUOTE</Link></li> 
       </ul> 
       </div>
 </div>
 </>
    );
};

export default NavBar;