import { Figma, Scaling, Target, UserSearch } from 'lucide-react'
import React from 'react'

const ServicesCard = () => {
    return (
        <div className='container mx-auto py-3 '>
        <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-x-10 gap-y-10 lg:gap-y-16  cursor-pointer mt-10'>
            <div className="relative flex flex-col text-gray-700 items-center bg-white shadow-md bg-clip-border rounded-xl  hover:bg-[#f8f9ff]">
                <span className='text-lg pt-10'><UserSearch size='50' /></span>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-xl sm:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        User Experience Research
                    </h4>
                    <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        CEO / Co-Founder
                    </p>
                </div>

            </div>


            <div className="relative flex flex-col items-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  hover:bg-[#f8f9ff] ">
                <span className='pt-10'><Scaling size='50' /></span>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-xl sm:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Responsive Design
                    </h4>
                    <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        CEO / Co-Founder
                    </p>
                </div>

            </div>


            <div className="relative flex flex-col items-center text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  hover:bg-[#f8f9ff] ">
                <span className='pt-10'><Figma size='50' /></span>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-xl sm:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Wireframing and Prototyping


                    </h4>
                    <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        CEO / Co-Founder
                    </p>
                </div>

            </div>


            <div className="relative items-center flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  hover:bg-[#f8f9ff] ">
                <span className='pt-10'><Target size='50' /></span>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-xl sm:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Product Design and Development
                    </h4>
                    <p
                        className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        CEO / Co-Founder
                    </p>
                </div>

            </div>
        </div>
        </div>
    )
}

export default ServicesCard