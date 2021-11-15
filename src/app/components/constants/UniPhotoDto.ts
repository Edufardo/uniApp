export class UniPhotoDto {
    site: string;
    imgCity?: string;

    constructor(site:string, imgCity:string){
        this.site = site,
        this.imgCity = imgCity
    }
}