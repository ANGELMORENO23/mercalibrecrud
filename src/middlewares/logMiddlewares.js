const fs = require("fs")
function logMiddlewares (req, res, next){
fs.appendFileSync("log.txt", "se ingreso a la pagina"+ req.url );
next();
}
module.exports = logMiddlewares;