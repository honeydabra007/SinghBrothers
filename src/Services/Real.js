import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi"
import { useState } from 'react';

const Realitem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6  ">
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

const Real = () =>{
  return(
    <div className='font-OpenSans w-full overflow-hidden '>
      <div className=' p-[20px] md:p-[140px] h-auto bg-cover gap-2 flex flex-col text-white mb-8 md:mb-0 ' style={{ backgroundImage: 'url("/Realstate (1).jpg")' }} >
        <h1 className=' mt-0 md:mt-20  text-[2em] md:text-[3.8em] pt-40 md:pt-0'>Real Estate Law</h1>
        <p className='text-[.9em] md:text-[1.5em] w-[260px] md:w-[500px]'>Drafting agreements, managing closings, resolving disputes, and ensuring zoning compliance for smooth property transactions and ownership.</p>
        <Link to="/contact">
          <button className='bg-gradient-to-r from-cyan-500 to-blue-700 h-14 rounded-[40px] w-[140px] md:w-[200px] mt-4 text-[1.5em]'>Contact Us</button>
        </Link>
      </div>
      <div className='h-auto mb-8 flex items-center  pt-8 flex-col text-white'>
        <h1 className='bg-gradient-to-r from-cyan-500 to-blue-700 p-4 text-white rounded-[80px] text-[1.4em] md:text-[2em]'>Our Real-Estate Services</h1>
        <div>
          <div className='flex flex-col gap-4'>
            <div className='bg-gray-100 flex gap-4 justify-center  flex-wrap p-3 md:p-6 h-auto  '>
              <div data-aos="fade-right" className=' rounded-lg shadow-2xl mt-6 flex flex-col gap-4  bg-white text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between  p-4'>
              <div className='flex flex-col gap-8'>
              <p className=' text-[1.4em] md:text-[2em] text-start'>Transaction Services</p>
              <p className='text-[.9em] md:text-[1.2em]'>Drafting and reviewing purchase and sale agreements, conducting title searches, and managing the closing process for seamless property transfers.</p>
              </div>
                <div className=' pt-0 md:pt-10'>
                <Link to='/contact'>
                <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                </Link>
                </div>

              </div>
              <div data-aos="fade-left" className=' rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between  p-4'>
              <div className='flex flex-col gap-8'>
              <p className='text-[1.4em] md:text-[2em] text-start '>Leasing Servicest</p>
              <p className='text-[.9em] md:text-[1.2em]'>Drafting and reviewing residential and commercial lease agreements, negotiating terms, and resolving landlord-tenant disputes</p>
              </div>
                <div className=' pt-0 md:pt-10'>
                <Link to='/contact'>
                <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                </Link>
                </div>
              </div>
            </div>
            <div className='bg-gray-100 flex gap-4 justify-center  flex-wrap p-3 md:p-6 h-auto  '>

              <div data-aos="fade-right" className=' rounded-lg shadow-2xl mt-6 flex flex-col  gap-4 bg-white text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between  p-4'>
              <div className='flex flex-col gap-8'>
              <p className='text-[1.4em] md:text-[2em] text-start'>Financing Services</p>
              <p className='text-[.9em] md:text-[1.2em]'>Assisting with mortgage and loan agreements, refinancing, and ensuring compliance with financial regulations.</p>
              </div>
                <div className=' pt-0 md:pt-10'>
                <Link to='/contact'>
                <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                </Link>
                </div>
              </div>

              <div data-aos="fade-left" className=' rounded-lg shadow-2xl mt-6 flex flex-col gap-2  bg-white text-black  w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between  p-4'>
              <di className='flex flex-col gap-8'v>
              <p className='text-[1.4em] md:text-[2em] text-start'> Development and Construction Services</p>
              <p className='text-[.9em] md:text-[1.2em]'>Advising on land use and zoning, drafting construction contracts, and ensuring environmental compliance for new developments and renovations.</p>
              </di>
                <div className=' pt-0 md:pt-10'>
                <Link to='/contact'>
                <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                </Link>
                </div>
              </div>
            </div>
            <div className=' bg-gray-100 flex gap-4 justify-center  flex-wrap p-3 md:p-6 h-auto  '>

              <div data-aos="fade-right" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black   w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between  p-4'>
              <div className='flex flex-col gap-8'>
              <p className='text-[1.4em] md:text-[2em] text-start'>Litigation and Dispute Resolution</p>
              <p className=' text-[.9em] md:text-[1.2em]'>Representing clients in property disputes, handling foreclosure defense, and resolving landlord-tenant conflicts for effective legal solutions.</p>
              </div>
                <div className=' pt-0 md:pt-10'>
                <Link to='/contact'>
                <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                </Link>
                </div>
              </div>

              <div data-aos="fade-left" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black  w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between  p-4'>
              <div className='flex flex-col gap-8'>
              <p className='text-[1.4em] md:text-[2em] text-start'>Estate Planning and Property Transfers</p>
              <p className=' text-[.9em] md:text-[1.2em]'>Creating wills and trusts, managing probate proceedings, and facilitating property transfers to ensure smooth inheritance and asset management.</p>
              </div>
                <div className=' pt-0 md:pt-10'>
                <Link to='/contact'>
                <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                </Link>
                </div>
              </div>
            </div>
            <div className=' bg-gray-100 flex gap-4 justify-center  flex-wrap p-3 md:p-6 h-auto  '>
              <div data-aos="fade-right" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black    w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between  p-4'>
              <div className='flex flex-col gap-8'>
              <p className='text-[1.4em] md:text-[2em] text-start'>Regulatory Compliance</p>
              <p className=' text-[.9em] md:text-[1.2em]'>Ensuring adherence to fair housing laws, building codes, and environmental regulations to maintain legal compliance and mitigate risks.</p>
              </div>
                <div className=' pt-0 md:pt-10'>
                <Link to='/contact'>
                <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
                </Link>
                </div>
              </div>
              <div data-aos="fade-left" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 bg-white text-black  w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between  p-4'>
              <div className='flex flex-col gap-8'>
              <p className='text-[1.4em] md:text-[2em] text-start'>Corporate Real Estate</p>
              <p className=' text-[.9em] md:text-[1.2em]'>Maximize returns, minimize risks. Let's navigate the complexities of the market together for optimal investment growth and financial security</p>
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
            <h2 className="mb-8 text-3xl font-semibold font-Poppins text-center text-gray-800">Frequently Asked Questions</h2>
            <div>
              <Realitem
                question=" What does a real estate consultant do?"
                answer="A real estate consultant provides expert advice and guidance to clients looking to buy, sell, invest in, or develop real estate properties. They offer market analysis, property evaluations, investment strategies, and assistance with transactions. Consultants help clients make informed decisions, maximize returns on investment, and navigate complex real estate processes"
              />
              <Realitem
                question="How can a real estate consultant help with property investment?"
                answer="Real estate consultants assist investors by identifying lucrative investment opportunities, conducting market research, and analyzing potential risks and returns. They provide insights into market trends, property values, and economic factors affecting real estate. Consultants also help with due diligence, financial modeling, and developing investment strategies tailored to the client's goals."
              />
              <Realitem
                question="What are the benefits of hiring a real estate consultant for property development?"
                answer=" Real estate consultants specializing in property development guide clients through the entire development process. They assist with site selection, feasibility studies, project planning, and securing financing. Consultants coordinate with architects, contractors, and regulatory bodies to ensure the project meets legal requirements and is completed on time and within budget. Their expertise helps mitigate risks and enhances the project's success."
              />
              <Realitem
                question="How can a real estate consultant assist with buying or selling property?"
                answer="When buying property, real estate consultants help clients identify suitable properties, negotiate deals, and conduct due diligence to ensure a sound investment. For selling property, consultants provide market analysis, develop marketing strategies, and assist with pricing and negotiations to achieve the best possible sale terms. Their expertise streamlines the transaction process and helps clients achieve their real estate goals."
              />
              <Realitem
              question="How do real estate consultants stay updated with industry trends and best practices?"
              answer="Real estate consultants stay updated through continuous education, attending industry conferences, and participating in workshops and webinars. They read industry publications, research market trends, and maintain memberships in professional associations such as the National Association of Realtors (NAR) or the Urban Land Institute (ULI). Staying current with industry trends and best practices allows consultants to provide informed advice and innovative solutions to their clients."
              />
              
            </div>
          </div>
    </div>
  )
}

export default Real
