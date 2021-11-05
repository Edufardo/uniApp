import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniDto } from '../constants/UniDto';

@Injectable()
export class CardService {

    constructor(private http: HttpClient){}

	getUnis():Observable<any>{
		return this.http.get('http://localhost:3000/uni')
	}

}