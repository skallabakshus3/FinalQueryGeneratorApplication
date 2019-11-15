import { Component, OnInit, Output, EventEmitter, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { MainpageComponent } from '../mainpage/mainpage.component';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-childpage',
  templateUrl: './childpage.component.html',
  styleUrls: ['./childpage.component.css']
})
export class ChildpageComponent implements OnInit {


  //Field Decorator used to configure input property
  @Output() addComponentClick = new EventEmitter();

  registerForm: FormGroup;
  submitted = false;

  //Injecting formbuilder service
  constructor(private formBuilder: FormBuilder) { }

  // Method called by Angular once it has created the component
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      tableName: ['', Validators.required],
      oBJ_ID: ['', Validators.required],
      oBJ_FIELD_ID: ['', Validators.required],
      sUBGROUP_ID: ['', Validators.required],
      oBJ_FIELD_TYPE_ID: ['', [Validators.required, Validators.minLength(6)]],
      dISPLAY_NAME: ['', [Validators.required, Validators.minLength(6)]],
      iSKEYMEMBER: ['', Validators.required],


    });
  }

  //getting form controls here
  get f() { return this.registerForm.controls; }


  //On Submit method
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    var queryString = "INSERT INTO [dbo].[TableName]([OBJ_ID],[OBJ_FIELD_ID],[SUBGROUP_ID],[OBJ_FIELD_TYPE_ID] ,[ISKEYMEMBER],[DISPLAY_NAME]) VALUES";

    queryString += " " + "(" + "" + this.registerForm.value['tableName']
      + ' , ' + this.registerForm.value['oBJ_ID']
      + ' , ' + this.registerForm.value['oBJ_FIELD_ID']
      + ' , ' + this.registerForm.value['sUBGROUP_ID']
      + ' , ' + this.registerForm.value['oBJ_FIELD_TYPE_ID']
      + ' , ' + this.registerForm.value['dISPLAY_NAME']
      + ' , ' + this.registerForm.value['iSKEYMEMBER'] + ');';

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(queryString))


  }
  //Reset form method
  resetForm() {
    this.registerForm.reset();


  }

}



