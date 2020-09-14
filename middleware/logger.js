function logger(req, res, next) {
    console.log(`[Log] : Requesting ${req.method} to ${req.url} `);
    next()
} 

module.exports = logger