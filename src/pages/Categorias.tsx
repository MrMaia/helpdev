import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Background } from "../components/Background";
import Navbar from "../components/Navbar";
import { FaArrowLeft, FaGlobe } from "react-icons/fa6";

interface Categoria {
  id: number;
  name: string;
  slug: string;
}

export default function Categorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data.categorias);
      })
      .catch((error) => console.error("Erro ao carregar o arquivo JSON:", error));
  }, []);

  return (
    <div>
      <Background />
      <Navbar />
      <section>
        <div className="mt-10">
          <div className="bg-[rgba(0,0,0,0.4)] mx-auto px-4 py-8 rounded-lg shadow-lg max-w-6xl xl:max-w-5xl">
            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-between pb-5">
                <h2 className="text-2xl font-semibold mb-4 text-white">Categorias</h2>
                <Link to="/" className="btn btn-outline hover:bg-white hover:text-blue-600 text-white">
                  <FaArrowLeft /> Voltar
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {categorias.map((categoria) => (
                  <Link
                    key={categoria.id}
                    to={`/links/${categoria.slug}`}
                  >
                    <div className="source-card animate-fade-in rounded-xl shadow-lg bg-gradient-to-br from-blue-500 via-transparent to-transparent transition-all duration-300 hover:scale-105">
                      <div className="group relative h-[280px] flex flex-col overflow-hidden border-white/5 border backdrop-blur-sm rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 via-transparent/90 to-transparent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
                        <div className="relative p-6 flex-1 flex flex-col items-center justify-center">
                          <div className="shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-blue-500/10 border-blue-500/20 border group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                            <FaGlobe className="text-blue-500/70 text-2xl mx-auto" />
                          </div>
                          <h3 className="text-lg font-medium text-white mt-4 group-hover:text-blue-400 transition-colors duration-300 text-center">
                            {categoria.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
