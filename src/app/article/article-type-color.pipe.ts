import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleTypeColor'
})
export class ArticleTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type){
      case 'Fruit':
        color = "#c0ca33 lime darken-1";
        break;
      case 'Légume':
        color = "#7cb342 light-green darken-1";
        break;
      case 'Produit de la ferme':
        color = "#ffb300 amber darken-1";
        break;
      case 'Produit laitier':
        color = "#00acc1 cyan darken-1";
        break;
      case 'Fromage':
        color = "#fbc02d yellow darken-2";
        break;
      case 'Epicerie sucrée':
        color = "#8e24aa purple darken-1";
        break;
      case 'Epicerie salée':
        color = "#e53935 red darken-1";
        break;
      case 'Boisson':
        color = "#5e35b1 deep-purple darken-1";
        break;
      case 'Boisson alcoolisée':
        color = "#039be5 light-blue darken-1";
        break;
      case 'Maison':
        color = "#3949ab indigo darken-1";
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
