import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Contact} from './contact';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:Http) { }
//retriving contact service
getContacts()
{
  return this.http.get('http://localhost:3000/api/contact').pipe(
      map((res => res.json)));
}

// //add contact method
// addContact(newcontact)
// {
//   var headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   this.http.post('http://localhost:3000/api/contact',newcontact,{headers:headers}).pipe(
//   .map(res => res.json()));

// }

// //deleting contact
// deleteContact(id)
// {
//   this.http.delete('http://localhost:3000/api/contact'+id)
//   .map(res => res.json());
// }

}
