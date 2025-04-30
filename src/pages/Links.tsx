import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Background } from "../components/Background";
import Navbar from "../components/Navbar";
import {
  FaArrowUpRightFromSquare,
  FaCopy,
  FaShieldHalved,
  FaGlobe,
  FaCalendarDays,
  FaFire,
  FaComputerMouse,
  FaArrowLeft,
} from "react-icons/fa6";

interface Link {
  categoriaSlug: string;
  title: string;
  url: string;
  description: string;
}

export default function Links() {
  const { categoriaSlug } = useParams<{ categoriaSlug: string }>();
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const categoriaLinks = data.links.filter(
          (link: Link) => link.categoriaSlug === categoriaSlug
        );
        setLinks(categoriaLinks);
      })
      .catch((error) =>
        console.error("Erro ao carregar o arquivo JSON:", error)
      );
  }, [categoriaSlug]);

  const copyToClipboard = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copiado para a área de transferência!");
      })
      .catch((error) => {
        console.error("Erro ao copiar o link:", error);
      });
  };

  return (
    <div>
      <Background />
      <Navbar />
      <section>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between pb-5">
            <h2 className="text-2xl font-semibold mb-4 text-white">Links</h2>
            <Link
              to="/categorias"
              className="btn btn-outline hover:bg-white hover:text-blue-600 text-white"
            >
              <FaArrowLeft /> Voltar
            </Link>
          </div>

          <div className="mt-10 container mx-auto flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px]">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="source-card animate-fade-in rounded-xl"
                >
                  <div className="group relative h-full flex flex-col overflow-hidden border-white/5 border backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 bg-[#111]/40 rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>
                    <div className="absolute mt-4 right-4 inline-flex items-center gap-1.5 px-2 py-1 z-10 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs">
                      <i className="fas fa-gamepad text-[10px]"></i>
                      <span>Nº Acessos</span>
                    </div>
                    <div className="relative p-4 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs backdrop-blur-sm status-badge">
                          <FaShieldHalved />
                          Verificado
                        </span>
                      </div>
                      <div className="flex items-start gap-3 flex-1">
                        <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 border-blue-500/20 border group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                          <FaGlobe className="text-blue-500/70 text-lg mx-auto" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-medium text-white group-hover:text-blue-400 transition-colors duration-300 mb-1.5 truncate">
                            {link.title}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                            {link.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 pt-4 border-t border-white/5">
                        <div className="flex items-center justify-between text-white/40 text-xs">
                          <span className="flex items-center gap-1.5 mr-2">
                            <FaCalendarDays />
                            Adicionado em N/A
                          </span>
                          <div className="source-stats flex items-center gap-3">
                            <span className="flex items-center gap-1.5 text-red-400 transition-colors duration-300">
                              <FaFire />0
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FaComputerMouse />0
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative border-t border-white/5 p-3 bg-black/30 backdrop-blur-sm">
                      <div className="flex gap-2">
                        <a
                          href={link.url}
                          className="install-btn flex-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/20 border rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaArrowUpRightFromSquare />
                          Acessar
                        </a>
                        <button
                          onClick={() => copyToClipboard(link.url)}
                          className="copy-btn shrink-0 bg-white/5 hover:bg-white/10 text-white/70 border border-white/10 rounded-lg px-4 py-2 text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] backdrop-blur-sm"
                        >
                          <FaCopy />
                          Copiar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
