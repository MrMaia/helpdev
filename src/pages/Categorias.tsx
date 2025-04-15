import { Link } from "react-router-dom";

const categorias = ["frontend", "backend", "devops"];

export default function Categorias() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Categorias</h1>
      <ul className="space-y-4">
        {categorias.map((cat) => (
          <li key={cat}>
            <Link to={`/categorias/${cat}`} className="text-amber-400 underline">
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
