import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  selectedPost: any;
  blogPostsComments: any[] = [];
  commentID: any;

  constructor(private route:ActivatedRoute, private postService: PostService) {
    this.commentID = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
	     this.postService.getPost(params.get('id')).subscribe(c =>{
		       this.selectedPost = c;
        })
    });

    this.postService.getBlogPostComments(this.commentID).subscribe((data : any[])=>{
  		this.blogPostsComments = data;
    });

  }

}
