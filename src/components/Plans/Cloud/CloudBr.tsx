import CardCloud from "./CardCloud";

export default function CloudBr() {
    return (
        <div className="relative overflow-x-auto overflow-y-hidden pt-10">
            <table className="w-full text-left text-slate-500">
                <thead className="text-slate-700 text-[14px] uppercase">
                    <tr>
                        <th scope="col" className="px-6 py-3">Nome</th>
                        <th scope="col" className="px-6 py-3">Processador</th>
                        <th scope="col" className="px-6 py-3">Memória</th>
                        <th scope="col" className="px-6 py-3">Disco</th>
                        <th scope="col" className="px-6 py-3">Anti-DDoS</th>
                        <th scope="col" className="px-6 py-3">Rede</th>
                        <th scope="col" className="px-6 py-3">Preço</th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <CardCloud core="1" ram="2" disco="20" mbps="100" price="R$ 130,00" />
                    <CardCloud core="2" ram="4" disco="40" mbps="200" price="R$ 160,00" />
                    <CardCloud core="3" ram="6" disco="60" mbps="300" price="R$ 190,00" />
                    <CardCloud core="4" ram="8" disco="80" mbps="400" price="R$ 220,00" />
                    <CardCloud core="8" ram="16" disco="160" mbps="800" price="R$ 340,00" />
                    <CardCloud core="12" ram="32" disco="320" mbps="1200" price="R$ 460,00" />
                </tbody>
            </table>
        </div>
    );
}