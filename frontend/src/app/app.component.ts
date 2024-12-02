import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'HarvestHub';
  users: any;

  ngOnInit() {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log("Error has ocurred"),
      complete: () => { }
    })
  }
}
