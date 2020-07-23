import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  
  Datatypes : any=['Varchar','NVarchar','Int','Float']
  

  public dynamicField: FormGroup;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dynamicField = this.fb.group({
      itemRows: this.fb.array([this.initItemRows()])
    });
  }

  get formArr() {
    return this.dynamicField.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this.fb.group({
      
    });
  }

  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  
}
