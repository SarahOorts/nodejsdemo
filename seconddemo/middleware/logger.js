const logger = (req, res, next) => {
    console.log("voila");
    next();
}

module.exports = logger;