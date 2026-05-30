"use client "

export default function Disponivel(disponivel) {
    
    return(
        <>
        <span className=" rounded-full bg-green-800 px-4 py-2 text-sm text-[#ffffff]">
           {disponivel ? `Disponível` : `Indisponível`}
        </span>
        </>
    );
}