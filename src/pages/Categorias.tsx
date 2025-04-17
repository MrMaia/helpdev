import Navbar from "../components/Navbar";
import ListaCategorias from "../components/ListaCategorias";

export default function Categorias() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-black p-6 flex-1 md:text-center">
        <h1 className="text-2xl font-bold mb-6 text-white">Categorias</h1>
        <ListaCategorias />
      </div>
    </div>
  );
}
