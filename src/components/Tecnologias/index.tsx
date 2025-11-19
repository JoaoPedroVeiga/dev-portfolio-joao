export default function Tecnologias() {
  // Configuração das tecnologias com cores específicas
  const tecnologias = {
    frontend: {
      titulo: "Frontend",
      items: [
        { nome: "HTML", cor: "text-white" },
        { nome: "CSS", cor: "text-white" },
        { nome: "TypeScript", cor: "text-white" },
        { nome: "JavaScript", cor: "text-white" },
        { nome: "React", cor: "text-blue-500" },
        { nome: "Sass", cor: "text-white" },
      ]
    },
    backend: {
      titulo: "Backend",
      items: [
        { nome: "Node.js", cor: "text-white" },
        { nome: "Prisma", cor: "text-blue-500" },
        { nome: "SQL", cor: "text-white" },
        { nome: "PostgreSQL", cor: "text-white" },
        { nome: "NoSQL", cor: "text-white" },
      ]
    },
    frameworks: {
      titulo: "Frameworks",
      items: [
        { nome: "Nest.js", cor: "text-blue-500" },
        { nome: "Next.js", cor: "text-white" },
        { nome: "Tailwind CSS", cor: "text-white" },
        { nome: "Bootstrap", cor: "text-white" }
      ]
    },
    outros: {
      titulo: "Outros",
      items: [
        { nome: "Git", cor: "text-white" },
        { nome: "GitHub", cor: "text-white" },
        { nome: "Figma", cor: "text-white" },
        { nome: "OpenAI API", cor: "text-blue-500" },
        { nome: "Docker", cor: "text-white" },
        { nome: "Penpot", cor: "text-white" },
      ]
    }
  };

  return (
    <div className="py-12 bg-black px-4">
      {/* Título com detalhe minimalista */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-light text-white tracking-wider mb-2">TECNOLOGIAS</h2>
        <div className="w-16 h-0.5 bg-white mx-auto"></div>
      </div>
      
      {/* Grid com espaçamento elegante */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Cartão Frontend */}
        <div className="group bg-black p-6 rounded-lg border border-white hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1">
          <h3 className="font-normal text-xl mb-4 text-white uppercase tracking-widest border-b border-white pb-2">
            {tecnologias.frontend.titulo}
          </h3>
          <ul className="space-y-3">
            {tecnologias.frontend.items.map((tech, index) => (
              <li 
                key={tech.nome} 
                className="flex items-center group/item transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <span className="w-1 h-1 bg-white mr-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className={`${tech.cor} transition-colors duration-300`}>{tech.nome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cartão Backend */}
        <div className="group bg-black p-6 rounded-lg border border-white hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1">
          <h3 className="font-normal text-xl mb-4 text-white uppercase tracking-widest border-b border-white pb-2">
            {tecnologias.backend.titulo}
          </h3>
          <ul className="space-y-3">
            {tecnologias.backend.items.map((tech, index) => (
              <li 
                key={tech.nome} 
                className="flex items-center group/item transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <span className="w-1 h-1 bg-white mr-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className={`${tech.cor} transition-colors duration-300`}>{tech.nome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cartão Frameworks */}
        <div className="group bg-black p-6 rounded-lg border border-white hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1">
          <h3 className="font-normal text-xl mb-4 text-white uppercase tracking-widest border-b border-white pb-2">
            {tecnologias.frameworks.titulo}
          </h3>
          <ul className="space-y-3">
            {tecnologias.frameworks.items.map((tech, index) => (
              <li 
                key={tech.nome} 
                className="flex items-center group/item transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <span className="w-1 h-1 bg-white mr-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className={`${tech.cor} transition-colors duration-300`}>{tech.nome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cartão Outras */}
        <div className="group bg-black p-6 rounded-lg border border-white hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1">
          <h3 className="font-normal text-xl mb-4 text-white uppercase tracking-widest border-b border-white pb-2">
            {tecnologias.outros.titulo}
          </h3>
          <ul className="space-y-3">
            {tecnologias.outros.items.map((tech, index) => (
              <li 
                key={tech.nome} 
                className="flex items-center group/item transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <span className="w-1 h-1 bg-white mr-2 group-hover/item:scale-150 transition-transform duration-300"></span>
                <span className={`${tech.cor} transition-colors duration-300`}>{tech.nome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}