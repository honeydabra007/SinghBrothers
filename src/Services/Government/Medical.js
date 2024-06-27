import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const MedicalInfoBox = ({ title, description, details, img }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-4  bg-white border border-gray-300 w-[300px] md:w-[400px] rounded-xl shadow-2xl transition-all">
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

const Medical = () => {
    const infoBoxes = [
       {
        img:'/sms.jpg',
        title:'Medical Procurement',
        description:'Medical procurement involves sourcing and purchasing essential medical supplies, equipment, and pharmaceuticals to ensure healthcare facilities have necessary resources for patient care and treatment',
        details:['Needs Assessment','Vendor Selection','Request for Quotation (RFQ)','Bid Evaluation','Contract Negotiation','Purchase Order','Delivery and Receipt','Inventory Management','Quality Control','Payment Processing']
       },
       {
        img:'/sms.jpg',
        title:'Health Facility Management',
        description:'Health facility management oversees operations, maintenance, and compliance in healthcare settings to ensure efficient patient care and optimal utilization of resources and facilities',
        details:['Needs Assessment','Staffing and Training','Facility Maintenance','Supply Chain Management','Patient Services','Quality Assurance','Financial Management','Technology Integration','Regulatory Compliance','Continuous Improvement']
       },
       {
        img:'/sms.jpg',
        title:'Telemedicine Services',
        description:'Telemedicine services provide remote medical consultations via digital platforms, enabling efficient diagnosis, treatment, and healthcare management without requiring in-person visits, enhancing accessibility and patient care',
        details:['Needs Assessment','Technology Selection','Regulatory Compliance','Provider Training','Patient Education','Appointment Scheduling','Teleconsultation','Medical Records','Payment and Billing','Evaluation and Improvement']
       },
       {
        img:'/sms.jpg',
        title:'Healthcare Technology Integration',
        description:'Healthcare technology integration enhances patient care and operational efficiency through digital tools like EHRs, telemedicine, and AI diagnostics',
        details:['Needs Assessment','Technology Selection','Vendor Evaluation','Implementation Planning','Infrastructure Preparation','Training and Education','Integration Testing','Data Migration','Go-Live Implementation','Monitoring and Optimization']
       },
       {
        img:'/sms.jpg',
        title:'Infrastructure Development',
        description:'Infrastructure development involves planning, designing, and constructing essential facilities like roads, buildings, and utilities to support economic growth, enhance living standards, and meet community needs',
        details:['Project Identification','Feasibility Study','Planning and Design','Environmental Assessment','Funding and Financing','Procurement','Construction','Quality Contro','Testing and Commissioning','Operation and Maintenance']
       
       }
    ];

    return (
        <div className='w-full overflow-hidden '>
            <div className='px-0 md:px-72 flex flex-col md:flex-row items-center h-auto md:h-[70vh] gap-2 md:gap-16 bg-indigo-200 '>
                <div className='mt-10'>
                    <img className='h-[250px] md:h-[350px] w-[250px] md:w-[650px]' src='/logo4-removebg-preview.png' alt='' />
                </div>
                <div className='mt-0 md:mt-14 mb-4 md:mb-0 flex gap-4 flex-col'>
                    <h1 className='text-[1.3em] md:text-[2em] w-[300px] md:w-[400px]'>Rajasthan Medical Corporation</h1>
                    <p className='text-[.9em] md:text-[1.3em] w-[300px] md:w-[400px]'>
                    Rajasthan Medical Corporation facilitates the efficient procurement, distribution, and management of medical supplies, equipment, and pharmaceuticals across the state, ensuring access to quality healthcare services and promoting public health initiatives for the well-being of Rajasthan's residents.</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='mt-8 text-[2.2em] font-semibold'>Rajasthan Medical Corporation Services</h1>
                <div className="flex flex-wrap justify-center mb-10 mt-10 gap-6">
                    {infoBoxes.map((box, index) => (
                        <MedicalInfoBox
                            key={index}
                            img={box.img}
                            title={box.title}
                            description={box.description}
                            details={box.details}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-start md:justify-between md:flex-row p-6 md:m-auto mb-10 bg-blue-500 text-white w-[350px] md:w-full'>
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

export default Medical;

