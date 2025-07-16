const request = require('supertest')

const obterToken = async (usuario, senha) => {
  // Capturar o token
  const respostaLogin = await request(process.env.BASE_URL) 
    .post('/login') // método a ser utilizado
    .set('Content-Type', 'application/json') //cabeçalho da requisição e de qual tipo
    .send({ //O que será mandado para a api
      'username': usuario,
      'senha': senha
    })

  return respostaLogin.body.token
}

module.exports = {
  obterToken
}