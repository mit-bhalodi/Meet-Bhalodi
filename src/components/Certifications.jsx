import React from 'react'
import { FaGoogle } from "react-icons/fa6";

const Certifications = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border'>
            <ol className="relative">
                <li>
                    <div className='flex flex-row justify-start gap-4'>
                        <FaGoogle size={60} className='mx-2' />
                        <div className='flex flex-col'>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Google UX Design Specialization</h3>
                            <p className="ext-base font-normal text-gray-500 dark:text-gray-400">I am part of the development and management of multiple project modules within a fast-paced, Agile environment, leveraging Angular 14 and 16 to build highly interactive scalable Angular projects.</p>
                            <a href="https://www.credly.com/badges/f8ae8b37-cfb1-40b7-b720-549a2316c55c/" target='_blank' className="w-36 inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Credentials<svg className="w-3 h-3 ms-2 rtl:rotate-180" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg></a>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default Certifications