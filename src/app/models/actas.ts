export class Actas {
    titulo : string
    inicio : string
    ordenDelDia  : Orden[] = []
    desarrollo : string
    despedida : string
    codigoDocumento:string;
    fechaCodigo:string;
    constructor(){
        this.ordenDelDia.push(new Orden())
    }
}

export class Orden {
    orden : string
<<<<<<< HEAD
}
=======
}
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
