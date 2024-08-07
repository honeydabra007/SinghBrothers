import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { MdRealEstateAgent } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { PiStarHalf } from "react-icons/pi";
import { FaCoins } from "react-icons/fa";
import { MdOutlineAlignVerticalBottom } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi"
import { TbMessageCircle2 } from "react-icons/tb";
import { TbArrowBadgeRight } from "react-icons/tb";




const Homeitem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);





  

  return (

    <div className="mb-6">
      <button
        className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className=" text-[.7em] md:text-[1.2em] font-semibold font-Poppins">{question}</span>
        {isOpen ? <FiMinus  className="text-gray-600 text-[1em] md:text-[1.5em]" /> : <FiPlus   className="text-gray-600 text-[1em] md:text-[1.5em]" />}
      </button>
      {isOpen && <p className="mt-2 px-4 py-3 text-[.6em] md:text-[1em]  text-gray-900 bg-gray-100 rounded-lg font-Poppins shadow-md">{answer}</p>}
    </div>
  );
};
const Home = () =>{
  // const [showImage, setShowImage] = useState(true);

  // const handleClose = () => {
  //   setShowImage(false);
  // };

  return (
    <div  className='font-OpenSans w-full overflow-hidden' >
    
    <div className=" w-full overflow-hidden bg-cover bg-center  h-[80vh] md:h-screen" style={{ backgroundImage: 'url(/homebg1.jpg)' }}>
    <div className=" mx-auto h-full  flex justify-center items-center text-center ">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full h-full flex flex-col items-center justify-center">
            <h1 data-aos="zoom-in" className=" text-2xl md:text-4xl text-white font-bold mb-4">Where Expertise Meets Expediency !</h1>
            <p data-aos="zoom-in"  className="text-sm md:text-lg text-gray-300">At SinghBrothers we combine our knowledge and quick action to solve problems swiftly. Our services are hassle-free
                and better than the rest, making sure you have the best experience</p>
        </div>
    </div>
    <Link to="/contact"><button  data-aos="fade-right" data-aos-duration="800" className=' text-white flex items-center gap-2 text-[1.2em] mt-5 bg-blue-800 p-3 rounded-[40px] absolute right-0  top-[520px] md:top-[500px] transition-all duration-150 ease-in-out '><TbMessageCircle2 classname="text-center"/> Contact </button></Link>
   
</div>


<div className='flex items-center flex-col-reverse md:flex-row gap-4 md:gap-20  px-0 md:px-40  h-auto md:h-[90vh]'>
<div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800" >
<img className='   h-[300px] md:h-[450px] w-[300px] md:w-[450px] mb-10 md:mb-0 rounded-br-[30px]  rounded-tl-[30px] shadow-xl  shadow-cyan-950 mt-4 md:mt-14 object-cover' src='\side-view-business-man-outdoor.jpg' alt=''/>
</div>
<div  data-aos="fade-left" data-aos-easing="linear"  className='  mt-12 md:mt-14 flex flex-col px-10 md:px-0 font-semibold'>
<h1 className=' text-[2em] md:text-[3em] text-blue-900'>About Us👋</h1>
<p className=' text-[.9em]  md:text-[1.4em] w-auto md:w-[500px] mt-4 font-semibold '>At Singh Brothers, we are dedicated to providing comprehensive services to individuals, businesses, and organizations across various sectors. With a team of experienced professionals and a commitment to excellence, we strive to be your trusted partner in navigating the complexities of today’s ever-changing landscape</p>
<Link to="/about"><button className=' rounded-full flex bg-blue-700 text-white transition-all duration-200 ease-in-out hover:scale-110  justify-between items-center w-[150px] text-[1em] mt-5 p-4'>Know More<PiArrowRightLight className='animate-ping' /></button></Link>





</div>

  
</div>
<div  className='flex flex-col justify-center items-center mt-6 '>
<h1 className=' text-[2em] md:text-[3em] font-bold '>OUR SERVICES</h1>
<div className='flex p-8 flex-wrap justify-center gap-8'>
<div data-aos="fade-up"  data-aos-duration="600" className=' w-[300px] md:w-[400px] bg-blue-200 p-8  shadow-lg shadow-cyan-950 rounded-br-[30px]  rounded-tl-[30px]  '>
<MdCastForEducation  className="text-[2.8em]"/>
<h1 className="text-sky-900  text-[1.6em] mt-4 font-bold">Education Service</h1>
<p className='mt-4'>This company is a premier provider of comprehensive education consulting services, committed to empowering individuals, educational institutions, and organizations to achieve their academic goals and maximize their potential</p>
<Link to="/edu"><button className='bg-white rounded-full flex  hover:bg-blue-700 hover:text-white transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-blue-600 justify-between items-center w-[150px] text-[.8em] mt-8 p-4'>Get More Details<PiArrowRightLight className='animate-ping' /></button></Link>
</div>
<div data-aos="fade-up"  data-aos-duration="700" className=' w-[300px] md:w-[400px] bg-blue-200 p-8 shadow-lg shadow-cyan-950 rounded-br-[30px]  rounded-tl-[30px] '>
<MdRealEstateAgent  className="text-[2.8em]"/>
<h1 className="text-sky-900 mt-4 text-[1.6em] font-bold">Real Estate and Property Law</h1>
<p className='mt-4'>We offer legal support and guidance on real estate transactions, property acquisitions, leasing agreements, land use regulations, zoning issues, and property disputes to clients involved in the real estate sector.</p>
<Link to="/real"><button className='bg-white rounded-full flex  hover:bg-blue-700 hover:text-white transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-blue-600 justify-between items-center w-[150px] text-[.8em] mt-5 p-4'>Get More Details<PiArrowRightLight className='animate-ping' /></button></Link>
</div>
<div data-aos="fade-up"  data-aos-duration="800" className=' w-[300px] md:w-[400px] bg-blue-200 p-8 shadow-lg shadow-cyan-950 rounded-br-[30px]  rounded-tl-[30px] '>
<MdCorporateFare  className="text-[2.8em]"/>
<h1 className="text-sky-900  mt-4 text-[1.6em] font-bold">Government Corporate</h1>
<p className='mt-4'>Our company is a trusted provider of government corporate services with specialized legal consultancy, dedicated to assisting government agencies, public sector organizations, and corporate entities in navigating complex legal and regulatory landscapes.</p>
<Link to="/gov"><button className='bg-white rounded-full flex  hover:bg-blue-700 hover:text-white transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-blue-600 justify-between items-center w-[150px] text-[.8em] mt-3 p-4'>Get More Details<PiArrowRightLight className='animate-ping' /></button></Link>
</div>
<div data-aos="fade-up"  data-aos-duration="900" className=' w-[300px] md:w-[400px] bg-blue-200 p-8 shadow-lg shadow-cyan-950 rounded-br-[30px]  rounded-tl-[30px] '>
<MdHealthAndSafety  className="text-[2.8em]"/>
<h1 className="text-sky-900 text-[1.6em] mt-4 font-bold">Healthcare Law and Regulatory Compliance</h1>
<p className='mt-4'>Providing legal guidance to healthcare providers, pharmaceutical companies, and medical device manufacturers on regulatory compliance. Assisting with healthcare licensing, accreditation, reimbursement, and fraud and abuse prevention</p>
<Link to="/bank"><button className='bg-white rounded-full flex  hover:bg-blue-700 hover:text-white transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-blue-600 justify-between items-center w-[150px] text-[.8em] mt-6 p-4'>Get More Details<PiArrowRightLight className='animate-ping' /></button></Link>
</div>
<div data-aos="fade-up"  data-aos-duration="1000" className=' w-[300px] md:w-[400px] bg-blue-200 p-8 shadow-lg shadow-cyan-950 rounded-br-[30px]  rounded-tl-[30px] '>
<BsBank2  className="text-[2.8em]"/>
<h1 className="text-sky-900 text-[1.6em] mt-4 font-bold">Banking & Finance</h1>
<p className='mt-4'>This company is a leading provider of comprehensive banking and finance services, dedicated to delivering tailored financial solutions and expertise to individuals, businesses, and institutions.</p>
<Link to="/law"><button className='bg-white rounded-full flex  hover:bg-blue-700 hover:text-white transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-blue-600 justify-between items-center w-[150px] text-[.8em] mt-20 p-4'>Get More Details<PiArrowRightLight className='animate-ping' /></button></Link>
</div>
</div>
</div>










<div className="flex flex-col gap-10 card  w-[4/5] p-6 m-auto mix-blend-color-burn marquee-container bg-gray-100">
<div className='flex items-center justify-center flex-col'>
<h1 className=' text-[.7em] md:text-[2em]  text-center'>We provide services related to these Government Authorities</h1>

</div>
<div className="marquee-content ">
  <img className="marquee-img " src={`${process.env.PUBLIC_URL}/logo1.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo2.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo3.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo4.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo5.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo6.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo7.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo8.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo9.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo10.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo11.jpeg`} alt="SB Logo" />
  <img className="marquee-img" src={`${process.env.PUBLIC_URL}/logo12.jpeg`} alt="SB Logo" />
 
</div>
</div>
<div className='flex flex-col justify-center items-center pt-8 mb-8 gap-8'>
<h1 className='  text-center text-[1.3em] font-bold md:text-[2.5em]'>Tailored Solutions Of Your Success</h1>
<div className='flex flex-col md:flex-row   justify-between gap-8 '>
<div data-aos="fade-up" data-aos-duration="1000" className='h-[340px]  w-[280px] shadow-lg shadow-sky-400 rounded-br-[30px] rounded-tl-[30px] bg-blue-100'>
<PiStarHalf className='text-[3.5em] bg-indigo-950 text-white p-2 rounded-tl-[30px]' />
<h1 className='text-[1.5em] font-bold px-6 mt-28'>Strategic Planning</h1>
<p className='text-[1em] font-semibold px-6 mt-4'>
Strategic planning sets an organization's long-term goals and outlines how to achieve them</p>
</div>
<div data-aos="fade-up" data-aos-duration="1100" className='h-[340px] w-[280px] shadow-lg shadow-sky-400 rounded-br-[30px] rounded-tl-[30px] bg-blue-100'>
<FaCoins className='text-[3.5em] bg-indigo-950 text-white p-2 rounded-tl-[30px]'/>
<h1 className='text-[1.5em] font-bold px-6 mt-28'>Finance Advisor</h1>
<p className='text-[1em] font-semibold px-6 mt-4 '>Your Private Finance Advisor For A Secure
For Easy Money Management, To Travel Perks And Investments.</p>
</div>
<div data-aos="fade-up" data-aos-duration="1100" className='h-[340px]  w-[280px] shadow-lg shadow-sky-400 rounded-br-[30px] rounded-tl-[30px] bg-blue-100'>
<MdOutlineAlignVerticalBottom className='text-[3.5em] bg-indigo-950 text-white p-2 rounded-tl-[30px]'/>
<h1 className='text-[1.5em] font-bold  px-6 mt-28'>Market Research</h1>
<p className='text-[1em] font-semibold px-6 mt-4'>Market research gathers and analyzes data to understand market conditions and customer needs</p>

</div>
<div data-aos="fade-up" data-aos-duration="1300" className='h-[340px]  w-[280px] shadow-lg shadow-sky-400 rounded-br-[30px] rounded-tl-[30px] bg-blue-100'>
<GoPerson className='text-[3.5em] bg-indigo-950 text-white p-2 rounded-tl-[30px]'/>
<h1 className='text-[1.5em] font-bold px-6 mt-28'>HR Management</h1>
<p className='text-[1em] px-6 font-semibold mt-4'>
HR management is about hiring, training, and retaining employees</p>
</div>
</div>
</div>
<div className=" max-w-5xl mx-auto mt-14">
<h2 className="mb-8 text-xl md:text-full font-semibold font-Poppins text-center text-gray-800">Frequently Asked Questions</h2>
<div>
  <Homeitem
    question="How do you tailor your consulting approach to different industries?"
    answer="We recognize that each industry has unique challenges and opportunities. Our consultants possess deep sector-specific knowledge, enabling us to customize our methodologies and strategies to fit the specific context of your industry. We conduct thorough research and leverage our experience to deliver solutions that are both relevant and impactful."
 
    />
  <Homeitem
    question="Can you explain your methodology for conducting a market analysis?"
    answer=<ol className="flex flex-col gap-4 list-decimal">Our market analysis methodology involves several key steps:
    <li>  Data Collection: Gathering quantitative and qualitative data from primary and secondary sources.</li>
    <li> Competitor Analysis: Evaluating the strengths and weaknesses of current and potential competitors.</li>
    <li> Customer Insights: Understanding customer needs, preferences, and behaviors through surveys, interviews, and focus groups.</li>
    <li> Trend Analysis: Identifying industry trends and market drivers that could impact your business</li>
    <li> SWOT Analysis: Conducting a thorough SWOT analysis to assess your market position.</li>
    <li> Strategic Recommendations: Providing actionable insights and strategies based on our findings.</li>
    </ol>
    />
  <Homeitem
    question="How do you measure the success of a consulting engagement? "
    answer="Success is measured through predefined key performance indicators (KPIs) that align with our clients' goals. These might include financial metrics, operational efficiency improvements, market share growth, customer satisfaction scores, and employee engagement levels. We also use balanced scorecards and dashboards to track progress and adjust strategies as needed."
 
    />
  <Homeitem
    question="How do you manage change within an organization during a consulting project?"
    answer=<ol className="flex flex-col gap-4 list-decimal">
    Effective change management is crucial for the success of any project. We follow a structured approach that includes:
    <li> Stakeholder Engagement: Involving key stakeholders from the outset to ensure buy-in and support.</li>
    <li> Communication Plan: Developing a clear communication plan to keep all parties informed and aligned.</li>
    <li> Training and Development: Providing training sessions and resources to equip employees with the necessary skills.</li>
    <li> Monitoring and Feedback: Continuously monitoring progress and gathering feedback to make necessary adjustments.</li>
    <li> Sustaining Change: Implementing mechanisms to embed the changes into the organization’s culture and operations.</li>
    
    </ol>
 
    />
  <Homeitem
    question="How do you handle conflicts of interest in your consulting projects?"
    answer="We maintain the highest standards of integrity and transparency. Potential conflicts of interest are identified and disclosed upfront. We adhere to strict ethical guidelines and ensure that our recommendations are objective and in the best interest of our clients. If a conflict arises, we work with all parties involved to address it promptly and fairly."
 
    />
  <Homeitem
    question="Can you discuss a complex project you’ve handled and the challenges you faced?"
    answer=<ol className="flex flex-col gap-4 list-decimal">
    One example is a large-scale digital transformation project for a global manufacturing company. The challenges included integrating disparate IT systems, managing resistance to change among employees, and ensuring minimal disruption to ongoing operations. We addressed these by:
    <li>Developing a phased implementation plan to manage risk and ensure continuity.</li>
    <li>Engaging with employees through workshops and training programs to build support and reduce resistance.</li>
    <li>Implementing robust project management practices to keep the project on track and within budget.</li>
    </ol>
 
    />
  <Homeitem
    question="How do you stay ahead of industry trends and incorporate them into your consulting practice? "
    answer=" We invest in continuous learning and professional development for our consultants. This includes attending industry conferences, participating in webinars, subscribing to relevant publications, and engaging in thought leadership activities. We also maintain a network of industry experts and collaborate with academic institutions to stay at the forefront of emerging trends and best practices."
 
    />
  <Homeitem
 
    question=" How do you ensure the sustainability and long-term impact of your consulting recommendations?"
    answer=<ol className="flex flex-col gap-4 list-decimal">
    We focus on creating sustainable value by:
    <li>Aligning our recommendations with your long-term strategic goals.</li>
    <li>Providing implementation support to ensure successful execution.</li>
    <li>Building capacity within your organization through training and knowledge transfer.</li>
    <li>Establishing mechanisms for continuous improvement and monitoring.</li>
    </ol>
 
    />
  <Homeitem
    question=" What is your approach to risk management in consulting projects?"
    answer=<ol className="flex flex-col gap-4 list-decimal">
    Risk management is a critical component of our project approach. We:
    <li>Conduct a comprehensive risk assessment during the planning phase.</li>
    <li>Develop risk mitigation strategies for identified risks.</li>
    <li>Implement monitoring systems to detect and respond to risks promptly.</li>
    <li>Maintain open communication with clients to address risks collaboratively.</li>
    </ol>
 
    />

  
  
</div>
</div>



    
      
    </div>
  )
}

export default Home





