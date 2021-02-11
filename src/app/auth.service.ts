import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface myData {
  success: boolean;
  message: String;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInStatus = false;
  constructor(private http: HttpClient) {}
  get isLoggedIn() {
    return this.loggedInStatus;
  }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }
  getuserdetails(username, password) {
    //post these details to api server return user info if correct
    return this.http.post('/api/auth.php', {
      username,
      password,
    });
  }
}
