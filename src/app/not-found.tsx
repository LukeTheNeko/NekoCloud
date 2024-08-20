export default function notfound() {
    return (
        <section className="flex items-center h-screen p-16 bg-zinc-700">
            <div className="container flex flex-col items-center ">
                <div className="flex flex-col gap-6 max-w-md text-center">
                    <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                        <span className="sr-only">Error</span>
                        <span className="text-red-400">404</span>
                    </h2>
                    <p className="text-2xl md:text-xl dark:text-gray-300">A página que você está procurando não existe.</p>
                    <a href="/" className="px-8 py-4 font-black text-xl rounded-2xl bg-emerald-500">Voltar</a>
                </div>
            </div>
        </section>
    );
}