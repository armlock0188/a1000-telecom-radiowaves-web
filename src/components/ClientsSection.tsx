
export function ClientsSection() {
  const clients = [
    "Rádio e Televisão Record S.A",
    "Radio São Paulo",
    "Rádio e Televisão VIP FM",
    "Radio Antena 1"
  ];

  return (
    <section id="clientes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Orgulhosamente atendendo as principais emissoras do Brasil
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div
              key={client}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900">{client}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
