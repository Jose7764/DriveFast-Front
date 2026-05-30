import Header from "@/components/Header";


export default async function TelaCliente(){

    const res = await fetch("https://drivefast-api.onrender.com/clientes");
    const clientes =  await res.json();

    return (
        <>
        <main className="min-h-screen bg-zinc-950">
        <Header/>

        <div className="grid grid-cols-4">
            {clientes.map((clientes)=>(
                <div key={id}>
                    <h2>{clientes.nome}</h2>
                </div>
            ))}
        </div>
        
        </main>
        </>
    );
}