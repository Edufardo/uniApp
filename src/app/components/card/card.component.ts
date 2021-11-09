import { Component, Input, OnInit } from '@angular/core';
import { UniDto } from '../constants/UniDto';
import { UniPhotoDto } from '../constants/UniPhotoDto';
import { CardService } from './card.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers:[CardService]
})
export class CardComponent implements OnInit {

  public elementsOriginal: UniDto[]
  public uni: UniDto;
  public unis: UniDto[];
  public prov: [] = []

  constructor(private loginService: CardService, private router: Router) {
    this.uni = {
      university: '',
      site: '',
      ca: '',
      fundation: 0,
      modelo: ''
    }
    this.unis = []
    this.elementsOriginal = []
  }
  ngOnInit(): void {
    this.getUnis()
    this.getProvCod()
  }

  getWeather(city: string){
  this.loginService.getWeather(city).subscribe(
      res => {
        console.log(res);    
      }
    )
  }

  getProvCod(){
    this.loginService.getProvCode().then((res)=> {
      console.log(res.valueOf);
      
      
    });
  }

  getUnis() {
    if (this.uni) {
      console.log(this.uni);
      this.loginService.getUnis().subscribe(res => {
        console.log(res);
        this.unis = res
        this.elementsOriginal = res
        // this.uni = this.unis[4]
        // this.getWeather(this.uni.site);
      });
    } else {
      throw new Error('No uni');
    }
  }

  filterUni(unis:UniDto[]){
    for (let i = 0; i < this.unis.length; i++) {
      let filtered = this.unis.filter(name => this.unis[i].site === this.uni.site) 
      console.log(filtered);
    }
    this.filterUni(this.unis)
  }



  goToForm(site: string){
    this.router.navigateByUrl(`addPhoto/${site}`)
  }


}
