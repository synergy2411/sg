import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @Input('mycolor') mycolor : string;
  @HostBinding('style.background-color') bgColor : any;

  @HostListener('mouseenter')
  onmouseenter(){
    this.bgColor = this.mycolor;
  }

  @HostListener('mouseleave')
  onmouseleave(){
    this.bgColor = "transparent";
  }

  constructor() { }

}
