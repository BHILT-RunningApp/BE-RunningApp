const methodNotAllowed = (req, res, next) => {
    console.log('gets here! ')
    const method = req.method;
    res.status(405).json({ msg: `${method} method not allowed on this endpoint.` })
}

module.exports = { methodNotAllowed }