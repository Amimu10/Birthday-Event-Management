import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const errorMessage = 'An unexpected error occurred.';
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-semibold text-red-500">Error</h1>
            <p className="text-lg text-gray-700 my-4">{errorMessage}</p>
            <Link to="/" className="text-blue-500  hover:text-blue-700">
                Go back to home
            </Link>
        </div>
    );
};

export default ErrorPage;
