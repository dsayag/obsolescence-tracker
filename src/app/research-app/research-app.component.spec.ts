import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchAppComponent } from './research-app.component';

describe('ResearchAppComponent', () => {
  let component: ResearchAppComponent;
  let fixture: ComponentFixture<ResearchAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
