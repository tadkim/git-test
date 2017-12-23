import { Directive, EventEmitter, ElementRef, Output, HostListener } from '@angular/core';



@Directive({
  selector: '[scrollable]'
})
export class ScrollableDirective {

  @Output() scrollPosition = new EventEmitter()
  



  constructor(public el: ElementRef) {
    console.log("scrollabel directive constructor");
   }
   // scroll to window:scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log("onScroll!", event);
    try {

      const top = event.target.scrollingElement.scrollTop; // not support IE
      const height = this.el.nativeElement.scrollHeight;
      const offset = this.el.nativeElement.offsetHeight;


      console.log
      console.log('top', top);
      console.log('height', height);
      console.log('offset', offset);


      if (top > height - offset - 1) {
        this.scrollPosition.emit('bottom');
      }

      if (top === 0) {
        this.scrollPosition.emit('top');
      }

    } catch (err) {
      console.log("error: ", err);
    }
  }
}
