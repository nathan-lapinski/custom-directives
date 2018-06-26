import { Directive, HostBinding, HostListener, EventEmitter, Output, Input, TemplateRef, ViewContainerRef, ContentChild, QueryList } from '@angular/core';
import { DraggableHelperDirective } from './draggable-helper.directive';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  @HostBinding('class.draggable') draggable = true;
  @HostBinding('class.dragging') dragging = false;

  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  @ContentChild(DraggableHelperDirective) helper: DraggableHelperDirective;

  constructor(private viewContainerRef: ViewContainerRef) {}

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    this.dragging = true;
    event.stopPropagation();
    this.dragStart.emit(event);

    // render helper template on drag start
    this.viewContainerRef.createEmbeddedView(this.helper.templateRef);
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (this.dragging) {
      this.dragMove.emit(event);
    }
  }

  @HostListener('document:pointerup', ['$event'])
  onPointerUp(event: PointerEvent): void {
    if (this.dragging) {
      this.dragEnd.emit(event);
      this.dragging = false;
      // remove the helper
      this.viewContainerRef.clear();
    }
  }

}
