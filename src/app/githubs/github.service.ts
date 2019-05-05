import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Github } from '../github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
github: Github;

  constructor(private http: HttpClient) {
    this.github = new Github();
   }
   githubRequest() {
     interface ApiResponse {
       catolog: string;
       url: string;
       data: any;
     }

     const promise = new Promise((resolve, reject) => {
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(
         (response) => {
           this.github.catolog = response.data.catolog;
           this.github.url = response.data.url;
           console.log(response);
           resolve();
         },
         (error) => {
          alert('error');
          reject(error);
         }
       );
     });
     return promise;
   }
}
