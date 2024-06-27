import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const HeritageInfoBox = ({ title, description, details, img }) => {
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

const Heritage = () => {
    const infoBoxes = [
        {
            img: '/patrika2.jpg',
            title: 'E-Auction',
            description: 'Jaipur Heritage E-auction involves online bidding for historic properties, ensuring transparent transactions and wider participation. It promotes preservation and responsible ownership of Jaipurs cultural heritage under regulatory oversight',
            details: ['Registration','Catalog Access','Pre-Auction Inspection','Bidding','Auction Closure','Payment','Transfer','Documentation','Compilance']
        },
      { 
        img:'/patrika2.jpg',
        title:'Jaipur Heritage Lease',
        description:'Leasing Jaipur heritage involves obtaining legal permission for temporary use of culturally significant properties, adhering to preservation guidelines, and ensuring responsible management under municipal regulations for historical conservation',
        details:['Identify Property','Contact Authority','Application','Documentation','Approval Process','Negotiation','Execution','Compliance','Payment','Management']
      },
       
      { 
        img:'/patrika2.jpg',
        title:'Trade License',
        description:'Obtaining a trade license for Jaipur heritage involves applying with the municipal authority, submitting required documents, paying fees, and adhering to heritage preservation guidelines to legally operate businesses in culturally significant areas',
        details:['Research','Application','Documentation','Submission','Review','Inspection','Approval','Payment','Issuance','Copilance']
      },
       
      { 
        img:'/patrika2.jpg',
        title:'Urban Development Tax',
        description:'Jaipurs Urban Development Tax on heritage properties supports city infrastructure and services. Its based on property valuation and contributes to sustainable urban growth while preserving cultural heritage under municipal guidelines',
        details:['Assessment Notice','Calculate Tax','Payment Options','Submission','Reciept','Varifacation','Compilance']
      },
       
      { 
        img:'/patrika2.jpg',
        title:'UDT self-assessment',
        description:'For Jaipur heritage, self-assessment of Urban Development Tax involves calculating tax based on property valuation, completing forms accurately, submitting required documents, and ensuring compliance with Nagar Nigam guidelines for heritage conservation',
        details:['Property Details','Calculate Tax','Online Form','Supporting Documents','Submission','Payment','Confirmation','Follow-Up']
      },
       
    ];

    return (
        <div className='w-full font-OpenSans overflow-hidden '>
            <div className='px-0 md:px-72 flex flex-col md:flex-row items-center h-auto md:h-[70vh] gap-2 md:gap-16 bg-indigo-200 '>
                <div className='mt-10'>
                    <img className='h-[250px] md:h-[350px] w-[250px] md:w-[650px]' src='/logo7-removebg-preview.png' alt='' />
                </div>
                <div className='mt-0 md:mt-14 mb-4 md:mb-0 flex gap-4 flex-col'>
                    <h1 className='text-[1.3em] md:text-[2em] w-[300px] md:w-[400px]'>Jaipur Heritage Jaipur</h1>
                    <p className='text-[.9em] md:text-[1.3em] w-[300px] md:w-[400px]'>
                    Jaipur Heritage promotes the preservation and celebration of Jaipur's rich cultural and historical legacy, ensuring the protection of its architectural landmarks, traditional crafts, and vibrant cultural practices for future generations</p>
                </div>
            </div>
            <div className='flex flex-col font-OpenSans items-center'>
                <h1 className='mt-8 text-[2.2em] font-semibold'>Jaipur Heritage Services</h1>
                <div className="flex flex-wrap justify-center mb-10 mt-10 gap-6">
                    {infoBoxes.map((box, index) => (
                        <HeritageInfoBox
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

export default Heritage;
