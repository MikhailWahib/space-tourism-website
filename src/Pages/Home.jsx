import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <motion.main
            className='home text-white'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: .1 } }}
        >
            <div className="relative text-center mt-[15vh] md:h-[80%] md:flex md:flex-col md:justify-around lg:text-start lg:flex lg:flex-row lg:justify-around lg:items-center lg:gap-x-32">
                <div className="text lg:w-[40%]">
                    <h5 className='heading-5'>so, tou want to travel to</h5>
                    <h1 className='heading-1 text-[6rem] sm:text-[9.325rem]'>space</h1>
                    <p className="body-text text-[0.9375rem] sm:px-24 md:text-[1.125rem] lg:px-0 lg:text-[1.125rem]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="main-btn">
                    <Link to='/destination'>
                        <button className='heading-4-dark relative text-[1.5rem] mt-12 bg-white h-[20vmax] w-[20vmax] min-h-[9.375rem] min-w-[9.375rem] max-h-[16rem] max-w-[16rem] rounded-full md:text-[2rem]'>Explore</button>
                    </Link>
                </div>
            </div>
        </motion.main>
    )
}
