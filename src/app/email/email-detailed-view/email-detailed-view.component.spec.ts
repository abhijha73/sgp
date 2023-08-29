import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDetailedViewComponent } from './email-detailed-view.component';

describe('EmailDetailedViewComponent', () => {
  let component: EmailDetailedViewComponent;
  let fixture: ComponentFixture<EmailDetailedViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailDetailedViewComponent]
    });
    fixture = TestBed.createComponent(EmailDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
