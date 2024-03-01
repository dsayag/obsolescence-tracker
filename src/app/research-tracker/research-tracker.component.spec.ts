import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchTrackerComponent } from './research-tracker.component';

describe('ResearchTrackerComponent', () => {
  let component: ResearchTrackerComponent;
  let fixture: ComponentFixture<ResearchTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
