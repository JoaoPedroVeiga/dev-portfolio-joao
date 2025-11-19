import Contato from '@/components/contato';
import Footer from '@/components/footer/incex';
import Projetos from '@/components/projetos';
import Seta from '@/components/seta';
import Sobre from '@/components/sobre';
import Tecnologias from '@/components/Tecnologias';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Container principal (centraliza tudo vertical e horizontalmente) */}
       <section id="home" className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Container do conteúdo do Home (imagem + texto) */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Lado esquerdo - Imagem */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden border-4 border-gray-700">
              <Image
                src="/fotos/body/Gemini_Generated_Image_fl2fbqfl2fbqfl2f.png"
                alt="João Pedro"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
          </div>

          {/* Lado direito - Texto e botões */}
          <div className="flex flex-col items-center md:items-start space-y-4 sm:space-y-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center md:text-left">Olá, eu sou</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center md:text-left">João Pedro Veiga</h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-4 md:mb-6 text-center md:text-left">
              Desenvolvedor de Software <span className="text-blue-500">Full Stack</span>
            </p>
            
            {/* Botões */}
            <div className="flex space-x-4 sm:space-x-6">
              <Link
                href="https://www.linkedin.com/in/joao-pedro-braga-veiga-40b3a0265/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden border-2 border-white px-6 py-2 text-sm sm:text-base transition-all duration-500
                         before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-0 before:bg-blue-500 
                         before:transition-all before:duration-500 hover:before:w-full hover:text-black
                         hover:transform hover:scale-105 transition-transform duration-200 ease-in-out rounded"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/JoaoPedroVeiga"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden border-2 border-white px-6 py-2 text-sm sm:text-base transition-all duration-500
                         before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-0 before:bg-white 
                         before:transition-all before:duration-500 hover:before:w-full hover:text-blue-700
                         hover:transform hover:scale-105 transition-transform duration-200 ease-in-out rounded"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* Seta (só aparece em mobile) */}
        <Seta />
      </div>
      </section>

      {/* Sobre (fica abaixo do Home) */}
     <section id="sobre">
        <Sobre />
      </section>

      {/* Seção Tecnologias */}
      <section id="tecnologias">
        <Tecnologias />
      </section>

      {/* Seção Projetos */}
      <section id="projetos">
        <Projetos />
      </section>

      {/* Seção Contato */}
      <section id="contato">
        <Contato />
      </section>

      <Footer />
    </>
  );
}