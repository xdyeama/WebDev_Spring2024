import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album: Album;
  loaded: boolean;
  newTitle: string;
  onEdit: boolean;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { 
    this.album = {} as Album;
    this.loaded = true;
    this.newTitle = "";
    this.onEdit = false;
  }

  ngOnInit(): void {
    this.onRefresh();
  }

  startEditing(){
    this.onEdit = true;
    // this.onRefresh();
  }

  setNewTitle() {
    this.albumService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
      (response) => {
        this.album.title = response.title;
      }
    )
    this.newTitle = "";
    this.onEdit = false;
  }

  onRefresh(): void{
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
        let id = +_id;
        this.loaded = false;
        this.albumService.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        })
      }
    })
  }
}
