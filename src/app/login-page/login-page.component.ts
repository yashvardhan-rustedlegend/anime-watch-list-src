import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: [''],

    }
    )
  }
  logIn() {
    this.http.get<any>("https://my-data-4hkn.onrender.com/signup").subscribe( //signup array is stored in db.json 
      res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password //checking login and password
        });
        if (user) {
          alert("Login Success");
          this.loginForm.reset();
          this.router.navigate(['list']);
        }
        else {
          alert('User not found');
        }
      },
      err => {
        alert("something went wrong");
      }
    )
  }


}
