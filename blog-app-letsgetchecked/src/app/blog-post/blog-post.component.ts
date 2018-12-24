import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { OrderModule } from 'ngx-order-pipe';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})

export class BlogPostComponent implements OnInit {

  blogPosts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getBlogPost().subscribe((data : any[])=>{
  		this.blogPosts = data;
    })
  }
  
}
