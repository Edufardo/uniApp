export class UniPhotoDto {
    site: string;
    imgUni?: string;
    imgSite?: string;

    constructor(site:string, imgUni:string, imgSite:string){
        this.site = site,
        this.imgUni = imgUni,
        this.imgSite = imgSite
    }
}