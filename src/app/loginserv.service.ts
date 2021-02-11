import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginservService {
  constructor() {}
  validateUser(uname: any, pwd: any) {
    //makes an httpclient:return userinfo or token
    return true;
  }
}
