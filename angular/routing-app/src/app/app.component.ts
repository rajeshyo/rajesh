import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//this is static data date formate
  day = new Date(1995,7,25);
  //this is one simple array
  item =["angular","java","html"];
  newitem="";
  //this is one function for add button
  pushitem =function(){
    if(this.newitem != ""){
      this.item.push(this.newitem);
      this.newitem="";
    }
  }
  //this is one function for remove button
  removeitem=function(index){
    this.item.splice(index,1);
  }
  //this is form onsubmit function
  onsubmit=function(usetyur){
    console.log(usetyur);
  }
}
