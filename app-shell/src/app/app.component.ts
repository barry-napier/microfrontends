import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { GlobalContextService } from './shared/services/global-context.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private contextService: GlobalContextService) {
    // Example: Set some initial values different from defaults
    this.contextService.setUserInfo({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      roles: ['user', 'admin'],
    });
  }

  get isHomeRoute() {
    return (
      window.location.pathname === '/home' || window.location.pathname === '/'
    );
  }
}
