"use client "

export default function Disponivel(disponivel) {
    
    return(
        <>
        <span className="mb-4 rounded-full bg-green-800 px-4 py- text-sm text-[#ffffff]">
           {disponivel ? `Disponível` : `Indisponível`}
        </span>
        </>
    );
}