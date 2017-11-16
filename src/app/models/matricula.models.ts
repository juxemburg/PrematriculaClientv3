export class Materia {
    constructor(public id: string, public nombre: string,
        public numSemestre: number, public idProg: string,
        public creditos: number) { }
}
export class MateriaGroup {
    constructor(public numSemestre: string,
        public materias: Materia[]) { }
}
export class Programa {
    constructor(public id: string, public nombre: string,
        public codigo: string, public iniciales: string) { }
}
export class Prematricula {
    public fecha: Date;
    constructor(public idEst: string, public idProg: string,
        public periodo: string, public materias: string[],
        public numElectivas: number, public numFish: number,
        public etica: boolean, public aff: boolean,
        public diligenciada: boolean) {
        this.fecha = new Date();
    }
}
export class Estudiante {
    constructor(public id: string, public nombres: string,
        public apellidos: string, public codigos: string[],
        public programas: Programa[]) { }

    }
export class Coordinador {
    constructor(public id: string, public nombres: string,
        public apellidos: string, public idPrograma: string) { }
}