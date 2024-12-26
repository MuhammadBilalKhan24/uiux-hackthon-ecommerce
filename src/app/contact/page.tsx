import React from 'react';

export default function ContactUs() {
  return (
    <div>
        <img src="/0.png" alt="" />
    <div className="max-w-6xl mx-auto p-6 lg:p-12">
      <h2 className="text-3xl font-bold text-center mb-4">Get In Touch With Us</h2>
      <p className="text-center text-gray-600 mb-10">
        For More Information About Our Product & Services, Please Feel Free To Drop Us An Email.
        Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <span className="text-xl">📍</span>
            <div>
              <h4 className="font-bold">Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl">📞</span>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-xl">⏰</span>
            <div>
              <h4 className="font-bold">Working Time</h4>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Your name</label>
              <input
                id="name"
                type="text"
                placeholder="Abc"
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Abc@def.com"
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="This is an optional"
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Hi! I’d like to ask about"
                className="w-full mt-1 border rounded-md p-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-bold py-3 rounded-md hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <img src="/160.png" alt="" />
    </div>
  );
}
