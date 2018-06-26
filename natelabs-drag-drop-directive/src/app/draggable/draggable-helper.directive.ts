import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDraggableHelper]',
  exportAs: 'appDraggableHelper'
})
export class DraggableHelperDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
