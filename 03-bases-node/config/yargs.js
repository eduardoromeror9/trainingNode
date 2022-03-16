const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla de multiplicar"
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "El valor introducido no es un numero";
    }
    return true;
  }).argv;


module.exports = argv;