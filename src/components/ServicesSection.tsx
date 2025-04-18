
import { Check } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Rádio AM e FM",
      items: [
        "Manutenção de transmissores",
        "Ajuste de modulação",
        "Calibração de equipamentos",
        "Instalação de sistemas"
      ]
    },
    {
      title: "Televisão",
      items: [
        "Manutenção de transmissores",
        "Ajuste de sinais",
        "Instalação de sistemas",
        "Suporte técnico especializado"
      ]
    },
    {
      title: "Antenas e Parábolas",
      items: [
        "Instalação profissional",
        "Manutenção preventiva",
        "Alinhamento de sinal",
        "Diagnóstico técnico"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em manutenção e instalação de equipamentos de comunicação
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="text-green-500 w-5 h-5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
