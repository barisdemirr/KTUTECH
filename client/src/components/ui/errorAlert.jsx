"use client";

import React from 'react';

const ErrorAlert = ({ error }) => {
    if (!error) return null;

    return (
        <div
            className="flex items-center gap-3 p-4 border border-red-200 bg-red-50 text-red-900 rounded-lg shadow-sm w-full max-w-4xl mx-auto my-4 transition-all duration-300 ease-in-out"
            role="alert"
        >
            <svg
                className="w-6 h-6 shrink-0 text-red-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>

            <span className="sr-only">Hata:</span>

            <div className="text-sm font-semibold wrap-break-word">
                {error}
            </div>
        </div>
    );
};

export default ErrorAlert;