import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsBarGraphComponent } from './benefits-bar-graph.component';

describe('BenefitsBarGraphComponent', () => {
  let component: BenefitsBarGraphComponent;
  let fixture: ComponentFixture<BenefitsBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsBarGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenefitsBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
