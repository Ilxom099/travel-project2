import React from 'react';
import { StarFilled } from '@ant-design/icons';
import './Search.css';
import foto2 from '../package/assets/foto2.png';
import foto3 from '../package/assets/foto3.png';
import foto4 from '../package/assets/foto4.png';
import foto5 from '../package/assets/foto5.png';
import foto6 from '../package/assets/foto6.png';
import foto7 from '../package/assets/foto7.png';

const Travel = () => {
    const houses = [
        {
            title: 'Paris',
            price: '$299.00/2days',
            image: foto2,
            description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore',
        },
        {
            title: 'Swiss',
            price: '$259.00/2days',
            image: foto3,
            description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore',
        },
        {
            title: 'Thailand',
            price: '$350.00/3days',
            image: foto4,
            description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore',
        },
        {
            title: 'Taiwan',
            price: '$359.99/3days',
            image: foto5,
            description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore',
        },
        {
            title: 'Indonesia',
            price: '$269.00/3days',
            image: foto6,
            description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore',
        },
        {
            title: 'Singapore',
            price: '$302.00/3days',
            image: foto7,
            description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore',
        },
    ];

    return (
        <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {houses.map((house, index) => (
                    <div
                        key={index}
                        className="bg-white border border-black rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full max-w-md h-[630px] sm:h-[550px] shadow"
                    >
                        <img src={house.image} alt={house.title} className="w-full h-72 object-cover" />
                        <div className="p-6 flex flex-col justify-between h-[200px]">
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-xl font-semibold">{house.title}</h3>
                                    <span className="text-base text-gray-700">{house.price}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{house.description}</p>
                            </div>

                            <div className="flex justify-between items-center mt-4 gap-10">
                                <div className="flex text-yellow-500 text-lg">
                                    {[...Array(5)].map((_, i) => (
                                        <StarFilled key={i} />
                                    ))}
                                </div>
                                <button
                                    onClick={() => window.open('https://inapptravel.uz/?utm_source=google&utm_medium=cpc&utm_campaign=g&utm_content=731463510194&utm_term=%D1%82%D1%83%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE&gad_source=1&gad_campaignid=22190344759&gbraid=0AAAAA-xAfpDefTzW_8NcaSw9eqevsLHXt&gclid=Cj0KCQjwiqbBBhCAARIsAJSfZkaatoZSPMjcOZkVMK-JoTJ84zyQMQy7gAC3FhGVB_cc_dzRF9CkpUYaAiY4EALw_wcB', '_blank')}
                                    className="btn bg-black text-white px-4 py-2  hover:bg-gray-800 transition"
                                >
                                    Book
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Travel;
