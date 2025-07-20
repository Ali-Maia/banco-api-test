# Banco API Test

Repositório de automação de testes para a API REST do projeto [banco-api](https://github.com/juliodelimas/banco-api).

## 📅 Objetivo

Este projeto tem como objetivo automatizar os testes da API de um sistema bancário utilizando ferramentas do ecossistema JavaScript. Os testes abrangem múltiplos endpoints da API para testar que as funcionalidades estejam funcionando conforme esperado.

## ⚖️ Stack Utilizada

- **JavaScript**
- **Node.js**
- **Mocha** - Framework de testes
- **Chai** - Biblioteca de asserções
- **Supertest** - Para requisições HTTP
- **Dotenv** - Carregamento de variáveis de ambiente
- **Mochawesome** - Geração de relatórios em HTML

## 📂 Estrutura de Diretórios

```
banco-api-tests/
├── test/                # Casos de testes organizados por funcionalidades
|  ├──login.test.js
|  ├──transferencias.test.js
├── mochawesome-report/ # Diretório onde o relatório HTML é gerado automaticamente
├── .env                 # Arquivo de variáveis de ambiente (ignorado no Git)
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação do projeto
```

## 🔢 Formato do Arquivo `.env`

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

> Substitua `http://localhost:3000` pela URL base onde a API `banco-api` estiver sendo executada.

## ⚡ Comandos

### Instalar dependências

```bash
npm install
```

### Executar os testes

```bash
npm test
```

### Gerar e abrir o relatório mochawesome

```bash
npx mochawesome-merge ./mochawesome-report/*.json | npx mochawesome-report-generator --reportDir=mochawesome-report --reportFilename=index
```

Após a geração, abra o arquivo:

```
mochawesome-report/index.html
```

## 🔗 Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Mochawesome](https://github.com/adamgruber/mochawesome)

---

✅ Projeto mantido por [Ali Maia](https://github.com/Ali-Maia)

Confira também o repositório da API testada: [banco-api](https://github.com/juliodelimas/banco-api)

