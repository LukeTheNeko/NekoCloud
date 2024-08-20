"use client"

import { useState } from "react";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Minecraft from "@/components/Services/Minecraft";
import HostBr from "@/components/Plans/Host/HostBr";
import HostCad from "@/components/Plans/Host/HostCad";
import Image from "next/image";

export default function Page() {
    const [selectedHost, setSelectedHost] = useState<"br" | "cad">("br");

    return (
        <>
            <Header />
            <section>
                <Minecraft />
            </section>
            <section className="bg-slate-100">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <div className="font-semibold text-gray-800 text-center text-2xl xl:text-3xl md:text-2xl sm:text-lg p-2">
                        <span>Escolha a <span className="text-emerald-500">localização</span> desejada</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="relative z-20 flex flex-wrap justify-center items-center gap-3 mt-5">
                            <div
                                className={`flex flex-col md:flex-row items-center gap-3 ${selectedHost === "br" ? "bg-emerald-50 border border-emerald-500" : "bg-slate-50/30 hover:bg-slate-50 border border-transparent"} px-3 py-2 md:px-4 md:py-3 rounded-lg cursor-pointer w-[120px] md:w-[180px]`}
                                onClick={() => setSelectedHost("br")}
                            >
                                <Image src="/flags/brazil.svg" alt="brazil" width={24} height={24} />
                                <div className="flex flex-col text-center md:text-start">
                                    <h1 className="text-[12px] md:text-[14px] text-slate-800 font-medium">Brasil</h1>
                                    <p className="text-[10px] md:text-[12px] text-slate-600 flex items-center">
                                        <span className="mr-1">Ping</span>10~25ms
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`flex flex-col md:flex-row items-center gap-3 ${selectedHost === "cad" ? "bg-emerald-50 border border-emerald-500" : "bg-slate-50/30 hover:bg-slate-50 border border-transparent"} px-3 py-2 md:px-4 md:py-3 rounded-lg cursor-pointer w-[120px] md:w-[180px]`}
                                onClick={() => setSelectedHost("cad")}
                            >
                                <Image src="/flags/canada.svg" alt="canada" width={24} height={24} />
                                <div className="flex flex-col text-center md:text-start">
                                    <h1 className="text-[12px] md:text-[14px] text-slate-800 font-medium">Canada</h1>
                                    <p className="text-[10px] md:text-[12px] text-slate-600 flex items-center">
                                        <span className="mr-1">Ping</span>120~150ms
                                    </p>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {selectedHost === "br" && <HostBr />}
                        {selectedHost === "cad" && <HostCad />}
                    </div>
                </div>
            </section >
            <Faq />
            <Footer />
        </>
    );
}