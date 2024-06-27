import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const SSOInfoBox = ({ title, description, details, img }) => {
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

const SSO = () => {
    const infoBoxes = [
        {
            img: '/Hawamahal.jpg',
            title: 'Health and Insurance',
            description:'Health and insurance services encompass healthcare coverage, medical treatment, and financial protection against health risks. They ensure access to medical services, and mitigate financial burdens from healthcare expenses, offering peace of mind and comprehensive support for individuals and families.',
            details:['Registration','Login','Profile Update','Service Selection','Policy Management','New Applications','Claim Submission','Status Tracking','Notifications','Renewals']
        },
       {
        img:'/Hawamahal.jpg',
        title:'Urban Development and Housing',
        description:'Urban Development and Housing focuses on planning, infrastructure, housing projects, and sustainable development to enhance urban living standards. It aims to create resilient cities, improve public spaces, and provide equitable housing opportunities for all residents',
        details:['Planning','Zoning','Land Acquisition','Design and Approval','Funding','Construction','Utilities and Services','Community Engagement','Occupancy Allocation','Maintenance']
       },
       {
        img:'/Hawamahal.jpg',
        title:'Licensing and Registration',
        description:'Licensing and registration services facilitate legal permissions and formalities for businesses and individuals, ensuring compliance with regulations. They streamline processes for permits, certifications, and registrations, supporting economic activities while maintaining regulatory standards and promoting accountability in various sectors',
        details:['SSO Account Creation','Login','Profile Update','Service Selection','Application Form','Document Upload','Fee Payment','Submission','Status Tracking','Approval and Issuance']
       },
       {
        img:'/Hawamahal.jpg',
        title:'Education and Employment',
        description:'Education and Employment services in SSO (Single Sign-On) facilitate access to educational resources, job listings, and career development tools, offering a centralized platform for managing educational credentials and employment opportunities',
        details:['SSO Account Creation','Login','Profile Setup','Education Services','Job Search','Resume Management','Career Counseling','Skill Development','Networking','Notifications']
       },
       {
        img:'/Hawamahal.jpg',
        title:'E-Governance Services',
        description:'E-Governance Services via SSO simplify access to government services, allowing citizens to apply for licenses, pay taxes, access public information, and participate in digital governance processes conveniently through a unified platform',
        details:['SSO Account Creation','Login','Profile Setup','Service Selection','Application Submission','Payment','Document Upload','Status Tracking','Feedback and Grievance Redressal','Notifications']
       

       },
       {
        img:'/Hawamahal.jpg',
        title:'Environmental Services',
        description:'Environmental Services via SSO enable access to tools for environmental monitoring, permits, and compliance reporting, fostering sustainable practices and regulatory adherence through a centralized digital platform',
        details:['SSO Account Creation','Login','Profile Setup','Service Selection','Application Submission','Data Upload','Payment','Status Tracking','Feedback','Notifications']
       },
       {
        img:'/Hawamahal.jpg',
        title:'Government Financial Services',
        description:'Government Financial Services via SSO streamline access to taxation, budgeting, grants, and financial aid applications, offering a unified platform for citizens and businesses to manage financial transactions and regulatory compliance efficiently',
        details:['SSO Account Creation','Login','Profile Setup','Service Selection','Taxation','Budgeting','Grants and Financial Aid','Payment:','Status Tracking','Notifications']
       },
       {
        img:'/Hawamahal.jpg',
        title:'IT Services',
        description:'Information Technology Services through SSO streamline access to digital infrastructure, cybersecurity measures, software applications, and technical support, enhancing efficiency and security in managing IT resources centrally',
        details:['SSO Account Creation','Login','Profile Setup','Service Selection','Digital Infrastructure','Cybersecurity','Software Applications','Technical Support','Data Management','Notifications']
       },
       
       
    ];

    return (
        <div className='w-full overflow-hidden '>
            <div className='px-0 md:px-72 flex flex-col md:flex-row items-center h-auto md:h-[70vh] gap-2 md:gap-16 bg-indigo-200 '>
                <div className='mt-10'>
                    <img className='h-[250px] md:h-[350px] w-[250px] md:w-[650px]' src='/logo12-removebg-preview.png' alt='' />
                </div>
                <div className='mt-0 md:mt-14 mb-4 md:mb-0 flex gap-4 flex-col'>
                    <h1 className='text-[1.3em] md:text-[2em] w-[300px] md:w-[400px]'>SSO – Single Sign ON</h1>
                    <p className='text-[.9em] md:text-[1.3em] w-[300px] md:w-[400px]'>
                    SSO (Single Sign-On) simplifies user authentication, enabling seamless access to multiple applications and systems with just one set of credentials, enhancing security, user experience, and productivity.</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='mt-8 text-[2.2em] font-semibold'>SSO – Single Sign ON Services</h1>
                <div className="flex flex-wrap justify-center mb-10 mt-10 gap-6">
                    {infoBoxes.map((box, index) => (
                        <SSOInfoBox
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

export default SSO;

