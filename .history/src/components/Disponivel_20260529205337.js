"use client "

export default function Disponivel(disponivel) {
    
    return(
        <>
        <span className="mb-4 rounded-full bg-gre-500/10 px-4 py-2 text-sm text-[#D4AF37]">
           {disponivel ? `Disponivel` : `Indisponivel`}
        </span>
        </>
    );
}