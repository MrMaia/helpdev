import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export interface LinkItem {
  categoriaSlug: string;
  title: string;
  url: string;
  description: string;
}

interface ListaLinksProps {
  links: LinkItem[];
}

export default function ListaLinks({ links }: ListaLinksProps) {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [filteredLinks, setFilteredLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    if (categorySlug) {
      const filtered = links.filter(
        (link) => link.categoriaSlug === categorySlug
      );
      setFilteredLinks(filtered);
    }
  }, [categorySlug, links]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 hover:shadow-xl"
          >
            <h2 className="text-lg text-white font-semibold mb-2">{link.title}</h2>
            <p className="text-sm text-white truncate">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
