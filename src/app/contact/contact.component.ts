import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <p>
      contact works!
    </p>
    <a routerLink="add">Add Contact</a>
    <br>
    <a routerLink="edit/1">Edit Contact</a>
    <div>
       <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
