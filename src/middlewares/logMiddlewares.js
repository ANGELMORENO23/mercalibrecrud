const fs = require("fs");
const path = require("path")
const texto = path.join(__dirname,"../logs/userLogs.txt")

function userLogs (req, res, next){
    const ingreso = `El usuario ingresó a la ruta: ${req.url}\n`
    fs.appendFileSync(texto,ingreso)
next();

}
module.exports = userLogs;