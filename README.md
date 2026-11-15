# 🚀 Portfólio Mobile — Marcos Dalyson

Ciência da Computação • Desenvolvimento Mobile • React Native • Expo

---

## 📌 Sobre o projeto

Este projeto é a versão mobile do meu portfólio acadêmico e profissional, desenvolvido com **React Native e Expo**.

A aplicação apresenta minha formação acadêmica, experiência profissional, habilidades, projetos e informações pessoais por meio de uma interface organizada em telas independentes.

O aplicativo também conta com um **Jogo da Forca nativo**, desenvolvido com React Native e TypeScript, utilizando gerenciamento de estado e componentes interativos.

O projeto representa a migração do meu portfólio original, desenvolvido com **React e Next.js**, para o ambiente de desenvolvimento mobile.

---

## 🎯 Objetivos

- Apresentar minha formação acadêmica e trajetória na área de tecnologia;
- Reunir meus principais projetos;
- Mostrar meus conhecimentos técnicos e habilidades;
- Migrar um projeto web para uma aplicação mobile;
- Praticar React Native, Expo e TypeScript;
- Implementar navegação entre telas utilizando Expo Router;
- Desenvolver um jogo interativo com componentes nativos;
- Criar uma interface adaptada a dispositivos móveis;
- Acompanhar minha evolução no desenvolvimento de software.

---

## 🛠️ Tecnologias

### Linguagens, Frameworks e Bibliotecas

| Tecnologia | Utilização |
| :--- | :--- |
| **React Native** | Desenvolvimento da interface mobile |
| **Expo** | Ambiente e ferramentas de desenvolvimento |
| **React** | Criação e organização dos componentes |
| **TypeScript** | Tipagem e lógica da aplicação |
| **TSX** | Estrutura dos componentes visuais |
| **Expo Router** | Navegação e gerenciamento de rotas |
| **React Hooks** | Gerenciamento de estado e funcionalidades |
| **StyleSheet** | Estilização dos componentes |
| **React Native Safe Area Context** | Adaptação da interface às áreas seguras da tela |
| **React Native Linking** | Abertura de links externos |

### Ferramentas

| Ferramenta | Utilização |
| :--- | :--- |
| **Git** | Controle de versão |
| **GitHub** | Armazenamento do código-fonte |
| **VS Code** | Desenvolvimento |
| **Node.js** | Ambiente de execução das ferramentas |
| **npm** | Gerenciamento de dependências |
| **Expo Go** | Execução e testes do aplicativo em dispositivos móveis |

---

## ⚙️ Funcionalidades

### 📱 Portfólio Mobile

- 🪪 Apresentação pessoal;
- 🎓 Formação acadêmica;
- 💼 Experiência profissional;
- 💻 Projetos acadêmicos e pessoais;
- 🏆 Atividades extracurriculares;
- 💡 Habilidades e tecnologias;
- 📩 Informações de contato;
- 🔗 Links para GitHub, LinkedIn e repositórios;
- 📱 Interface adaptada a dispositivos móveis;
- 🧭 Navegação entre telas utilizando Expo Router.

### 🗂️ Telas do aplicativo

O aplicativo possui **seis telas principais**, organizadas por meio do Expo Router.

| Tela | Descrição |
| :--- | :--- |
| 🏠 **Home** | Apresentação pessoal, resumo e navegação |
| 👤 **Sobre** | Informações pessoais, habilidades e tecnologias utilizadas |
| 🎓 **Experiência Acadêmica** | Formação acadêmica e atividades extracurriculares |
| 💼 **Experiência Profissional** | Objetivos profissionais e áreas de interesse |
| 💻 **Projetos** | Apresentação dos projetos desenvolvidos |
| 🎮 **Jogo da Forca** | Jogo interativo implementado nativamente |

Cada tela possui seu próprio arquivo `.tsx`, permitindo uma organização modular da aplicação.

---

## 🎮 Jogo da Forca

O aplicativo inclui um Jogo da Forca desenvolvido **nativamente com React Native**, sem utilização de WebView ou redirecionamento para páginas externas.

### Funcionalidades do jogo

- 🎲 Escolha aleatória de palavras;
- 🏷️ 3 categorias diferentes;
- 📝 30 palavras disponíveis;
- ⌨️ Teclado interativo;
- ❤️ 6 tentativas;
- 🟢 Identificação de letras corretas;
- 🔴 Identificação de letras incorretas;
- 🏆 Mensagem de vitória;
- 💀 Mensagem de derrota;
- 🔄 Botão para iniciar uma nova partida;
- 📱 Interface adaptada ao dispositivo móvel.

---

## 📚 Categorias do Jogo

O Jogo da Forca possui três categorias:

- 🐶 **Animais**
- 🪑 **Objetos**
- 🍕 **Comidas**

*Cada categoria possui 10 palavras, totalizando 30 palavras.*

---

## 📁 Estrutura do projeto

```text
portfolio-com-expo/
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── sobre.tsx
│   │   ├── academica.tsx
│   │   ├── profissional.tsx
│   │   ├── projetos.tsx
│   │   └── jogo.tsx
│   │
│   ├── components/
│   ├── constants/
│   └── hooks/
│
├── assets/
├── package.json
└── README.md
```

### Organização das telas

- `index.tsx` — Tela inicial do portfólio;
- `sobre.tsx` — Informações pessoais e tecnologias;
- `academica.tsx` — Experiência acadêmica;
- `profissional.tsx` — Experiência profissional;
- `projetos.tsx` — Projetos desenvolvidos;
- `jogo.tsx` — Jogo da Forca nativo;
- `_layout.tsx` — Configuração da navegação com Expo Router.

---

## ▶️ Como executar o projeto

### Pré-requisitos

- Node.js instalado;
- npm disponível;
- VS Code ou outro editor de código;
- Aplicativo Expo Go no dispositivo móvel.

### 1. Clonar o repositório

```bash
git clone https://github.com/marcosdalysonsb/portfolio-com-expo.git
```

### 2. Acessar a pasta do projeto

```bash
cd portfolio-com-expo
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o Expo

```bash
npx expo start
```

### 5. Executar no celular

Abra o aplicativo **Expo Go** e escaneie o QR Code exibido no terminal.

O aplicativo será carregado no dispositivo para testes e navegação.

---

## 🔄 Migração do Portfólio Web para Mobile

O projeto original foi desenvolvido com **React e Next.js**, utilizando tecnologias voltadas ao desenvolvimento web.

Nesta versão, a aplicação foi adaptada para **React Native e Expo**, substituindo elementos HTML e estilos CSS por componentes e recursos nativos.

### Principais adaptações

| Versão Web | Versão Mobile |
| :--- | :--- |
| Next.js | React Native + Expo |
| HTML | Componentes View, Text e ScrollView |
| CSS | StyleSheet |
| Navegação entre seções | Expo Router |
| Eventos de clique | Eventos de toque |
| Jogo da Forca Web | Jogo da Forca nativo |
| Navegador | Aplicativo mobile |

O objetivo da migração foi preservar o conteúdo e as funcionalidades principais do portfólio, adaptando sua estrutura ao ambiente mobile.

---


## 👨‍💻 Autor

**Marcos Dalyson**
