import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'blog-post'},
  {path: 'blog-post', component: BlogPostComponent},
  {path: 'blog-post/:id', component: PostComponent},
  {path: 'blog-post/:id/add-comment', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
