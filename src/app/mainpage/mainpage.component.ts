import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
 
  @Output() addComponentClick = new EventEmitter();
  registerForm: FormGroup;
  submitted = false;

  Table: any = ['INPUT_VALIDATE_EXPRESSION', 'LOOKUP', 'LOOKUP_LIST']
  toaster: any;
  registerForm2: FormGroup;
  registerForm1: FormGroup;

  //injecting formbuilder
  constructor(private formBuilder: FormBuilder) { }

  // Method called by Angular once it has created the component
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      rEQFORM: ['', Validators.required],
      oBJ_ID: ['', Validators.required],
      oBJ_FIELD_ID: ['', Validators.required],
      sUBGROUP_ID: ['', Validators.required],
      oBJ_FIELD_TYPE_ID: ['', Validators.required],
      rEQUIREDTEXT: ['', Validators.required],
      dISPLAY_NAME: ['', [Validators.required, Validators.minLength(6)]],
      iSKEYMEMBER: ['', Validators.required],

      vALIDATION_EXPRESSION: ['', Validators.required],
      vALIDATION_HELP_TEXT: ['', [Validators.required, Validators.minLength(6)]],
      vALIDATION_TOOL_TIP: ['', Validators.required],

      // vALUE_LIST: ['', Validators.required],


    });

   
   
    
  }

  //getting form controls
  get f() { return this.registerForm.controls; }
 

  //on submit form method
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
     //alert('SUCCESS!! :-)\n\n' + JSON.stringify('Copy Your Script'))
  }

  //resetting form
  resetForm() {
    this.registerForm.reset();
  }
  

  //copy method used to copy query in text area and save to clipboard
  copyToClipboard(element) {
    element.select();
    document.execCommand('copy');
    this.toaster('success', 'Success!', 'Link copied to clipboard.');
  }
  


 
}


