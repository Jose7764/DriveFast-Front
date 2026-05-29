import Link from 'next/link';  

export default function Header() {
    return (
        <>
        <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href= "/"> 
          <h1 className="text-2xl font-bold text-[#D4AF37]">DriveFast</h1>
          </Link>

          <nav className="flex gap-5 text-sm text-zinc-200">
            <Link href="/" className="rounded-full hover:bg-yellow-500/10 px-4 py-2 transition-colors duration-300 hover:text-[#D4AF37]">Início</Link>
            <Link href="/veiculos" className="rounded-full hover:bg-yellow-500/10 px-4 py-2 transition-colors duration-300 hover:text-[#D4AF37]">Veículos</Link>
            <Link href="#" className="rounded-full hover:bg-yellow-500/10 px-4 py-2 transition-colors duration-300 hover:text-[#D4AF37]">Clientes</Link>
            <Link href="#" className="rounded-full hover:bg-yellow-500/10 px-4 py-2 transition-colors duration-300 hover:text-[#D4AF37]">Locações</Link>
          </nav>
        </div>
      </header>
        </>
    );
}