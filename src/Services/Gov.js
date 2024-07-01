import React from 'react'
import { Link } from 'react-router-dom'

import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi"
import { useState } from 'react';
import axios from 'axios'
import { RxCrossCircled } from "react-icons/rx"
import { LiaCheckDoubleSolid } from "react-icons/lia"
import { PiLockSimpleFill } from "react-icons/pi";


const Govitem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[.7em] md:text-[1.2em] font-semibold font-Poppins">{question}</span>
        {isOpen ? <FiMinus className="text-gray-600 text-[1em] md:text-[1.5em]" /> : <FiPlus  className="text-gray-600 text-[1em] md:text-[1.5em]" />}
      </button>
      {isOpen && <p className="mt-2 px-4 py-3 text-[.6em] md:text-[1em]  text-gray-900 bg-gray-100 rounded-lg font-Poppins shadow-md">{answer}</p>}
    </div>
  );
};
const Gov = () =>{
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
  return(
    <div className='font-OpenSans w-full overflow-hidden '>
    <div  className="relative w-full h-[100vh]">
    <img
      className="object-cover w-full h-full block"
      src={`${process.env.PUBLIC_URL}/modern-mirror-building (1).jpg`}
      alt="SB Logo"
      
    />
    
    <div className='  flex flex-col md:flex-row p-0 md:p-32 gap-6 md:gap-8  absolute top-0 left-0 w-full h-[100vh] text-white' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <div className='px-10 md:px-0 pt-6 md:pt-0'>
    <h1 className=' text-[1.5em] md:text-[2.5em] pt-12 md:pt-16'>Government Corporate Service</h1>
    <p className=' text[.9em] md:text-[1em] w-[270px] md:w-[600px]'>Government corporate law encompasses regulations on corporate formation, governance, securities, antitrust, employment, taxation, and intellectual property.</p>
    </div>
    <div className='font-OpenSans '>
 
     

    <div data-aos="fade-up" className='  flex ml-8  flex-col  gap-1 bg-cyan-600 rounded-xl w-[280px] md:w-[475px] h-auto p-4 md:p-8 shadow-2xl'>
      <h1 className='text-white text-[.9em] md:text-[1.5em]'>Fill The Form For More Details And All the Details Are Mendatory</h1>
      <form onSubmit={handleSubmit}>
      <div>
      
      <h1 className='text-[.8em] md:text-[1.3em] text-white' >Name*</h1>
     
      <input id='firstname' name='fullname' onChange={handleChange} placeholder="First Name" className='rounded-[4px] w-[240px] md:w-[400px] bg-white text-black p-2 placeholder:text-sm placeholder-cyan-700 font-semibold' type="text"  />

  
      <h1 className='text-[.8em] md:text-[1.3em] text-white'>Contact*</h1>
      <input id='contact' name='contact' placeholder="Contact"  onChange={handleChange} className='rounded-[4px] w-[240px] md:w-[400px] bg-white p-2 text-black placeholder:text-sm placeholder-cyan-700 font-semibold' type="text" />
      <h1 className='text-[.8em] md:text-[1.3em] text-white'>Comment Or Message</h1>
      <textarea id='message' name='message' placeholder="Write your feedback "  onChange={handleChange} className=' p-2 rounded-[4px] resize-none text-black w-[240px] md:w-[400px] h-[120px] text-start placeholder:text-sm  placeholder-cyan-700 font-semibold' type="Text" />
      <div className='flex gap-4 justify-center items-center mt-1 '>
      <PiLockSimpleFill className='text-white text-[1.2em] text-center' />
      <p className='text-white  text-[0.8em] md:text-[1.2em] text-center'>Your Information Safe With Us !</p>
      
      </div>
      <button type='submit' className='bg-white mt-2 p-3 w-28 text-cyan-700 rounded-3xl font-semibold '>Submit</button>
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
            <h2 className="mb-8   text-xl md:text-3xl  font-semibold font-Poppins text-center text-gray-800">Frequently Asked Questions</h2>
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




