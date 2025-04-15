// src/pages/Links.tsx
import { useParams } from "react-router-dom";

export default function Links() {
  const { slug } = useParams();

  // Aqui você poderia buscar os links de acordo com o slug
  // Por exemplo: fetch(`/api/links/${slug}`) ou um objeto local

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Categoria: {slug}</h1>
      <p className="text-gray-400">Aqui serão exibidos os links da categoria "{slug}"</p>
    </div>
  );
}
