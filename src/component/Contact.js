import React, { useState } from 'react'
import axios from 'axios'
import { RxCrossCircled } from "react-icons/rx"
import { LiaCheckDoubleSolid } from "react-icons/lia" 


const Contact = () => {
   const[formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    contact:'',
    message:''
   });
   const[errors,setErrors] = useState([])
   const[successMessage, setSuccessMessage] = useState('');

   const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
   };
   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
       "http://localhost:8001/contact",
        formData
      );
      console.log(response.data);
      // Reset form fields after submission
      setFormData({
        firstname: '', 
        lastname:'',
         email: '',
         contact:'',
        message: ''
      });
      setErrors([]); // Clear errors if submission is successful
      setSuccessMessage('Form submitted successfully...'); // Set success message
    } catch (error) {
      console.error('Form submission error:', error);
      if (error.response && error.response.data && error.response.data.msg) {
        setErrors(error.response.data.msg);
        setSuccessMessage(''); // Clear success message if there's an error
      } else {
        setErrors(['An unexpected error occurred.']);
        setSuccessMessage(''); // Clear success message if there's an error
      }
    }
  };
  return (
    <div className='font-OpenSans'>
      <div className='p-[20px] md:p-[60px] h:auto  bg-cover gap-2 flex flex-col ' style={{ backgroundImage: 'url("/Company (2) (1).jpg")' }}>
        <div data-aos="zoom-in">
          <h1 className=' p-2  text-[1.2em] md:text-[2.5em] text-white'>Make An Appointment Here</h1>
          <p className=' p-2 text-[.8em] md:text-[1.2em] text-white w-[300px] md:w-[600px]'> We are glad that you preferred to contact us. Please fill our short form and one of our friendly team members will contact you back</p>
        </div>

        <div data-aos="fade-up" className=' flex  flex-col  gap-1  bg-gradient-to-r from-cyan-500 to-blue-700 border-r-4 border-b-4 rounded-xl w-[320px] md:w-[530px] h-auto p-4 md:p-8'>
          <h1 className='text-white text-[.9em] md:text-[1.5em]'>Fill The Form For More Details And All the Details Are Mendatory</h1>
          <form onSubmit={handleSubmit}>
          <div>
          
          <h1 className='text-[.8em] md:text-[1.3em] text-white' >Name*</h1>
          <div className='flex flex-col md:flex-row  justify-start gap-5'>
          <input id='firstname' name='firstname' onChange={handleChange} placeholder="First Name" className='rounded-[4px] w-[280px] md:w-[220px] bg-white p-2 placeholder-blue-700 font-semibold' type="text" />
          <input id='lastname' name='lastname'  onChange={handleChange} placeholder="Last Name" className='rounded-[4px] w-[280px] md:w-[220px] bg-white p-2 placeholder-blue-700 font-semibold' type="text" />
          </div>
          <h1 className='text-[.8em] md:text-[1.3em] text-white'>Email*</h1>
          <input name='email' id='email' placeholder="Email"  onChange={handleChange} className='rounded-[4px] w-[280px] md:w-[465px] bg-white p-2 placeholder-blue-700 font-semibold' type="email" />
          <h1 className='text-[.8em] md:text-[1.3em] text-white'>Contact*</h1>
          <input id='contact' name='contact' placeholder="Contact"  onChange={handleChange} className='rounded-[4px] w-[280px] md:w-[465px] bg-white p-2 placeholder-blue-700 font-semibold' type="text" />
          <h1 className='text-[.8em] md:text-[1.3em] text-white'>Comment Or Message</h1>
          <textarea id='message' name='message' placeholder="Write your feedback "  onChange={handleChange} className=' p-2 rounded-[4px] resize-none w-[280px] md:w-[465px] h-[120px] text-start placeholder-blue-700 font-semibold' type="Text" />
          <button type='submit' className='bg-white mt-2 p-3 w-28 text-blue-700 rounded-3xl font-semibold '>Submit</button>
          </div>
          {errors.length > 0 && (
            <div className="mt-4">
              {errors.map((error, index) => (
                <p key={index} className="text-red-700 flex items-center gap-1"><RxCrossCircled size={15} />{error}</p>
              ))}
            </div>
          )}
          {successMessage && (
            <div className="mt-4">
              <p className="text-green-700 flex items-center gap-2"><LiaCheckDoubleSolid size={15}/>{successMessage}</p>
            </div>
          )}
          </form>
        </div>



      </div>

    </div>
  )
}

export default Contact



