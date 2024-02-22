import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[articleBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#F5F5F5';
  private defaultColor: string = '#ffccbc';
  private defaultHeight: number = 550;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
   }

  @Input('articleBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }

  private setBorder(color: string){
    let border = 'solid 6px ' + color;
    this.el.nativeElement.style.border = border;
  }

}