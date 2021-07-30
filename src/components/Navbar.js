import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = ({ toggle }) => {
  return (
    <nav className='flex justify-between' role='navigation'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={40} height={40} viewBox="0 0 64 64" style={{ fill: '#000000' }}><linearGradient id="O2FfTV~jmfJyRSSLbC5Cla_HBaR-srJq-eB_gr1" x1={32} x2={32} y1="11.352" y2="17.956" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#6dc7ff" /><stop offset={1} stopColor="#e6abff" /></linearGradient><path fill="url(#O2FfTV~jmfJyRSSLbC5Cla_HBaR-srJq-eB_gr1)" d="M36,11.5v7c0,0.276-0.224,0.5-0.5,0.5h-1c-0.276,0-0.5-0.224-0.5-0.5v-3.26l-1.17,1.741 c-0.396,0.59-1.264,0.59-1.66,0L30,15.24v3.26c0,0.276-0.224,0.5-0.5,0.5h-1c-0.276,0-0.5-0.224-0.5-0.5v-7 c0-0.276,0.224-0.5,0.5-0.5h1.231c0.168,0,0.324,0.084,0.417,0.224L32,14.024l1.852-2.799C33.944,11.084,34.101,11,34.269,11H35.5 C35.776,11,36,11.224,36,11.5z" /><linearGradient id="O2FfTV~jmfJyRSSLbC5Clb_HBaR-srJq-eB_gr2" x1="25.025" x2="25.025" y1="36.969" y2="42.002" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#6dc7ff" /><stop offset={1} stopColor="#e6abff" /></linearGradient><path fill="url(#O2FfTV~jmfJyRSSLbC5Clb_HBaR-srJq-eB_gr2)" d="M25.025,37c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S26.682,37,25.025,37z" /><linearGradient id="O2FfTV~jmfJyRSSLbC5Clc_HBaR-srJq-eB_gr3" x1="38.975" x2="38.975" y1="36.969" y2="42.002" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#6dc7ff" /><stop offset={1} stopColor="#e6abff" /></linearGradient><path fill="url(#O2FfTV~jmfJyRSSLbC5Clc_HBaR-srJq-eB_gr3)" d="M38.975,37c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.657,0,3-1.343,3-3S40.632,37,38.975,37z" /><g><linearGradient id="O2FfTV~jmfJyRSSLbC5Cld" x1={32} x2={32} y1="6.852" y2="57.409" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#1a6dff" /><stop offset={1} stopColor="#c822ff" /></linearGradient><path fill="url(#undefined)" d="M51.893,35.747C52.575,35.029,53,34.065,53,33v-6c0-11.58-9.42-21-21-21 c-5.61,0-10.884,2.185-14.85,6.152C13.184,16.118,11,21.391,11,26.999c0,0,0,0.001,0,0.001v6c0,1.065,0.425,2.029,1.107,2.747 C10.257,36.77,9,38.74,9,41c0,3.309,2.691,6,6,6h0.417C18.153,53.458,24.556,58,32,58s13.847-4.542,16.583-11H49 c3.309,0,6-2.691,6-6C55,38.74,53.743,36.77,51.893,35.747z M18.564,13.566C22.153,9.977,26.924,8,32,8c10.477,0,19,8.523,19,19 c0,0.125-0.015,0.246-0.037,0.365C46.22,23.944,39.395,22,32,22c-7.395,0-14.22,1.944-18.963,5.364 C13.015,27.247,13,27.126,13,27.002C13,21.927,14.975,17.155,18.564,13.566z M49.642,28.885C49.439,28.954,49.226,29,49,29h-1H15 c0,0-0.001,0-0.001,0s-0.001,0-0.001,0c-0.225,0-0.438-0.046-0.64-0.115C18.726,25.811,25.201,24,32,24 C38.8,24,45.274,25.811,49.642,28.885z M11,41c0-1.858,1.28-3.411,3-3.858V40c0,1.726,0.258,3.39,0.714,4.971 C12.644,44.821,11,43.108,11,41z M15,35c-1.103,0-2-0.897-2-2v-2.556C13.59,30.788,14.267,31,14.998,31H15h2v2 C17,34.103,16.103,35,15,35z M48,40c0,8.822-7.178,16-16,16s-16-7.178-16-16v-3.142c1.72-0.447,3-2,3-3.858v-2h26v2 c0,1.858,1.28,3.411,3,3.858V40z M47,33v-2h1h1c0.732,0,1.409-0.212,2-0.556V33c0,1.103-0.897,2-2,2S47,34.103,47,33z M49.286,44.971C49.742,43.39,50,41.726,50,40v-2.858c1.72,0.447,3,2,3,3.858C53,43.108,51.356,44.821,49.286,44.971z" /><linearGradient id="O2FfTV~jmfJyRSSLbC5Cle" x1={39} x2={39} y1="6.852" y2="57.409" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#1a6dff" /><stop offset={1} stopColor="#c822ff" /></linearGradient><rect width={6} height={2} x={36} y={33} fill="url(#undefined)" /><linearGradient id="O2FfTV~jmfJyRSSLbC5Clf" x1={25} x2={25} y1="6.852" y2="57.409" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#1a6dff" /><stop offset={1} stopColor="#c822ff" /></linearGradient><rect width={6} height={2} x={22} y={33} fill="url(#undefined)" /><linearGradient id="O2FfTV~jmfJyRSSLbC5Clg" x1={32} x2={32} y1="6.852" y2="57.409" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#1a6dff" /><stop offset={1} stopColor="#c822ff" /></linearGradient><path fill="url(#undefined)" d="M32,39c-3.309,0-6,2.243-6,5s2.691,5,6,5s6-2.243,6-5S35.309,39,32,39z M32,47 c-2.206,0-4-1.346-4-3s1.794-3,4-3s4,1.346,4,3S34.206,47,32,47z" /></g><linearGradient id="O2FfTV~jmfJyRSSLbC5Clh_HBaR-srJq-eB_gr4" x1={32} x2={32} y1="45.394" y2="51.874" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#6dc7ff" /><stop offset={1} stopColor="#e6abff" /></linearGradient><path fill="url(#O2FfTV~jmfJyRSSLbC5Clh_HBaR-srJq-eB_gr4)" d="M45.343,45h-7.464c-0.242,0.988-0.835,1.87-1.664,2.553c-0.254,0.209-0.534,0.397-0.829,0.567	c-0.023,0.013-0.045,0.029-0.068,0.042C34.366,48.69,33.226,49,32,49c-1.548,0-2.955-0.497-4.02-1.302	c-0.929-0.701-1.599-1.637-1.859-2.698h-7.464C17.19,45,16,46.19,16,47.657C16,49.503,17.497,51,19.343,51h0.131	c0.953,0,1.808-0.404,2.417-1.043C22.467,51.161,23.687,52,25.112,52c1.202,0,2.26-0.598,2.91-1.507	C28.326,52.476,30.024,54,32.092,54c2,0,3.667-1.421,4.049-3.308C36.798,51.484,37.778,52,38.888,52	c1.425,0,2.645-0.839,3.222-2.043C42.719,50.596,43.573,51,44.527,51h0.131C46.503,51,48,49.503,48,47.657	C48,46.19,46.81,45,45.343,45z" /></svg>
      <h1 className='md:block hidden pt-2 pb-2 pr-2 items-center font-sans'>
        <Link to="/" className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-pink-400 to-red-600'>
          Kenneth Harris
        </Link>
        <Link to="/Projects" className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-green-400 to-blue-500'>
          Projects
        </Link>
        <Link to="/Resume" className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br via-indigo-500 from-white to-black'>
          Resume
        </Link>
        <Link to='/Contact' className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-green-700 to-red-600'>
          CONTACT ME
        </Link>
        <Link to="/Support" className='px-4 text-base font-nav bg-clip-text hover:text-transparent bg-gradient-to-br from-green-700 to-red-600'>
          Support the Homies!
        </Link>
      </h1>

      <div className="px-4 cursor-wait md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"><path
            fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd" /></svg>
      </div>
    </nav>
  )
};

export default Navbar
