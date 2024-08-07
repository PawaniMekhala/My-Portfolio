import aboutImg from "../assets/about.jpg"
import {MY_JOURNEY} from "../constants"
import { motion } from "framer-motion"

const Journey = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">My <span className="text-neutral-500">Journey</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
           whileInView={{opacity: 1, x: 0}} 
           initial={{opacity: 0, x: -100}} 
           transition={{duration: 0.5}} 
           className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
          <img className="rounded-2xl" src={aboutImg} alt="journey"/>
        </div>
        </motion.div>
        <motion.div 
           whileInView={{opacity: 1, x: 0}} 
           initial={{opacity: 0, x: 100}}
           transition={{duration: 0.5}} 
           className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-6">{MY_JOURNEY}</p>
        </div>
        <motion.div 
           whileInView={{opacity: 1, x: 0}} 
           initial={{opacity: 0, x: 100}}
           transition={{duration: 1}}  
           className="flex justify-center lg:justify-start">
          <a 
            href="https://drive.google.com/file/d/1NZAsaaWAXtHDrvTqhoYQ5asE1WcgqobP/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-5 inline-block rounded-lg border border-blue-500 px-5 py-3 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent hover:bg-blue-500 hover:text-white"
          >
            Resume
          </a>
        </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Journey