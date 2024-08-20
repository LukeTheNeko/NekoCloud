import { FaCheck } from "react-icons/fa";

export default function CardHost(props: any) {
    return (
        <>
            <div className="m-5">
                <div className="flex flex-col rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 shadow-md">
                    <div className="flex flex-col">
                        <div className="p-6">
                            {props.versionr && (
                                <div className="bg-red-100 py-2 w-full text-center rounded-lg mb-5">
                                    <p className="text-[12px] md:text-[14px] text-red-700">{props.versionr}</p>
                                </div>
                            )}
                            {props.versiong && (
                                <div className="bg-green-200 py-2 w-full text-center rounded-lg mb-5">
                                    <p className="text-[12px] md:text-[14px] text-green-800">{props.versiong}</p>
                                </div>
                            )}
                            <h2 className="text-xl leading-6 font-bold text-center text-emerald-600 mt-2">{props.title}</h2>
                            <h2 className="text-3xl leading-6 font-bold text-center mt-5 text-slate-900">{props.gb}GB</h2>
                            <div className="mt-8">
                                <div className="flex flex-col justify-center items-center">
                                    <span className="text-xl font-semibold text-red-700 tracking-tighter">De <del>{props.oldprice}</del> por</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <span className="text-3xl font-bold text-slate-900 tracking-tighter">{props.price}</span>
                                    <span className="text-base font-medium text-slate-500">/mês</span>
                                </div>
                            </div>
                            <a href="/login"
                                className="mt-8 block w-full bg-emerald-500 hover:bg-green-700 rounded-md py-2 text-sm font-semibold text-white text-center">Comprar Plano</a>
                        </div>
                        <div className="pt-4 pb-8 px-6">
                            <ul role="list" className="mt-4 space-y-3">
                                <li className="flex justify-start items-center gap-3">
                                    <FaCheck size={15} color="#22c55e" />
                                    <span className="text-base text-slate-700">Ryzen 9 7950x</span>
                                </li>
                                <li className="flex justify-start items-center gap-3">
                                    <FaCheck size={15} color="#22c55e" />
                                    <span className="text-base text-slate-700">{props.gb} GB de Memória RAM</span>
                                </li>
                                <li className="flex justify-start items-center gap-3">
                                    <FaCheck size={15} color="#22c55e" />
                                    <span className="text-base text-slate-700">50 GB de Armazenamento</span>
                                </li>
                                <li className="flex justify-start items-center gap-3">
                                    <FaCheck size={15} color="#22c55e" />
                                    <span className="text-base text-slate-700">Proteção AntiDDoS</span>
                                </li>
                                <li className="flex justify-start items-center gap-3">
                                    <FaCheck size={15} color="#22c55e" />
                                    <span className="text-base text-slate-700">Sub-domínios incluso</span>
                                </li>
                                <li className="flex justify-start items-center gap-3">
                                    <FaCheck size={15} color="#22c55e" />
                                    <span className="text-base text-slate-700">Backups incluso</span>
                                </li>
                                <li className="flex justify-start items-center gap-3">
                                    <FaCheck size={15} color="#22c55e" />
                                    <span className="text-base text-slate-700">Suporte a java ou bedrock</span>
                                </li>
                                <li className="flex justify-start items-center gap-3">
                                    <FaCheck size={15} color="#22c55e" />
                                    <span className="text-base text-slate-700">Suporte a mods e plugins</span>
                                </li>
                                <li className="flex justify-start items-center gap-3">
                                    <FaCheck size={15} color="#22c55e" />
                                    <span className="text-base text-slate-700">Suporte a GeyserMC</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}