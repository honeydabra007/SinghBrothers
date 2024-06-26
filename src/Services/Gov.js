import React from 'react'
import { Link } from 'react-router-dom'

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi"
import { useState } from 'react';

const Govitem = ({ question, answer }) => {
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
const Gov = () =>{
  return(
    <div className='font-OpenSans'>
    <div  className="relative w-full h-[80vh]">
    <img
      className="object-cover w-full h-full block"
      src={`${process.env.PUBLIC_URL}/modern-mirror-building.jpg`}
      alt="SB Logo"
      
    />
    
    <div className='  flex flex-col p-4 md:p-32 gap-4 md:gap-0  absolute top-0 left-0 w-full h-[80vh] text-white' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <h1 className=' text-[1.8em] md:text-[4em] pt-40 md:pt-0'>Government Corporate Service</h1>
    <p className=' text[.9em] md:text-[1.2em] w-[270px] md:w-[600px]'>Government corporate law encompasses regulations on corporate formation, governance, securities, antitrust, employment, taxation, and intellectual property.</p>
    <div >
    <Link to ="/contact">
    <button className='bg-gradient-to-r from-cyan-500 to-blue-700 h-16 rounded-[40px] w-[140px]   md:w-[200px] mt-4 text-[1.5em]'>Contact Us</button>
    </Link>
    </div>
    </div>

    </div>
    <div className='h-auto mb-8 flex items-center  pt-8 flex-col text-white'>
    <h1 className='bg-gradient-to-r from-cyan-500 to-blue-700 p-3 text-white rounded-[80px] text-[1.3em] md:text-[2em]'>Our Government Corporate Services</h1>
    <div>
    
    <div className='flex gap-8 justify-center  flex-wrap p-0 md:p-6 h-auto  '>
    <div className='flex flex-col md:flex-row bg-gray-100 p-0 md:p-8 text-black gap-8' >
    <div data-aos="fade-right" className='  rounded-lg shadow-2xl mt-6 flex flex-col-reverse md:flex-row  gap-4  w-[320px] md:w-[600px] h-auto md:h-[70vh] justify-between p-4'>
    <div className='flex flex-col gap-2  justify-between'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>Nagar Nigam – Greater Jaipur</p>
    <p className=' text-[.9em] md:text-[1.2em]'>
    Nagar Nigam (Municipal Corporation) of Greater Jaipur provides essential urban services including sanitation, waste management, street maintenance, public health, and infrastructure development to enhance the quality of life for residents and promote sustainable city growth.</p>
    </div>
    <div className=' pt-0 md:pt-10'>
    <Link to='/nagarnigam'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div> 
    <div>
    <img className='h-[150px] object-contain md:h-[200px]  w-[1200px] mt-12' src='/logo9.png' alt=''/>
    
    </div> 
    </div>
    
    <div data-aos="fade-left" className='   rounded-lg shadow-2xl mt-6 flex flex-col-reverse md:flex-row  gap-4  w-[320px] md:w-[600px] h-auto md:h-[70vh]  p-4'>
    <div className='flex flex-col gap-2 justify-between'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>Jaipur Heritage</p>
    <p className='text-[.9em] md:text-[1.2em]'>Jaipur Heritage promotes the preservation and celebration of Jaipur's rich cultural and historical legacy, ensuring the protection of its architectural landmarks, traditional crafts, and vibrant cultural practices for future generations.</p>
    </div>
    <div className=' pt-0 md:pt-10'>
    <Link to='/heritage'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div> 
    
    <div>
    <img className='h-[150px] object-contain md:h-[200px] mt-12 w-[800px]' src='/logo7-removebg-preview.png' alt=''/>
    
    </div> 

    </div>

    </div>

    <div  className='flex flex-col md:flex-row bg-gray-100 p-0 md:p-8 text-black gap-8'>
    <div data-aos="fade-right" className=' rounded-lg shadow-2xl mt-6 flex flex-col-reverse md:flex-row  gap-2  w-[320px] md:w-[600px] h-auto md:h-[70vh] justify-between p-4'>
    <div className='flex flex-col gap-2  justify-between'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>RAJ-RERA</p>
    <p className='text-[.9em] md:text-[1.2em]'>
    Rajasthan Real Estate Regulatory Authority (RAJ-RERA) oversees the real estate sector in the state, ensuring transparency, accountability, and fair practices in property transactions, thereby safeguarding the interests of both buyers and developers.</p>
    </div>
    <div className=' pt-0 md:pt-10'>
    <Link to='/Rajrera'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div> 
    <div>
    <img className='h-[150px] object-contain md:h-[200px] mt-12 w-[950px]' src='/logo10-removebg-preview.png' alt=''/>
    
    </div>  
    </div>
    <div data-aos="fade-left" className='  rounded-lg shadow-2xl mt-6 flex flex-col-reverse md:flex-row  gap-4  w-[320px] md:w-[600px] h-auto md:h-[70vh] justify-between p-4'>
    <div className='flex flex-col gap-2  justify-between'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>JDA</p>
    <p className=' text-[.9em] md:text-[1.2em]'>The Jaipur Development Authority (JDA) spearheads urban development initiatives, urban planning, and infrastructure projects in Jaipur, aiming to create sustainable and inclusive urban spaces that enhance the quality of life for residents and promote economic growth.</p>
    </div>
    <div className=' pt-0 md:pt-10'>
    <Link to='/Jda'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div> 
    <div>
    <img className='h-[150px] object-contain md:h-[200px] mt-12 w-[1100px]' src='/logo8-removebg-preview.png' alt=''/>
    
    </div>  
    </div>
    </div>
    <div className='flex flex-col  md:flex-row bg-gray-100 p-0 md:p-8 text-black gap-8'>
    <div data-aos="fade-right" className='  rounded-lg shadow-2xl mt-6 flex flex-col-reverse md:flex-row gap-4  w-[320px] md:w-[600px] h-auto md:h-[70vh] justify-between p-4'>
    <div className='flex flex-col gap-2  justify-between'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>Rajasthan Hight Court</p>
    <p className=' text-[.9em] md:text-[1.2em]'>
    The Rajasthan High Court serves as the highest judicial authority in the state, upholding the rule of law, dispensing justice, and safeguarding the rights and liberties of citizens through impartial and effective adjudication across civil, criminal, and constitutional matters.</p>
    </div>
    <div className=' pt-0 md:pt-10'>
    <Link to='/highcourt'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div>  
    <div>
    <img className='h-[150px] object-contain md:h-[200px] mt-12 w-[1000px]' src='/logo5-removebg-preview.png' alt=''/>
    
    </div> 
    </div>
    <div data-aos="fade-left" className= '  rounded-lg shadow-2xl mt-6 flex flex-col-reverse md:flex-row   gap-4  w-[320px] md:w-[600px] h-auto md:h-[70vh] justify-between p-4'>
    <div className='flex flex-col gap-2  justify-between'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>Rajasthan Medical Corporation</p>
    <p className=' text-[.9em] md:text-[1.2em]'>Rajasthan Medical Corporation facilitates the efficient procurement, distribution, and management of medical supplies, equipment, and pharmaceuticals across the state, ensuring access to quality healthcare services and promoting public health initiatives for the well-being of Rajasthan's residents.</p>
    </div>
    <div className=' pt-0 md:pt-10'>
    <Link to='/medical'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div> 
    <div>
    <img className='h-[150px] object-contain md:h-[200px] mt-12 w-[1000px]' src='/logo4-removebg-preview.png' alt=''/>
    
    </div>  
    </div>
    </div>
    <div className='flex flex-col md:flex-row bg-gray-100 p-0 md:p-8 text-black gap-8'>
    <div data-aos="fade-right" className='  rounded-lg shadow-2xl mt-6 flex flex-col-reverse md:flex-row   gap-4  w-[320px] md:w-[600px] h-auto md:h-[70vh] justify-between p-4'>
    <div className='flex flex-col gap-2  justify-between'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>Government of Rajasthan</p>
    <p className=' text-[.9em] md:text-[1.2em]'>
    The Government of Rajasthan is committed to fostering inclusive growth, sustainable development, and good governance across the state, through policy initiatives, infrastructure development, social welfare programs, and administrative reforms aimed at improving the lives of its citizens and promoting Rajasthan's progress on various fronts.</p>
    </div>
    <div className=' pt-0 md:pt-10'>
    <Link to='/raj'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div> 
    <div>
    <img className='h-[150px] object-contain md:h-[200px] mt-12 w-[800px]' src='/Ind-Gov.png' alt=''/>
    
    </div> 
    </div>
    <div data-aos="fade-left" className='  rounded-lg shadow-2xl mt-6 flex flex-col-reverse md:flex-row  gap-4  w-[320px] md:w-[600px] h-auto md:h-[70vh] justify-between p-4'>
    <div className='flex flex-col gap-2  justify-between'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>SSO – Single Sign ON</p>
    <p className=' text-[.9em] md:text-[1.2em]'>
    SSO (Single Sign-On) simplifies user authentication, enabling seamless access to multiple applications and systems with just one set of credentials, enhancing security, user experience, and productivity.</p>
    </div>
    <div className=' pt-0 md:pt-10'>
    <Link to='/sso'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div> 
    </div> 
    <div>
    <img className='h-[150px] object-contain md:h-[200px] mt-12 w-[1000px]' src='/logo12-removebg-preview.png' alt=''/>
    
    </div> 
    </div>
    </div>
    
    </div>
    
    
    
    
    
    
    </div>
    
    
    </div>
    <div className=" max-w-5xl mx-auto mt-14">
            <h2 className="mb-8 text-3xl font-semibold font-Poppins text-center text-gray-800">Frequently Asked Questions</h2>
            <div>
            <Govitem
              question=" What does a government consulting service company do?"
              answer=" A government consulting service company provides expert advice and support to government agencies at the local, state, or federal levels. They help improve efficiency, implement new policies, manage projects, and address various challenges. Their services include strategic planning, policy analysis, program evaluation, IT consulting, and organizational development."
              />
              <Govitem
              question="How can a government consulting company assist with policy development?"
              answer="Government consultants help develop policies by conducting thorough research, analyzing data, and assessing the potential impacts of proposed policies. They engage stakeholders, facilitate discussions, and provide recommendations based on best practices and evidence-based research. Consultants ensure that policies are effective, feasible, and aligned with the government's objectives."
              />
              <Govitem
              question="What are the benefits of hiring a government consulting firm for project management?"
              answer="Government consulting firms bring expertise in managing complex projects, ensuring they are completed on time and within budget. They use standardized project management methodologies, provide risk management strategies, and ensure compliance with regulations. Consultants also facilitate communication between stakeholders, streamline processes, and provide training and support to government staff"
              />
              <Govitem
              question="How can government consultants improve organizational efficiency?"
              answer="Government consultants improve organizational efficiency by conducting performance assessments, identifying areas for improvement, and recommending changes to processes and structures. They implement best practices, provide training programs, and introduce technology solutions to enhance productivity. Their objective insights help governments streamline operations and deliver better services to the public."
              />
              <Govitem
              question="How do government consultants stay updated with industry trends and best practices?
"
              answer="Government consultants stay updated through continuous professional development, attending industry conferences, and participating in workshops and webinars. They subscribe to industry publications, engage in research, and maintain memberships in professional associations like the American Society for Public Administration (ASPA) or the Project Management Institute (PMI). This ongoing learning allows them to provide the latest insights and solutions to their clients."
              />
              <Govitem
              question="How can government consultants help with technology implementation?"
              answer="Government consultants assist with technology implementation by assessing current IT systems, identifying needs, and recommending appropriate technology solutions. They manage the procurement process, oversee the implementation, and ensure integration with existing systems. Consultants provide training for government staff, develop cybersecurity strategies, and offer ongoing support to ensure the technology enhances operational efficiency and service delivery."
              />
              
            </div>
          </div>
  </div>
    )
    }
    
export default Gov




