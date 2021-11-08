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

	getWeather(city:string){
		const apiKey:string = 'f4c89cfde0909de9d2b07c1969e1e2ab'
		const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
		return this.http.get(url);
		
	}
}