import { Component, Input, OnInit } from '@angular/core';
import { UniDto } from '../constants/UniDto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Input() elementsOriginal: UniDto[];
  
  public filter: string

  constructor() {
    this.elementsOriginal = []
    this.filter = ''
   }

  ngOnInit(): void {
  }


  filterUni(){
    let elementsFiltered = this.elementsOriginal;
    elementsFiltered = elementsFiltered.filter( (element) => element.university == this.filter )
  }
}
