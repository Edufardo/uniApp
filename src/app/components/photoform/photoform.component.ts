import { Component, OnInit } from '@angular/core';
import { UniPhotoDto } from '../constants/UniPhotoDto';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photoform',
  templateUrl: './photoform.component.html',
  styleUrls: ['./photoform.component.css'],
  providers: [PhotoService]
})
export class PhotoformComponent implements OnInit {

  public uniPhoto: UniPhotoDto;

  constructor(private photoService: PhotoService) { 
    this.uniPhoto = {
      site: '',
      imgCity: '',
    }
  }

  ngOnInit(): void {
  }

  addPhoto(){
    if(this.uniPhoto){
      this.photoService.postUniPhoto(this.uniPhoto)
    } else {
      throw new Error ("No hay data")
    }
  }
}
