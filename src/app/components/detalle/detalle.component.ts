import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    //console.log('ID', this.id);
    this.moviesService.getMovieDetail(this.id).subscribe((response) => {
      console.log(response);
    });

    this.moviesService.getMovieActors(this.id).subscribe((response) => {
      console.log(response);
    });
  }

}
