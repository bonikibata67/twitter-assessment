import { Component, OnInit, Input } from '@angular/core';
import { post } from '../models';
import { PostsService } from '../services/posts.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from "../comments/comments.component";

@Component({
    selector: 'app-posts',
    standalone: true,
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    imports: [CommonModule, ReactiveFormsModule, RouterModule, CommentsComponent]
})
export class PostsComponent implements OnInit {
  @Input() userId!: number;
  posts: post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPostsByUser(this.userId).subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleComments(post: post): void {
    post.showComments = !post.showComments;
  }
}

