import { Component, OnInit } from '@angular/core';
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

  public uni: UniDto;
  public unis: UniDto[];



  constructor(private loginService: CardService, private router: Router) {
    this.uni = {
      university: '',
      site: '',
      ca: '',
      fundation: 0,
      modelo: ''
    }
    this.unis = []

  }
  ngOnInit(): void {
    this.getUnis()
  }

  getUnis() {
    if (this.uni) {
      console.log(this.uni);
      this.loginService.getUnis().subscribe(res => {
        console.log(res);
        this.unis = res
      });
    } else {
      throw new Error('No uni');
    }
  }

  goToForm(site: string){
    this.router.navigateByUrl(`addPhoto/${site}`)
  }

}
