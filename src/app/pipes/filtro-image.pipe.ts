import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImage'
})
export class FiltroImagePipe implements PipeTransform {

  transform(movies: any[]): any[] {
    return movies.filter(movi => {
      return movi.backdrop_path;
    });
  }

}
