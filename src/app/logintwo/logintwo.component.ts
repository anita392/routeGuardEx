import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logintwo',
  templateUrl: './logintwo.component.html',
  styleUrls: ['./logintwo.component.css'],
})
export class LogintwoComponent implements OnInit {
  constructor(private Auth: AuthService, public rtr: Router) {}

  ngOnInit(): void {}
  loginUser(event) {
    // event?.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Auth.getuserdetails(username, password).subscribe((data: any) => {
      if (data.success) {
        this.rtr.navigate(['admin']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert(data.message);
      }
    });
    console.log(username, password);
  }
}
