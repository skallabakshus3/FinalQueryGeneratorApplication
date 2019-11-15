import { Component, OnInit} from '@angular/core';
import { EMPTY } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-my',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'Query-Generator';
}
