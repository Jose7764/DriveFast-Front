"use client";

import Header from "@/components/Header.js"
import Image from "next/image"
import { useState } from "react"

export default async function telaVeiculo() {
    const [disponivel, setDisponivel] = useState(true);

    const res = await fetch(`https://drivefast-api.onrender.com/veiculos`,);
    const veiculos = await res.json();

    return (
        <>
        <main className = "min-h-screen bg-zinc-950 ">
        <Header/>

        <div className = "mx-auto flex max-w-6xl items-center justify-end px-6 py-5 ">
        <a href="#" className="rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-black text-bold-700 hover:bg-yellow-600">
            Cadastrar Veículos
        </a>
        </div>

        <div className="mx-auto max-w-6xl grid gap-6 grid-cols-3 py-15">
            {veiculos.map((car) => (
            <div key={car.id} className="p-6 border rounded-xl shadow-sm bg-white">
                <Image
                    src="/anonimusCar.png"
                    alt="Carro anonimus"
                    width={350}
                    height={350}
                    className="object-contain"
                    priority
                />
                <div className="flex justify-between">
                    <div className="flex">
                        <h2 className="py-1.5 px-1.5 text-xl font-semibold" >{car.marca}</h2>
                        <h2 className="py-1.5 px-0.5 text-xl font-semibold" >{car.modelo}</h2>
                    </div>
                    <h2 className="py-1.5 px-1 text-xl font-semibold" >{car.placa}</h2>
                </div>

                <div>
                <h2 className="py-1.5 px-1.5 text-xl font-semibold justify-self-end" >{car.disponivel}</h2>
                <h2 className="py-1.5 px-1.5 text-xl font-semibold justify-self-end" >R$ {car.valorDiaria}</h2>
                {}
                </div>
                
            </div>
        ))}

        </div>
        
        <div>

        </div>
        </main>
        </>


    );
}