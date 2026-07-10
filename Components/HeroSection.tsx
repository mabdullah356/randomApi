import React from 'react'

const HeroSection = () => {
    return (
        <main className="flex-1 flex flex-col justify-center items-center text-center py-20 px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
                Random API
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Random API is a free API that provides random data for developers.
            </p>
        </main>
    )
}

export default HeroSection