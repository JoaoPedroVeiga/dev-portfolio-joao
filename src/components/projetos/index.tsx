"use client";

import { useState, useEffect, useRef, RefObject } from "react";
import Head from "next/head";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  videoUrl: string;
  link: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce",
    description:
      "Desenvolvi uma plataforma completa de e-commerce com arquitetura moderna e escalável, unindo um backend robusto em NestJS e um frontend performático em Next.js 15. O projeto implementa todas as funcionalidades essenciais de um sistema de vendas online — da autenticação ao processamento de pedidos — com foco em segurança, experiência do usuário e boas práticas de engenharia de software. ",
    technologies: [
      "NestJS",
      "Prisma ORM",
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "React",
      "ViaCEP API",
      "PostgreSQL",
      "Docker",
    ],
    imageUrl: "fotos/projetos/e-commerce.png",
    videoUrl:
      "/video/E-commerce Store - Google Chrome 2025-11-10 18-24-45.webm",
    link: "https://github.com/JoaoPedroVeiga/e-commerce",
  },
  {
    id: 2,
    title: "Analisador de Currículos",
    description:
      "O Analisador de Currículos com IA é uma aplicação fullstack desenvolvida com NestJS (backend) e Next.js (frontend) que utiliza a API da OpenAI para realizar a análise inteligente de currículos em PDF. O sistema interpreta o conteúdo textual do documento, gera um resumo profissional, identifica pontos fortes, sugestões de melhoria e atribui notas de desempenho em diferentes áreas. ",
    technologies: [
      "NestJS",
      "Prisma ORM",
      "OpenAI API",
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "React",
      "Framer Motion",
      "PostgreSQL",
      "Docker",
    ],
    imageUrl: "fotos/projetos/Captura de tela 2025-11-12 171913.png",
    videoUrl: "/video/A.C IA.webm",
    link: "https://github.com/JoaoPedroVeiga/analisador-de-curriculos",
  },
  {
    id: 3,
    title: "Clima Tempo",
    description:
      "O Clima Tempo é uma aplicação Fullstack com IA desenvolvida em Next.js e Nest.js, que permite consultar a previsão do tempo de qualquer cidade do mundo em tempo real. O sistema integra dados meteorológicos com uma inteligência artificial capaz de gerar recomendações personalizadas de vestuário, saúde e atividades conforme as condições climáticas.",
    technologies: [
      "Next.js",
      "Nest.js",
      "TailwindCSS",
      "Framer Motion",
      "TypeScript",
      "React",
      "OpenWeatherMap API",
      "OpenAI API",
    ],
    imageUrl: "fotos/projetos/Captura de tela 2025-11-12 172149.png",
    videoUrl: "/video/Clima tempo.webm",
    link: "https://github.com/JoaoPedroVeiga/clima-tempo",
  },
  // Adicione mais 3 projetos seguindo o mesmo padrão
];

export default function Projetos() {
  const videoRef: RefObject<HTMLVideoElement | null> = useRef<HTMLVideoElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [selectedProject]);

  // Iniciar vídeo quando o modal abrir
  useEffect(() => {
    if (selectedProject && videoRef.current) {
      // Pequeno delay para garantir que o modal está completamente renderizado
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.log("Autoplay prevented:", error);
            // Em alguns navegadores, o autoplay pode ser bloqueado
            // O usuário precisará iniciar o vídeo manualmente
          });
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [selectedProject]);

  // Pausar vídeo quando o modal fechar
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedProject(null);
  };

  return (
    <div className="min-h-auto lg:pb-12 bg-white text-black py-12 px-4">
      <Head>
        <title>Meus Projetos | Portfólio</title>
        <meta
          name="description"
          content="Conheça meus projetos desenvolvidos como programador"
        />
      </Head>

      <main className="max-w-7xl mx-auto">
        {/* Título com detalhe minimalista */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-light text-black tracking-wider mb-2">
            PROJETOS
          </h1>
          <div className="w-16 h-0.5 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white border border-black rounded-lg overflow-hidden cursor-pointer 
                         hover:bg-gray-50 transition-all duration-300 hover:-translate-y-2"
              onClick={() => handleProjectClick(project)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagem com overlay no hover */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400} // ← Definir width
                  height={192} // ← Definir height (48 * 4 = 192)
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-normal mb-3 text-black uppercase tracking-wider border-b border-black pb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-black text-white px-2 py-1 rounded font-medium transition-transform duration-300 group-hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-gray-500 px-2 py-1">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="mt-4 text-xs text-gray-500 uppercase tracking-wider group-hover:text-black transition-colors duration-300">
                  Clique para ver mais →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de detalhes do projeto */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
            onClick={handleCloseModal}
          >
            <div
              className="bg-white border border-black max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-lg 
                         shadow-2xl opacity-0 translate-y-5 animate-[slideUp_0.4s_ease-out_forwards]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center z-10 
                           hover:bg-gray-800 transition-all duration-300 hover:scale-110 font-bold text-xl"
                  aria-label="Fechar modal"
                >
                  &times;
                </button>

                <div className="h-80 bg-gray-200 overflow-hidden relative">
                  <video
                    ref={videoRef}
                    src={selectedProject.videoUrl}
                    controls
                    className="w-full h-full object-cover"
                    poster={selectedProject.imageUrl}
                    muted
                    playsInline
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-light text-black uppercase tracking-wider mb-6 border-b border-black pb-3">
                    {selectedProject.title}
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-lg font-normal text-black uppercase tracking-wider mb-3">
                      Descrição
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-normal text-black uppercase tracking-wider mb-4">
                      Tecnologias Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-black text-white px-3 py-1.5 rounded text-sm font-medium 
                                   hover:bg-gray-800 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-black px-8 py-3 text-black uppercase tracking-wider
                             hover:bg-black hover:text-white transition-all duration-300 font-light"
                  >
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
