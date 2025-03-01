import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService, Photo } from '../services/albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'album-photos.component.html',
  styleUrl: 'album-photos.component.css',
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const albumId = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService
      .getPhotosByAlbumId(albumId)
      .subscribe((data) => (this.photos = data));
  }

  goBack(): void {
    window.history.back();
  }
}