const { authSecret } = require('../.env')
const jwt = require('jwt-simple') // Irá gerar o Token.
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) {
            return res.status(404).send('Informe o usuário e senha!')
        }

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (!user) return res.status(404).send('Email não cadastrado')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).send('Usuário ou Senha inválidos')

        const now = Math.floor(Date.now() / 1000) // Obtendo valor da data em segundos. Referência 1970

        const payload = { // Conteúdo JWT.
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now, // Issued at (emitido em..)
            exp: now + (60 * 60 * 3) // 60 segundos * 60 minutos * 24 (1 DIAS) * 3 (3 DIAS)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try{
            if(userData){
                const token = jwt.decode(userData.token, authSecret) // Decodificando Token.
                if(new Date(token.exp * 1000) > new Date()){
                    return res.send(true)
                }
            }
        }catch(e) {
            // Problema com o token
        }

        res.send(false)
    }

    return { signin, validateToken }
}