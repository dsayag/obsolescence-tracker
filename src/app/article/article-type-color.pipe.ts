import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleTypeColor'
})
export class ArticleTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type){
      case 'Mainstream':
        color = "#c0ca33 lime darken-1";
        break;
      case 'Ultraportable':
        color = "#7cb342 light-green darken-1";
        break;
      case 'Business':
        color = "#ffb300 amber darken-1";
        break;
      case 'Gaming':
        color = "#00acc1 cyan darken-1";
        break;
      case 'CAD/3D modeling':
        color = "#fbc02d yellow darken-2";
        break;      
      case 'Sans catégorie':
        color = "#e0e0e0 grey lighten-2";
        break;
      default:
        color = 'grey';
        break;
    }
    return 'chip ' + color;    
  }

}
