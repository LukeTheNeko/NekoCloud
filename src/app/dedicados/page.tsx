"use client"

import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CloudBr from "@/components/Plans/Cloud/CloudBr";
import CloudCad from "@/components/Plans/Cloud/CloudCad";
import Cloud from "@/components/Services/Cloud";

import Image from "next/image";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { GrConfigure, GrSystem } from "react-icons/gr";

export default function Page() {
    const [selectedHost, setSelectedHost] = useState<"br" | "cad">("br");

    return (
        <>
            <Header />
            <section>
                <Cloud />
            </section>
            <section className="bg-slate-100">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <div className="font-semibold text-gray-800 text-center text-2xl xl:text-3xl md:text-2xl sm:text-lg p-2">
                        <span>Escolha uma <span className="text-emerald-500">localização</span></span>
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
                    <div className="p-5">
                        {selectedHost === "br" && <CloudBr />}
                        {selectedHost === "cad" && <CloudCad />}
                    </div>
                    <div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-100 p-6">
                <div className="bg-gradient-to-br from-teal-900 to-emerald-950 py-20 rounded-2xl">
                    <div className="max-w-[1250px] mx-6 md:mx-auto flex flex-col items-center">
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="text-white text-center text-4xl font-bold">Servidores Bare-Metal</h2>
                            <p className="text-white md:text-xl text-center max-w-2xl font-light opacity-80">
                                Nossos servidores oferecem o melhor desempenho para usuários avançados e grandes projetos.
                            </p>
                        </div>
                        <div className="w-full mt-20 flex flex-col gap-10 md:gap-0 md:flex-row">
                            <div className="flex flex-col items-center md:items-start gap-6 md:max-w-[33.3333%] p-4">
                                <div className="flex flex-col justify-center items-center">
                                    <GrSystem size={40} className="text-white md:size-10" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-2xl font-semibold text-white text-center md:text-start">
                                        Escolha seu S.O.
                                    </span>
                                    <span className="text-slate-200 font-light text-center md:text-start">
                                        Você pode usar qualquer sistema operacional que desejar com seu servidor, e nós fornecemos reinstalações gratuitas do sistema operacional.
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center md:items-start gap-6 w-full md:max-w-[33.3333%] p-4">
                                <div className="flex flex-col justify-center items-center">
                                    <FaCode size={40} className="text-white md:size-10" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-2xl font-semibold text-white text-center md:text-start">
                                        Acesso total ao root
                                    </span>
                                    <span className="text-slate-200 font-light text-center md:text-start">
                                        Com nossos servidores dedicados autogerenciados, você tem controle total da raiz do sistema operacional e do hardware.
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center md:items-start gap-6 w-full md:max-w-[33.3333%] p-4">
                                <div className="flex flex-col justify-center items-center">
                                    <GrConfigure size={40} className="text-white md:size-10" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-2xl font-semibold text-white text-center md:text-start">
                                        Configure seu servidor
                                    </span>
                                    <span className="text-slate-200 font-light text-center md:text-start">
                                        Precisa de algo diferente? Construímos servidores personalizados com o hardware que você deseja para atender a qualquer necessidade.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Faq />
            <Footer />
        </>
    );
}