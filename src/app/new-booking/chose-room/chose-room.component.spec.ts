import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseRoomComponent } from './chose-room.component';

describe('ChoseRoomComponent', () => {
  let component: ChoseRoomComponent;
  let fixture: ComponentFixture<ChoseRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoseRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoseRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
