import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PeersPipe } from './peers.pipe';
import { FiltroImagePipe } from './filtro-image.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    PeersPipe,
    FiltroImagePipe
  ],
  exports: [
    ImagePipe,
    PeersPipe,
    FiltroImagePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
