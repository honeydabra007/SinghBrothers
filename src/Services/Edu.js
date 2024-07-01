import React from 'react'
import { Link } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";
import { PiMedalThin } from "react-icons/pi";
import { SlScreenDesktop } from "react-icons/sl";
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi"
import axios from 'axios'
import { RxCrossCircled } from "react-icons/rx"
import { LiaCheckDoubleSolid } from "react-icons/lia"
import { PiLockSimpleFill } from "react-icons/pi";


const Eduitem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <div className="mb-6">
      <button
        className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className=" text-[.7em] md:text-[1.2em] font-semibold font-Poppins">{question}</span>
        {isOpen ? <FiMinus  className="text-gray-600 text-[1em] md:text-[1.5em]" /> : <FiPlus  size={20} className="text-gray-600 text-[1em] md:text-[1.5em]" />}
      </button>
      {isOpen && <p className="mt-2 px-4 py-3  text-[.6em] md:text-[1em]   text-gray-900 bg-gray-100 rounded-lg font-Poppins shadow-md">{answer}</p>}
    </div>
  );
};
const Edu = () =>{
 
    const[formData, setFormData] = useState({
     firstname:'',
     lastname:'',
     email:'',
     contact:'',
     message:''
    });
    const[errors,setErrors] = useState([])
    const[successMessage, setSuccessMessage] = useState('');
 
    const handleChange = (e) =>{
     const {name,value} = e.target;
     setFormData({
       ...formData,
       [name]:value
     });
    };
    const handleSubmit = async (e) => {
     e.preventDefault();
 
     try {
       const response = await axios.post(
        "http://localhost:8001/contact",
         formData
       );
       console.log(response.data);
       // Reset form fields after submission
       setFormData({
         firstname: '', 
         lastname:'',
          email: '',
          contact:'',
         message: ''
       });
       setErrors([]); // Clear errors if submission is successful
       setSuccessMessage('Form submitted successfully...'); // Set success message
     } catch (error) {
       console.error('Form submission error:', error);
       if (error.response && error.response.data && error.response.data.msg) {
         setErrors(error.response.data.msg);
         setSuccessMessage(''); // Clear success message if there's an error
       } else {
         setErrors(['An unexpected error occurred.']);
         setSuccessMessage(''); // Clear success message if there's an error
       }
     }
   };
  return (
    <div className='font-OpenSans w-full overflow-hidden'>
    <div  className="relative w-full h-[80vh]">
    <img
      className="object-cover w-full h-full block"
      src={`${process.env.PUBLIC_URL}/Eduteam (1).jpg`}
      alt="SB Logo"
      
    />
    <div className='  flex flex-col p-4 md:p-32 gap-4 md:gap-0  absolute top-0 left-0 w-full h-[80vh] text-white' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <h1 className=' text-[1.2em] md:text-[3em] pt-40 md:pt-0'>Learning For A</h1>
     <p className=' text-[2.5em] md:text-[5em] w-[300px] md:w-[500px]'>Better Future</p>
   </div>

    </div>
      <div className='flex flex-col   md:relative md:justify-between p-4 md:p-14 gap-4 mb-10'>
        <div data-aos="fade-right" data-aos-duration="1000" className='bg-blue-400 md:bg-white h-[52vh] none md:absolute bottom-[2px] left-12 p-3 md:p-6 rounded-[8px] shadow-2xl'>
          <BsPencilSquare className='text-[2.2em]' />
          <h1 className='text-[2em]'>Quality And Standards</h1>
          <p className='text-[1.2em] w-[300px]'>Effective education requires skilled, motivated, and well-supported teachers. Continuous professional development, fair evaluation, and adequate resources are essential for teachers to perform at their best.</p>
        </div>
        <div data-aos="zoom-out" data-aos-duration="1200" className='w-full md:w-auto bg-white md:bg-blue-400 h-[52vh] none md:absolute bottom-[2px] left-[500px] p-3 md:p-6 rounded-[8px] shadow-2xl'>
          <PiMedalThin className='text-[2.2em]' />
          <h1 className='text-[2em]'>Apply Online Course</h1>
          <p className='text-[1.2em] w-[300px]'>Education standards serve as benchmarks to ensure consistency and equity in education. They define what students should know and be able to do at various stages of their education.</p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1400" className='w-full md:w-auto bg-blue-400 md:bg-white h-[52vh] none md:absolute bottom-[2px] left-[930px] p-3 md:p-6 rounded-[8px] shadow-2xl'>
          <SlScreenDesktop className='text-[2.2em]' />
          <h1 className='text-[2em]'>Parents And Careers</h1>
          <p className='text-[1.2em] w-[300px]'>Careers in education are diverse and offer numerous opportunities for individuals passionate about teaching, learning, and contributing to the academic and personal growth of others.</p>
        </div>
      </div>


       <div className='font-OpenSans'>
      <div className='flex flex-col md:flex-row justify-center gap-8 '>
        <div data-aos="zoom-in" className='px-8 md:px-0 '>
          <h1 className=' p-2 mt-6  text-[1.2em] md:text-[2.5em] text-purple-900 font-semibold'>Make An Appointment Here</h1>
          <ol className=' p-2 text-[.8em] md:text-[1.2em] hidden md:block   text-black w-[300px] md:w-[500px] gap-8 list-disc'>
          <li className='mt-2'>At Singh Brothers, we are dedicated to providing comprehensive services to individuals, businesses, and organizations across various sectors
          </li>
          <li className='mt-6'>At SinghBrothers we combine our knowledge and quick action to solve problems swiftly. Our services are hassle-free and better than the rest, making sure you have the best experience</li>
          <li className='mt-6'> We are glad that you preferred to contact us. Please fill our short form and one of our friendly team members will contact you back</li></ol>
        </div>

        <div data-aos="fade-up" className=' flex ml-8  flex-col  gap-1  bg-purple-500   rounded-xl w-[320px] md:w-[475px] h-auto p-4 md:p-8 shadow-2xl'>
          <h1 className='text-white text-[.9em] md:text-[1.5em]'>Fill The Form For More Details And All the Details Are Mendatory</h1>
          <form onSubmit={handleSubmit}>
          <div>
          
          <h1 className='text-[.8em] md:text-[1.3em] text-white' >Name*</h1>
         
          <input id='firstname' name='fullname' onChange={handleChange} placeholder="First Name" className='rounded-[4px] w-[280px] md:w-[400px] bg-white p-2 placeholder:text-sm placeholder-purple-700 font-semibold' type="text"  />

      
          <h1 className='text-[.8em] md:text-[1.3em] text-white'>Contact*</h1>
          <input id='contact' name='contact' placeholder="Contact"  onChange={handleChange} className='rounded-[4px] w-[280px] md:w-[400px] bg-white p-2 placeholder:text-sm placeholder-purple-700 font-semibold' type="text" />
          <h1 className='text-[.8em] md:text-[1.3em] text-white'>Comment Or Message</h1>
          <textarea id='message' name='message' placeholder="Write your feedback "  onChange={handleChange} className=' p-2 rounded-[4px] resize-none w-[280px] md:w-[400px] h-[120px] text-start placeholder:text-sm  placeholder-purple-700 font-semibold' type="Text" />
          <div className='flex gap-4 justify-center items-center mt-1 '>
          <PiLockSimpleFill className='text-white text-[1.2em] text-center' />
          <p className='text-white  text-[0.7em ] md:text-[1.2em] text-center'>Your Information Safe With Us !</p>
          
          </div>
          <button type='submit' className='bg-white mt-2 p-3 w-28 text-purple-700 rounded-3xl font-semibold '>Submit</button>
          </div>
          {errors.length > 0 && (
            <div className="mt-4">
              {errors.map((error, index) => (
                <p key={index} className="text-red-700 flex items-center gap-1"><RxCrossCircled size={15} />{error}</p>
              ))}
            </div>
          )}
          {successMessage && (
            <div className="mt-4">
              <p className="text-green-700 flex items-center gap-2"><LiaCheckDoubleSolid size={15}/>{successMessage}</p>
            </div>
          )}
          </form>
        </div>



      </div>

    </div>
      <div className=" max-w-5xl mx-auto mt-14">
      <h2 className="mb-8 text-xl md:text-3xl font-semibold font-Poppins text-center text-gray-800">Frequently Asked Questions</h2>
      <div>
        <Eduitem
          question=" What does an education consultant do?"
          answer="Education consultants provide expert guidance and support to students, parents, schools, or educational institutions. They offer services such as college admissions counseling, career counseling, curriculum development, and educational program evaluation. Consultants help clients navigate educational options, make informed decisions, and achieve their academic or organizational goals."
       
          />

        <Eduitem
          question="What are the benefits of hiring an education consultant for career counseling?"
          answer="Career counseling consultants help individuals explore career paths aligned with their interests, skills, and aspirations. They conduct assessments to identify strengths and weaknesses, offer personalized career recommendations, and provide guidance on educational pathways (college majors, certifications). Consultants also assist with resume building, interview preparation, and networking strategies, empowering clients to make informed career decisions and achieve professional success."
        />
        <Eduitem
          question="How can an education consultant assist with curriculum development?"
          answer=" Education consultants specializing in curriculum development collaborate with schools, educational institutions, or corporate training programs to design effective learning experiences. They conduct needs assessments, analyze educational goals, and create curriculum frameworks that align with academic standards and educational trends. Consultants may also provide professional development for educators, ensuring successful implementation and continuous improvement of educational programs."
        />
        <Eduitem
          question="How do education consultants stay updated with industry trends and best practices?"
          answer="Education consultants stay updated through professional development activities such as attending conferences, workshops, and webinars related to their field. They engage in ongoing research, read industry publications, and participate in professional associations that provide resources, networking opportunities, and continuing education. Staying current allows consultants to offer informed advice and incorporate the latest trends and best practices into their consulting services."
        />
        
      </div>
    </div>
    </div>
  )
}

export default Edu
