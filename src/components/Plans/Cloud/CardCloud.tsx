import { FaHdd, FaMemory, FaNetworkWired, FaServer, FaShareAlt, FaShieldAlt } from "react-icons/fa";

export default function CardCloud(props: any) {
    return (
        <tr className="text-[14px] bg-gradient-to-l to-slate-50 from-white">
            <td className="px-6 py-4">
                <span className="flex items-center gap-2">
                    <FaServer className="text-emerald-500" />
                    R7950x
                </span>
            </td>
            <td className="px-6 py-4">
                <span className="flex items-center gap-2">
                    <FaShareAlt className="text-emerald-500" />
                    {props.core} vCore
                </span>
            </td>
            <td className="px-6 py-4">
                <span className="flex items-center gap-2">
                    <FaMemory className="text-emerald-500" />
                    {props.ram} GB de RAM
                </span>
            </td>
            <td className="px-6 py-4">
                <span className="flex items-center gap-2">
                    <FaHdd className="text-emerald-500" />
                    {props.disco} GB de Disco
                </span>
            </td>
            <td className="px-6 py-4">
                <span className="flex items-center gap-2">
                    <FaShieldAlt className="text-emerald-500" />
                    Incluso
                </span>
            </td>
            <td className="px-6 py-4">
                <span className="flex items-center gap-2">
                    <FaNetworkWired className="text-emerald-500" />
                    {props.mbps} MBPs
                </span>
            </td>
            <td className="px-6 py-4">
                <span className="text-emerald-500 text-lg">{props.price}</span> /mês
            </td>
            <td className="px-6 py-4 text-right">
                <a className="text-[14px] flex justify-center items-center text-center btn-primary text-white px-4 py-2 rounded-md" href="/login">
                    Adquirir Plano
                </a>
            </td>
        </tr>
    );
}