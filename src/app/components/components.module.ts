import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import {SlideshowBackdropComponent} from './slideshow-backdrop/slideshow-backdrop.component';
import {SlideshowPosterComponent} from './slideshow-poster/slideshow-poster.component';
import { SlideshowPeersComponent } from './slideshow-peers/slideshow-peers.component';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPeersComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPeersComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
