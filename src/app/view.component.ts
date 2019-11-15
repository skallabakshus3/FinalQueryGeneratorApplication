import { Component, AfterViewInit, ViewChildren, QueryList, ComponentFactoryResolver, ComponentFactory, OnInit, ComponentRef } from '@angular/core';
import { SectionComponent } from './section.component';
import { ChildpageComponent } from './childpage/childpage.component';

@Component({
  selector: 'app-view',
  template: `
   <div class="container">
<app-mainpage (addComponentClick)="onAddComponentClick()"></app-mainpage>
<div app-type="section" id="SECTION1"[active]="true"></div>
<div app-type="section" id="SECTION2"></div>
</div>`
})
export class ViewComponent implements AfterViewInit, OnInit {

  //Parameter decorator used to access to a child component
  @ViewChildren(SectionComponent) sections: QueryList<SectionComponent>;

  activeSections: SectionComponent[];

  textComponentFactory: ComponentFactory<ChildpageComponent>;

  // Injecting Component Resolver
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  // Method called by Angular once it has created the component
  ngOnInit() {
    this.textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ChildpageComponent);
  }


  //Called after Angular has fully initialized a component's views.
  ngAfterViewInit() {
    this.activeSections = this.sections.reduce((result, section) => {
      if (section.active) {
        result.push(section);
      }
      return result;
    }, []);

  }

  //Creating components dynamically on click of AddTemplate method
  onAddComponentClick() {
    this.activeSections.forEach((section) => {
      section.viewContainerRef.createComponent(this.textComponentFactory);
    });
  }



}

