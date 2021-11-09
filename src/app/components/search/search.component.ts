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


  filterUni(filter:string){
    console.log(filter);
    let res = this.elementsOriginal
    console.log(res.filter(elem => elem.university == filter)); 
    res = res.filter(elem => elem.university == filter)  
    return res
  }
}
