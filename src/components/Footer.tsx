
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">A1000 Telecom</h3>
            <p className="text-sm">
              Especialistas em manutenção de equipamentos de comunicação desde 2020.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>Manutenção de Rádio AM/FM</li>
              <li>Manutenção de TV</li>
              <li>Instalação de Antenas</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>São Paulo, SP</li>
              <li>contato@a1000telecom.com.br</li>
              <li>(11) 9999-9999</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} A1000 Telecom. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
