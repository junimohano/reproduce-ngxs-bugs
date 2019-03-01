import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reproduce-ngxs-bugs';

  constructor(private router: Router) {
  }

  navigateToAdd(): void {
    this.router.navigate(['/test/new']);
  }

  navigateToEdit(): void {
    this.router.navigate(['/test/1/edit']);
  }
}
