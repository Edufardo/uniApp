import { Component, Input, OnInit } from '@angular/core';
import { UniDto } from '../constants/UniDto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Input() elementsOriginal: UniDto[];
  items:number[]
  
  public filter: string

  constructor() {
    this.elementsOriginal = [

    ]
    this.items = [1, 2, 3]
    this.filter = ''
   }

  ngOnInit(): void {
  }


  filterUni(filter:string){
    let res = this.elementsOriginal.filter(elem => {
      elem.site == filter
    })
    console.log(res);
    return res
  }
}
