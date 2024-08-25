import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaFacebook, FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='mb-10 flex items-center justify-between py-4'>
        {/* <div className='flex flex-shrink-0 items-center'>
            <img className='mx-3 w-12' src={logo} alt='logo' />
        </div> */}
        <div className='m-4 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/pawani-mekhala/" target="_blank" rel="pawani-mekhala">
          <FaLinkedin/></a>
          <a href="https://github.com/PawaniMekhala" target="_blank" rel="pawani-mekhala">
          <FaGithub/></a>
          <a href="https://www.hackerrank.com/profile/pgpmekhala" target="_blank" rel="pawani-mekhala">
          <FaHackerrank/></a>
          {/* <a href="www.linkedin.com/in/pawani-mekhala" target="_blank" rel="pawani-mekhala">
          <FaFacebook/></a> */}
        </div>
    </nav>
  )
}

export default Navbar