import React from 'react'
import { motion } from 'framer-motion'

export default function Technology() {
    return (
        <motion.section
            className='technology'

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: .1 } }}
        >
            Technology
        </motion.section>
    )
}
