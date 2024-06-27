import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const HighCourtInfoBox = ({ title, description, details, img }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-4  bg-white font-OpenSans border  border-gray-300 w-[300px] md:w-[400px] rounded-xl shadow-2xl transition-all">
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

const HighCourt = () => {
    const infoBoxes = [
        {
            img:'/high.jpg',
            title:'Case Filing and Hearing',
            description:'Case filing and hearing at Rajasthan High Court involves submitting petitions, appeals, and writs for civil, criminal, and constitutional matters. Related work includes legal research, document preparation, and court proceedings management',
            details:['Legal Consultation','Document Preparation','Filing','Acknowledgment','Case Listing','Court Hearing','Arguments','Judgment','Post-Hearing Procedures']
           },
        {
            img:'/high.jpg',
            title:'Legal Aid and Advice',
            description:'Legal aid and advice provide free or low-cost legal services to individuals who cannot afford representation. It ensures access to justice, covering various legal issues, including criminal defense, family law, housing disputes, and more',
            details:['Application Submission','Eligibility Assessment','Assignment of Counsel','Legal Advice','Representation','Document Preparation','Court Proceedings','Settlement or Judgment','Follow-up and Support','Feedback and Review']
           },
        {
            img:'/high.jpg',
            title:'Judicial Review',
            description:'Judicial review at Rajasthan High Court examines the legality of government actions, ensuring they adhere to constitutional principles and statutory provisions, maintaining checks and balances in governance',
            details:['Case Filings','Review Proceedings','Legal Arguments','Court Hearings','Judgment','Legal Precedents','Public Accountability','Appeals']
           },
        {
            img:'/high.jpg',
            title:'Court Administration',
            description:'Court administration manages court operations, including case management, scheduling, and record keeping. It ensures efficient judicial processes, supporting judges and staff to uphold justice and maintain effective court functioning',
            details:['Case Management','Judicial Appointments','Facility Maintenance','Budget Oversight','Legal Support','Public Access','Technology Integration','Compliance','Training and Development','Public Relations']
           },
        {
            img:'/high.jpg',
            title:'Public Interest Litigation (PIL)',
            description:'Public Interest Litigation (PIL) allows individuals or groups to seek court intervention on matters of public concern, promoting social justice by addressing issues affecting the wider community or vulnerable populations.',
            details:['Issue Advocacy:','Social Justice','Rights Protection','Judicial Review','Environmental Protection','Human Rights','Policy Influence','Legal Aid','Transparency','Community Advocacy']
           },
        {
            img:'/high.jpg',
            title:'Alternative Dispute Resolution',
            description:'Alternative Dispute Resolution (ADR) in Rajasthan High Court provides mediation, arbitration, and conciliation as alternatives to litigation, aiming for faster, cost-effective, and mutually agreeable dispute resolution outside formal court proceedings',
            details:['Mediation','Arbitration','Conciliation','Training and Awareness']
        }
    ];

    return (
        <div className='w-full font-OpenSans overflow-hidden '>
            <div className='px-0 md:px-72 flex flex-col md:flex-row items-center h-auto md:h-[70vh] gap-2 md:gap-16 bg-indigo-200 '>
                <div className='mt-10'>
                    <img className='h-[250px] md:h-[350px] w-[250px] md:w-[650px]' src='/logo5-removebg-preview.png' alt='' />
                </div>
                <div className='mt-0 md:mt-14 mb-4 md:mb-0 flex gap-4 flex-col'>
                    <h1 className='text-[1.3em] md:text-[2em] w-[300px] md:w-[400px]'>Rajasthan Hight Court</h1>
                    <p className='text-[.9em] md:text-[1.3em] w-[300px] md:w-[400px]'>
                    The Rajasthan High Court serves as the highest judicial authority in the state, upholding the rule of law, dispensing justice, and safeguarding the rights and liberties of citizens through impartial and effective adjudication across civil, criminal, and constitutional matters.</p>
                </div>
            </div>
            <div className='flex flex-col font-OpenSans items-center'>
                <h1 className='mt-8 text-[2.2em] font-semibold'>Rajasthan Hight Court Services</h1>
                <div className="flex flex-wrap justify-center mb-10 mt-10 gap-6">
                    {infoBoxes.map((box, index) => (
                        <HighCourtInfoBox
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

export default HighCourt;