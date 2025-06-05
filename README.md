# Estrutura do Projeto - Aplicativo Mobile de Gerenciamento de Cursos

## Visão Geral

Este é um aplicativo mobile desenvolvido com React Native e Expo que implementa um sistema de gerenciamento de cursos. O aplicativo utiliza Firebase para autenticação de usuários e armazenamento de dados (Firestore).

## Tecnologias Principais

- *React Native*: Framework para desenvolvimento de aplicações móveis
- *Expo*: Plataforma para facilitar o desenvolvimento React Native
- *Firebase*: 
  - Authentication: Gerenciamento de usuários
  - Firestore: Banco de dados NoSQL para armazenamento dos cursos
- *React Navigation*: Biblioteca para navegação entre telas
  - Stack Navigator: Navegação em pilha
  - Bottom Tab Navigator: Menu de navegação inferior

## Estrutura de Diretórios

### `src`

A pasta principal do código-fonte do aplicativo, organizada da seguinte maneira:

#### `src/config`

Contém configurações gerais do aplicativo:
- `firebaseConfig.js`: Configuração de conexão com o Firebase, utilizando variáveis de ambiente para as credenciais de API

#### `src/context`

Implementa o Context API do React para gerenciar estados globais:
- `AuthContext.js`: Gerencia o estado de autenticação do usuário, oferecendo:
  - Verificação de estado de autenticação
  - Controle de loading
  - Função de logout

#### `src/navigation`

Gerencia a navegação do aplicativo:
- `AppNavigation.js`: Define a estrutura de navegação combinando Stack e Tab Navigator:
  - Stack Navigator para fluxos principais (login, detalhes, formulários)
  - Tab Navigator para navegação principal entre Home e Perfil

#### `src/screens`

Contém todas as telas do aplicativo:
- `LoginScreen.js`: Tela de autenticação
- `RegisterScreen.js`: Tela de cadastro de usuários
- `HomeScreen.js`: Tela inicial com listagem de cursos
- `DetailsScreen.js`: Exibe detalhes de um curso específico
- `CursoFormScreen.js`: Formulário para criação/edição de cursos
- `ProfileScreen.js`: Perfil do usuário

#### `src/services`

Implementa a comunicação com APIs e serviços externos:
- `CursoService.js`: Fornece funções para operações CRUD com a coleção de cursos no Firestore:
  - `getCursos`: Busca cursos do usuário
  - `adicionarCurso`: Cria novo curso
  - `atualizarCurso`: Atualiza curso existente
  - `deletarCurso`: Remove curso

## Fluxo da Aplicação

1. O aplicativo inicia com o componente `App.js` na raiz, que configura:
   - `NavigationContainer`: Container principal para navegação
   - `AuthProvider`: Provedor de contexto de autenticação
   - `AppNavigation`: Estrutura de navegação

2. Fluxo do usuário:
   - Login/Registro através de Firebase Authentication
   - Navegação pela lista de cursos na Home
   - Opções para adicionar, visualizar detalhes, editar e excluir cursos
   - Perfil com informações do usuário e opção de logout

## Aspectos Relevantes para Entrevista Técnica

### Arquitetura

- *Context API*: Utilizada para gerenciar o estado global de autenticação
- *Componentização*: Separação clara entre telas e lógica de negócio
- *Serviços*: Abstração da comunicação com o Firebase em serviços dedicados

### Boas Práticas

- *Organização de Código*: Estrutura de diretórios bem definida e organizada por função
- *Variáveis de Ambiente*: Uso de dotenv para gerenciar credenciais
- *Confirmação de Ações*: Alertas de confirmação para ações críticas (ex: exclusão)
- *Reatividade*: Atualização automática da lista ao focar na tela (`useFocusEffect`)

### Segurança

- *Autenticação Firebase*: Implementação segura de login/registro
- *Regras de Acesso*: Filtro de dados por usuário (`where('userId', '==', userId)`)
- *Variáveis de Ambiente*: Credenciais não expostas diretamente no código

### Interface do Usuário

- *Estilização*: Uso de `StyleSheet` para estilos organizados
- *Feedback Visual*: Alertas e confirmações para ações do usuário
- *Navegação Intuitiva*: Combinação de navegação em pilha e abas inferiores

### Pontos de Extensibilidade

- A estrutura permite fácil adição de novas funcionalidades
- Separação clara entre UI e lógica de negócios facilita manutenção e testes
- Serviços isolados permitem alteração da fonte de dados sem impactar a UI
