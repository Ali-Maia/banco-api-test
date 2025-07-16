const request = require('supertest')
const { expect } = require('chai')

describe('Transferências', () => {
  describe('POST /transferencias', () => {
    it('Deve retornar sucesso com 201 quando o valor da transferência for igual ou acima de R$ 10,00', async () => {
      // Capturar o token
      const respostaLogin = await request('http://localhost:3000') 
        .post('/login') // método a ser utilizado
        .set('Content-Type', 'application/json') //cabeçalho da requisição e de qual tipo
        .send({ //O que será mandado para a api
          'username': 'junio.lima',
          'senha': '123456'
        })

      const token = respostaLogin.body.token

      const resposta = await request('http://localhost:3000')
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 10,
          token: ''
        })
      expect(resposta.status).to.equal(201)

    })
    it('Deve retornar sucesso com 402 quando o valor da transferência for abaixo de R$ 10,00', async () => {

            // Capturar o token
      const respostaLogin = await request('http://localhost:3000') 
        .post('/login') // método a ser utilizado
        .set('Content-Type', 'application/json') //cabeçalho da requisição e de qual tipo
        .send({ //O que será mandado para a api
          'username': 'junio.lima',
          'senha': '123456'
        })

      const token = respostaLogin.body.token

      const resposta = await request('http://localhost:3000')
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 7,
          token: ''
        })
      expect(resposta.status).to.equal(422)

    })
  })
})