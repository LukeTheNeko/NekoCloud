import Image from 'next/image';
import React from 'react';

const iconsData = [
    { src: "/versions/bukkit.webp", alt: "Bukkit", delay: 500 },
    { src: "/versions/fabric.webp", alt: "Fabric", delay: 600 },
    { src: "/versions/forge.webp", alt: "Forge", delay: 700 },
    { src: "/versions/magma.webp", alt: "Magma", delay: 800 },
    { src: "/versions/minecraft.webp", alt: "Minecraft", delay: 900 },
    { src: "/versions/mohist.webp", alt: "Mohist", delay: 1000 },
    { src: "/versions/purpur.webp", alt: "Purpur", delay: 1100 },
    { src: "/versions/spigot.webp", alt: "Spigot", delay: 1200 },
];

const Icon = ({ src, alt, delay }: { src: string, alt: string, delay: number }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay={delay}
            className="group bg-slate-200 h-20 w-20 rounded-3xl flex shadow-lg justify-center items-center transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
            <div>
                <Image
                    height={50}
                    width={50}
                    src={src}
                    alt={alt}
                    className="filter grayscale transition-all duration-300 group-hover:filter-none"
                />
            </div>
        </div>
    );
};

export default function Icons() {
    return (
        <div className="flex p-14 justify-center gap-6 flex-wrap">
            {iconsData.map((icon, index) => (
                <Icon key={index} src={icon.src} alt={icon.alt} delay={icon.delay} />
            ))}
        </div>
    );
}