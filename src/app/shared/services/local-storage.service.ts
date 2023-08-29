import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  setUserDetails(detailsStr: string) {
    window.localStorage['userDetails'] = detailsStr
  }
  getUserDetails(): any {
    return JSON.parse(window.localStorage['userDetails'])
  }
}
