import { Component } from '@angular/core';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchText: string = '';
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];

  constructor(private moviesService: MoviesService) {}


  search(event) {
    const value = event.detail.value;
    console.log(value);
    this.moviesService.searchMovie(value).subscribe(response => {
      console.log(response);
    });
  }

  saveIdea(idea: string) {
    console.log(idea);
    this.searchText = idea;
  }

}
