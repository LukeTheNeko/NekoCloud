"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import "../../app/styles/global.scss";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string): boolean => pathname === path;

    return (
        <>
            <header className="bg-white shadow-md w-full z-50">
                <nav className="container mx-auto px-6 py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center p-2">
                            <a href="/" className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                                <h2 className="text-2xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-2xl sm:leading-none md:text-3xl">
                                    Neko
                                    <span className="font-bold text-emerald-500">Cloud</span>
                                </h2>
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-8 font-semibold">
                            <a
                                href="/"
                                className={`navbar-item ${isActive("/") ? "text-emerald-500" : "text-gray-800"
                                    } hover:text-emerald-500`}
                            >
                                Início
                            </a>
                            <a
                                href="/minecraft"
                                className={`navbar-item ${isActive("/minecraft") ? "text-emerald-500" : "text-gray-800"
                                    } hover:text-emerald-500`}
                            >
                                Minecraft
                            </a>
                            <a
                                href="/dedicados"
                                className={`navbar-item ${isActive("/dedicados") ? "text-emerald-500" : "text-gray-800"
                                    } hover:text-emerald-500`}
                            >
                                Dedicados
                            </a>
                            <a
                                href="/contato"
                                className={`navbar-item ${isActive("/contato") ? "text-emerald-500" : "text-gray-800"
                                    } hover:text-emerald-500`}
                            >
                                Contato
                            </a>
                            <a href="/login" className="btn-primary text-white px-4 py-2 rounded-md">
                                Área do Cliente
                            </a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="outline-none mobile-menu-button"
                            >
                                {!isOpen ? (
                                    <svg
                                        className="w-6 h-6 text-gray-500 hover:text-emerald-500"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6 text-gray-500 hover:text-emerald-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="md:hidden mt-3 font-semibold">
                            <a
                                href="/"
                                className={`block py-2 px-4 text-sm ${isActive("/") ? "bg-emerald-500 text-white" : "hover:bg-emerald-500 hover:text-white"
                                    } rounded transition duration-200`}
                            >
                                Início
                            </a>
                            <a
                                href="/minecraft"
                                className={`block py-2 px-4 text-sm ${isActive("/minecraft") ? "bg-emerald-500 text-white" : "hover:bg-emerald-500 hover:text-white"
                                    } rounded transition duration-200`}
                            >
                                Minecraft
                            </a>
                            <a
                                href="/dedicados"
                                className={`block py-2 px-4 text-sm ${isActive("/dedicados") ? "bg-emerald-500 text-white" : "hover:bg-emerald-500 hover:text-white"
                                    } rounded transition duration-200`}
                            >
                                Dedicados
                            </a>
                            <a
                                href="/contato"
                                className={`block py-2 px-4 text-sm ${isActive("/contato") ? "bg-emerald-500 text-white" : "hover:bg-emerald-500 hover:text-white"
                                    } rounded transition duration-200`}
                            >
                                Contato
                            </a>
                            <a href="/login" className="block py-2 px-4 text-sm bg-emerald-600 text-white rounded mt-2">
                                Área do Cliente
                            </a>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
}