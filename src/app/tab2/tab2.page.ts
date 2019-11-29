import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchText: string = '';
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];

  constructor() {}


  search(event) {
    const value = event.detail.value;
    console.log(event);
  }

  saveIdea(idea: string) {
    console.log(idea);
    this.searchText = idea;
  }

}
