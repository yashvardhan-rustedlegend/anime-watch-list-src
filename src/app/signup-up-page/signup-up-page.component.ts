import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-up-page',
  templateUrl: './signup-up-page.component.html',
  styleUrls: ['./signup-up-page.component.scss']
})
export class SignupUpPageComponent {
  public signupForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: [''],
    }
    )
  }
  signUp() {
    this.http.post<any>("https://my-data-4hkn.onrender.com/signup", this.signupForm.value).subscribe( //signup credentials are stored for further login
      res => { // Post Method is used 
        alert("signup Sucessful");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      err => {
        alert("something went wrong");
      }
    )
  }

}
