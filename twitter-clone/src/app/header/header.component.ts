import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderService } from '../services/header.service';
import {  RouterModule } from '@angular/router';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  users: any[] = [];

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.getusers().subscribe(users => {
      this.users = users;
    });
  }
}

