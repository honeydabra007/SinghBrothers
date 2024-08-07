import React from 'react'
import { TbMessageCircle2 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const About = () => {
 
  return (
    <div className='w-full overflow-hidden'>
    <div  className="relative w-full h-[80vh] font-OpenSans">
    <img
      className="object-cover w-full h-full block"
      src={`${process.env.PUBLIC_URL}/group-young-architects (1).jpg`}
      alt="SB Logo"
      
    />
    <div className='  flex flex-col p-4 md:p-20  font-semibold gap-4 md:gap-0  absolute top-0 left-0 w-full h-[80vh] text-white' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <h1 data-aos="zoom-out"  className=' text-[1.4em] md:text-[3em] pt-40 md:pt-16'>Welcome to Singh-Brothers</h1>
    <p data-aos="zoom-in"  className=' text[.9em] md:text-[1.2em] w-[270px] md:w-[650px]'>At Singh Brothers, we are dedicated to providing comprehensive services to individuals, businesses, and organizations across various sectors</p>
    <div >
    
    <Link to="/contact"><button  data-aos="fade-right" data-aos-duration="800" className='flex items-center gap-2 text-[1.2em] mt-5 bg-blue-800 p-3 rounded-[40px] absolute right-0 top-[380px] transition-all duration-150 ease-in-out '><TbMessageCircle2 classname="text-center"/> Contact </button></Link> 
  
    </div>
    </div>
    </div>
    <div>
    <div className='flex flex-col font-OpenSans md:flex-row p-0 md:p-16 gap-4 md:gap-12'>
    <div  data-aos="fade-right"  className='flex flex-col  justify-center gap-4 p-10 mt-5' >
    <h1 className='text-[1.4em] md:text-[2em] w-[300px] md:w-[450px] p-0 md:p-5'>Building greater futures through innovation and collective knowledge</h1>
    <p className=' text-[1em] md:text-[1.2em] w-[270px] md:w-[410px] p-0 md:p-4'>Singh-Brothers Consultancy Services is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses. We believe innovation and collective knowledge can transform all our futures with greater purpose.</p>
    </div>
    <img data-aos="fade-left"  className=' h-[300px] object-contain md:h-[600px] m-auto md:m-0 w-[280px] md:w-[600px]  mt-0 md:mt-12' src='/homebg.jpg' alt=''/>
    </div>
    </div>
    <div className='flex p-4 md:p-12 bg-cyan-800 gap-1 md:gap-8 mt-8 text-white'>
    <div className='m-4  px-0 md:px-4 w-[140px] md:w-auto'>
    <h1 className=' text-[.6em] md:text-[1.5em] font-semibold'>We Hear Your Thoughts</h1>
    <p className=' text-[.3em] md:text-[1em] font-semibold mt-4'>We believe that our coustmer is the best asset within the company therefore we listen every single voices of our coustmer </p>
    </div>

    <div className=' m-4  px-3 md:px-8 w-[140px] md:w-auto   border-l-2 border-r-2'>
    <h1 className=' text-[.6em] md:text-[1.5em] font-semibold'>We Build Your Passion</h1>
    <p className='text-[.3em] md:text-[1em] font-semibold mt-4'>We turn your passion into success through our consultancy servicesWe turn your passion into success through our consultancy services</p>
    </div>

    <div className=' m-4 px-0 md:px-4 w-[140px] md:w-auto '>
    <h1 className=' text-[.6em] md:text-[1.5em]  font-semibold '>We Deliver Your Request</h1>
    <p className='text-[.3em] md:text-[1em] font-semibold mt-4'>
    We deliver exactly what you need with precision and efficiency. Trust us to meet your requests and exceed your expectations</p>
    </div>
    
    </div>
    <div className='p-8 md:p-16 w-full flex flex-col md:flex-row gap-5 md:gap-16'>
    <div>
    <img data-aos="fade-right" className='h-[250px] object-cover md:h-[550px] shadow-2xl w-[340px] md:w-[2200px] ' src='/into-success-group-young-freelancers-office-have-conversation-smiling (1).jpg' alt=''/>
    
    </div>
    <div data-aos="fade-left" className='flex flex-col gap-2 w-full md:w-auto  text-cyan-800  '>
    <h1 className=' text-[1.2em] md:text-[2em] font-bold '>Your Bussiness, Our Expertise,Your Success</h1>
    <p className=" text-[1em] md:text-[1.3em]   ">Your business, our expertise—driving your success with innovative strategies and personalized solutions. Partner with us to unlock potential, overcome challenges, and achieve your goals with confidence and clarity</p>
    <ol className=' text-[.9em] md:text-[1.2em]  list-disc  flex flex-col gap-3 font-semibold text-black'>
    <li>Your business, our expertise—where success meets strategy.</li>
    <li>Partnering with us means unlocking your business potential, driven by expert guidance</li>
    <li>Tailored solutions for your business challenges, ensuring your path to success</li>
    <li>Experience the difference with our dedicated approach—your success is our mission</li>
    <li>Crafting success stories together, with tailored solutions and expert insights</li>
    </ol>
   
    </div>
    </div>
</div>
   
  )
}

export default About
