import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { MdRealEstateAgent } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";

export default function Service() {
  return (
    <div className='font-OpenSans'>
      <section id="services" className="p-14 bg-white">
      <div className="container mx-auto text-center">
         <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg service-item hover:shadow-xl">
                <MdCastForEducation className="text-center text-4xl" />
                <h3 className="text-xl font-bold mb-2">Education Services</h3>
                <p className="text-gray-700">This company is a premier provider of comprehensive education consulting services, committed to empowering individuals, educational institutions, and organizations to achieve their academic goals and maximize their potential</p>
                </div>
            
            </div>
          <div className="w-full  md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg ">
            <MdRealEstateAgent  className="text-center text-4xl"/>
              <h3 className="text-xl font-bold mb-2">Real Estate and Property Law</h3>
              <p className="text-gray-700 ">We offer legal support and guidance on real estate transactions, property acquisitions, leasing agreements, land use regulations, zoning issues, and property disputes to clients involved in the real estate sector.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg ">
            <MdCorporateFare  className="text-center text-4xl"/>
              <h3 className="text-xl font-bold mb-2">Government Corporate</h3>
              <p className="text-gray-700 ">Our company is a trusted provider of government corporate services with specialized legal consultancy, dedicated to assisting government agencies, public sector organizations, and corporate entities in navigating complex legal and regulatory landscapes.</p>
            </div>
          </div>
        </div>


<div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg ">
            <MdHealthAndSafety  className="text-center text-4xl"/>

              <h3 className="text-xl font-bold mb-2">Healthcare Law and Regulatory Compliance</h3>
              <p className="text-gray-700 ">Providing legal guidance to healthcare providers, pharmaceutical companies, and medical device manufacturers on regulatory compliance. Assisting with healthcare licensing, accreditation, reimbursement, and fraud and abuse prevention.</p>
            </div>
          </div>
          <div className="w-full  md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg ">
            <BsBank2  className="text-center text-4xl"/>
              <h3 className="text-xl font-bold mb-2">Banking & Finance
</h3>
              <p className="text-gray-700 ">This company is a leading provider of comprehensive banking and finance services, dedicated to delivering tailored financial solutions and expertise to individuals, businesses, and institutions.</p>
            </div>
          </div>
          {/* <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg ">
            <MdCastForEducation  className="text-center text-4xl"/>
              <h3 className="text-xl font-bold mb-2">Government Corporate</h3>
              <p className="text-gray-700 ">Our company is a trusted provider of government corporate services with specialized legal consultancy, dedicated to assisting government agencies, public sector organizations, and corporate entities in navigating complex legal and regulatory landscapes.</p>
            </div>
          </div> */}
        </div>

    

      </div>
    </section>
    </div>
  )
}
