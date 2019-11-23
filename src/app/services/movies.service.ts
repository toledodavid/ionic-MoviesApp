import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RespuestaMDB} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature() {
    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-11-22&api_key=3f8ace2c02ff13704411f19cbfc2187d&language=es&include_image_language=es`);
  }
}
