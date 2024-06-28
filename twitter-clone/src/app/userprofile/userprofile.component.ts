import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../services/header.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from '../posts/posts.component';
import { HttpClient } from '@angular/common/http';
import {  Router, } from '@angular/router';
import { user } from '../models';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, PostsComponent],  
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent implements OnInit {
  users: user[] = [];  
  user: user | undefined;

  constructor(private route: ActivatedRoute, private headerService: HeaderService) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id')!;
    this.headerService.getuser(userId).subscribe(user => {
      this.user = user;
    });
  }
}

