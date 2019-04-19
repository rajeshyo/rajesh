import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {
data:any;
taskdata:any;
id:any;
  constructor(public http: Http) {
    console.log('Hello RestServiceProvider Provider');
  }
load()
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
	this.http.get('http://localhost:8100/api/projects?sortfield=t.rowid&sortorder=ASC&DOLAPIKEY=7a6a16e20dda4a342f56b83d364980ee5b0203a6')
	.map(res=>res.json())
	.subscribe(data=>{
	this.data=data;
	this.id=data.id;
	resolve(this.data);
	console.log(this.data);
	console.log(this.id);
	});
	});
}
viewTask(tId)
{
	//if(this.taskdata){
	//return Promise.resolve(this.taskdata);
	//}
	//let opt:RequestOptions;
	//let myHeaders:Headers=new Headers;

	//myHeaders.set('Accept','application/json;charset-utf-8;');
	//myHeaders.append('Content-type','application/json;charser-utf-8');
	//opt=new RequestOptions({
//headers:myHeaders
	//}) 

	//return new Promise(resolve=>{
	//this.http.get('http://localhost:8100/api/projects/'+tId+'/tasks?DOLAPIKEY=cb689687c04c31f07d6767de285caf455c8a7279 ')
	//this.http.get('http://magento2solution.com:80/geo/api/index.php/tasks?sortfield=t.rowid&sortorder=ASC&limit=100&DOLAPIKEY=cb689687c04c31f07d6767de285caf455c8a7279 ')
	//this.http.get('http://localhost:8100/api/projects?sortfield=t.rowid&sortorder=ASC&DOLAPIKEY=cb689687c04c31f07d6767de285caf455c8a7279 ')
	//.map(res=>res.json())
	//.subscribe(data=>{
	//this.taskdata=data;
	//resolve(this.taskdata);
	//console.log(this.taskdata);
	// }, (err) => {
      //console.log(err);
	//});
	//});
}
}
