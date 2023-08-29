import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFoldersListingComponent } from './email-folders-listing.component';

describe('EmailFoldersListingComponent', () => {
  let component: EmailFoldersListingComponent;
  let fixture: ComponentFixture<EmailFoldersListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailFoldersListingComponent]
    });
    fixture = TestBed.createComponent(EmailFoldersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
