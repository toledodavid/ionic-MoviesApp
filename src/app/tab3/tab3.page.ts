import { Component } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import {DataLocalService} from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  movies: PeliculaDetalle[] = [];
  genders: Genre[] = [];

  favoriteByGender: any[] = [];

  constructor(private dataLocal: DataLocalService, private moviesService: MoviesService) {}


  async ionViewWillEnter() {
    this.movies = await this.dataLocal.get_favorites();
    this.genders = await this.moviesService.getGenders();
    this.moviesByGender(this.genders, this.movies);
  }

  moviesByGender(genders: Genre[], movies: PeliculaDetalle[]) {
    this.favoriteByGender = [];
    genders.forEach(gender => {
      this.favoriteByGender.push({
        gender: gender.name,
        movis: movies.filter(movi => {
          return movi.genres.find(genre => genre.id === gender.id);
        })
      });
    });

    console.log(this.favoriteByGender);
  }

}
