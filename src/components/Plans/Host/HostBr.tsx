import CardHost from "./CardHost";

export default function HostBr() {
    return (
        <>
            <CardHost
                versionr="Não recomendado para as novas versões."
                title="Madeira"
                gb="2"
                oldprice="R$ 35,00"
                price="R$ 20,00"
            />
            <CardHost
                versionr="Não recomendado para as novas versões."
                title="Ferro"
                gb="4"
                oldprice="R$ 65,00"
                price="R$ 50,00"
            />
            <CardHost
                versiong="Suporta as novas versões."
                title="Redstone"
                gb="6"
                oldprice="R$ 80,00"
                price="R$ 70,00"
            />
            <CardHost
                versiong="Suporta as novas versões."
                title="Ouro"
                gb="8"
                oldprice="R$ 110,00"
                price="R$ 90,00"
            />
            <CardHost
                versiong="Suporta as novas versões."
                title="Diamante"
                gb="16"
                oldprice="R$ 160,00"
                price="R$ 140,00"
            />
            <CardHost
                versiong="Suporta as novas versões."
                title="Netherita"
                gb="32"
                oldprice="R$ 220,00"
                price="R$ 190,00"
            />
        </>
    )
}