import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServicesProvider {

data:any;
value:any;

 // constructor(public http: Http) {
    //console.log('Hello AuthServicesProvider Provider');
 // }

constructor (public http: Http) {
  // this.http.get('http://magento2solution.com/store/modules/crmtogo/index.//php?_operation=loginAndFetchModules&username=admin&password=admin').map(res => res.json()).subscribe(data => {
       // console.log(data);
//this.data = data;
           // });
}
   login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
     // headers.append('Content-Type',' text/html;charset=utf-8');
      // headers.append('Content-Type',' multipart/form-data');
     //  headers.append('Content-Type','Access-Control-Allow-Origin:*');

     headers.append('Content-Type' ,'application/x-www-form-urlencoded;charset=UTF-8 ');
console.log(credentials);
this.value = JSON.stringify(credentials);

 //this.value = Array.of(this.value); 
 //console.log(this.value);
let params = new URLSearchParams();
for(let key in credentials){
    params.set(key, credentials[key]) 
}
        this.http.post('http://localhost:8100/api/api.php?_operation=loginAndFetchModules&username=' + credentials.username + '&password=' + credentials.password,params.toString(), {headers: headers})
         .map(res=>res.json())
         // .map(res => res)
	.subscribe(data=>{
	this.data=data;
  // this.data = Array.of(this.data); 
	console.log(this.data);
  resolve(this.data);
	   localStorage.setItem('user',this.data);
          }, (err) => {
            reject("Invalid Username OR Password!!!");
           console.log(err);
		   alert(err);
          });
    });
  }

}
