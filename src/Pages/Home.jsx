import React from 'react';

import HomeBackground from '../Images/HomeImages/homebackground.svg';
import secondSectionBackground from '../Images/HomeImages/connekt.svg';
import secondSectionImage1 from '../Images/HomeImages/secondSection.svg';
import secondSectionImage2 from '../Images/HomeImages/secondsectionsmall.svg';
import thirdSectionBackground from '../Images/HomeImages/thirdBackground.svg';
import third2 from '../Images/HomeImages/third2.svg'
import third3 from '../Images/HomeImages/third3.svg'
import Arrow from '../Images/HomeImages/arrow-right-solid.svg'

import FourthBackground from '../Images/HomeImages/FourthBackground.svg'
import Fourth1 from '../Images/HomeImages/Fourth1.svg'
import Fourth2 from '../Images/HomeImages/Fourth2.svg'
import Fourth3 from '../Images/HomeImages/Fourth3.svg'

import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>
            <div className="first bg-cover bg-no-repeat w-full h-full relative" style={{ backgroundImage: `url(${HomeBackground})` }} >
                <div className="container md:w-4/5 mx-auto">
                    <NavBar />
                    <div className='pb-32 mt-7 md:mt-24'>
                        <div className='flex space-x-2 pl-[2px]'>
                            <div className='bg-gray-400 rounded-xl min-h-6 w-6'></div>
                            <div className='bg-gray-400 rounded-xl min-h-6 w-6'></div>
                            <div className='bg-gray-400 rounded-xl min-h-6 w-6'></div>
                        </div>

                        <div className='text-white mt-3'>
                            <div className='font-bold sm:text-3xl md:text-5xl lg:text-[75px] 2xl:text-[95px]'>
                                EMPOWERING
                            </div>
                            <div className='flex space-x-3'>
                                <div className='font-bold sm:text-3xl md:text-5xl lg:text-[75px] 2xl:text-[95px]'>
                                    BUSINESSES
                                </div>
                                <div className='font-light sm:text-3xl md:text-5xl lg:text-[75px] 2xl:text-[95px]'>
                                    THROUGH
                                </div>
                            </div>
                            <div className='font-light sm:text-3xl md:text-5xl lg:text-[75px] 2xl:text-[95px]'>
                                TALENT SOLUTIONS
                            </div>
                        </div>

                        <div className='mt-5 md:flex lg:justify-between'>
                            <div className='flex-1 mb-2'>
                                <button className='bg-[#2A8FC2] text-white h-8 w-28 rounded-full md:h-10 md:w-36 lg:h-12 lg:w-44 2xl:h-[73px] 2xl:w-[215px]'>
                                    LEARN MORE
                                </button>
                            </div>

                            <div className='flex-1 shrink-0 md:flex'>
                                <div className='bg-white h-2 w-28 shrink-0 mt-2 me-2 rounded-md'></div>
                                <div className='text-white md:w-auto lg:w-[520px] sm:mt-1 md:mt-0'>
                                    We are a <b>leading staffing solutions company</b>, dedicated to aligning
                                    businesses with top-tier talent to meet their strategic and operational needs.
                                    With an emphasis on precision, efficiency, and innovation, we bridge the gap between
                                    <b> organizational</b> requirements and <b>exceptional candidates</b>.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="second bg-right-top bg-no-repeat" style={{ backgroundImage: `url(${secondSectionBackground})` }}>
                <div className="container max-w-screen-xl mx-auto lg:w-4/5 py-16 sm:py-28">
                    <div className="md:flex">

                        <div className="shrink-0 md:w-1/2 w-full md:p-0">
                            <img src={secondSectionImage1} alt="Section Image 1" className="w-full h-auto" />
                        </div>

                        <div className="md:w-1/2 w-full lg:px-10 lg:py-16">
                            <img src={secondSectionImage2} alt="Section Image 2" className="w-full h-auto md:mb-8" />
                            <h3 className="text-lg md:text-xl mx-5 md:mx-6">
                                Boasting over <span className="text-sky-700">15 years of experience,</span> our expertise spans various industries, enabling us to cater to a diverse clientele.
                                At Connekt, we take care of all <span className="text-sky-700">aspects of our clients’</span> talent management so they can focus on their business and its growth.
                            </h3>
                            <button className='text-sky-700 mt-7 ml-6'>LEARN MORE</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-[#2A8FC2]'>
                <div className='container md:w-4/5 mx-auto py-9 px-24 md:flex justify-around' style={{ backgroundImage: `url(${secondSectionBackground})` }}>
                    <div>
                        <h1 className='text-8xl text-white font-semibold'>200</h1>
                        <h1 className='text-xl text-white'>Happy workers</h1>
                    </div>

                    <div>
                        <h1 className='text-8xl text-white font-semibold'>15+</h1>
                        <h1 className='text-xl text-white'>Years of experience</h1>
                    </div>

                    <div>
                        <h1 className='text-8xl text-white font-semibold'>30</h1>
                        <h1 className='text-xl text-white'>Satisfied clients</h1>
                    </div>

                </div>
            </div>

            <div className="third bg-cover bg-no-repeat w-full h-full" style={{ backgroundImage: `url(${thirdSectionBackground})` }} >
                <div className='container md:w-4/5 mx-auto px-3'>
                   <h1  className='text-[66px] text-white pt-9  text-center'>OUR <span className='text-[#2A8FC2]'> SERVICES</span> </h1>

                        <div className='py-20 flex flex-col lg:flex-row justify-evenly mx-auto space-y-8 lg:space-y-0 lg:space-x-8'>
                            <div className='relative w-full max-w-sm h-96 bg-no-repeat group' style={{ backgroundImage: `url(${third3})` }}>
                                <div className='w-full h-full bg-gradient-to-b from-transparent to-blue-900'></div>
                                <h1 className='text-3xl text-white absolute left-4 top-4 lg:top-8 group-hover:top-1 group-hover:text-black group-hover:underline transition-all duration-300'>TALENT <br /> ACQUISITION</h1>
                                <p className='w-[96%] mx-4  max text-white absolute top-20 opacity-0   group-hover:opacity-100  '>Our process is deeply rooted in understanding your unique business culture and operational needs, enabling us to source candidates who are not just qualified, but perfectly aligned with your company’s ethos and objectives. From rigorous screening to personalized matchmaking, our aim is to transform your talent pipeline into a strategic asset, driving your business towards sustained growth and success.</p>
                            </div>

                            <div className='relative w-full max-w-sm h-96 bg-no-repeat group' style={{ backgroundImage: `url(${third2})` }}>
                                <div className='w-full h-full bg-gradient-to-b from-transparent to-blue-900'></div>
                                <h1 className='text-3xl text-white absolute left-4 top-4 lg:top-8 group-hover:top-1 group-hover:text-black group-hover:underline  transition-all duration-300'>TALENT <br /> MANAGEMENT</h1>
                                <p className='w-[96%] mx-4  text-white absolute top-20 opacity-0   group-hover:opacity-100 '>Our process is deeply rooted in understanding your unique business culture and operational needs, enabling us to source candidates who are not just qualified, but perfectly aligned with your company’s ethos and objectives. From rigorous screening to personalized matchmaking, our aim is to transform your talent pipeline into a strategic asset, driving your business towards sustained growth and success.</p>
                            </div>

                            <div className='relative w-full max-w-sm h-96 bg-no-repeat group' style={{ backgroundImage: `url(${third3})` }}>
                                <div className='w-full h-full bg-gradient-to-b from-transparent to-blue-900'></div>
                                <h1 className='text-3xl text-white absolute left-4 top-4 lg:top-8 group-hover:top-1 group-hover:text-black group-hover:underline transition-all duration-300'>JANITORIAL <br /> SERVICES</h1>
                                <p className='w-[96%] mx-4  text-white absolute  top-20 opacity-0   group-hover:opacity-100 '>Our process is deeply rooted in understanding your unique business culture and operational needs, enabling us to source candidates who are not just qualified, but perfectly aligned with your company’s ethos and objectives. From rigorous screening to personalized matchmaking, our aim is to transform your talent pipeline into a strategic asset, driving your business towards sustained growth and success.</p>
                            </div>
                        </div>

             

                  
                </div>
            </div>
    
 <div className="Fourth bg-cover bg-no-repeat w-full h-full" style={{ backgroundImage: `url(${FourthBackground})` }} >
  <div className='container md:w-4/5 mx-auto px-3'>
     <h1  className='text-[66px] text-white pt-9  text-center'>OUR <span className='text-[#2A8FC2]'> BLOG</span> </h1>

        <div className='py-12 flex flex-col lg:flex-row justify-evenly mx-auto space-y-8 lg:space-y-0 lg:space-x-8'>
             <div className=' w-full h-full'>
                 <img src={Fourth1} /> 
                 <h1 className='text-white text-xl font-medium underline'>How Staffing Agencies Propel Business Growth</h1> 
                 <div className='flex gap-1 mt-3'>
                    <h1 className='text-white text-2xl font-semibold'>READ MORE</h1>
                    <img src={Arrow} style={{height:'30px', color:'white'}} className='mt-1'/>
                </div>         
            </div>

            <div className=' w-full max-w-sm '>
             <img src={Fourth2} /> 
             <h1 className='text-white text-xl font-medium underline'>The Role of Staffing Agencies in Shaping Guest Experiences</h1>  
               <div className='flex gap-1 mt-3'>
                    <h1 className=' text-white text-2xl font-semibold'>READ MORE</h1>
                    <img src={Arrow} style={{height:'30px'}} className='mt-1'/>
                </div>           
            </div>

            <div className='w-full max-w-sm ' >
              <img src={Fourth3} /> 
              <h1 className='text-white text-xl font-medium underline'>How Comprehensive Talent Management Fuels Long-term Success</h1> 
                <div className='flex gap-1 mt-3'>
                    <h1 className='text-white text-2xl font-semibold'>READ MORE</h1>
                    <img src={Arrow} style={{height:'30px'}} className='mt-1'/>
                </div>                  
            </div>
         </div>
    
    </div>
</div>

    



            <Footer/>
        </>
    );
};

export default Home;

