import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElUserCardComponent } from './el-user-card.component';

describe('UserCardComponent', () => {
  let component: ElUserCardComponent;
  let fixture: ComponentFixture<ElUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElUserCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
