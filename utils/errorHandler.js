const methodNotAllowed = (req, res, next) => {
    const method = req.method;
    res.status(405).json({ msg: `${method} method not allowed on this endpoint.` })
}

const customErrors = (err, req, res, next) => {
    console.log('gets here!')
    if (err.status) {
        res.status(err.status).json(err)
    } else next(err)
}

const allOtherErrors = (err, req, res, next) => {
    res.status(500).json({ msg: 'server error. Something has gone very wrong' })
}

module.exports = { methodNotAllowed }