import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService, Album } from '../services/albums.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'albums.component.html',
  styleUrl: 'albums.component.css',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe((data) => (this.albums = data));
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((album) => album.id !== id);
    });
  }
}