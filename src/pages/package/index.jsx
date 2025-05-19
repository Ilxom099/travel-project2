import React from 'react';
import './index.css';
import foto1 from '../package/assets/foto1.png';
import Travel from '../package/Travel';
import foto8 from '../package/assets/foto8.png';
import TipsArticles from './TipsArticles';


const Index = () => {
    return (
        <div>
            <div
                className="relative h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${foto1})` }}
            >
                <div className="absolute inset-0 bg-opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-7xl md:text-7xl font-black drop-shadow-lg mb-4">
                        Travel Packages
                    </h1>
                    <p className="text-sm md:text-base">Home &gt; Package</p>
                </div>
            </div>
            <div className="text  w-full  md:px-8 mt-20 py-4 flex justify-between items-center" style={{ padding: '0px 50px' }}>
                <div>
                    <h1 className="text-[60px] font-black text-gray-800" style={{ fontSize: '55px', fontWeight: 600 }}>
                        Popular Destination
                    </h1>
                    <p style={{ width: '52%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
                <button className="btn bg-black text-white px-5 py-2 hover:bg-gray-900 transition rounded-3xl">
                    Discover more
                </button>
            </div>
            <Travel />
            <div className="mt-16">
                <img src={foto8} alt="" className="h-auto sm:h-[500px] w-full object-cover" />
            </div>
            <TipsArticles/>
        </div>
    );
};

export default Index;
