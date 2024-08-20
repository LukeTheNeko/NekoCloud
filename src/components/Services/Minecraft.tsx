export default function Minecraft() {
    return (
        <>
            <section className="bg-slate-100">
                <div className="p-10 bg-slate-100">
                    <div className="flex items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                        <div className="text-left">
                            <span className="text-xl rounded-full text-green-500">Hospedagem Minecraft</span>
                            <p className="max-w-md mx-auto mt-2 text-base  text-gray-500 sm:text-lg md:mt-5 md:text-2xl md:max-w-3xl">
                            </p>
                            <p className="max-w-md mx-auto mt-2 font-semibold text-3xl text-gray-500 sm:text-lg md:mt-5 md:text-4xl md:max-w-4xl">
                                A melhor hospedagem de Java e Bedrock
                            </p>
                            <p className="max-w-md mx-auto mt-2 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                O melhor serviço ao seu alcance! Descubra tudo o que há de mais inovador e eficiente com a NekoCloud.
                            </p>
                            <div className="mt-5 sm:flex md:mt-8">
                            </div>
                            <div className="relative flex group cursor-pointer">
                                <div className="flex justify-center items-center bg-emerald-500 rounded-l-lg py-3 px-4">
                                    <p className="text-[12px] md:text-[14px] text-white">IP:</p>
                                </div>
                                <div className="flex items-center gap-[14px] py-3 px-5 bg-transparent group-hover:bg-blue-100 border-2 border-emerald-500 rounded-r-lg transition-colors duration-300 ease-in-out">
                                    <p className="text-[12px] md:text-[14px] text-emerald-500">brasil.nekocloud.com</p>
                                    <div className="bg-emerald-500 py-1 px-3 rounded-full"><p className="text-[10px] md:text-[12px] text-white">
                                        1.8x até 1.21
                                    </p>
                                    </div>
                                </div>
                                <span className="absolute top-16 left-32 scale-0 transition-all rounded bg-emerald-500 p-2 text-xs text-white group-hover:scale-100">
                                    Clique para copiar o IP!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}