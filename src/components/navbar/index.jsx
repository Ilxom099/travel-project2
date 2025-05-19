import React from 'react';
import {Link} from "react-router-dom";
import '../../pages/home/stayle.css'

function Index() {
    return (
        <div className={'nav'}>
            <img className={'h-18'} src="../../../public/logo1%201.png" alt=""/>
            <Link className={'link'} to={'/'}>Home</Link>
            <Link className={'link'} to={'/about'}>About Us</Link>
            <Link className={'link'} to={'/package'}>Package</Link>
            <Link className={'link'} to={'/'}>Destination</Link>
            <Link className={'link'} to={'/singlePackage'}>Blog</Link>
            <Link className={'link'} to={'/contact'}>Contact</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white"
                 viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </div>
    );
}

export default Index;