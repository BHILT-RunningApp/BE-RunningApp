const methodNotAllowed = (req, res, next) => {
    const method = req.method;
    res.status(405).json({ msg: `${method} method not allowed on this endpoint.` })
}

const customErrors = (err, req, res, next) => {
    console.log('gets here!')
    res.status(err.status).json(err)
}

module.exports = { methodNotAllowed }