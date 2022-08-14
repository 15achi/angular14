import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/Service/country.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service:CountryService,
              private userservice:UserService,
              private route:Router) { }

  GenderList=['Male','Female'];
  RoleList=['User','Admin'];
  countryList$!:Observable<any[]>;
  respdata:any;

  ngOnInit(): void {

    this.countryList$=this.service.getCountryList();
  }

  RedirectLogin(){
    this.route.navigate(['login']);

  }

  reactiveform=new FormGroup({
    privateNumber:new FormControl('',Validators.required),
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    birthDate:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    genderType:new FormControl('',Validators.required),
    roleType:new FormControl('',Validators.required),
    countryId:new FormControl('',Validators.required),
  })

  SaveUser(){
    if(this.reactiveform.valid){
      this.userservice.Registration(this.reactiveform.value).subscribe(item=>{
        this.respdata=item;
        if(this.respdata.message="User created"){
          alertify.success("Registered successfull");
          this.RedirectLogin();
        }else{

          alertify.error("failed try again");
        }
       
      })
    }

    //console.log(this.reactiveform.value);
  }


}
