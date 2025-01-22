# Repository Component

Este projeto é um componente React que exibe informações detalhadas sobre repositórios, como nome, descrição, linguagem utilizada e um link para acessá-lo. Ele é projetado para ser reutilizável e extensível, sendo ideal para integrar em aplicações que consomem APIs como a do GitHub.

## Funcionalidades

- **Exibição de Informações Básicas:**
  - Nome do repositório.
  - Descrição do repositório (com fallback para descrições ausentes).
  - Linguagem principal utilizada, destacada por uma cor específica.

- **Link Externo Seguro:**
  - Inclui um botão para acessar o repositório diretamente no GitHub, abrindo em uma nova aba.

- **Design Dinâmico:**
  - O componente utiliza cores associadas às linguagens de programação, com base em uma configuração pré-definida (`langColors`).

## Tecnologias Utilizadas

- **React:** Framework para criação da interface do usuário.
- **PropTypes:** Validação de tipos de propriedades para garantir a integridade dos dados recebidos.
- **Styled Components:** Estilização dinâmica e encapsulada.

## Como Utilizar

1. Instale as dependências necessárias:
   ```bash
   npm install
