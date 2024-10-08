/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Logo = () => {
    const router = useRouter();
    return (
        <Image 
            alt="Logo" 
            className='hidden md:block cursor-pointer' 
            height="100"
            width="100" 
            src="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg"
        />
    )
}

export default Logo
