import { Component, OnInit } from '@angular/core';
import { UniDto } from '../constants/UniDto';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers:[CardService]
})
export class CardComponent implements OnInit {

  public uni: UniDto;
  public unis: UniDto[];

  constructor(private loginService: CardService) {
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
}
