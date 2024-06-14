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

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line className="text-7xl text-red-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Line className="text-7xl text-blue-700"/>
            </div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className="text-7xl text-cyan-400"/>
            </div> */}
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl text-yellow-500"/>
            </div>
            {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaLine className="text-7xl text-cyan-400"/>
            </div> */}
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiFlutterLine className="text-7xl text-sky-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoPython className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-orange-500"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies