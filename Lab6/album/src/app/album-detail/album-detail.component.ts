import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService, Album } from '../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: 'album-detail.component.html',
  styleUrl: 'album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getAlbumById(id).subscribe((data) => {
      this.album = data;
      this.newTitle = data.title;
    });
  }

  saveTitle(): void {
    if (this.album) {
      this.albumsService
        .updateAlbumTitle(this.album.id, this.newTitle)
        .subscribe(() => {
          this.album!.title = this.newTitle;
        });
    }
  }

  goBack(): void {
    window.history.back();
  }
}