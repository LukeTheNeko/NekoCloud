import CountUp from 'react-countup';

export default function ShowCase() {
    return (
        <>
            <section className="bg-slate-100 px-4">
                <div className="mx-auto max-w-7xl px-4 rounded-2xl bg-gradient-to-br from-teal-900 to-emerald-950 w-full py-[56px] md:py-[80px]">
                    <ul className="w-[80%] max-w-[1000px] mx-auto flex flex-col items-center md:flex-row gap-8 md:gap-0  md:justify-between">
                        <li className="flex flex-col gap-1">
                            <h3 className="uppercase font-medium text-emerald-400 text-center md:text-start">
                                Clientes
                            </h3>
                            <span className="text-slate-100 text-3xl font-bold text-primary text-center md:text-start">
                                <CountUp start={0} end={60000} duration={0.5} separator="." suffix="+" />
                            </span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <h3 className="uppercase font-medium text-emerald-400 text-center md:text-start">
                                Servidores hospedados
                            </h3>
                            <span className="text-slate-100 text-3xl font-bold text-primary text-center md:text-start">
                                <CountUp start={0} end={450000} duration={0.5} separator="." suffix="+" />
                            </span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <h3 className="uppercase font-medium text-emerald-400 text-center md:text-start">
                                Localizações
                            </h3>
                            <span className="text-slate-100 text-3xl font-bold text-primary text-center md:text-start">
                                <CountUp start={0} end={5} duration={0.5} separator="." suffix="" /> Países
                            </span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <h3 className="uppercase font-medium text-emerald-400 text-center md:text-start">
                                Experiência
                            </h3>
                            <span className="text-slate-100 text-3xl font-bold text-primary text-center md:text-start">
                                <CountUp start={0} end={6} duration={0.5} separator="." suffix="" /> Anos
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}