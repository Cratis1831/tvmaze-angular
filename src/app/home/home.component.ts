import { Component, OnInit } from '@angular/core';
import { TVMaze } from '../tvmaze.model';
import { TvmazeService } from '../tvmaze.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  shows: TVMaze[] = [];
  constructor(private tvMazeService: TvmazeService) {}

  ngOnInit(): void {
    this.tvMazeService.getShows().subscribe((data) => (this.shows = data));
  }
}
