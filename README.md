# HelpDev

HelpDev é um projeto open-source que auxilia desenvolvedores a descobrir bibliotecas, ferramentas e recursos essenciais para otimizar seu fluxo de trabalho e aprimorar o desenvolvimento de software.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida e moderna.
- **TailwindCSS**: Framework CSS utilitário para estilização.
- **DaisyUI**: Componentes estilizados para TailwindCSS.
- **React Router**: Gerenciamento de rotas no React.
- **React Icons**: Ícones para React.

## Funcionalidades

- **Categorias**: Navegue por categorias de ferramentas e recursos.
- **Links**: Descubra links úteis organizados por categoria.
- **Interface Responsiva**: Design adaptado para diferentes tamanhos de tela.
- **Movido pela Comunidade**: Recursos e links verificados pela comunidade.

## Estrutura do Projeto

```
├── public/
│   ├── data.json          # Dados de categorias e links
│   ├── helpdev.svg        # Ícone do projeto
├── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas do projeto
│   ├── assets/            # Recursos visuais
│   ├── App.tsx            # Configuração de rotas
│   ├── main.tsx           # Ponto de entrada do React
│   ├── index.css          # Estilos globais
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Dependências e scripts do projeto
├── tsconfig.json          # Configuração do TypeScript
├── vite.config.ts         # Configuração do Vite
```

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/MrMaia/helpdev.git
   cd helpdev
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse o projeto no navegador:
   ```
   http://localhost:5173
   ```

## Contribuindo

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça as alterações necessárias e commit:
   ```bash
   git commit -m "Descrição da minha feature"
   ```
4. Envie suas alterações:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
