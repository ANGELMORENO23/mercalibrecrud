const fs = require("fs")
function logDBMiddlewares (req, res, next){
fs.appendFileSync("logDB.txt", "se creo un registro al ingresar en la pagina"+ req.url );
next();
}
module.exports = logDBMiddlewares;