import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-details',
  templateUrl: './github-details.component.html',
  styleUrls: ['./github-details.component.css']
})
export class GithubDetailsComponent implements OnInit {
  catolog = 'GALLERIES';


  constructor(private http: HttpClient) {}

  ngOnInit() {

            interface ApiResponse {
              pet: string;
            }

            this.http.get('17f81b17e8f83b169a4f254233f8d9476982e0cf').subscribe(data => {

    });
  }

}
