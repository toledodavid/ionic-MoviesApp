import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {Pelicula} from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recent_movies: Pelicula[] = [];
  popular_movies: Pelicula[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getFeature().subscribe((response) => {
      this.recent_movies = response.results;
    });

    this.get_popular();
  }

  load_more() {
    this.get_popular();
  }

  get_popular() {
    this.movieService.getPopular().subscribe((response) => {
      const arrTemp = [...this.popular_movies, ...response.results];
      this.popular_movies = arrTemp;
    });
  }

}
