import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  headername="Angular14Tutorial";
  salary=1000;
  isdisabled=false;
  ngOnInit(): void {
  }

  Functionclick(name:string){
    alert(name)
  }

}
