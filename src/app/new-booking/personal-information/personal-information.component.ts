import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit{

  personalInfoForm!:FormGroup;
  parentForm!:FormGroup;
 
  countryList=[
    {value:"", viewValue:"Select"},
    {value:"US", viewValue:"United States"},
    {value:"Ind", viewValue:"India"},
    {value:"UK",  viewValue:"United Kingdom"},

  ]
//  parentForm: any;
   constructor(private fb:FormBuilder, formContainer:FormGroupDirective){}

  ngOnInit(): void {
    this.personalInfoForm = this.fb.group({
      "customerName":[''],
      "countryName":[''],
      "mobNo":[''],
      "dob":[''],
      "age":[''],
      "gender":['']
    })
    // this.parentForm=this.formContainer.form;

     if(this.parentForm){
       this.parentForm.addControl("Personal Details",this.personalInfoForm);
     }
  }
  saveForm(){
    console.log(this.parentForm.value)
   }

}