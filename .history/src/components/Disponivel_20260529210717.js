"use client "

export default function Disponivel({disponivel}) {
    
    return(
        <>
        <div className="flex">
            {disponivel ? <span className="mb-4 rounded-full bg-green-800 px-4 py-2 text-sm text-[#ffffff]" >
</span> : 
            `Indisponível`}

            <span className="mb-4 rounded-full bg-green-800 px-4 py-2 text-sm text-[#ffffff]" >
                
            </span>

        </div>
        </>
    );
}