import Navbar from "../components/Navbar";
import ListaCategorias from "../components/ListaCategorias";
import { useNavigate } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";

export default function Categorias() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-black p-6 flex-1 md:text-center">
        <div
          role="alert"
          className="alert alert-warning max-w-md mx-auto flex items-center gap-2 p-4"
        >
          <IoWarningOutline className="text-2xl" />
          <span>
            Aviso: O projeto está em constante evolução. Esta é apenas a versão
            MVP e não representa a versão final.
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-white text-center">Categorias</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-center rounded mb-4 bg-white text-black hover:bg-stone-400"
        >
          Voltar
        </button>
        <ListaCategorias />
      </div>
    </div>
  );
}
