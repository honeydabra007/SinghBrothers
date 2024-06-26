import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const RajInfoBox = ({ title, description, details, img }) => {
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

const Raj = () => {
    const infoBoxes = [
       {
        img:'/government.jpg',
        title:'Public Welfare Services',
        description:'Public welfare services in Rajasthan include social security pensions, healthcare facilities, and the public distribution system, ensuring essential resources reach citizens efficiently to support their well-being and livelihood',
        details:['Social Security Pensions','Public Distribution System (Ration Cards)','Healthcare Services ']
       },
       {
        img:'/government.jpg',
        title:'Education Services',
        description:'Education services in Rajasthan encompass government schools, colleges, vocational training, scholarships, and educational aid, fostering learning opportunities and skill development for all residents',
        details:['Government Schools and Colleges','Scholarships and Educational Aid','Vocational Training Programs']
       },
       {
        img:'/government.jpg',
        title:'Infrastructure and Development',
        description:'Infrastructure and development in Rajasthan focus on roads, water supply, sanitation, and urban projects to improve connectivity, living standards, and economic growth across the state',
        details:['Road and Transport Development','Water Supply and Sanitation','Urban Development Projects']
       },
       {
        img:'/government.jpg',
        title:'Agriculture and Rural Development',
        description:'Agriculture and rural development in Rajasthan include subsidies, loans, and schemes for farmers, rural employment programs like MNREGA, and irrigation projects, aiming to boost agricultural productivity and improve rural livelihoods',
        details:['Agricultural Subsidies and Loans','Rural Employment Schemes (MNREGA)','Irrigation Projects']
       },
       {
        img:'/government.jpg',
        title:'Legal and Administrative Services',
        description:'Legal and administrative services in Rajasthan encompass land records, registration services, grievance redressal mechanisms, and legal aid initiatives. These services ensure transparent governance and equitable access to justice for all residents',
        details:['Land Records and Registration','Grievance Redressal Mechanisms','Legal Aid Services']
       },
       {
        img:'/government.jpg',
        title:'Tourism and Culture',
        description:'Tourism and culture in Rajasthan are defined by its majestic palaces, ancient forts, vibrant festivals like the Pushkar Fair, and traditional arts. These attractions celebrate the states rich heritage, attracting global visitors and sustaining local economies while preserving cultural traditions for future generations',
        details:['Promotion of Heritage Sites (Palaces, Forts)','Cultural Festivals and Events','Tourism Development Initiatives']
       },
       {
        img:'/government.jpg',
        title:'Economic and Industrial Development',
        description:'Economic and industrial development in Rajasthan focuses on investment promotion, industrial infrastructure development, and business support services. These initiatives aim to foster economic growth, create employment opportunities, and attract investments across diverse sectors',
        details:['Investment Promotion','Industrial Infrastructure Development','Business Support Services']
       },
       {
        img:'/government.jpg',
        title:'Environment and Conservation',
        description:'Environment and conservation efforts in Rajasthan focus on preserving biodiversity, managing water resources, promoting renewable energy, and safeguarding wildlife habitats. These initiatives aim to mitigate environmental degradation and ensure sustainable development for future generations',
        details:['Environmental Protection Programs','Forest Conservation','Wildlife Conservation Initiatives']
       },
       
    ];

    return (
        <div>
            <div className='px-0 md:px-72 flex flex-col md:flex-row items-center h-auto md:h-[70vh] gap-2 md:gap-16 bg-indigo-200 '>
                <div className='mt-10'>
                    <img className='h-[250px] md:h-[350px] w-[250px] md:w-[650px]' src='/Ind-Gov.png' alt='' />
                </div>
                <div className='mt-0 md:mt-14 mb-4 md:mb-0 flex gap-4 flex-col'>
                    <h1 className='text-[1.3em] md:text-[2em] w-[300px] md:w-[400px]'>Government of Rajasthan</h1>
                    <p className='text-[.9em] md:text-[1.3em] w-[300px] md:w-[400px]'>
                    The Government of Rajasthan is committed to fostering inclusive growth, sustainable development, and good governance across the state, through policy initiatives, infrastructure development, social welfare programs, and administrative reforms aimed at improving the lives of its citizens and promoting Rajasthan's progress on various fronts.</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='mt-8 text-[2.2em] font-semibold'>Government of Rajasthan Services</h1>
                <div className="flex flex-wrap justify-center mb-10 mt-10 gap-6">
                    {infoBoxes.map((box, index) => (
                        <RajInfoBox
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

export default Raj;