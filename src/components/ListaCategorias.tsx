import { useNavigate } from "react-router-dom";
import { JSX, useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
  icon: JSX.Element;
}

export default function ListaCategorias() {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categorias);
      })
      .catch((error) => console.error("Erro ao carregar dados das categorias:", error));
  }, []);

  const handleCategoryClick = (slug: string) => {
    navigate(`/links/${slug}`);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => handleCategoryClick(category.slug)}
          className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 hover:shadow-xl cursor-pointer"
        >
          <div className="text-4xl mb-2">{category.icon}</div>
          <span className="text-center">{category.name}</span>
        </div>
      ))}
    </div>
  );
}
