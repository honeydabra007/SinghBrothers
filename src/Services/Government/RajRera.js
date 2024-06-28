import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const RajReraInfoBox = ({ title, description, details, img }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-4 font-OpenSans  bg-white border border-gray-300 w-[300px] md:w-[400px] rounded-xl shadow-2xl transition-all">
            <div className="mb-2">
                <img src={img} alt={title} className="w-full h-56 object-cover rounded-md" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 text-lg mb-2">{description}</p>
            <details className={`cursor-pointer ${isOpen ? 'open' : ''}`} open={isOpen} onToggle={toggleDetails}>
                <summary className="text-orange-600">Read more</summary>
                <ol className="text-gray-700 mt-2 px-4 list-disc flex flex-col gap-2">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ol>
            </details>
        </div>
    );
};

const RajRera = () => {
    const infoBoxes = [
        {
            img: '/House.jpg',
            title: 'Physical & Financial Evaluation of project',
            description:'Physical and financial evaluation of a project involves assessing its feasibility, costs, benefits, and risks to determine its viability for implementation and ensure effective resource management and allocation',
            details:['Site Inspetion','Fund Utilization','Cash Flow Analysis','Compilance Check','Audit Reports','Cost Overruns','Stakeholder Communication','Report Generation']
        },
      { 
        img:'/House.jpg',
        title:'Dispute Handling',
        description:'RERA handles disputes by providing a platform for homeowners and developers to file complaints, ensuring resolution through hearings, mediation, and adjudication, thus ensuring transparency and accountability in real estate transactions',
        details:['Filling A Complaint','Documentation','Payment Of Fees','Acknowledgment','Hearing Notice','Hearing','Mediation',
        'Adjudication','Order Issuance','Compliance','Appeal','Final Resolution'
        ]
      },
       
      { 
        img:'/House.jpg',
        title:'RERA project registration',
        description:'RERA project registration involves submitting project details, including land status, layout, financial statements, timelines, and developer credentials, to the RERA authority to ensure transparency, accountability, and protection for homebuyers',
        details:['Documentation Preparation','Online Application','Upload Documents','Payment Of Fees','Submission','Verification','Corrections','Approval','Public Disclosure','Compliance']
      },
       
      { 
        img:'/House.jpg',
        title:'RERA Compliance Management',
        description:'RERA compliance management ensures real estate projects comply with regulatory standards, ensuring transparency, protecting stakeholders interests, and promoting a fair marketplace for property transactions',
            details:['Project Registration','Reular Updates','Financial Compliance','Quality Assurence','Timely Completion','Quarterly Reports','Customer Communication','Rectification','Legal Compliance','Annual Audit']
      },
       
      { 
        img:'/House.jpg',
        title:'Agent registration with RERA',
        description:'Agent registration with RERA (Real Estate Regulatory Authority) requires compliance with regulations, including qualifications, disclosures, and ethical standards. It aims to ensure transparency, accountability, and professionalism in real estate transactions, safeguarding consumer interests',
        details:['Documentation Prepration','Online Application','Upload Documents','Payment Of Fees','Submission','Verification','Corrections','Approval','Issuance Of Certificate','Compliance']
      }
    ];

    return (
        <div className='w-full font-OpenSans overflow-hidden '>
            <div className='px-0 md:px-72 flex flex-col md:flex-row items-center h-auto md:h-[70vh] gap-2 md:gap-16 bg-indigo-200 '>
                <div className='mt-10'>
                    <img className='h-[250px] md:h-[350px] w-[250px] md:w-[650px]' src='/logo10-removebg-preview.png' alt='' />
                </div>
                <div className='mt-0 md:mt-14 mb-4 md:mb-0 flex gap-4 flex-col'>
                    <h1 className='text-[1.3em] md:text-[2em] w-[300px] md:w-[400px]'>Raj-RERA Jaipur</h1>
                    <p className='text-[.9em] md:text-[1.3em] w-[300px] md:w-[400px]'>
                    Rajasthan Real Estate Regulatory Authority (RAJ-RERA) oversees the real estate sector in the state, ensuring transparency, accountability, and fair practices in property transactions, thereby safeguarding the interests of both buyers and developers</p>
                </div>
            </div>
            <div className='flex flex-col font-OpenSans items-center'>
                <h1 className='mt-8 text-[2.2em] font-semibold'>Raj-RERA Services</h1>
                <div className="flex flex-wrap justify-center mb-10 mt-10 gap-6">
                    {infoBoxes.map((box, index) => (
                        <RajReraInfoBox
                            key={index}
                            img={box.img}
                            title={box.title}
                            description={box.description}
                            details={box.details}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-col font-OpenSans items-start md:justify-between md:flex-row p-6 md:m-auto mb-10 bg-blue-500 text-white w-[350px] md:w-full'>
                <div data-aos="fade-right" className='flex flex-col gap-2 p-1 md:p-2'>
                    <h1 className='text-[1.4em] md:text-[2.5em]'>For Any Assistance, You Can Contact Us</h1>
                    <p className='text-[1em] md:text-[1.3em] w-[300px] md:w-[1000px]'>Discover personalized support and resources with our comprehensive educational assistant service, designed to enhance your learning experience and academic success</p>
                </div>
                <div data-aos="fade-left" className='p-0 md:p-16 mt-8 md:m-0'>
                    <Link to="/contact">
                        <button className='transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-cyan-500 to-blue-700 h-14 hover:text-white shadow-2xl rounded-[40px] bg-white text-blue-500 p-3 w-[180px] text-2xl'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RajRera;