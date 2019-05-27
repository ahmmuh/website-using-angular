import { Component, OnInit } from '@angular/core';
import { Photos } from 'src/models/data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

photos: Photos[];

  constructor(private photosService: ApiService) { }

  ngOnInit() {
    this.getPhotos()
  }

  getPhotos(){
    this.photosService
    .getPhotos()
    .subscribe(
      
      data => {
        this.photos = data
      console.log(data)
      }

    );

    
  }




}
