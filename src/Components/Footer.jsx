import React from 'react';
import Footerlogo from '../Images/HomeImages/logo.svg';
import DogImage from '../Images/HomeImages/DogImage (2).svg';
import Mailfont from '../Images/HomeImages/envelope-regular.svg'
import Callfont from '../Images/HomeImages/phone-solid.svg'
import Addressfont from '../Images/HomeImages/location-dot-solid.svg'
import Facebook from '../Images/HomeImages/facebook (1).svg'
import Instagram from '../Images/HomeImages/square-instagram.svg'
import Linkedin from '../Images/HomeImages/linkedin.svg'


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white relative">
        
      <div className="container md:w-4/5 mx-auto flex flex-col lg:flex-row justify-around items-start ">
        <div className="mb-4 mt-7 lg:mb-0 ">
          <img src={Footerlogo} alt="Connekt Logo" />
        </div>
        <div className='hidden lg:block h-20 my-4 w-[1px] bg-white'></div>

        <div className="mb-4 lg:mb-0">
          <h2 className="text-lg font-semibold">Contact Info:</h2>
           <div className='flex gap-1 mt-3'>
            <img src={Mailfont} className='h-7'/>
            <a href="mailto:info@connektsolutions.com" className="text-lg hover:underline">
              info@connektsolutions.com
            </a>
            </div>

            <div className='flex gap-1  mt-1'>
            <img src={Callfont} className='h-6'/>
            <a href="tel:305-452-6831" className=" text-lg hover:underline">
              (305)-452-6831
            </a>
            </div>
        </div>
        
         <div className="mb-4 lg:mb-0">
            <h2 className="text-lg font-semibold">Address:</h2>
            <div className='flex mt-2'>
                <img src={Addressfont} className='h-6 text-white'/>
                <p className=" text-lg">1801 NE 123rd Street</p>
            </div>
            <p className=" text-lg mx-4">Suite 314</p>
            <p className=" text-lg mx-4">North Miami, FL 33181</p>
         </div>

         <div className="mb-4 lg:mb-0 ">
            <h2 className="text-lg font-semibold">Follow Us:</h2>
            <div className='flex gap-4 mt-3'>
                <img src={Facebook} className='h-6 '/>
                <img src={Instagram} className='h-6'/>
                <img src={Linkedin} className='h-6'/>
            </div>
            
         </div>



         <div className="hidden lg:block absolute  bottom-0 right-11 ">
                <img src={DogImage} alt="Dog Illustration" className="h-48"/>
        </div>
         
      </div>
     
    </footer>
  );
};

export default Footer;
