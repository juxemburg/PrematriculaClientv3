import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPrematricula]'
})
export class PrematriculaDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
