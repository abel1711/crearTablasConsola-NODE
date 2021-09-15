const argv = require ('yargs').option({'b':{
                                        alias: 'base',
                                        demandOption: true,
                                        describe: 'indica la base a multiplicar',
                                        type: 'number'
                                    },'p':{
                                        alias: 'producto',
                                        demandOption: false,
                                        defauld: 10,
                                        describe:'indica el producto a multiplicar',
                                        type:'number'
                                    },'l':{
                                        alias:'listar',
                                        demandOption: false,
                                        defauld: false,
                                        describe:'Pon la bandera si quieres visualizar la tabla en consola',
                                        type:'boolean'
                                        }})
                                    .check((argv, options) => {
                                        const base = argv.base
                                        if (isNaN(base)) {
                                        throw new Error("La base reciber como valor un numero");
                                        } else {
                                        return true;
                                    }
                                    })
                                    .argv;

module.exports= argv;