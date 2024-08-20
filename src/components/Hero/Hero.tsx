"use client"

import Image from "next/image"

export default function Hero() {
    return (
        <>
            <div className="bg-slate-100">
                <div className="flex items-center justify-center">
                    <div className="relative flex flex-col items-center justify-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 m-4">
                        <div className="flex items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                            <div className="text-left">
                                <span className="text-xl font-semibold rounded-full text-green-500">Hospedagem Minecraft</span>
                                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                                    Neko
                                    <span className="font-bold text-emerald-500">Cloud</span>
                                </h2>
                                <p className="max-w-md mx-auto mt-2 text-base font-bold text-gray-500 sm:text-lg md:mt-5 md:text-2xl md:max-w-3xl">
                                    Hospedagem de Servidores Minecraft: Rápida, Confiável e Econômica
                                </p>
                                <p className="max-w-md mx-auto mt-2 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    Encontre a solução perfeita com custo-benefício Não perca tempo, confira agora mesmo.
                                </p>
                                <div className="mt-5 sm:flex md:mt-8">
                                    <div className="rounded-2xl shadow"><a href="/minecraft"
                                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-emerald-500 border border-transparent rounded-2xl hover:bg-lime-700 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                        Ver planos
                                    </a></div>
                                    <div className="mt-2 rounded-3xl shadow sm:mt-0 sm:ml-3">
                                        <a href="/register"
                                            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-green-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-2xl hover:text-teal-700 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                            Criar uma conta
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                            <div className="relative w-full p-4 md:p-8">
                                <div className=" bg-white text-black w-full hidden md:block rounded-3xl">
                                    <Image src="/banners/2qcj9c0ob7oc1.png" width={400} height={400} alt="mine" className="rounded-2xl w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}