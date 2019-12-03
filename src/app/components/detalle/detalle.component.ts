import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {PeliculaDetalle, Cast} from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

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
  starIcon = 'star-outline';

  constructor(private moviesService: MoviesService, public modalCtrl: ModalController, private dataLocal: DataLocalService) { }

  ngOnInit() {
    //console.log('ID', this.id);

    this.dataLocal.movie_exist(this.id).then(exist => this.starIcon = (exist) ? 'star' : 'star-outline');

    this.moviesService.getMovieDetail(this.id).subscribe((response) => {
      console.log(response);
      this.movie = response;
    });

    this.moviesService.getMovieActors(this.id).subscribe((response) => {
      console.log(response);
      this.actors = response.cast;
    });
  }

  favorite() {
    const exist = this.dataLocal.save_movie(this.movie);
    this.starIcon = (exist) ? 'star' : 'star-outline';
  }

  back() {
    this.modalCtrl.dismiss();
  }

}
