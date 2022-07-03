import { Injectable, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TVMaze } from './tvmaze.model';

@Injectable({
  providedIn: 'root',
})
export class TvmazeService implements OnInit {
  headers = new HttpHeaders()
    .append('content-type', 'application/json')
    .append('Accept', 'application/json');
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  getShows(): Observable<TVMaze[]> {
    return this.http.get<TVMaze[]>(
      ' https://api.tvmaze.com/search/shows?q=boys'
    );
  }
}
