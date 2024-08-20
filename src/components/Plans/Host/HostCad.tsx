import CardHost from "./CardHost";

export default function HostCad() {
    return (
        <>
            <CardHost
                versionr="Não recomendado para as novas versões."
                title="Madeira"
                gb="4"
                oldprice="R$ 30,00"
                price="R$ 15,00"
            />
            <CardHost
                versiong="Suporta as novas versões."
                title="Ferro"
                gb="6"
                oldprice="R$ 60,00"
                price="R$ 45,00"
            />
            <CardHost
                versiong="Suporta as novas versões."
                title="Redstone"
                gb="8"
                oldprice="R$ 75,00"
                price="R$ 65,00"
            />
            <CardHost
                versiong="Suporta as novas versões."
                title="Ouro"
                gb="16"
                oldprice="R$ 100,00"
                price="R$ 80,00"
            />
            <CardHost
                versiong="Suporta as novas versões."
                title="Diamante"
                gb="32"
                oldprice="R$ 170,00"
                price="R$ 130,00"
            />
            <CardHost
                versiong="Suporta as novas versões."
                title="Netherita"
                gb="64"
                oldprice="R$ 210,00"
                price="R$ 180,00"
            />
        </>
    )
}