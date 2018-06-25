import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  @HostBinding('class.draggable') draggable = true;

  private dragging = false;

  @HostListener('pointerdown')
  onPointerDown(): void {
    this.dragging = true;
    console.log('drag start');
  }

  @HostListener('document:pointermove')
  onPointerMove(): void {
    if (this.dragging) {
      console.log('drag move!')
    }
  }

  @HostListener('document:pointerup')
  onPointerUp(): void {
    if (this.dragging) {
      console.log('drag finished!')
      this.dragging = false
    }
  }

}
