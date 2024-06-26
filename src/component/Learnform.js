import React from 'react'

export default function Learnform() {
  return (
    <div>
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-14">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-5">Hiring for Tutors at</h2>
        <div className="flex items-center mb-5">
          {/* <img src="https://www.learnosphere.in/logo.png" alt="LearnOsphere Logo" className="h-16 mr-4"/> */}
          <div>
            <h3 className="text-2xl font-semibold">Learn<span className='text-orange-500 font-bold'>O</span>sphere.in</h3>
            <p className="text-gray-600">Best platform for educators</p>
          </div>
        </div>
        <p className="mb-5 text-gray-700">
          As a tutor on our platform, you’ll have the opportunity to share your knowledge, inspire students, and help them succeed academically. Whether you specialize in math, science, language arts, or any other subject, we welcome dedicated educators who are committed to fostering a supportive learning environment. Join us in shaping the future of education and make a difference in the lives of students today!
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">Fill the form now</h3>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">First Name *</label>
                  <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                  <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone no. *</label>
                <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Comment or Message</label>
                <textarea className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
              </div>
              <button type="submit" className="mt-3 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
