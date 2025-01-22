import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalContextService } from './shared/services/global-context.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

    this.contextService.setFeature('darkMode', true);
    this.contextService.setFeature('betaFeatures', true);
  }
}
