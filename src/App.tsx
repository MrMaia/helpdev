import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categorias from "./pages/categorias";
import Links from "./pages/Links";
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/categorias/:slug" element={<Links />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
