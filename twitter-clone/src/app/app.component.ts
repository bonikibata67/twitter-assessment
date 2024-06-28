import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserProfileComponent } from './userprofile/userprofile.component';
import { PostsComponent } from "./posts/posts.component";
import { CommentsComponent } from "./comments/comments.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent,UserProfileComponent, PostsComponent, CommentsComponent]
})
export class AppComponent {
  title = 'twitter-clone';
}
