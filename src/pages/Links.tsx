// pages/Links.tsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListaLinks, { LinkItem } from "../components/ListaLinks"; // Agora importando o tipo LinkItem
import Navbar from "../components/Navbar";

export default function Links() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [links, setLinks] = useState<LinkItem[]>([]); // Tipando corretamente o estado links com LinkItem

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredLinks = data.links.filter(
          (link: LinkItem) => link.categoriaSlug === categorySlug
        );
        setLinks(filteredLinks);
      })
      .catch((error) => console.error("Erro ao carregar dados dos links:", error));
  }, [categorySlug]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-black p-6 flex-1 md:text-center">
        <h1 className="text-2xl font-bold mb-6 text-white">Links</h1>
        <div className="bg-black p-6 rounded-lg shadow">
          <ListaLinks links={links} />
        </div>
      </div>
    </div>
  );
}
