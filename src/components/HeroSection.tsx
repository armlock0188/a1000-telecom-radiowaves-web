
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, Tv, Satellite } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Especialistas em Manutenção de Equipamentos de Comunicação
            </h1>
            <p className="text-lg text-gray-600">
              Mantendo sua infraestrutura de transmissão funcionando com excelência desde 2020
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Solicitar Orçamento
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Radio className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Rádio AM/FM</h3>
              <p className="text-sm text-gray-600">Manutenção especializada em transmissores</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Tv className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Televisão</h3>
              <p className="text-sm text-gray-600">Suporte técnico para emissoras</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <Satellite className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Antenas</h3>
              <p className="text-sm text-gray-600">Instalação e manutenção</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
