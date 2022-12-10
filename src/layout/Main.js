import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';

const Main = () => {
    const [scroll, setScroll] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setScroll(true);
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeBackground();
        window.addEventListener('scroll', changeBackground)
    }, []);

    return (
        <div className='min-h-screen w-[90%] lg:w-[80%] mx-auto'>
            <div className={`sticky top-0 z-50 ${scroll && "bg-black"}`}>
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default Main;