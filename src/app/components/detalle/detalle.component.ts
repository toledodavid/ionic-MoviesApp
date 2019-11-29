import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {PeliculaDetalle, Cast} from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  movie: PeliculaDetalle;
  actors: Cast[] = [];
  hidden = 150;
  slideOptActors = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(private moviesService: MoviesService, public modalCtrl: ModalController) { }

  ngOnInit() {
    //console.log('ID', this.id);
    this.moviesService.getMovieDetail(this.id).subscribe((response) => {
      console.log(response);
      this.movie = response;
    });

    this.moviesService.getMovieActors(this.id).subscribe((response) => {
      console.log(response);
      this.actors = response.cast;
    });
  }

  back() {
    this.modalCtrl.dismiss();
  }

}
