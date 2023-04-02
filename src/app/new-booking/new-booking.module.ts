import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBookingRoutingModule } from './new-booking-routing.module';
import { NewBookingComponent } from './new-booking.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { ChoseHotelComponent } from './chose-hotel/chose-hotel.component';
import { ChoseRoomComponent } from './chose-room/chose-room.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { GuestInformationComponent } from './guest-information/guest-information.component';
import { PaymentDetailsComponent } from './payment-detail/payment-detail.component';
import { CoreModule } from '../core/core.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {  HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    NewBookingComponent,
    SearchHotelComponent,
    ChoseHotelComponent,
    ChoseRoomComponent,
    PersonalInformationComponent,
    GuestInformationComponent,
    PaymentDetailsComponent
  ],
  imports: [
    CommonModule,
    NewBookingRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreModule,
    CarouselModule,
    // HttpClientModule,
   
  ]
})
export class NewBookingModule { }
