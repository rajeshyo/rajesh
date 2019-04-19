import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
	data:any;

  constructor(public http: Http) {}

 /*  login(credentials) {
    return new Promise((resolve, reject)=>{
     this.http.get('http://localhost:8100/api/login?DOLAPIKEY=cb689687c04c31f07d6767de285caf455c8a7279 ')
	//this.http.get('http://localhost:8100/api/login?login=admin&password=p%40ssw0rd7932&DOLAPIKEY=cb689687c04c31f07d6767de285caf455c8a7279 ')
	.map(res=>res.json())
	.subscribe(data=>{
	this.data=data;
	resolve(this.data);
	}
	, (err) => {
            reject(err);
	console.log(this.data);
	});
	});
  } */
  
   login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('http://localhost:8100/api/login?DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6', JSON.stringify(credentials), {headers: headers})
          .map(res=>res.json())
	.subscribe(data=>{
	this.data=data;
	console.log(this.data);
	resolve(this.data);
	   localStorage.setItem('user',this.data);
          }, (err) => {
            reject("Invalid Username OR Password!!!");
		   //alert(err);
          });
    });
  }

  getUser() {
 return JSON.parse(localStorage.getItem('user'))
 }
  

   /* logout(credentials){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post('http://localhost:8100/api/login?DOLAPIKEY=cb689687c04c31f07d6767de285caf455c8a7279 ', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
			     resolve(res.json());
            //localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  } */

}