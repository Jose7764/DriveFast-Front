import Header from "@/components/Header";

export default async function TelaCliente(){

    const res = await fetch("https://drivefast-api.onrender.com/veiculos");
    const clientes =  await res.json();

    return (
        <>
        <main className="min-h-screen bg-zinc-950">
        </>

        
        </main>
        </>
    );
}