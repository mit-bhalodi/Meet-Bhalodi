import React from 'react'

const Experiances = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-700 p-12 rounded-lg border'>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Searce India Pvt Ltd <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-100">Software Engineer</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I am part of the development and management of multiple project modules within a fast-paced, Agile environment, leveraging Angular 14 and 16 to build highly interactive scalable Angular projects.</p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Championed innovative solutions, leading the creation of a scalable mono-repo architecture using NX workspace to efficiently manage multiple interconnected apps.</p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Analysed and implemented the upgrade of an internal project from Angular 14 to Angular 16 including Angular Material custom CSS framework changes.</p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Developed robust authentication flow in Angular utilising Firebase-auth and JWT-auth for seamless integration with the backend system.</p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Analysed security measures to prevent data theft, Encrypted the request data with base64 encoder in HTTP Interceptor before transmitting requests to the backend server.</p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Implemented data visualisation and user understanding of organisational hierarchy through custom integrations of the D3.js library</p>
                </li>
            </ol>
        </div>
    )
}

export default Experiances