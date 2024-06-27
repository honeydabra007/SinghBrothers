import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const JdaInfoBox = ({ title, description, details, img }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-4 font-OpenSans bg-white border border-gray-300 w-[300px] md:w-[400px] rounded-xl shadow-2xl transition-all">
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

const App = () => {
    const infoBoxes = [
        {
            img: '/Hawamahal.jpg',
            title: 'JDA Patta',
            description: 'JDA Patta refers to a land ownership document issued by the Jaipur Development Authority in Rajasthan, India, confirming legal ownership rights over land within its jurisdiction, essential for property transactions and development',
            details: ['Ownership Proof', 'Inheritance and Succession', 'Taxation and Revenue Collection', 'Land Development and Transactions', 'Government Records']
        },
        {
            img: '/Hawamahal.jpg',
            title: 'JDA Registery',
            description: 'JDA registry typically refers to the registration of property with the Jaipur Development Authority in Rajasthan, India, ensuring legal ownership and compliance with regulations for real estate transactions and development projects',
            details: ['Government Registries', 'Legal Registries', 'Corporate Registries', 'Technology Registries']
        },
        {
            img: '/Hawamahal.jpg',
            title: 'JDA Property transfer',
            description: 'Property transfer involves the legal process of moving the ownership of property from one party to another. This process can vary depending on the type of property, the jurisdiction, and the specific circumstances of the transfer.',
            details: ['Agreement of Sale', 'Due Diligence', 'Purchase Agreement', 'Title Search and Insurance', 'Financing', 'Closing', 'Recording the Deed', 'Post-Closing']
        },
        {
            img: '/Hawamahal.jpg',
            title: 'JDA Name transfer',
            description: 'JDA name transfer involves legally transferring ownership rights under a Joint Development Agreement (JDA), requiring review, consent, drafting agreements, payment of fees, registration, and notification to authorities for documentation',
            details: ['Review the Joint Development Agreement', 'Obtain Necessary Consents and Approvals', 'Legal Due Diligence', 'Drafting the Transfer Agreement', 'Valuation and Consideration', 'Execution of Transfer Documents', 'Payment of Stamp Duty and Registration Fees', 'Registration of the Transfer', 'Updating the JDA', 'Notification to Relevant Authorities', 'Final Verification']
        },
        {
            img: '/Hawamahal.jpg',
            title: 'JDA Name substitution',
            description: 'Name substitution in JDA involves replacing a partys name in a Joint Development Agreement, requiring legal review, stakeholder consent, drafting agreements, fee payment, registration,documentation and notification procedures',
            details: ['Review the Original Joint Development Agreement (JDA)', 'Consult with Stakeholders', 'Seek Legal Advice', 'Draft the Name Substitution Agreement', 'Obtain Necessary Consents and Approvals', 'Execute the Name Substitution Agreement', 'Pay Applicable Fees', 'Register the Substitution', 'Amend the Joint Development Agreement (JDA)', 'Notify Relevant Authorities and Parties', 'Final Verification and Documentation']
        },
        {
            img: '/Hawamahal.jpg',
            title: 'JDA One Time Lease Certificate',
            description: 'One Time Lease Certificate (OTLC) is a document issued for a single lease transaction, confirming legal permission for temporary use of property, outlining terms, conditions, and responsibilities of both parties involved',
            details: ['Application Submission', 'Verification and Approval', 'Issuance of Certificate', 'Execution and Registration', 'Compliance and Renewal']
        },
        {
            img: '/Hawamahal.jpg',
            title: 'JDA E-Auction',
            description: 'E-Auction is an online bidding process for selling assets or properties, facilitating transparent transactions via digital platforms, ensuring wider participation, competitive pricing, and efficient sale execution under regulatory guidelines',
            details: ['Registration', 'Listing', 'Pre-Auction Inspection', 'Bidding', 'Auction Closure', 'Payment and Transfer', 'Post-Auction Procedures']
        },
        {
            img: '/Hawamahal.jpg',
            title: 'Online Tender Participation',
            description: 'Participating in online tenders involves registering on a digital platform, accessing tender documents, submitting bids electronically, and adhering to deadlines and specifications for competitive procurement processes.',
            details: ['Registration', 'Document Access', 'Bid Preparation', 'Submission', 'Evaluation', 'Award', 'Contract Signing', 'Execution']
        }
    ];

    return (
        <div className='w-full font-OpenSans overflow-hidden '>
            <div className='px-0 md:px-72 flex flex-col md:flex-row items-center h-auto md:h-[70vh] gap-2 md:gap-16 bg-blue-100 '>
                <div className='mt-10'>
                    <img className='h-[250px] md:h-[350px] w-[250px] md:w-[350px]' src='/logo8-removebg-preview.png' alt='' />
                </div>
                <div className='mt-0 md:mt-14 mb-4 md:mb-0 flex gap-4 flex-col'>
                    <h1 className='text-[1.3em] md:text-[2em] w-[300px] md:w-[400px]'>JDA-JAIPUR DEVELOPMENT AUTHORITY</h1>
                    <p className='text-[.9em] md:text-[1.3em] w-[300px] md:w-[400px]'>
                        The Jaipur Development Authority (JDA) spearheads urban development initiatives, urban planning, and infrastructure projects in Jaipur, aiming to create sustainable and inclusive urban spaces that enhance the quality of life for residents and promote economic growth</p>
                </div>
            </div>
            <div className='flex font-OpenSans flex-col items-center'>
                <h1 className='mt-8 text-[2.2em] font-semibold'>JDA Services</h1>
                <div className="flex flex-wrap justify-center mb-10 mt-10 gap-6">
                    {infoBoxes.map((box, index) => (
                        <JdaInfoBox
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

export default App;
