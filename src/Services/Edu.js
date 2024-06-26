import React from 'react'
import { Link } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";
import { PiMedalThin } from "react-icons/pi";
import { SlScreenDesktop } from "react-icons/sl";
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi"

const Eduitem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold font-Poppins">{question}</span>
        {isOpen ? <FiMinus size={20} className="text-gray-600" /> : <FiPlus  size={20} className="text-gray-600" />}
      </button>
      {isOpen && <p className="mt-2 px-4 py-3 text-gray-900 bg-gray-100 rounded-lg font-Poppins shadow-md">{answer}</p>}
    </div>
  );
};
const Edu = () =>{
  return (
    <div className='font-OpenSans'>
      <section 
        id="edu" 
        className="p-0 md:p-[120px] bg-cover bg-center w-[350px] md:w-full h-[80vh]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Eduteam.jpg)' 
        }}
      >
        <div className='pt-60 md:p-0'>
          <p className='text-[1.5em] md:text-[2.0em] text-white w-[350px] md:w-[900px]'>Learning For A</p>
          <h1 className='text-[2.8em] md:text-[5em] text-white w-[350px] md:w-[900px]'>Better Future</h1>
        </div>
      </section>
      <div className='none md:relative md:flex justify-between p-4 md:p-14 gap-4 mb-10'>
        <div data-aos="fade-right" data-aos-duration="1000" className='bg-blue-400 md:bg-white h-[50vh] none md:absolute bottom-[2px] left-12 p-3 md:p-6 rounded-[8px] shadow-2xl'>
          <BsPencilSquare className='text-[2.2em]' />
          <h1 className='text-[2em]'>Quality And Standards</h1>
          <p className='text-[1.2em] w-[320px]'>Effective education requires skilled, motivated, and well-supported teachers. Continuous professional development, fair evaluation, and adequate resources are essential for teachers to perform at their best.</p>
        </div>
        <div data-aos="zoom-out" data-aos-duration="1200" className='w-full md:w-auto bg-white md:bg-blue-400 h-[50vh] none md:absolute bottom-[2px] left-[500px] p-3 md:p-6 rounded-[8px] shadow-2xl'>
          <PiMedalThin className='text-[2.2em]' />
          <h1 className='text-[2em]'>Apply Online Course</h1>
          <p className='text-[1.2em] w-[320px]'>Education standards serve as benchmarks to ensure consistency and equity in education. They define what students should know and be able to do at various stages of their education.</p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1400" className='w-full md:w-auto bg-blue-400 md:bg-white h-[50vh] none md:absolute bottom-[2px] left-[930px] p-3 md:p-6 rounded-[8px] shadow-2xl'>
          <SlScreenDesktop className='text-[2.2em]' />
          <h1 className='text-[2em]'>Parents And Careers</h1>
          <p className='text-[1.2em] w-[320px]'>Careers in education are diverse and offer numerous opportunities for individuals passionate about teaching, learning, and contributing to the academic and personal growth of others.</p>
        </div>
      </div>


      <div className='flex flex-col items-start md:justify-between md:flex-row p-6  md:m-auto mb-10 bg-blue-500 text-white w-[350px] md:w-full'>
      <div data-aos="fade-right" className='flex flex-col gap-2 p-1 md:p-4'>
      <h1 className=' text-[1.4em] md:text-[2.5em]'>For Any Assistance, You Can Conatct Us</h1>
      <p className=' text-[1em] md:text-[1.3em]  w-[300px] md:w-[1000px]'>Discover personalized support and resources with our comprehensive educational assistant service, designed to enhance your learning experience and academic success</p>
      </div>
      <div data-aos="fade-left" className='  p-0 md:p-16  mt-8 md:m-0'>
      <Link to="/contact">
      <button className= '  transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-cyan-500 to-blue-700 h-14 hover:text-white shadow-2xl rounded-[40px] bg-white text-blue-500 p-3 w-[180px] text-2xl' >Contact Us</button>
      </Link>
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
