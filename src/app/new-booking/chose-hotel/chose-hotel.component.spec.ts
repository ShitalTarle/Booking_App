import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseHotelComponent } from './chose-hotel.component';

describe('ChoseHotelComponent', () => {
  let component: ChoseHotelComponent;
  let fixture: ComponentFixture<ChoseHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoseHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
