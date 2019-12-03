import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  movies: PeliculaDetalle[] = [];

  constructor(private storage: Storage, public toastCtrl: ToastController) { }

  save_movie(movie: PeliculaDetalle) {
    let exist = false;
    let message = '';

    for(const movi of this.movies) {
      if(movi.id === movie.id) {
        exist = true;
        break;
      }
    }

    if(exist) {
      this.movies = this.movies.filter(movi => movi.id !== movie.id);
      message = 'Removido de favoritos';
    }else {
      this.movies.push(movie);
      message = 'Agregada a favoritos';
    }

    this.presentToast(message);
    this.storage.set('movies', this.movies);
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500
    });
    toast.present();
  }
}
