import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peers'
})
export class PeersPipe implements PipeTransform {

  transform(arr: any[]): any[] {
    const peers = arr.reduce((result, value, index, array) => {
      if(index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);

    return peers;
  }

}
