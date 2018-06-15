import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { Slide } from '../slide';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  song: Slide[];
  currentSlide: Slide;

  constructor(
    private songService: SongService
  ) { }

  ngOnInit() {
    this.getSong();
  }

  getSong(): void {
    this.song = this.songService.getSong();
  }

  playSong(i: number): void {
    if (this.song) {
      if (i === this.song.length) {
        return;
      }

      this.currentSlide = this.song[i];
      setTimeout(() => {
        i++;
        this.currentSlide = this.song[i];
        if (i <= this.song.length) {
          this.playSong(i);
        }
      }
      , this.currentSlide.duration);
    }
  }
}
