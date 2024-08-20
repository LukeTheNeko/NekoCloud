import { BsDiscord } from "react-icons/bs";

export default function BannerDiscord() {
    return (
        <>
            <div className="bg-slate-100">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex flex-col justify-center items-center bg-gradient-to-t to-blue-500 from-blue-600 py-16 p-6 rounded-2xl shadow-md gap-4">
                        <h1 className="text-4xl font-semibold text-center text-white lg:w-[600px]">
                            Venha agora mesmo para a nossa comunidade no Discord</h1>
                        <div className="flex items-center mt-5">
                            <a className="flex items-center gap-2 text-lg font-bold bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-500 px-6 py-2 rounded-xl transition-colors ease-in-out duration-200" target="_blank" href="/">
                                <BsDiscord size={20} />  Entrar no Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}