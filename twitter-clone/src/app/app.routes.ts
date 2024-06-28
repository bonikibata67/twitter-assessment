import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'user/:id/posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


