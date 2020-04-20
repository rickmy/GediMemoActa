export class ActasReuniones {
    coordinador : string
    secretaria : string
    involucrados : Docentes[]=[]
    ordenDelDia  : Orden[] = []
    revisado : string
    aprobadoUno : string
    aprobadoDos : string
    aprobadoTres : string
    aprobadoCuatro : string
<<<<<<< HEAD
    codigoDocumento:string
    fechaCodigo:string
=======
>>>>>>> 6e05be222768b5e8fc47ba880202965338b06f89

    constructor(){
        this.ordenDelDia.push(new Orden())
        this.involucrados.push(new Docentes())
    }
}

export class Orden {
    orden : string
    descripcion : string
}

export class Docentes {
    nombre : string
    cargo : string
}