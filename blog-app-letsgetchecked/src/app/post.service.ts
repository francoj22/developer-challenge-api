import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  _url: string = "http://localhost:9001/posts";

  constructor(private http: HttpClient) { }

  getBlogPost(){
   return this.http.get(this._url)
  }

  getPost(blogPostId){
   return this.http.get(`${this._url}/${blogPostId}`)
  }

  getBlogPostComments(blogPostId){
   return this.http.get(`${this._url}/${blogPostId}/${'comments'}`)
  }
/*
  getComment(blogPostId){
   return this.http.get(`${this._url}/${blogPostId}`)
  }
*/

}
