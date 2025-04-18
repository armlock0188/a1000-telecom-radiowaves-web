
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function MainNav() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">A1000 Telecom</div>
          <div className="hidden md:flex space-x-6 text-gray-600">
            <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#clientes" className="hover:text-blue-600 transition-colors">Clientes</a>
            <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
          </div>
          <Button className="hidden md:flex items-center gap-2">
            <Phone size={18} />
            Fale Conosco
          </Button>
        </div>
      </div>
    </nav>
  );
}
