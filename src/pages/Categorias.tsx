import { SiBuymeacoffee } from "react-icons/si";
import {
  FaBook,
  FaGithub,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaShield,
  FaUsers,
  FaBolt,
  FaBarsStaggered,
} from "react-icons/fa6";

const categories = [
  { name: "Frontend", icon: <FaShield /> },
  { name: "Backend", icon: <FaBook /> },
  { name: "API", icon: <FaUsers /> },
  { name: "Imagens", icon: <FaArrowRight /> },
  { name: "IAs", icon: <FaArrowUpRightFromSquare /> },
  { name: "Vagas", icon: <FaBolt /> },
  { name: "Inspiração", icon: <FaGithub /> },
  { name: "Treino", icon: <FaBook /> },
  { name: "Templates", icon: <FaBolt /> },
];

export default function Categorias() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="navbar bg-black shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <FaBarsStaggered />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Sugerir link</a>
              </li>
              <li>
                <a>Apoio</a>
              </li>
              <li>
                <a>Sobre</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/" className="btn btn-ghost text-xl">
            DEVHELP
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle text-xl text-yellow-500">
            <SiBuymeacoffee />
          </button>
          <button
            className="btn btn-ghost btn-circle text-xl text-yellow-500 tooltip tooltip-left"
            data-tip="Apoie o projeto!"
          >
            <SiBuymeacoffee />
          </button>
        </div>
      </div>
      <div className="bg-black p-6 flex-1 md:text-center">
        <h1 className="text-2xl font-bold mb-6">Categorias</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 hover:shadow-xl"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <span className="text-center">{category.name}</span>
            </div>
          ))}
        </div>
        <div className="join mt-6 flex justify-center items-center">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
      </div>
    </div>
  );
}
