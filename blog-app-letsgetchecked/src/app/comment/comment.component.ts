import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  confirmationString: string = 'Comment added';
  isAdded: boolean = false;
  commentObj: object = [];
  postID: any;
  today: any;

  constructor(private http: HttpClient, private route:ActivatedRoute) {
    this.postID = route.snapshot.paramMap.get('id');
    this.today =new Date().toISOString().slice(0, 10);
   }

  addNewComment = function(comment) {
    this.commentObj = {
      id: comment.id,
      postId: this.postID,
      parent_id: null,
      user: comment.user,
      date: this.today,
      content: comment.content
    };
    this.http
      .post('http://localhost:9001/posts/'+this.postID+'/comments', this.commentObj)
      .subscribe((res: Response) => {
        this.isAdded = true;
      });
  };
  ngOnInit() {}
}
