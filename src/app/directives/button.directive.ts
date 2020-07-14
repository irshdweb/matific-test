import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundColor = '#FF6A00';
    el.nativeElement.style.borderColor='#FF6A00';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = '#005FAB';
    this.el.nativeElement.style.borderColor='#ffffff';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '#FF6A00';
    this.el.nativeElement.style.borderColor='#FF6A00';
  }

}
