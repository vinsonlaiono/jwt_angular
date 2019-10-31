import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedJobsComponent } from './tracked-jobs.component';

describe('TrackedJobsComponent', () => {
  let component: TrackedJobsComponent;
  let fixture: ComponentFixture<TrackedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
