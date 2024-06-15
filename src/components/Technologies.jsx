import { RiReactjsLine } from "react-icons/ri"
import { RiHtml5Line } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { IoLogoPython } from "react-icons/io5";
import { RiFlutterLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { RiCss3Line } from "react-icons/ri";
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: { 
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
           whileInView={{opacity: 1, y: 0}}
           initial={{opacity: 0, y: -100}}
           transition={{duration: 1.5}}
           className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
           className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
               variants={iconVariants(3)}
               initial="initial"
               animate="animate" 
               className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Line className="text-7xl text-blue-700"/>
            </motion.div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className="text-7xl text-cyan-400"/>
            </div> */}
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl text-yellow-500"/>
            </motion.div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaLine className="text-7xl text-cyan-400"/>
            </div> */}
            <motion.div 
               variants={iconVariants(2)}
               initial="initial"
               animate="animate" 
               className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiFlutterLine className="text-7xl text-sky-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoPython className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
               variants={iconVariants(5.5)}
               initial="initial"
               animate="animate" 
               className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-orange-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies