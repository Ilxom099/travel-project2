import React from "react";
import foto9 from "../package/assets/foto9.png";

const TipsArticles = () => {
    return (
        <div className="px-4 py-12 w-[90%] mx-auto">

            <div className="flex flex-wrap justify-between items-start mb-10">
                <div>
                    <h2 className="text-4xl font-bold">Tips & Article</h2>
                    <p className="text-gray-500 mt-2 max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                </div>
                <button className="mt-4 sm:mt-0 px-6 py-2 bg-black text-white" style={{ borderRadius: '150px' }}>View more</button>
            </div>

            
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col gap-6 flex-[0.5]">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Perfect | Tips</p>
                        <h3 className="text-xl font-semibold mb-2">
                            9 Popular Travel Destination on Sale in 2022
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Discover the best travel deals of the year with our curated list of 9 top destinations. From the sunny beaches of Thailand to the vibrant cities of Europe, these destinations offer unforgettable experiences at unbeatable prices. Plan your adventure now before the deals disappear!
                        </p>
                        <button className="px-4 py-2 bg-black text-white " style={{ borderRadius: '150px' }}>
                            Read More
                        </button>
                    </div>

                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Tips | Travel</p>
                        <h3 className="text-xl font-semibold mb-2">
                            How Are We Going to Travel in 2022
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            With changing travel norms and safety protocols, 2022 is reshaping how we explore the world. Learn how digital health passports, flexible booking policies, and sustainable travel options are influencing our journeys. Discover the trends and tips you need to travel smarter this year.
                        </p>
                        <button className="px-4 py-2 bg-black text-white " style={{ borderRadius: '150px' }}>
                            Read More
                        </button>
                    </div>
                </div>


                <div className="bg-white shadow-md rounded-lg overflow-hidden flex-[0.8]">
                    <img
                        src={foto9}
                        alt="Travel"
                        className="w-full h-98 object-cover"
                    />
                    <div className="p-6">
                        <p className="text-sm text-gray-500 mb-1">Stories | Tips</p>
                        <h3 className="text-xl font-semibold mb-2">
                            Travel Stories For Now and the Future
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Dive into heartwarming and adventurous travel stories from people around the world. From solo backpacking across continents to family road trips, these narratives offer inspiration and practical insights for future travelers looking to create meaningful experiences.
                        </p>
                        <button className="px-4 py-2 bg-black text-white" style={{ borderRadius: '150px' }}>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipsArticles;

