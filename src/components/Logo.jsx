import React from 'react';
import Afrivalogo from "../assets/Afriva-logoo.png";

export default function Logo({ alt = "Afriva Logo" }) {
    return (
        <img
            className="w-full max-w-[161px] max-h-[59px] mb-[52px]"
            src={Afrivalogo}
            alt={alt}
            
        />
    );
}