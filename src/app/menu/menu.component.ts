import { Component } from '@angular/core';

/* Menu de navigation */

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',  
})

export class MenuComponent {
  events: string[] = [];
  opened: boolean;

}