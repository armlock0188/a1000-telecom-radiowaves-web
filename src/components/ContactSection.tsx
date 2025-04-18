
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender sua empresa com as melhores soluções em telecomunicações
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 border rounded-xl text-center">
            <MapPin className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Localização</h3>
            <p className="text-gray-600">São Paulo, SP</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-xl text-center">
            <Mail className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">E-mail</h3>
            <p className="text-gray-600">contato@a1000telecom.com.br</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-xl text-center">
            <Phone className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold mb-2">Telefone</h3>
            <p className="text-gray-600">(11) 9999-9999</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="gap-2">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}
