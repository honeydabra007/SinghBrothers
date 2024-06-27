import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const NagarNigamInfoBox = ({ title, description, details, img }) => {
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

const NagarNigam = () => {
    const infoBoxes = [
        {
            img: '/Alberthall1.jpg',
            title: 'E-Auction',
            description: 'Nagar Nigam e-auction facilitates online bidding for selling municipal assets or properties, ensuring transparency, broader participation, competitive pricing, and compliance with regulatory guidelines for efficient sale execution',
            details: ['Registration', 'Documentation', 'Catalog Access', 'Inspection', 'Deposit','Bidding','Winning Bid','Payment','Documentation','Transfe']
        },
       {
        img:'/Alberthall1.jpg',
        title:'Nagar Nigam lease',
        description:'Nagar Nigam lease involves granting temporary property rights for a specified period, enabling lawful use under defined terms and conditions, often for commercial or residential purposes, fostering regulated urban development.',
        details:['Application','Verification','Agreement','Payment','Possession','Compliance','Renewal','Termination']

       },
       {
        img:'/Alberthall1.jpg',
        title:'Nagar Nigam trade',
        description:'A Nagar Nigam trade license permits legal operation of businesses within its jurisdiction, ensuring compliance with local regulations, promoting public safety, and regulating commercial activities to foster orderly urban development',
        details:['Application','Documentation','Inspection','Fee Payment','Approval','Issuance','Renewal','Compliance']

       },
       {
        img:'/Alberthall1.jpg',
        title:'Urban Development Tax(UDT)',
        description:'Urban Development Tax is levied by Nagar Nigam on properties within its jurisdiction to fund city infrastructure projects and services, based on property valuation and supporting urban growth and development',
      
        details:['Assessment','Calculation','Payment','Submission','Receipt','Verification','Compilance']

       },
       {
        img:'/Alberthall1.jpg',
        title:'UDT self-assessment',
        description:'UDT self-assessment involves property owners calculating and reporting their tax liability based on property details, submitting forms and documents, and ensuring compliance with Nagar Nigam guideline',
        details:['UnderStand Requirements','Gather Information','Calculate Tax','Complete Forms','Attach Documents','Submit','Payment','Confirmation']

       }
       
    ];

    return (
        <div className='w-full overflow-hidden '>
            <div className='px-0 md:px-72 flex flex-col md:flex-row items-center h-auto md:h-[70vh] gap-2 md:gap-16 bg-indigo-200 '>
                <div className='mt-10'>
                    <img className='h-[250px] md:h-[350px] w-[250px] md:w-[650px]' src='/logo9.png' alt='' />
                </div>
                <div className='mt-0 md:mt-14 mb-4 md:mb-0 flex gap-4 flex-col'>
                    <h1 className='text-[1.3em] md:text-[2em] w-[300px] md:w-[400px]'>Nagar Nigam – Greater Jaipur</h1>
                    <p className='text-[.9em] md:text-[1.3em] w-[300px] md:w-[400px]'>
                    Nagar Nigam (Municipal Corporation) of Greater Jaipur provides essential urban services including sanitation, waste management, street maintenance, public health, and infrastructure development to enhance the quality of life for residents and promote sustainable city growth.</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='mt-8 text-[2.2em] font-semibold'>Nagar Nigam – Greater Services</h1>
                <div className="flex flex-wrap justify-center mb-10 mt-10 gap-6">
                    {infoBoxes.map((box, index) => (
                        <NagarNigamInfoBox
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

export default NagarNigam;
