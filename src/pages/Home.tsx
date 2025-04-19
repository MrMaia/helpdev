import React from "react";
import {
  FaBook,
  FaGithub,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaShield,
  FaUsers,
  FaBolt,
} from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
interface CardProps {
  Icon: React.ElementType;
  title: string;
  text: string;
}

function Card({ Icon, title, text }: CardProps) {
  return (
    <div className="card card-border border-amber-400 w-full">
      <div className="card-body">
        <div className="text-2xl text-amber-400 rounded-md border border-amber-400 w-fit h-fit p-3">
          <Icon />
        </div>
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div
      className="min-h-screen p-4 bg-black flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg1.svg')", // Caminho corrigido
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Garante que o background não se repita
      }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-screen-lg mx-auto px-4">
        {/* Primeira Div */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4">
          <div role="alert" className="alert alert-warning">
            <IoWarningOutline className="text-2xl" />
            <span>
              Aviso: O projeto está em constante evolução. Esta é apenas a versão MVP e não representa a versão final.
            </span>
          </div>
          <div className="badge badge-dash badge-warning badge-lg md:badge-xl mt-5 mb-7">
            Explore Dev Resources
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3">
            A Biblioteca Definitiva para <a className="text-amber-300">Devs</a>.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-7">
            Explore links, ferramentas e recursos essenciais para acelerar seu
            código.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center lg:justify-start">
            <a
              className="btn btn-outline btn-warning p-6 flex items-center gap-2"
              href="/categorias"
            >
              <FaBook />
              Explorar Links <FaArrowRight />
            </a>
            <a
              href="https://github.com/MrMaia/helpdev"
              className="btn btn-dash btn-warning p-6 flex items-center gap-2"
              target="_blank"
            >
              <FaGithub />
              Projeto no GitHub <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>

        {/* Segunda Div */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 p-4">
          <Card
            Icon={FaShield}
            title="Fontes Confiáveis"
            text="Todos os recursos e links são cuidadosamente verificados para garantir segurança e confiabilidade."
          />
          <Card
            Icon={FaBolt}
            title="Acesso Simplificado"
            text="Encontre rapidamente ferramentas e conteúdos essenciais para desenvolvedores, organizados de forma prática."
          />
          <Card
            Icon={FaUsers}
            title="Colaboração da Comunidade"
            text="Conte com a participação ativa da comunidade para validar e sugerir novos recursos e links."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
