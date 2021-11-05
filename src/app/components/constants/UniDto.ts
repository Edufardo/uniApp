export class UniDto {
    university: string;
    site: string;
    ca: string;
    fundation: number;
    modelo: string;

    constructor(university:string, site:string, ca:string, fundation: number, modelo: string){
        this.university = university,
        this.site = site,
        this.ca = ca,
        this.fundation = fundation, 
        this.modelo = modelo
    }
}