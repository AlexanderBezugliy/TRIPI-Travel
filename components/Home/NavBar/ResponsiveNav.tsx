    'use client';
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";



const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);

    const handleNavShow = () => setShowNav(true);
    const handleCloseNav = () => setShowNav(false);

    return (
        <div>
            {/* DESCTOP_NAV */}
            <Nav openNav={handleNavShow} />
            {/* MOBILE_NAV */}
            <MobileNav showNav={showNav} closeNav={handleCloseNav} />
        </div>
    );
};

export default ResponsiveNav;
