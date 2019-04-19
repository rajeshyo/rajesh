import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }
  id:number;
  private headers = new Headers({ 'Content-Type': 'application/json'});

  products = [];
  fetchData = function() {
    this.http.get("https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-12&sortBy=publishedAt&apiKey=43a0dc52339a4e2b9c04e496651f586a").subscribe(
      (res: Response) => {
        this.products = res.json();
      }
    )
  }

  deleteProduct = function(id) {
    if(confirm("Are you sure?")) {
      const url = `${"https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-12&sortBy=publishedAt&apiKey=43a0dc52339a4e2b9c04e496651f586a"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
        .then(() => {
        this.fetchData();
        })
    }
  }

  ngOnInit() {
    this.fetchData();
  }
}
