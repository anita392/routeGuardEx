import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginservService } from '../loginserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _lgn: LoginservService, public rte: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    uname: new FormControl(''),
    pwd: new FormControl(''),
  });
  checkUser() {
    var res = this._lgn.validateUser(
      this.loginForm.value['uname'],
      this.loginForm.value['pwd']
    );
    if (res) {
      localStorage.setItem('uname', this.loginForm.get('uname').value);
      localStorage.setItem('pwd', this.loginForm.get('pwd').value);
      this.rte.navigate(['home']);
    } else {
      alert('invalid user');
    }
  }
}
