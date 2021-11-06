import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniDto } from '../constants/UniDto';
import { UniPhotoDto } from '../constants/UniPhotoDto';

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient){}

	postUniPhoto(uniPhoto: UniPhotoDto):Observable<any>{
		console.log(uniPhoto);
		
		return this.http.post(`http://localhost:3000/uni-photo/add/${uniPhoto.site}`, { uniPhoto })
	}
}