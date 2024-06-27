import React from 'react'
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi"
import { useState } from 'react';

const Lawitem = ({ question, answer }) => {
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
const Law= () =>{
  return(
    <div className='font-OpenSans w-full overflow-hidden '>
    <div  className="relative w-full h-[80vh]">
    <img
      className="object-cover w-full h-full block"
      src={`${process.env.PUBLIC_URL}/high-angle-stethoscope-table.jpg`}
      alt="SB Logo"
      
    />
    <div className='  flex flex-col p-4 md:p-32 gap-4 md:gap-0  absolute top-0 left-0 w-full h-[80vh] text-white' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <h1 className=' text-[1.8em] md:text-[4em] pt-40 md:pt-0'>Healthcare Law Services</h1>
     <p className=' text[.9em] md:text-[1.2em] w-[270px] md:w-[500px]'>Healthcare insurance law encompasses the regulations and legal frameworks governing health insurance policies and practices..</p>
    <div >
    <Link to ="/contact">
    <button className='bg-gradient-to-r from-cyan-500 to-blue-700 h-14 rounded-[40px] w-[140px] md:w-[200px] mt-4 text-[1.5em]'>Contact Us</button>
    </Link>
    </div>
    </div>

    </div>
    <div className='h-auto mb-8 flex items-center  pt-8 flex-col text-white'>
    <h1 className='bg-gradient-to-r from-cyan-500 to-blue-700 p-4 text-white rounded-[80px] text-[1.4em] md:text-[2em]'>Our Healthcare Law Services</h1>
    <div>
   
    <div className='flex gap-4 justify-center   flex-wrap p-3 md:p-6 h-auto  '>
    <div className=' flex flex-col md:flex-row gap-4 bg-gray-100'>
    <div data-aos="fade-right" className=' rounded-lg shadow-2xl mt-6 flex flex-col gap-4  bg-white text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
    <div className='flex flex-col gap-8'>
    <p className=' text-[1.4em] md:text-[2em] text-start'>Health Insurance Exchange</p>
    <p className='text-[.9em] md:text-[1.2em]'>Legal issues related to the operation and regulation of health insurance marketplaces created under the ACA, including plan offerings, pricing, and subsidies.</p>
    </div>
    <div className=' '>
    <Link to='/contact'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    
    </div> 
    <div data-aos="fade-left" className=' rounded-lg shadow-2xl mt-6 flex flex-col gap-4 text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start '>Fraud and Abuse</p>
    <p className='text-[.9em] md:text-[1.2em]'>
    Healthcare fraud and abuse services include designing compliance programs, conducting internal audits, and defending against regulatory investigations and prosecutions. </p>
    </div>
    <div className=' '>
    <Link to='/contact'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div> 
    </div>
    </div>
    <div className=' flex flex-col md:flex-row gap-4 bg-gray-100'>
    <div data-aos="fade-right" className=' rounded-lg shadow-2xl mt-6 flex flex-col  gap-4 text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>Licensing and Accreditation</p>
    <p className='text-[.9em] md:text-[1.2em]'>Assisting healthcare professionals and organizations in obtaining and maintaining necessary licenses and accreditations.Navigating the complexities of medical boards and other regulatory bodies</p>
    </div>
    <div className=' '>
    <Link to='/contact'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div>
    <div data-aos="fade-left" className=' rounded-lg shadow-2xl mt-6 flex flex-col gap-2  text-black w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>Healthcare Transactions</p>
    <p className='text-[.9em] md:text-[1.2em]'>Advising on mergers, acquisitions, joint ventures, and other business transactions within the healthcare sector.Conducting due diligence, structuring deals, and obtaining regulatory approvals for healthcare transactions</p>
    </div>
    <div className=' '>
    <Link to='/contact'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div>
    </div>
    <div className='flex flex-col md:flex-row gap-4 bg-gray-100'>
    <div data-aos="fade-right" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 text-black bg-white   w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>Patient Rights and Advocacy</p>
    <p className=' text-[.9em] md:text-[1.2em]'>Protecting patient rights, including issues related to informed consent, patient confidentiality, and access to medical records.Representing patients in disputes with healthcare providers or insurers.</p>
    </div>
    <div className=' '>
    <Link to='/contact'>
    <button className='bg-blue-500 h-[40px] w-[180px]  text-white   rounded-[40px]  m-auto  font-semibold'> Get Details</button>
    </Link>
    </div>
    </div>
    <div data-aos="fade-left" className='  rounded-lg shadow-2xl mt-6 flex flex-col gap-4 text-black bg-white   w-[320px] md:w-[600px] h-auto md:h-[50vh] justify-between p-4'>
    <div className='flex flex-col gap-8'>
    <p className='text-[1.4em] md:text-[2em] text-start'>Insurance Law</p>
    <p className=' text-[.9em] md:text-[1.2em]'>Navigating the complexities of health insurance law, including issues related to coverage, claims, and reimbursement.Assisting with disputes between healthcare providers and insurers, as well as helping patients understand their coverage rights.</p>
    </div>
    <div className=' '>
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
    <Lawitem
      question="What does a healthcare law consultant do?"
      answer=" A healthcare law consultant provides legal expertise and guidance to healthcare organizations, including hospitals, clinics, insurance companies, and pharmaceutical companies. They assist with regulatory compliance, risk management, contract negotiations, policy development, and resolving legal disputes. Their goal is to help healthcare providers navigate the complex legal landscape and ensure they operate within the bounds of the law."
      />
      <Lawitem
      question="How can a healthcare law consultant assist with regulatory compliance?"
      answer="Healthcare law consultants help organizations comply with federal, state, and local regulations, such as HIPAA (Health Insurance Portability and Accountability Act), Medicare and Medicaid rules, and FDA (Food and Drug Administration) regulations. They conduct compliance audits, develop and implement compliance programs, train staff on regulatory requirements, and provide ongoing monitoring and support to ensure adherence to the law."
      />
      <Lawitem
      question="What are the benefits of hiring a healthcare law consultant for contract negotiations?"
      answer="Healthcare law consultants bring expertise in drafting, reviewing, and negotiating contracts to ensure they are legally sound and protect the organization’s interests. They assist with various agreements, including physician employment contracts, vendor agreements, and payer contracts. Consultants help identify and mitigate risks, ensure regulatory compliance, and secure favorable terms, thereby preventing future legal issues."
      />
      <Lawitem
      question="How can healthcare law consultants help with risk management?"
      answer="Healthcare law consultants assist in identifying potential legal risks and developing strategies to mitigate them. They conduct risk assessments, review policies and procedures, and recommend improvements. Consultants also provide training on risk management practices, assist with incident reporting and investigation, and help develop response plans for legal issues, thereby reducing the likelihood of litigation and regulatory penalties"
      />
      <Lawitem
      question=" How do healthcare law consultants stay updated with industry trends and legal changes?"
      answer="Healthcare law consultants stay updated through continuous legal education, attending industry conferences, and participating in workshops and webinars. They subscribe to legal and healthcare publications, engage in professional associations such as the American Health Law Association (AHLA), and participate in networking events. This ongoing education allows them to stay informed about changes in laws and regulations, ensuring they provide current and accurate advice to their clients"
      />
      <Lawitem
      question="How can healthcare law consultants help with policy development?"
      answer="Healthcare law consultants assist with policy development by drafting and reviewing policies to ensure they comply with legal requirements and industry standards. They conduct legal research, analyze the impact of new laws and regulations, and provide recommendations for policy changes. Consultants also help implement new policies, train staff, and monitor compliance, ensuring that healthcare organizations operate within the legal framework and provide high-quality care.

"
      />
      
    </div>
  </div>
  </div>
    );
};


export default Law