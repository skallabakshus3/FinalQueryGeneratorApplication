import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SectionComponent } from './section.component';
import { ViewComponent } from './view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ChildpageComponent } from './childpage/childpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent ,SectionComponent, ChildpageComponent, MainpageComponent, ViewComponent, MainpageComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule, FormsModule , BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChildpageComponent]
})
export class AppModule { }
