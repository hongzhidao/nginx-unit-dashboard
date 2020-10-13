import jwt from 'js/jwt.js'
import config from 'js/config.js'

function responseSuccess(r, data) {
    r.return(200, JSON.stringify(data))
}

function responseError(r, error) {
    r.return(403, JSON.stringify({error}))
}

function checkToken(r) {
    var args = r.variables.args
    var token = args ? args.token : null
    
    if (!token) {
        token = r.headersIn['X-Token']
    }

    if (jwt.verify(token, config.key)) {
        return true
    }

    responseError(r, "Invalid token.")
    return false 
}

function user(r) {
    switch (r.uri) {

    case '/user/login':
        var user = JSON.parse(r.requestBody)
        
        if (user.username != config.username) {
            return responseError(r, "Invalid username.")
        }

        var encoded = require('crypto').createHmac('md5', config.key)
                      .update(user.password).digest('hex')
        if (encoded != config.password) {
            return responseError(r, "Invalid password.")
        }

        var payload = {username = user.username}
        var token = jwt.sign(payload, config.key)

        responseSuccess(r, {
            username: config.username,
            token: token
        })
        
        break

    case '/user/info':
        if (!checkToken(r)) {
            return
        }

        responseSuccess(r, {
            username: config.username,
        })

        break

    case '/user/logout':
        r.return(200)
    }
}

function authorize(r) {
    if (!checkToken(r)) {
        return
    }

    r.return(200, "ok")
}

export default {user, authorize}
