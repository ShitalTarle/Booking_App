import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailsComponent implements OnInit{
 
  monthList=['jan','feb','march','april','nov'];
  year=[2022,2023,2024,2025,2026];

     constructor(private fb:FormBuilder,private formContainer:FormGroupDirective) { }

  paymentForm!:FormGroup;

   ngOnInit(): void {
      this.paymentForm=this.fb.group({
       "nameOnTheCard":[''],
      "debitCardNumber":[''],
      "expiryMonth":[''],
       "expiryYear":[''],
       "securityCode":['']

     })
   }

}