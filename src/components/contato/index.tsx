export default function Contato() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        {/* Título com linha abaixo */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-medium inline-block pb-2 border-b border-white/20">
            Contato
          </h2>
        </div>

        {/* Grid de contatos compacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/joao-pedro-braga-veiga-40b3a0265/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 hover:bg-gray-900/50 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/50"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white">
                Linkedin
              </span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/JoaoPedroVeiga"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 hover:bg-gray-900/50 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/50"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white">
                GitHub
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:jbragaveiga@gmail.com"
            className="group p-4 hover:bg-gray-900/50 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/50"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white">
                Gmail
              </span>
            </div>
          </a>

          {/* Telefone */}
          <a
            href="tel:+5571996200055"
            className="group p-4 hover:bg-gray-900/50 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/50"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                </svg>
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white">
                (71) 99620-0055
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}