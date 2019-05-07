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

            this.http.get('719126e9a161f8e24a430455d324855a1ba7241b').subscribe(data => {

    });
  }

}
