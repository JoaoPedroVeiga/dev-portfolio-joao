export default function Sobre() {
  return (
    <div className="flex flex-col items-center justify-start h-auto px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden w-full">
      <div className="max-w-2xl w-full text-center mt-10 mb-10">
        <h2 className="text-3xl font-bold mb-4">Sobre</h2>
        <p className="mb-4 text-lg">
          Sou Desenvolvedor Full Stack focado em criar soluções escaláveis e bem estruturadas. Trabalho com <span className="text-blue-700"> TypeScript</span>, Node.js,<span className="text-blue-700"> Next.js</span>  e React, desenvolvendo aplicações completas e performáticas. Busco sempre aprimorar minhas habilidades, aprender novas tecnologias e contribuir com projetos que unam inovação, colaboração e boas práticas de desenvolvimento.
        </p>
        
        {/* Coloque seu arquivo PDF na pasta public/ do Next.js */}
        <a 
          href="https://drive.google.com/file/d/1SWRXrWy4Hj21-SkYwFg0VGMupaxGqVN-/view?usp=sharing" // Caminho para o arquivo na pasta public
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative overflow-hidden border-2 border-b-black px-6 py-3 text-sm sm:text-base transition-all duration-500
                     before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-0 before:bg-blue-500 
                     before:transition-all before:duration-500 hover:before:w-full hover:text-black
                     hover:transform hover:scale-105 transition-transform duration-200 ease-in-out rounded cursor-pointer"
        >
          Abrir CV
        </a>
      </div>
    </div>
  );
}