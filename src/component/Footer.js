import React from 'react'
import { Link } from 'react-router-dom'
import { PiPhoneLight } from "react-icons/pi";
import { TiMessage } from "react-icons/ti";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <>
<div  className='h-auto md:h-[70vh] p-8 md:p-0 bg-zinc-950'>
<div className=' border-b-2 flex flex-col md:justify-between md:flex-row h-auto md:h-[60vh] px-0 md:px-4'>
<div className='pt-10'>
<div>
<img className='h-24 w-48 rounded-[70px]' src={`${process.env.PUBLIC_URL}/SB-logo-9 (1).png`}  alt='sb-logo'/>
    <p className='w-[300px] p-4 text-[1em] text-white text-semibold mt-4'>At SinghBrothers we combine our knowledge and quick action to solve problems swiftly</p>
    </div>
    <div className='flex flex-col '>
    <h1 className='text-[1.5em] text-white font-semibold px-4'>Address:</h1>
    <p className='text-[1em] text-white w-[300px] px-4 mt-2'>22 b, Sachivalaya Vihar, Kalyanpura Vistar, Jaipur, Rajasthan 302020</p>
    </div>
   
    
    </div>
    
    
    <div className=' flex  flex-col relative pt-16'>
    <div className='p-4 md:p-0'>
    <div className=' flex flex-col gap-2 text-[1.6em] w-[180px] text-white '>
    <p className='text-[1.3em] text-semibold border-b w-[120px]'>Services</p>
    <Link to ='/edu'><p className='text-[.6em]'>Education Services</p></Link>
    <Link to ='/real'><p  className='text-[.6em]'>Real Estate</p></Link>
    <Link to ='/gov'><p  className='text-[.6em]'>Government Corporate</p></Link>
    <Link to ='/bank'><p  className='text-[.6em]'>Finance</p></Link>
    <Link to ='/law'><p  className='text-[.6em]'>Healthcare Law</p></Link>
    
    </div>
    </div>
   
    
    </div>
    <div className='flex flex-col gap-4 pt-[65px]'>
    <h1 className='text-[2em] text-white  p-4 md:p-0'>Get In Touch</h1>
    <div className='flex gap-4 px-4 md:px-0 items-center'>
     <a href=''><img  className='h-8' src='/instagram-svgrepo-com.svg' alt=''/></a>
     <a href=''><img className='h-8 text-white' src='/linkedin-linked-in-svgrepo-com.svg' alt=''/></a>
    <img className='h-8' src='/twitter-svgrepo-com.svg' alt=''/>
    
    </div>
    <div className='flex flex-col px-4 md:px-0 '>
    <h1 className='text-white text-[1.4em]'>Contact Us</h1>
    <div className='flex gap-2  items-center '>
    <PiPhoneLight className='text-white text-[1.6em]'/>
    <p className='text-white text-[1.1em] p-1 ' >+91 7221041071</p>
    </div>
    </div>
    <div className='flex gap-2 items-center'>
    <CiMail className='text-white text-[1.6em]'/>
    <p className='text-white text-[1.2em]'>singhbrothers140620@gmail.com</p>
    </div>
    
    </div>
    <div className='pt-20 '>
    <div className="mt-8 lg:mt-0">
    <iframe 
    title="Singh Brothers Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.087267517623!2d75.77565491451874!3d26.885304883143734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3d4cf8c89ef%3A0x5f0d4a1e2a536ba2!2sSachivalaya%20Vihar%2C%20Kalyanpura%2C%20Vistar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1592305706749!5m2!1sen!2sin"
           
            height="200"
            width="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
          </div>

          </div>
        
          </div>
          <p className='text-[.9em] md:text-[1.6em] w-[320px] md:w-[480px] m-auto pt-4 text-white'>© All Rights Reserved – singhbrothers.ltd</p>
          </div>
          </>
          )
          }
          
export default Footer
