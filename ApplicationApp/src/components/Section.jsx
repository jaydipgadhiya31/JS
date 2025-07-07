import React from 'react'
import calender from "../assets/home-pic/calender.png"

function Section() {
    return (
        <div>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className='text-center'>
                        <h2 className="text-4xl font-semibold mb-2">
                            Schedule Of The Event
                        </h2>
                        <p className="text-blue-600 mb-10 relative inline-block">
                            <span className="border-t border-blue-400 w-16 inline-block align-middle mr-2"></span>
                            Event Schedule
                            <span className="border-t border-blue-400 w-16 inline-block align-middle ml-2"></span>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-52 flex flex-col gap-4">
                            <div className="flex items-center border border-[#647CDE] rounded-lg px-3 py-2 gap-4">
                                <img src={calender} alt="Calendar" width={20} />
                                <div className="flex flex-col">
                                    <div className="text-blue-600 font-medium text-sm">Day 1<sup>st</sup></div>
                                    <div className="font-semibold text-sm">28 September</div>
                                </div>
                            </div>

                            <div className="flex items-center border border-[#E6E6E6] rounded-lg px-3 py-2 gap-4">
                                <img src={calender} alt="Calendar" width={20} />
                                <div className="flex flex-col">
                                    <div className="text-blue-600 font-medium text-sm">Day 2<sup>nd</sup></div>
                                    <div className="font-semibold text-sm">29 September</div>
                                </div>
                            </div>

                            <div className="flex items-center  border border-[#E6E6E6] rounded-lg px-3 py-2 gap-4">
                                <img src={calender} alt="Calendar" width={20} />
                                <div className="flex flex-col">
                                    <div className="text-blue-600 font-medium text-sm">Day 3<sup>rd</sup></div>
                                    <div className="font-semibold text-sm">30 September</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-4">
                            <div className="bg-white shadow p-4 rounded-lg">
                                <p className="text-[#4567FF] text-xs mb-1 bg-[#4567FF0F] px-2 py-1 rounded inline p-3">10:00 AM – 11:00 AM</p>
                                <h3 className="font-semibold mb-1">Registration & Breakfast</h3>
                                <p className="text-sm text-gray-600">
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>

                            <div className="bg-white shadow p-4 rounded-lg">
                                <p className="text-[#4567FF] text-xs mb-1 bg-[#4567FF0F] px-2 py-1 rounded inline p-3">10:00 AM – 11:00 PM</p>
                                <h3 className="font-semibold mb-1">Registration & Breakfast</h3>
                                <p className="text-sm text-gray-600">
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Section
