const request = require('supertest')
const {expect} = require('chai')
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

// 1 - mocha para estrutrar e executar os testes
describe('Login', () => {
  describe('POST /login', () => {
    it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {
      const bodyLogin = { ...postLogin }
      
      // 2 - SUPERTEST para fazer a requisção na API
        const resposta = await request(process.env.BASE_URL) 
          .post('/login') // método a ser utilizado
          .set('Content-Type', 'application/json') //cabeçalho da requisição e de qual tipo
          .send(bodyLogin)
      // 3 - CHAI para fazer as validações//asserções
        expect(resposta.status).to.equal(200) // verifica o status code da resposta | validar se é igual
        expect(resposta.body.token).to.be.a('string') // verifica se dentro do corpo da resposta na proprieda token |validar o tipo
    })
  })
})