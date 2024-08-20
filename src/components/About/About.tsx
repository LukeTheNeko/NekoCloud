import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="flex flex-col items-center bg-slate-100">
                <div className="text-center p-4">
                    <h2
                        className="text-3xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-4xl sm:p-10 sm:leading-none md:text-4xl">
                        Porque Hospedar na Neko
                        <span className="font-bold text-emerald-500">Cloud</span>?
                    </h2>
                </div>
                <div className="mx-4 flex flex-wrap justify-center p-4 sm:p-8 bg-slate-100">
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4">
                        <div className="mb-6 sm:mb-9 rounded-xl py-4 sm:py-8 px-4 sm:px-7 shadow-md transition-all hover:shadow-lg">
                            <div className="mx-auto mb-7 inline-block bg-zinc-200 rounded-full">
                                <div className="p-4">
                                    <Image width={40} height={40} src="/icons/protection.svg" alt="protection" />
                                </div>
                            </div>
                            <div className="min-h-44">
                                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">Proteção DDoS</h3>
                                <p className="text-base font-medium text-body-color">Oferecemos a melhor proteção do mercado com Cloudflare Magic Transit, com capacidade de defesa robusta contra ameaças online, incluindo ataques DDoS, alcançando 228Tbps.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4">
                        <div className="mb-6 sm:mb-9 rounded-xl py-4 sm:py-8 px-4 sm:px-7 shadow-md transition-all hover:shadow-lg">
                            <div className="mx-auto mb-7 inline-block bg-zinc-200 rounded-full">
                                <div className="p-4">
                                    <Image width={40} height={40} src="/icons/dis.svg" alt="discount" />
                                </div>
                            </div>
                            <div className="min-h-44">
                                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">Preço flexível</h3>
                                <p className="text-base font-medium text-body-color">Preços flexíveis que se adaptam ao seu orçamento. Escolha o plano ideal e aproveite nossos serviços com total tranquilidade!</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4">
                        <div className="mb-6 sm:mb-9 rounded-xl py-4 sm:py-8 px-4 sm:px-7 shadow-md transition-all hover:shadow-lg">
                            <div className="mx-auto mb-7 inline-block bg-zinc-200 rounded-full">
                                <div className="p-4">
                                    <Image width={40} height={40} src="/icons/star.svg" alt="star" />
                                </div>
                            </div>
                            <div className="min-h-44">
                                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">Uptime garantido</h3>
                                <p className="text-base font-medium text-body-color">A qualidade é nossa prioridade, por isso você pode contar com o melhor desempenho e estabilidade para o seu servidor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4">
                        <div className="mb-6 sm:mb-9 rounded-xl py-4 sm:py-8 px-4 sm:px-7 shadow-md transition-all hover:shadow-lg">
                            <div className="mx-auto mb-7 inline-block bg-zinc-200 rounded-full">
                                <div className="p-4">
                                    <Image width={40} height={40} src="/icons/square.svg" alt="square" />
                                </div>
                            </div>
                            <div className="min-h-44">
                                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">Painel Personalizado</h3>
                                <p className="text-base font-medium text-body-color">Nossos serviços contam com um painel personalizado com diversas funções para facilitar a sua vida. Altere a versão do jogo com um clique, faça backups e muito mais.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4">
                        <div className="mb-6 sm:mb-9 rounded-xl py-4 sm:py-8 px-4 sm:px-7 shadow-md transition-all hover:shadow-lg">
                            <div className="mx-auto mb-7 inline-block bg-zinc-200 rounded-full">
                                <div className="p-4">
                                    <Image width={40} height={40} src="/icons/world.svg" alt="world" />
                                </div>
                            </div>
                            <div className="min-h-44">
                                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">Subdomínio Gratuito</h3>
                                <p className="text-base font-medium text-body-color">Chega de números, IPs e portas, todos os nossos serviços incluem um subdomínio gratuito para que você possa personalizar o seu endereço de conexão do seu jeito.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4">
                        <div className="mb-6 sm:mb-9 rounded-xl py-4 sm:py-8 px-4 sm:px-7 shadow-md transition-all hover:shadow-lg">
                            <div className="mx-auto mb-7 inline-block bg-zinc-200 rounded-full">
                                <div className="p-4">
                                    <Image width={40} height={40} src="/icons/time.svg" alt="time" />
                                </div>
                            </div>
                            <div className="min-h-44">
                                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl">Ativação Instantânea</h3>
                                <p className="text-base font-medium text-body-color">Assim que seu pagamento for aprovado, o seu serviço será ativado. Pagou por boleto e não quer esperar? Mande seu comprovante no chat e vamos ativar seu serviço!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
