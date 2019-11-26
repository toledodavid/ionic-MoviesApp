import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';


@Component({
  selector: 'app-slideshow-peers',
  templateUrl: './slideshow-peers.component.html',
  styleUrls: ['./slideshow-peers.component.scss'],
})
export class SlideshowPeersComponent implements OnInit {

  @Input() movies: Pelicula[] = [];
  @Output() load_more = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  }

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.load_more.emit();
  }

}
