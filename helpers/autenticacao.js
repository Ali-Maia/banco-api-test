const request = require('supertest')
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async (usuario, senha) => {
  const bodyLogin = { ...postLogin }
  // Capturar o token
  const respostaLogin = await request(process.env.BASE_URL) 
    .post('/login') // método a ser utilizado
    .set('Content-Type', 'application/json') //cabeçalho da requisição e de qual tipo
    .send(bodyLogin) // o que será mandado para a API

  return respostaLogin.body.token
}

module.exports = {
  obterToken
}