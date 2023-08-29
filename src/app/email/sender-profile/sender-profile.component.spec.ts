import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderProfileComponent } from './sender-profile.component';

describe('SenderProfileComponent', () => {
  let component: SenderProfileComponent;
  let fixture: ComponentFixture<SenderProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenderProfileComponent]
    });
    fixture = TestBed.createComponent(SenderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
