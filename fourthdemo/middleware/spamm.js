function spam(req, res, next){
    console.log("spam check");
    next();
}

module.exports = spam;