import React from 'react'
import Bill from '../assets/bill.png'
import library from '../assets/library.png'
import instrument from '../assets/instrument.png'
import todo from '../assets/todo.png'
import pood from '../assets/pood.png'
import noormeister from '../assets/noormeister.png'
import ametikool from '../assets/ametikool.png'
import blocks from '../assets/blocks.png'
import filler from '../assets/filler.png'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projektid</p>
                    <p className='py-6'>// Vaadake mõnda minu hiljutist tööd</p>
                </div>

                {/* grid container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    
                    {/* grid item */}
                    <div style={{backgroundImage: `url(${Bill})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover fx */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Bill Gates portfoolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://tak20kallas.itmajakas.ee/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/AlexVermil/Tiim6.git" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid item 2*/}
                    <div style={{backgroundImage: `url(${instrument})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover fx */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Virtuaalne instrument
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>No demo :(</button>
                                </a>
                                <a href="https://github.com/FluffyQuake/Team4.git" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid item 3 */}
                    <div style={{backgroundImage: `url(${todo})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover fx */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white text-center flex tracking-wider'>
                                Local php practitioner / task site
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/FluffyQuake/tak-21-practitioner" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid item 4*/}
                    <div style={{backgroundImage: `url(${library})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover fx */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Local php bookstore
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/FluffyQuake/php-kaust" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid item 5 */}
                    <div style={{backgroundImage: `url(${noormeister})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover fx */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Noormeister 2022
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Tallinna-Polutehnikum/nm2022-meeskond8" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid item 6*/}
                    <div style={{backgroundImage: `url(${pood})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover fx */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Laravel e-pood
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/lebra2/laravel-projekt" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid item 7*/}
                    <div style={{backgroundImage: `url(${ametikool})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover fx */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Ametikooli portfoolio
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://fluffyquake.github.io/Tiim4-veebisait/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/FluffyQuake/Tiim4-veebisait" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid item 8*/}
                    <div style={{backgroundImage: `url(${blocks})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover fx */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Webflow veebileht
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://kaspari-kohviubade-pood.webflow.io/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects