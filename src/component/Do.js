import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,  } from 'swiper/modules';
import { PiArrowRightLight } from "react-icons/pi";



// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';

function Do() {
  return (
    <>
      <div className="relative w-full h-[80vh] font-OpenSans">
        <img
          className="object-cover w-full h-full block"
          src={`${process.env.PUBLIC_URL}/whatwe.jpg`}
          alt="SB Logo"
        />
        <div
          className="flex flex-col p-4 md:p-32 gap-4 md:gap-2 absolute top-0 left-0 w-full h-[80vh] text-white"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <h1 className="text-[1.8em] md:text-[2.6em] pt-40 md:pt-0">The Best Consulting Websites That Will Inspire You</h1>
          <p className="text-[.9em] md:text-[1.4em] w-[270px] md:w-[600px]">
            At SinghBrothers we combine our knowledge and quick action to solve problems swiftly. Our services are hassle-free and better than the rest, making sure you have the best experience
          </p>
          <div>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-700 h-14 rounded-[40px] w-[140px] md:w-[200px] mt-4 text-[1.5em]">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-auto  flex gap-8 items-center bg-black  flex-col text-black">
        <h1 data-aos="zoom-in" data-aos-duration="1000" className=" p-4 text-white  rounded-[90px] text-[1em] md:text-[2em] w-[340px] md:w-[650px] mt-4 mb-4 bg-gradient-to-r from-cyan-500 to-blue-700">
          Transform Your Business With Our Services
        </h1>
      </div>
      <div className="w-full h-[80vh]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, ]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }} 
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full  "
        >
          <SwiperSlide className="w-full h-full">
            <img src={`${process.env.PUBLIC_URL}/edu1.jpeg`} alt="Slide 1" className="object-cover w-full h-full" />
            <div
          className="flex flex-col p-4 md:p-32 gap-4 md:gap-2 absolute top-0 left-0 w-full h-[80vh] text-white"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
        <div className='p-8 md:p-4 '>
        <h1 className=' text-[2em] md:text-[4em] pt-28 md:pt-0'>Education Service</h1>
        <p className=' text-[1em] md:text-[1.8em] w-[250px] md:w-[600px]'>Education service lines encompass a range of specialized services offered to enhance and support educational institutions, students, and educators.</p>
        
       
       <button className='mt-6'>
       <Link to="/edu"><PiArrowRightLight className='h-[60px] w-[60px] p-2 rounded-[60px] text-[1.5em]  m-auto bg-black animate-bounce ' /></Link>
       </button>
        
        </div>
        
        </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img src={`${process.env.PUBLIC_URL}/Real-Estate-Services-1536x864.jpg`} alt="Slide 2" className="object-cover w-full h-full" />
            <div
          className="flex flex-col p-4 md:p-32 gap-4 md:gap-2 absolute top-0 left-0 w-full h-[80vh] text-white"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
        <div className='p-8 md:p-2'>
        
        <h1 className='text-[2em] md:text-[4em] pt-28 md:pt-0'>Real Estate Law</h1>
        <p className='text-[1.2em] md:text-[2em] w-[250px] md:w-[600px]'>Drafting agreements, managing closings, resolving disputes, and ensuring zoning compliance for smooth property transactions and ownership.</p>
        <button className='mt-6'>
        <Link to="/real"><PiArrowRightLight className='h-[60px] w-[60px] p-2 rounded-[60px] text-[1.5em]  m-auto bg-black animate-bounce ' /></Link>
        </button>
         
       
        
      
        </div>
        
        </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img src={`${process.env.PUBLIC_URL}/corporate-governance.webp`} alt="Slide 3" className="object-cover w-full h-full" />
            <div
          className="flex flex-col p-4 md:p-32 gap-4 md:gap-2 absolute top-0 left-0 w-full h-[80vh] text-white"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
        <div className='p-8 md:p-4'>
        <h1 className='text-[2em] md:text-[3.5em] pt-28 md:pt-0'>Government Corporate Service</h1>
        <p className='text-[1.2em] md:text-[2em] w-[250px] md:w-[700px]'>Government corporate law encompasses regulations on corporate formation, governance, securities, antitrust, employment, taxation, and intellectual property.</p>
        
      
       <button className='mt-6'>
       <Link to="/gov"><PiArrowRightLight className='h-[60px] w-[60px] p-2 rounded-[60px] text-[1.5em]  m-auto bg-black animate-bounce ' /></Link>
       </button>
        
        </div>
        </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img src={`${process.env.PUBLIC_URL}/finance1.jpg`} alt="Slide 4" className="object-cover w-full h-full" />
            <div
          className="flex flex-col p-4 md:p-32 gap-4 md:gap-2 absolute top-0 left-0 w-full h-[80vh] text-white"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
        <div className='p-8 md:p-4'>
        <h1 className='text-[2em] md:text-[4em] pt-28 md:pt-0'>Finance Advisor Services</h1>
        <p className='text-[1.2em] md:text-[2em] w-[250px] md:w-[600px]'>Your Private Finance Advisor For A Secure
        For Easy Money Management, To Travel Perks And Investments.</p>
        
      
       <button className='mt-6'>
       <Link to="/bank"><PiArrowRightLight className='h-[60px] w-[60px] p-2 rounded-[60px] text-[1.5em]  m-auto bg-black animate-bounce ' /></Link>
       </button>
        
        </div>
        
        </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img src={`${process.env.PUBLIC_URL}/high-angle-stethoscope-table.jpg`} alt="Slide 5" className="object-cover w-full h-full" />
            <div
          className="flex flex-col p-4 md:p-32 gap-4 md:gap-2 absolute top-0 left-0 w-full h-[80vh] text-white"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
        <div className='p-8 md:p-4'>
        <h1 className='text-[2em] md:text-[4em] pt-28 md:pt-0'>Healthcare Law Services</h1>
        <p className='text-[1.2em] md:text-[2em] w-[250px] md:w-[600px] '>Healthcare insurance law encompasses the regulations and legal frameworks governing health insurance policies and practices.
        </p>
        
      
       <button className='mt-6'>
       <Link to="/law"><PiArrowRightLight className='h-[60px] w-[60px] p-2 rounded-[60px] text-[1.5em]  m-auto bg-black animate-bounce ' /></Link>
       </button>
        
        </div>
        </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='flex flex-col md:flex-row  gap-0 md:gap-24 relative bg-cyan-900'>
      <div data-aos="fade-right" className='flex flex-col gap-4 p-4 '>
      <h1 className='text-[4.5em] text-white '>Key Values</h1>
      <p className='text-gray-300 text-[1.1em] w-[300px] md:w-[550px]'>Value begins with people, we seek to understand our market and the people within it because we care about what they want and why they want it.a Key Values section for a consultancy website, it is essential to highlight the principles and standards that guide your operations and interactions with clients.</p>
      <p className='text-gray-300 text-[1.2em] font-bold mt-6 '>Drive to Improve</p>
      <p className='text-gray-300 text-[1.2em] font-bold'>Relationship First</p>
      <p className='text-gray-300 text-[1.2em] font-bold'>Positive Energy</p>
      <p className='text-gray-300 text-[1.2em] font-bold'>Inquisitive Listening</p>
      </div>
      <div data-aos="fade-left" className=' mt-16 md:mt-36 flex flex-col gap-6'>
      <div className=' flex flex-col gap-8 border-gray-400 border-b m-4 h-[220px]'>
      <h1 className='text-[1.1em] text-gray-300 font-bold'>Drive to Improve</h1>
      <p className='text-[1.3em] font-light text-white'>We strive to find, get to know and then place candidates we believe are the perfect fit. And we keep honing our research methods to keep on top</p>
      </div>
      <div className=' flex flex-col gap-8 border-gray-400 border-b m-4 h-[220px]'>
      <h1  className='text-[1.1em] text-gray-300 font-bold'>Relationship First</h1>
      <p className='text-[1.3em] font-light text-white'>We recognise that caring about people and their growth and development is pivotal to a business’ success</p>
      </div>
      <div className=' flex flex-col gap-8 border-gray-400 border-b m-4 h-[220px]'>
      <h1  className='text-[1.1em] text-gray-300 font-bold'>
      Positive Energy</h1>
      <p className='text-[1.3em] font-light text-white'>We value positivity in all we do and acknowledge it as a key element in being a source of success</p>
      </div>
      <div className=' flex flex-col gap-8  m-4 h-[220px]'>
      <h1  className='text-[1.1em] text-gray-300 font-bold'>Inquisitive Listening</h1>
      <p className='text-[1.3em] font-light text-white'>We take the time to hear and listen and will challenge and question to make sure the final choice is the right one for everyone</p>
      </div>
      </div>
      
      </div>
    </>
  );
}

export default Do;




