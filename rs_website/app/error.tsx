"use client";

import Link from "next/link";

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                Oops!
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Something went wrong.   
            </h2>
            <p className="text-lg text-gray-500 mb-8">
                The page you're looking for doesn't exist or an unexpected error occurred.
            </p>

            <Link           
                href="/"
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
                Back to Home    
            </Link>
        </div>
    );
}