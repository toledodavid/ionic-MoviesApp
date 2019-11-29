import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RespuestaMDB, PeliculaDetalle, RespuestaCredits} from '../interfaces/interfaces';
import {environment} from '../../environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popular_page = 0;

  constructor(private http: HttpClient) { }

  private run_query<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }

  getFeature() {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const month = today.getMonth() + 1;

    let monthString: any;

    if(month < 10) {
      monthString = '0' + month;
    }else {
      monthString = month;
    }

    const start = `${today.getFullYear()}-${monthString}-01`;
    const end = `${today.getFullYear()}-${monthString}-${lastDay}`;

    return this.run_query<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}`);
  }

  getPopular() {
    this.popular_page++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popular_page}`;
    return this.run_query<RespuestaMDB>(query);
  }

  getMovieDetail(id: string) {
    return this.run_query<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getMovieActors(id: string) {
    return this.run_query<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }

  searchMovie(text: string) {
    return this.run_query(`/search/movie?query=${text}`);
  }

}
