import React from 'react'
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi"
import { useState } from 'react';
import axios from 'axios'
import { RxCrossCircled } from "react-icons/rx"
import { LiaCheckDoubleSolid } from "react-icons/lia"
import { PiLockSimpleFill } from "react-icons/pi";


const Bankitem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg shadow-md hover:shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[.7em] md:text-[1.2em] font-semibold font-Poppins">{question}</span>
        {isOpen ? <FiMinus className="text-[1em] md:text-[1.5em] text-gray-600" /> : <FiPlus className="text-gray-600 text-[1em] md:text-[1.5em]" />}
      </button>
      {isOpen && <p className="mt-2 px-4 py-3 text-[.6em] md:text-[1em]  text-gray-900 bg-gray-100 rounded-lg font-Poppins shadow-md">{answer}</p>}
    </div>
  );
};
const Bank = () => {
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
    <div className='font-OpenSans w-full overflow-hidden '>
      <div className="relative w-full h-[100vh] ">
        <img
          className="object-cover w-full h-full block"
          src={`${process.env.PUBLIC_URL}/finance.jpg`}
          alt="SB Logo"

        />
        <div className='  flex flex-col md:flex-row p-0 md:p-32 gap-8 md:gap-0  absolute top-0 left-0 w-full h-[100vh] text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className='px-10 md:px-0 pt-6 md:pt-0'>
        <h1 className=' text-[1.5em] md:text-[2.8em] pt-24 md:pt-12'>Finance Advisor Services</h1>
        <h1 className=' text-[1em] md:text-[1.5em] w-[250px] md:w-[550px]'>Your Private Finance Advisor For A Secure</h1>
        <p className=' text[.8em] md:text-[1.2em] w-[270px] md:w-[500px]'>For Easy Money Management, To Travel Perks And Investments.</p>
        </div>
        <div className='font-OpenSans '>
 
     

        <div data-aos="fade-up" className='  flex ml-8  flex-col  gap-1 bg-cyan-600 rounded-xl w-[280px] md:w-[475px] h-auto p-4 md:p-8 shadow-2xl'>
          <h1 className='text-white text-[.9em] md:text-[1.5em]'>Fill The Form For More Details And All the Details Are Mendatory</h1>
          <form onSubmit={handleSubmit}>
          <div>
          
          <h1 className='text-[.8em] md:text-[1.3em] text-white' >Name*</h1>
         
          <input id='firstname' name='fullname' onChange={handleChange} placeholder="First Name" className='rounded-[4px] w-[240px] md:w-[400px] text-black bg-white p-2 placeholder:text-sm placeholder-cyan-700 font-semibold' type="text"  />
    
      
          <h1 className='text-[.8em] md:text-[1.3em] text-white'>Contact*</h1>
          <input id='contact' name='contact' placeholder="Contact"  onChange={handleChange} className='rounded-[4px] w-[240px] md:w-[400px] text-black bg-white p-2 placeholder:text-sm placeholder-cyan-700 font-semibold ' type="text" />
          <h1 className='text-[.8em] md:text-[1.3em] text-white'>Comment Or Message</h1>
          <textarea id='message' name='message' placeholder="Write your feedback "  onChange={handleChange} className=' p-2 rounded-[4px] text-black resize-none w-[240px] md:w-[400px] h-[120px] text-start placeholder:text-sm  placeholder-cyan-700 font-semibold' type="Text" />
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
        <h1 className='bg-gradient-to-r from-cyan-500 to-blue-700 p-4 text-white rounded-[80px] text-[1.4em] md:text-[2em]'>Our Finance Services</h1>
        <div>

          <div className='flex gap-4 justify-center  flex-wrap p-3 md:p-6 h-auto  '>
            <div className='flex flex-col md:flex-row gap-4 bg-gray-100' >
              <div data-aos="fade-right" className=' rounded-lg shadow-2xl mt-6 flex flex-col gap-4  bg-white text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
                <div className='flex flex-col gap-8'>
                  <p className=' text-[1.4em] md:text-[2em] text-start'>Personal Financial Planning</p>
                  <p className='text-[.9em] md:text-[1.2em]'>
                  Personal financial planning involves managing your finances to achieve financial goals. This includes budgeting, saving, investing, and managing debt. It's about making informed decisions to ensure financial stability, growth, and security throughout different stages of life</p>
                </div>
                <div className=' pt-0 md:pt-10'>
                  <Link to='/contact'>
                    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                  </Link>
                </div>

              </div>
              <div data-aos="fade-left" className=' rounded-lg shadow-2xl mt-6 flex flex-col gap-4 text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[1.4em] md:text-[2em] text-start '>Investment Management</p>
                  <p className='text-[.9em] md:text-[1.2em]'>Investment management involves handling securities and assets to achieve investment goals. It includes portfolio creation, analysis, and rebalancing. The aim is to maximize returns and minimize risks based on the investor's financial objectives and risk tolerance</p>
                </div>
                <div className=' pt-0 md:pt-10'>
                  <Link to='/contact'>
                    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 bg-gray-100'>
              <div data-aos="fade-right" className=' rounded-lg shadow-2xl mt-6 flex flex-col  gap-4 bg-white text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[1.4em] md:text-[2em] text-start'>Retirement Planning</p>
                  <p className='text-[.9em] md:text-[1.2em]'>
                  Retirement planning involves setting financial goals and creating a strategy to ensure a comfortable retirement. This includes saving, investing, and managing assets. It aims to provide sufficient income, cover expenses, and maintain a desired lifestyle during retirement years</p>
                </div>
                <div className=' pt-0 md:pt-10'>
                  <Link to='/contact'>
                    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                  </Link>
                </div>
              </div>
              <div data-aos="fade-left" className=' rounded-lg shadow-2xl mt-6 flex flex-col gap-2  text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[1.4em] md:text-[2em] text-start'>Tax Advisory</p>
                  <p className='text-[.9em] md:text-[1.2em]'>
                  Tax advisory provides expert guidance on tax-related matters. It involves tax planning, compliance, and strategies to minimize tax liabilities. Advisors help individuals and businesses navigate complex tax laws, ensure accurate filings, and optimize financial decisions to reduce tax burdens</p>
                </div>
                <div className=' pt-0 md:pt-10'>
                  <Link to='/contact'>
                    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 bg-gray-100'>
              <div data-aos="fade-right" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black   w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[1.4em] md:text-[2em] text-start'>Estate Planning</p>
                  <p className=' text-[.9em] md:text-[1.2em]'>
                  Estate planning involves preparing for the management and disposal of a person's estate after death. It includes creating wills, trusts, and power of attorney. The goal is to ensure assets are distributed according to wishes, minimize taxes, and protect beneficiaries</p>
                </div>
                <div className=' pt-0 md:pt-10'>
                  <Link to='/contact'>
                    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                  </Link>
                </div>
              </div>
              <div data-aos="fade-left" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black   w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[1.4em] md:text-[2em] text-start'>Life Insurence</p>
                  <p className=' text-[.9em] md:text-[1.2em]'>Life insurance provides financial protection to beneficiaries upon the policyholder's death. It involves paying premiums in exchange for a death benefit. The goal is to ensure financial security for loved ones, covering expenses like debts, education, and living costs</p>
                </div>
                <div className=' pt-0 md:pt-10'>
                  <Link to='/contact'>
                    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 bg-gray-100'>
              <div data-aos="fade-right" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black   w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[1.4em] md:text-[2em] text-start'>Health Insurence</p>
                  <p className=' text-[.9em] md:text-[1.2em]'>
                  Health insurance provides financial coverage for medical expenses. It includes plans that pay for doctor visits, hospital stays, medications, and preventive care. The goal is to reduce out-of-pocket costs, ensure access to healthcare, and protect against high medical bills</p>
                </div>
                <div className=' pt-0 md:pt-10'>
                  <Link to='/contact'>
                    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                  </Link>
                </div>
              </div>
              <div data-aos="fade-left" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black   w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[1.4em] md:text-[2em] text-start'>Wealth Insurence</p>
                  <p className=' text-[.9em] md:text-[1.2em]'>Wealth insurance safeguards an individual's financial assets against potential losses. It involves comprehensive coverage plans that protect investments, property, and other high-value assets. The goal is to ensure financial stability and security, preserving wealth for future generations and unforeseen circumstances</p>
                </div>
                <div className=' pt-0 md:pt-10'>
                  <Link to='/contact'>
                    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div data-aos="fade-right" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black   w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[1.4em] md:text-[2em] text-start'>Car Insurence</p>
                  <p className=' text-[.9em] md:text-[1.2em]'>
Car insurance provides financial protection against losses from accidents, theft, and damage. It covers repair costs, medical expenses, and liability for damages to others. The goal is to reduce out-of-pocket expenses and comply with legal requirements for vehicle ownership</p>
                </div>
                <div className=' pt-0 md:pt-10'>
                  <Link to='/contact'>
                    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                  </Link>
                </div>
              </div>
             
            </div>
          </div>





        </div>


      </div>
      <div className=" max-w-5xl mx-auto mt-14">
        <h2 className="mb-8   text-xl md:text-3xl font-semibold font-Poppins text-center text-gray-800">Frequently Asked Questions</h2>
        <div>
          <Bankitem
            question=" What does a finance consultant do?"
            answer="A finance consultant provides expert advice and support to individuals, businesses, and financial institutions to help them manage their financial affairs. They offer services such as financial planning, investment advisory, risk management, tax planning, and financial analysis. Consultants help clients achieve their financial goals, optimize financial performance, and navigate complex financial landscapes."
          />
          <Bankitem
            question="How can a finance consultant assist with financial planning?"
            answer=" Finance consultants help clients develop comprehensive financial plans tailored to their goals, such as retirement planning, education funding, and wealth accumulation. They analyze the client's financial situation, set realistic objectives, and create a detailed plan that includes budgeting, saving, investing, and managing debt. Consultants also provide ongoing monitoring and adjustments to ensure the plan remains aligned with the client’s goals."
          />
          <Bankitem
            question="What are the benefits of hiring a finance consultant for investment advisory?"
            answer=" Finance consultants provide investment advisory services by helping clients develop investment strategies based on their risk tolerance, time horizon, and financial goals. They conduct market research, recommend investment opportunities, and manage investment portfolios. Consultants offer personalized advice to maximize returns and minimize risks, ensuring that clients’ investments align with their financial objectives."
          />
          <Bankitem
            question="How can a finance consultant help with risk management?"
            answer="Finance consultants assist clients in identifying, assessing, and managing financial risks. They develop risk management strategies to protect against market volatility, credit risks, operational risks, and other financial uncertainties. Consultants recommend appropriate insurance products, diversification techniques, and hedging strategies to mitigate potential losses and ensure financial stability."
          />
          <Bankitem
            question="How do finance consultants stay updated with industry trends and best practices?"
            answer="Finance consultants stay updated through continuous professional education, attending industry conferences, and participating in workshops and webinars. They read financial publications, research market trends, and maintain memberships in professional associations like the CFA Institute or the Financial Planning Association (FPA). This ongoing education ensures they provide informed and current advice to their clients."
          />
          <Bankitem
            question="How can finance consultants help with tax planning?"
            answer="Finance consultants assist clients in developing tax-efficient strategies to minimize tax liabilities and maximize savings. They provide advice on tax-advantaged investments, retirement accounts, and deductions. Consultants also help with tax compliance, preparing and filing tax returns, and staying updated with changes in tax laws to ensure clients take advantage of all available tax benefits."
          />

        </div>
      </div>
    </div>
  );
};


export default Bank

