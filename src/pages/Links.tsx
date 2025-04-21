import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ListaLinks, { LinkItem } from "../components/ListaLinks";
import Navbar from "../components/Navbar";
import { IoWarningOutline } from "react-icons/io5";

export default function Links() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [links, setLinks] = useState<LinkItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredLinks = data.links.filter(
          (link: LinkItem) => link.categoriaSlug === categorySlug
        );
        setLinks(filteredLinks);
      })
      .catch((error) =>
        console.error("Erro ao carregar dados dos links:", error)
      );
  }, [categorySlug]);

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
        <h1 className="text-2xl font-bold mb-6 text-white">Links</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded mb-4 bg-white text-black hover:bg-stone-400"
        >
          Voltar
        </button>
        <div className="bg-black p-6 rounded-lg shadow">
          <ListaLinks links={links} />
        </div>
      </div>
    </div>
  );
}
