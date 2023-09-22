import React from 'react'
import frontendImg from "../../assets/images/front-end.png"
import backendImg from "../../assets/images/backend.png"
import uiImg from "../../assets/images/design.png"
import appsImg from "../../assets/images/apps.png"

const Services = () => {
  return (
    <section id='services'>
        <div className="container lg:pt-5">
            <div className="text-center">
                <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">What do I help</h2>
                <p className="text-headingColor font-[500] text-[16px] lg:max-w-[600px] lg:mx-auto  leading-7">
                    Here, I can highlight how can I contribute as a software engineer. I assist in creating innovative and efficient 
                    software solutions that meet specific business needs. My expertise includes designing, developing, and maintaining
                    software applications, ensuring they are reliable, and user-friendly. I collaborate with cross-functional teams to deliver
                    high quality products on time and within budget, ultimately helping organizations achieve their technological goals and stay competitive 
                    in the ever-evolving digital landscape. My expertise and services listed below:

                    </p>
            </div>

            <div className="flex flex-col justify-center sm:py-12">
                <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        {/*====================vertical line running through the middle ============ */}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2">

                        </div>

                        {/*=============Left card =========== */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right" data-aos-duration="1200" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">Frontend Developer</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>I have developed many projects and design templates using different technologies and tools like ReactJS, NextJS, PHP Laravel and Tailwind.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={frontendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                         {/*=============Right card =========== */}
                         <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1300" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">Backend Developer</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>I have worked as Backend Developer and build projects using NodeJS, Express, Laravel and Databases like MongoDB, MySql.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={backendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                         {/*=============Left card =========== */}
                         <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1300" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">UI/UX Designer</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>I have build many designs and templates using Figma, Canva, Illustrator, and Photoshop.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={uiImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>

                         {/*=============Right card =========== */}
                         <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row">

                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500" className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">Apps Development</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>I have little bit worked on android app development and build 5+ android applications .</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={appsImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
