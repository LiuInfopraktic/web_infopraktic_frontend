import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshCalendarComponent } from './dsh-calendar.component';

describe('DshCalendarComponent', () => {
  let component: DshCalendarComponent;
  let fixture: ComponentFixture<DshCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DshCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DshCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
