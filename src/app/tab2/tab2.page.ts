import { Component } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import {DetalleComponent} from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchText: string = '';
  movies: Pelicula[] = [];
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];
  searching: boolean = false;

  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) {}


  search(event) {
    const value = event.detail.value;

    if(value) {
      this.searching = true;
      //console.log(value);
      this.moviesService.searchMovie(value).subscribe(response => {
        console.log(response);
        this.movies = response['results'];
        this.searching = false;
      });
    }else {
      this.searching = false;
      this.movies = [];
    }
    
  }

  saveIdea(idea: string) {
    //console.log(idea);
    this.searchText = idea;
  }

  async showDetail(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id: id
      }
    });
    await modal.present();
  }

}
