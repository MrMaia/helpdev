import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Links from "./pages/Links";
import NotFound from './pages/NotFound';
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/links/:categoriaSlug" element={<Links />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
