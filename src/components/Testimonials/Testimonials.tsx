import Image from "next/image";

export default function Testimonials() {
    return (
        <>
            <div className="py-5 bg-slate-100">
                <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
                    <div className="text-sm font-bold tracking-wider text-emerald-500 uppercase">Avaliações de clientes</div>
                    <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">O que nossos clientes disseram</h2>
                </div>
                <div className="container p-6 mx-auto mb-10 xl:px-0">
                    <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                        <div className="lg:col-span-2 xl:col-auto">
                            <div className="flex flex-col shadow-lg justify-between w-full h-full px-6 py-6 bg-gray-200 md:px-10 rounded-2xl md:py-14">
                                <p className="text-base leading-normal">Quero elogiar o suporte da NekoCloud. Sempre que tive problemas, a equipe foi rápida em resolver e melhorar minha infraestrutura. Recomendo a empresa para quem precisa de um bom serviço para servidores.</p>
                                <div className="flex items-center mt-8 space-x-3">
                                    <div className="flex-shrink-0 overflow-hidden rounded-full">
                                        <Image height={50} width={50} alt="Avatar" src="/person/person3.png" loading="lazy" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium text-emerald-500">Paulo Gomes</div>
                                        <div className="text-gray-600">Cliente da NekoCloud</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col shadow-lg justify-between w-full h-full px-6 py-6 bg-gray-200 md:px-10 rounded-2xl md:py-14">
                            <p className="text-base leading-normal">Quero destacar o excelente suporte que a NekoCloud oferece. Sempre que enfrentei dificuldades, a equipe esteve pronta para resolver meus problemas e aprimorar minha infraestrutura. Recomendo a empresa a todos que buscam um serviço de qualidade para seus servidores.</p>
                            <div className="flex items-center mt-8 space-x-3">
                                <div className="flex-shrink-0 overflow-hidden rounded-full">
                                    <Image height={50} width={50} alt="Avatar" src="/person/person2.png" loading="lazy" />
                                </div>
                                <div>
                                    <div className="text-lg font-medium text-emerald-500">Maria Rocha</div>
                                    <div className="text-gray-600">Cliente da NekoCloud</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col shadow-lg justify-between w-full h-full px-6 py-6 bg-gray-200 md:px-10 rounded-2xl md:py-14">
                            <p className="text-base leading-normal">Gostaria de destacar o excelente suporte fornecido pela NekoCloud. Sempre que enfrentei desafios, a equipe esteve disponível para solucionar meus problemas e melhorar minha infraestrutura. Recomendo a empresa a todos que procuram um serviço de alta qualidade para seus servidores.</p>
                            <div className="flex items-center mt-8 space-x-3">
                                <div className="flex-shrink-0 overflow-hidden rounded-full">
                                    <Image height={50} width={50} alt="Avatar" src="/person/person1.png" loading="lazy" />
                                </div>
                                <div>
                                    <div className="text-lg font-medium text-emerald-500">Vinícius Araujo</div>
                                    <div className="text-gray-600">Cliente da NekoCloud</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}