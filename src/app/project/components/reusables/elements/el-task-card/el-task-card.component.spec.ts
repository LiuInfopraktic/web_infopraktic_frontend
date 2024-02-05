import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElTaskCardComponent } from './el-task-card.component';

describe('TaskCardComponent', () => {
  let component: ElTaskCardComponent;
  let fixture: ComponentFixture<ElTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElTaskCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
