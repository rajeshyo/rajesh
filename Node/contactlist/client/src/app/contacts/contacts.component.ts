import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: any;
  contact:Contact;
  first_name:string;
  last_name:string;
  phone:string;

  constructor(private contactServices: ContactService) { }

  ngOnInit() {
    
    this.contactServices.getContacts().subscribe(
      (res) => {
      this.contacts = res;
      console.log("ontact"+JSON.stringify(this.contacts));
    },
      (err)=>{
        console.log(err);
      }
      
    
     ) }


  // Contacts() {
  //   this.contactServices.getContacts().subscribe(
  //     (res) => {
  //       this.contacts = res;
  //       console.log("Api Calling"+JSON.stringify(this.contacts));
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //     () => {
  //     }
  //   )
  // }
}
