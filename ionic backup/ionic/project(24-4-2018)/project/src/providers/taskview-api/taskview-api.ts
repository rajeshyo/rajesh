import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TaskviewApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskviewApiProvider {
data:any;
  constructor(public http: Http) {
    console.log('Hello TaskviewApiProvider Provider');
  }

ExpenseView()
{
	if(this.data){
	return Promise.resolve(this.data);
	}
	let opt:RequestOptions;
	let myHeaders:Headers=new Headers;

	myHeaders.set('Accept','application/json;charset-utf-8;');
	myHeaders.append('Content-type','application/json;charser-utf-8');
	opt=new RequestOptions({
headers:myHeaders
	}) 

	return new Promise(resolve=>{
	this.http.get('http://localhost:8100/api/expensereports?sortfield=t.rowid&sortorder=ASC&DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6')
	.map(res=>res.json())
	.subscribe(data=>{
	this.data=data;
	resolve(this.data);
	console.log(this.data);
	});
	});
}
}
