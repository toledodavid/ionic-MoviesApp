import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: PeliculaDetalle[] = [];

  constructor(private storage: Storage) { }

  save_movie(movie: PeliculaDetalle) {
    this.movies.push(movie);
    this.storage.set('movies', this.movies);
  }
}
