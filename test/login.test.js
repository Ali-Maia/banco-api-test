const request = require('supertest');
const {expect} = require('chai');

// 1 - mocha para estrutrar e executar os testes
describe('Login', () => {
  describe('POST /login', () => {
    it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {
      // 2 - SUPERTEST para fazer a requisção na API
        const resposta = await request('http://localhost:3000') 
          .post('/login') // método a ser utilizado
          .set('Content-Type', 'application/json') //cabeçalho da requisição e de qual tipo
          .send({ //O que será mandado para a api
              'username': 'junio.lima',
              'senha': '123456'
            })
      // 3 - CHAI para fazer as validações//asserções
        expect(resposta.status).to.equal(200) // verifica o status code da resposta | validar se é igual
        expect(resposta.body.token).to.be.a('string') // verifica se dentro do corpo da resposta na proprieda token |validar o tipo
    })
  })
})