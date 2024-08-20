import { BsDiscord, BsFacebook, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";

export default function Footer() {
    return (
        <>
            <footer className="w-full bg-slate-950">
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                                <h2 className="text-3xl font-extrabold leading-10 tracking-tight text-gray-500 sm:text-5xl sm:leading-none md:text-4xl">
                                    Neko
                                    <span className="font-bold text-emerald-500">Cloud</span>
                                </h2>
                            </a>
                            <div className="mt-6 lg:max-w-sm">
                                <p className="text-sm text-slate-300">
                                    Na NekoCloud, nós sabemos que sua experiência em Minecraft deve ser épica e sem interrupções. Por isso, oferecemos a hospedagem de servidores mais confiável e poderosa para garantir que você e seus amigos possam explorar, construir e sobreviver no mundo de Minecraft sem preocupações.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <p className="text-base font-bold tracking-wide text-slate-400">Contato</p>
                            <div className="flex">
                                <p className="mr-1 text-slate-300">Whasapp:</p>
                                <a href="/" aria-label="Our phone" title="Our phone" className="text-gray-500">(11) 0000-00000</a>
                            </div>
                            <div className="flex">
                                <p className="mr-1 text-slate-300">Email:</p>
                                <a href="/" aria-label="Our email" title="Our email" className="text-gray-500">contato@nekocloud.com.br</a>
                            </div>
                        </div>
                        <div>
                            <span className="text-base font-bold tracking-wide text-slate-400">Social</span>
                            <div className="flex items-center mt-1 space-x-3">
                                <a href="/" className="text-gray-500 hover:text-emerald-500">
                                    <BsDiscord size={20} />
                                </a>
                                <a href="/" className="text-gray-500 hover:text-emerald-500">
                                    <BsInstagram size={20} />
                                </a>
                                <a href="/" className="text-gray-500 hover:text-emerald-500">
                                    <BsFacebook size={20} />
                                </a>
                                <a href="/" className="text-gray-500 hover:text-emerald-500">
                                    <BsTwitter size={20} />
                                </a>
                                <a href="/" className="text-gray-500 hover:text-emerald-500">
                                    <BsTiktok size={20} />
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Nos siga nas redes sociais e não perca nenhuma novidade
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                        <p className="text-sm text-slate-300">
                            © Copyright 2023-{new Date().getFullYear()} Todos os direitos reservados.
                        </p>
                        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                            <li>
                                <a href="#faq" className="text-sm text-slate-300 hover:underline">F.A.Q</a>
                            </li>
                            <li>
                                <a href="/privacypolicy" className="text-sm text-slate-300 hover:underline">Política de Privacidade</a>
                            </li>
                            <li>
                                <a href="/termsconditions" className="text-sm text-slate-300 hover:underline">Termos de Serviço</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}