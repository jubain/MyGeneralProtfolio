import React from 'react';
import './topbar.css'

function Topbar({ menuOpen, setmenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <img alt="logo" src="/assets/logo.png" className="logo" />
                    {/* <a href='#intro' className='logo'>Me.</a> */}
                    <h1>House Build Solutions</h1>
                    {/* <div className='itemContainer'>
                        <PersonIcon className='icon' />
                        <span>07842583541</span>
                    </div>
                    <div className='itemContainer'>
                        <MailIcon className='icon' />
                        <span>jubeennp@outlook.com</span>
                    </div> */}
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setmenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;