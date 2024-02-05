import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshFixatgeComponent } from './dsh-fixatge.component';

describe('DshFixatgeComponent', () => {
  let component: DshFixatgeComponent;
  let fixture: ComponentFixture<DshFixatgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DshFixatgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DshFixatgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
