import Image from "next/image";

export default function Home() {
  return (
     <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden ">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold text-[#D4AF37]">DriveFast</h1>

          <nav className="flex gap-5 text-sm text-zinc-200">
            <a href="#" className="rounded-full hover:bg-yellow-500/10 px-4 py-2 transition-colors duration-300 hover:text-[#D4AF37]">Início</a>
            <a href="#" className="rounded-full hover:bg-yellow-500/10 px-4 py-2 transition-colors duration-300 hover:text-[#D4AF37]">Veículos</a>
            <a href="#" className="rounded-full hover:bg-yellow-500/10 px-4 py-2 transition-colors duration-300 hover:text-[#D4AF37]">Clientes</a>
            <a href="#" className="rounded-full hover:bg-yellow-500/10 px-4 py-2 transition-colors duration-300 hover:text-[#D4AF37]">Locações</a>
          </nav>
        </div>
      </header>

      <section className="grid-cols-1 lg:grid-cols-2 mx-auto flex max-w-6xl flex-col items-start px-6 py-24 ">
        <span className="mb-4 rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-[#D4AF37]">
           Aluguel de veículos rápido, simples e seguro
        </span>

        <h2 className="max-w-3xl text-5xl font-bold leading-tight">
          Encontre o veículo ideal para sua próxima viagem.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Na DriveFast, você aluga carros com praticidade, agilidade e confiança.
          Escolha o veículo, consulte a disponibilidade e faça sua locação de forma simples.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-black text-bold-700 hover:bg-yellow-600"
          >
            Ver veículos
          </a>

          <a
            href="#"
            className="rounded-lg border border-zinc-400 px-6 py-3 font-semibold text-zinc-300 hover:bg-zinc-900"
          >
            Nova locação
          </a>
        </div>
          <div className="absolute right-0 top-70 flex justify-center lg:justify-end">
            <img
              src="/carro-douradoo.png"
              alt="Carro esportivo dourado"
              className=" w-full max-w-[350px] object-contain md:max-w-[500px] lg:max-w-[1250px]"
            />
          </div>
          
      </section>
      
    </main>
  );
}