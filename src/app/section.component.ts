import { Component, Input, ViewContainerRef } from '@angular/core';

@Component({
   selector: 'div[app-type=section]',
   template: ''
})
export class SectionComponent {

   //Field docorator used to make this property as input
  @Input() active: boolean;


  //Injecting Container reference
   constructor(public viewContainerRef: ViewContainerRef) { }
}

