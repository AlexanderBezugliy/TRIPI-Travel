    'use client';
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

import { useAuth, useUser, SignInButton, UserButton } from "@clerk/nextjs";


interface PropsNav { 
    openNav: () => void;
}
const Nav = ({ openNav }: PropsNav) => {
    const [navBg, setNavBg] = useState(false)

    const { isSignedIn } = useAuth(); 
    const { user } = useUser();

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        }

        window.addEventListener('scroll' , handler);

        return () => window.removeEventListener('scroll' , handler);
    }, [])

    return (
        <div className={`fixed w-full h-[12vh] z-[1000] transition-all duration-500
                        ${navBg ? "bg-blue-950 shadow-md" : "bg-transparent"}`}
        >
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* LOGO */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
                        <TbAirBalloon className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
                        Tripi
                    </h1>
                </div>

                {/* NAV_LINKS */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => {
                        return (
                            <Link key={link.id} href={link.url}>
                                <p
                                    className="relative text-white text-base font-medium w-fit 
                                                block after:block after:content-[''] after:absolute 
                                                after:h-[3px] after:bg-yellow-300 after:w-full 
                                                after:scale-x-0 after:hover:scale-x-100 after:transition 
                                                duration-300 after:origin-right"
                                >
                                    {link.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>

                {/* BUTTON */}
                <div className="flex items-center space-x-4">
                    <Link href="#contact" className="md:px-12 md:py-2.5 py-2 px-8 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                        Book Now
                    </Link>

                    {/* BURGER_MENU */}
                    <HiBars3BottomRight 
                        onClick={openNav}
                        className="w-8 h-8 cursor-pointer text-white lg:hidden" 
                    />
                </div>

                {/* КНОПКА ВОЙТИ */}
                {!isSignedIn ? (
                        <SignInButton mode="modal">
                            <button className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition">
                                Войти
                            </button>
                        </SignInButton>
                    ) : (
                        <div className="flex items-center gap-3">
                            <p className="text-white hidden md:block">{user?.firstName || "Гость"}</p>
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Nav;
