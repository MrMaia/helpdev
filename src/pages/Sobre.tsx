import { Background } from "../components/Background";
import Navbar from "../components/Navbar";
import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaLink,
  FaLaptopCode,
  FaComputerMouse,
  FaDatabase,
  FaArrowUpRightFromSquare,
  FaShield,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa6";

export default function Sobre() {
  return (
    <div>
      <Background />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 rounded-2xl opacity-60 blur-3xl -z-10 gradient-animate" />
            <div className="text-center space-y-8 max-w-3xl mx-auto px-4">
              <div className="inline-flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <i className="fas fa-book text-blue-500" />
                <span className="text-white/70 text-sm">
                  Central de Ferramentas para Desenvolvedores
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Sobre o HelpDev
                </h1>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                  O HelpDev conecta você a um acervo curado de ferramentas,
                  tutoriais e integrações que aceleram o fluxo de trabalho e
                  estimulam a colaboração entre desenvolvedores.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/5 text-white/60 text-sm">
                  <i className="fas fa-shield text-blue-500 text-xs" />
                  <span>Links Verificados</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/5 text-white/60 text-sm">
                  <i className="fas fa-bolt text-blue-500 text-xs" />
                  <span>Acesso Instantâneo</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/5 text-white/60 text-sm">
                  <i className="fas fa-users text-blue-500 text-xs" />
                  <span>Colaboração Aberta</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-500/50" />
                <span className="w-1 h-1 rounded-full bg-blue-500/30" />
                <span className="w-1 h-1 rounded-full bg-blue-500/20" />
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4 rounded-xl p-4 w-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30 hover:-translate-y-1 hover:bg-black/30 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <FaDatabase className="text-emerald-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white animate-fade-in">
                      +10
                    </h3>
                    <p className="text-white/50 text-sm">Categorias</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4 rounded-xl p-4 w-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30 hover:-translate-y-1 hover:bg-black/30 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <FaArrowUpRightFromSquare className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white animate-fade-in">
                      +30
                    </h3>
                    <p className="text-white/50 text-sm">Links Úteis</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center gap-4 rounded-xl p-4 w-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30 hover:-translate-y-1 hover:bg-black/30 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <i className="fas fa-download " />
                    <FaComputerMouse className="text-amber-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white animate-fade-in">
                      +2000
                    </h3>
                    <p className="text-white/50 text-sm">Acessos Realizados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">
              Níveis de Confiabilidade
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-black/20 border border-white/5 border-glow">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Confiável</h3>
                  <p className="text-white/60 text-sm">
                    Ferramentas validadas pela equipe para uso seguro em
                    produção.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-black/20 border border-white/5 border-glow">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Recomendado</h3>
                  <p className="text-white/60 text-sm">
                    Indicadas pela comunidade; revise a documentação antes de
                    integrar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-black/20 border border-white/5 border-glow">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">
                    Use por Sua Conta e Risco
                  </h3>
                  <p className="text-white/60 text-sm">
                    Conteúdos não verificados que podem apresentar riscos —
                    utilize com cautela.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-black/20 border border-white/5 border-glow">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Recente</h3>
                  <p className="text-white/60 text-sm">
                    Ferramentas recém-adicionadas aguardando avaliação da
                    comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6 glow-text-hover">
              Funcionalidades
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/20 border border-white/5 border-glow">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <FaClipboardList className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">
                    Catálogo Inteligente{" "}
                    <div className="badge badge-primary">EM BREVE</div>
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Pesquise, filtre e organize ferramentas por linguagem, stack
                    ou finalidade em segundos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/20 border border-white/5 border-glow">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <FaShield className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">
                    Validação de Segurança
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Checagens automáticas e notas da comunidade sobre
                    confiabilidade e licenciamento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-black/20 border border-white/5 border-glow">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <FaUsers className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">
                    Feedback da Comunidade
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Avaliações, comentários e tutoriais criados por
                    desenvolvedores para desenvolvedores.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6 glow-text-hover">
              Sobre o Criador
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-full md:w-64 bg-black/20 rounded-xl border border-white/5 p-6 text-center mb-6 glow-on-hover">
                <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/20 flex items-center justify-center mx-auto mb-4 transform hover:scale-105 transition-transform duration-300">
                  <FaCode className="text-blue-500 text-5xl" />
                </div>
                <h3 className="text-white font-medium text-lg mb-1">
                  <span className="text-blue-500">&lt;</span>
                  Allan-Maia
                  <span className="text-blue-500">/&gt;</span>
                </h3>
                <p className="text-white/50 text-sm mb-3">
                  Desenvolvedor Full-Stack
                </p>

                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://github.com/MrMaia"
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 group pulse-on-hover"
                  >
                    <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/allan-maia51/"
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 group pulse-on-hover"
                  >
                    <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://allanmaia.com/"
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 group pulse-on-hover"
                  >
                    <FaLink className="text-lg group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="bg-black/20 rounded-xl border border-white/5 p-6 mb-6">
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <i className="fas fa-user-circle text-blue-500" />
                    <span>Sobre</span>
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Sou Allan Maia, idealizador do HelpDev. Criei esta
                    plataforma para unir desenvolvedores em torno de ferramentas
                    seguras, gratuitas e eficientes — encurtando o caminho entre
                    ideia e implementação.
                  </p>
                </div>

                <div className="bg-black/20 rounded-xl border border-white/5 p-6">
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <i className="fas fa-code-branch text-blue-500" />
                    <span>Projetos Principais</span>
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5 hover:border-blue-500/20 transition-colors duration-200 mb-3 border-glow gradient-animate">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                        <FaLaptopCode className="text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-medium">HelpDev</h5>
                        <p className="text-blue-400/70 text-sm">
                          Plataforma central para descoberta e gestão de
                          ferramentas de desenvolvimento.
                        </p>
                      </div>
                    </div>

                    {/* Adicione caso tenha mais (copie o de cima) */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
