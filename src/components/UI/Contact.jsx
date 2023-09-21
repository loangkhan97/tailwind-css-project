
import React from 'react'

const Contact = () => {
  return <section id='contact' className='pb-16'>
    <div className="container">
      <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>
        Get in touch
      </h2>
      <div className="md:flex justify-between items-center">
        <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
        <iframe
        title='google-maps'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7768950105537!2d68.
        8160769761305!3d27.72417397617296!2m3!1f0!2f0!3f0!3m2!
        1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d5d08c5e775f%3A0x605f309fed533539!
        2sFasTech%20Systems%20(Private)%20Limited!5e0!3m2!1sen!2s!4v1695274815068!5m2!1sen!2s" 
        className='border-0 w-full h-full'
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8">
          <form className="w-full">
            <div className="mb-5">
              <input 
              type="text"
              placeholder='Enter your name'
              className="w-full p-3 focus:outline-none rounded-[5px]"
              />
              </div>
              <div className="mb-5">
              <input 
              type="email"
              placeholder='Enter your email'
              className="w-full p-3 focus:outline-none rounded-[5px]"
              />
              </div>
              <div className="mb-5">
              <input 
              type="text"
              placeholder='Subject'
              className="w-full p-3 focus:outline-none rounded-[5px]"
              />
            </div>
            <div className="mb-5">
             <textarea 
             type="text" 
             rows={3}
             placeholder='Write your message'
             className='w-full p-3 focus:outline-none rounded-[5px]'
             />
            </div>

            <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default Contact
