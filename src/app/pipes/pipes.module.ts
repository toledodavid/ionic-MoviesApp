import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PeersPipe } from './peers.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    PeersPipe
  ],
  exports: [
    ImagePipe,
    PeersPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
