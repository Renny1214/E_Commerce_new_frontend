import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppService } from "../app.service";
import { Route, Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlockingProxy } from 'blocking-proxy';
declare var $: any;
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private service: AppService,
    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  name;
  phone;
  email;
  password;
  address;
  otp;
  isSeller : boolean;
  url = "http://localhost:10083/api/sendOTP";

  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    
    if (this.service.checkLogin()) {
      this.router.navigate(["/products"]);
    }


    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }
  alert=false;
  emailused=false;
  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }    
        else
        {
          let json={
            email : this.email};
            this.httpClient.post(this.url,json+"").subscribe((res: any)=>{
                console.log("otp sent");
            }
            );
        } 
 
    }

  
    
    checkOtp() 
    {
      let signup = "http://localhost:10083/api/user";
      var otp;
      let json = {
        name: this.name,
        address: this.address,
        phone: this.phone,
        password: this.password,
        email: this.email,
      };

      let getOTP = "http://localhost:8080/signup/sendOTP"; 
      otp = this.otp;
      console.log(this.otp);
      this.httpClient.post(getOTP, json).subscribe((res: any) => {
        if (parseInt(otp) === parseInt(res)) {

          this.httpClient.post(signup, json).subscribe((res: any) => {
            if (res) {
              this.router.navigate(["/login"]);
            } else { 
              alert("User already exist.");
            }
          });
        }
        else{
          alert("OTP is wrong");
        }
      },error=>{
        alert("Email not verified");
      });
    }

  
  url1 = "http://localhost:10083/logout/logout";
  logout() {
    if (this.service.checkLogin()) {
      this.authService.logoutService();
      this.httpClient.get(this.url1).subscribe(res => {
        alert("logout successful");
      });
      alert("Logout Successful");
      this.router.navigate(["/products"]);
    }
  }

  checkLogin() {
    return this.service.checkLogin();
  }

  red() {
    this.router.navigate(["/products"]);
  }
}

