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

// Definição de tipos para as props do componente Card
interface CardProps {
  Icon: React.ElementType; // Tipo para componentes React
  title: string;
  text: string;
}

// Componente Card para reaproveitar a estrutura
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
    <div className="min-h-screen p-4 bg-black flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-screen-lg mx-auto px-4">
        {/* Primeira Div */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4">
          <div className="badge badge-dash badge-warning badge-lg md:badge-xl mt-5 mb-7">
            Explore Dev Resources
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-3">
            A Biblioteca Definitiva para <a className="text-amber-300">Devs</a>.
          </h1>
          <p className="text-xl text-gray-500 mb-7">
            Explore links, ferramentas e recursos essenciais para acelerar seu
            código.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center lg:justify-start">
            <button className="btn btn-outline btn-warning p-6 flex items-center gap-2">
              <FaBook />
              Explorar Links <FaArrowRight />
            </button>
            <button className="btn btn-dash btn-warning p-6 flex items-center gap-2">
              <FaGithub />
              Projeto no GitHub <FaArrowUpRightFromSquare />
            </button>
          </div>
        </div>

        {/* Segunda Div */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 p-4">
          <Card
            Icon={FaShield}
            title="Fontes Seguras"
            text="Todas as fontes são verificadas e monitoradas quanto à segurança e confiabilidade."
          />
          <Card
            Icon={FaBolt}
            title="Acesso Rápido"
            text="Acesso rápido e fácil a milhares de jogos de fontes verificadas."
          />
          <Card
            Icon={FaUsers}
            title="Movido pela Comunidade"
            text="Participação ativa da comunidade na verificação e avaliação das fontes."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
