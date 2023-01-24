import React, { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import moonImg from '../assets/destination/image-moon.png'
import marsImg from '../assets/destination/image-mars.png'
import europaImg from '../assets/destination/image-europa.png'
import titanImg from '../assets/destination/image-titan.png'

export default function Destination({ data }) {

    const imgs = [moonImg, marsImg, europaImg, titanImg];

    const [current, setCurrent] = useState(0);

    const handleClick = (i) => setCurrent(i);

    return (
        <motion.section
            className='destination'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: .1 } }}
        >
            <div className='lg:px-12'>
                <h5 className="heading-5 text-white text-center md:text-start lg:w-fit"><span className='font-bold opacity-25'>01</span> Pick your destination</h5>
                <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
                    <div className="dest-img py-8 lg:w-fit">
                        {imgs.map((el, i) => {
                            return <motion.img
                                key={`image-${i}-${current}`}
                                src={el}
                                alt={data[current].name}
                                className={`min-h-[220px] min-w-[220px] max-h-[445px] max-w-[445px] h-[30vmax] mx-auto ${current === i ? 'block' : 'hidden'}`}

                                initial={{ opacity: .25 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: .5 }}
                            />
                        })}
                    </div>
                    <div className='lg:w-[42%]'>
                        <div className="dest-btns flex justify-center gap-x-6 md:my-5 lg:justify-start lg:gap-x-12">

                            {data.map((btn, i) => {
                                return <button
                                    key={i}
                                    className={`dest-btn ${current === i && 'active-btn'}`}
                                    onClick={() => handleClick(i)}
                                >
                                    {btn.name}
                                </button>
                            })}

                        </div>
                        <motion.div
                            key={`planet-${current}`}

                            initial={{ opacity: .25 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: .5 }}
                        >
                            <h3 className="heading-3 my-4 md:text-[5rem] md:my-5 lg:text-start lg:text-[6.25rem] lg:leading-tight">{data[current].name}</h3>
                            <p className="body-text h-32 text-[0.9375rem] mb-9 md:h-auto md:text-[1.125rem] lg:text-[.95rem] lg:text-start">{data[current].description}</p>
                            <hr className='opacity-25' />
                            <div className="mt-5 flex flex-col gap-y-5 md:flex-row md:justify-center md:gap-x-24 lg:gap-0 md:mt-10 lg:justify-start">
                                <div className=''>
                                    <p className="subheading-2">Avg. Distance</p>
                                    <p className="subheading-1">{data[current].distance}</p>
                                </div>
                                <div className='lg:w-[50%]'>
                                    <p className="subheading-2">Est. Travel Time</p>
                                    <p className="subheading-1">{data[current].travel}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div >
        </motion.section >
    )
}
