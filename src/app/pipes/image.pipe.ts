import { Pipe, PipeTransform } from '@angular/core';


const URL = 'https://image.tmdb.org/t/p'

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img:string, size: string = 'w500'): string {
    // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

    if(!img) {
      return './assets/no-image-banner.jpg';
    }else {
      const imgUrl = `${URL}/${size}${img}`;
      return imgUrl;
    }

  }

}
