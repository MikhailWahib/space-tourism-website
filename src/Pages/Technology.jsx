import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import lsImg1 from '../assets/technology/image-launch-vehicle-landscape.jpg'
import lsImg2 from '../assets/technology/image-spaceport-landscape.jpg'
import lsImg3 from '../assets/technology/image-space-capsule-landscape.jpg'
import ptImg1 from '../assets/technology/image-launch-vehicle-portrait.jpg'
import ptImg2 from '../assets/technology/image-spaceport-portrait.jpg'
import ptImg3 from '../assets/technology/image-space-capsule-portrait.jpg'

export default function Technology({ data }) {
    // Landscape images
    const lsImgs = [lsImg1, lsImg2, lsImg3];
    // Portrait images
    const ptImgs = [ptImg1, ptImg2, ptImg3];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [current, setCurrent] = useState(0);

    const handleClick = (i) => setCurrent(i);

    // Check screen width on change to display the suitable image
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });


    return (
        <motion.section
            className='technology p-x-0 lg:pr-0'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: .1 } }}
        >
            <div className=''>
                <h5 className="heading-5 text-white text-center md:text-start md:ml-20 lg:ml-16"><span className='font-bold opacity-25'>03</span> SPACE LAUNCH 101</h5>
                <div className="lg:flex lg:flex-row-reverse lg:justify-between">
                    <div className="w-screen my-10 md:mt-20 lg:w-fit lg:m-0 ">
                        {(windowWidth >= 1024 ? ptImgs : lsImgs).map((el, i) => {
                            return <motion.img
                                key={`image-${i}-${current}`}
                                src={el}
                                alt={data[current].name}
                                className={`w-full max-h-[500px] lg:h-[60vh] lg:w-[30vw] ${current === i ? 'block' : 'hidden'}`}

                                initial={{ opacity: .25 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: .5 }}
                            />
                        })}
                    </div>
                    <div className='lg:w-[50%] lg:flex lg:items-center lg:h-fit lg:my-auto lg:ml-14'>
                        <div className="tech-btns flex justify-center gap-x-6 md:my-16 lg:flex-col lg:my-0 lg:mr-10 lg:gap-y-10">
                            {data.map((btn, i) => {
                                return <button
                                    key={i}
                                    className={`tech-btn h-10 w-10 flex justify-center items-center border border-white/50 rounded-full text-white nav-number font-[400] md:h-14 md:w-14 lg:h-16 lg:w-16 lg:hover:border-white ${current === i && 'bg-white text-black border-black'}`}
                                    onClick={() => handleClick(i)}
                                >
                                    <span className=''>{i + 1}</span>
                                </button>
                            })}

                        </div>
                        <motion.div
                            key={`technology-${current}`}
                            className='mt-10 lg:text-start lg:my-auto lg:pt-5'

                            initial={{ opacity: .25 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: .5 }}
                        >
                            <p className='subheading-2 leading-3 text-[1rem] lg:text-[1.5rem]'>The termenology ...</p>
                            <h3 className="heading-3 text-[1.75rem] my-2 md:text-[2.5rem] lg:text-[3.5rem]">{data[current].name}</h3>
                            <p className="body-text text-[0.9375rem] px-5 h-46 md:text-[1rem] md:min-h-40 md:px-40 lg:w-[70%] lg:px-0 border">{data[current].description}</p>
                        </motion.div>
                    </div>
                </div>
            </div >
        </motion.section >
    )
}
