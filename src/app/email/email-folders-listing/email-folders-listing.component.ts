import { AuthService } from './../../shared/services/auth.service';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import { userDetails } from './../../shared/user-info-config';
import { primaryFolder, secondaryFolder } from './../email-data-config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-folders-listing',
  templateUrl: './email-folders-listing.component.html',
  styleUrls: ['./email-folders-listing.component.scss'],
})
export class EmailFoldersListingComponent implements OnInit {
  primaryFoldersList = primaryFolder;
  secondaryFolderList = secondaryFolder;
  userDetails: any;
  selectedFolder: any;
  constructor(
    private ls: LocalStorageService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.userDetails = this.ls.getUserDetails();
    this.selectedFolder = this.primaryFoldersList[0];
  }
  logout() {
    this.authService.logout();
  }
}
