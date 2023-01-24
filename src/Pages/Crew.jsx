import React, { useState } from 'react'
import { motion } from 'framer-motion'
import img1 from '../assets/crew/image-douglas-hurley.png'
import img2 from '../assets/crew/image-mark-shuttleworth.png'
import img3 from '../assets/crew/image-victor-glover.png'
import img4 from '../assets/crew/image-anousheh-ansari.png'

export default function Crew({ data }) {

    const imgs = [img1, img2, img3, img4];

    const [current, setCurrent] = useState(0);

    const handleClick = (i) => setCurrent(i);

    return (
        <motion.section
            className='crew'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: .1 } }}
        >

            <div className='lg:px-20'>
                <h5 className="heading-5 text-white text-center md:text-start md:mb-8"><span className='font-bold opacity-25'>01</span> Meet your crew</h5>
                <div className="relative flex flex-col md:flex-col-reverse md:justify-between lg:flex-row-reverse lg:text-start">
                    <div className="crew-img py-8 min-h-[222px] max-h-[720px] h-[50vh] mx-auto md:h-[55vh] md:pb-0">
                        {imgs.map((el, i) => {
                            return <motion.img
                                key={`image-${i}-${current}`}
                                src={el}
                                alt={data[current].name}
                                className={`h-full w-full ${current === i ? 'block' : 'hidden'}`}

                                initial={{ opacity: .25 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: .5 }}
                            />
                        })}
                        <hr className='opacity-25 ' />
                    </div>
                    <div className="crew-btns flex justify-center gap-x-3 mb-5 lg:absolute lg:bottom-0 lg:left-0">
                        {data.map((el, i) => {
                            return <button
                                key={i}
                                onClick={() => handleClick(i)}
                                className={`h-[0.625rem] w-[0.625rem] bg-white rounded-full ${current === i ? 'opacity-100' : 'opacity-25'}`}
                            ></button>
                        })}
                    </div>
                    <div className='lg:w-[42%]'>
                        <motion.div
                            key={`planet-${current}`}

                            initial={{ opacity: .25 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: .5 }}
                        >
                            <p className='subheading-1 text-[1rem] opacity-50'>{data[current].role}</p>
                            <p className="subheading-1 text-[1.5rem]">{data[current].name}</p>
                            <p className="body-text h-32 text-[0.9375rem] mt-4 md:text-[1.125rem] lg:text-[1.125rem] lg:text-start">{data[current].bio}</p>
                            <div className="mt-5 flex flex-col gap-y-5 md:flex-row md:justify-center md:gap-x-24 md:mt-10 lg:justify-start">
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div >

        </motion.section>
    )
}
