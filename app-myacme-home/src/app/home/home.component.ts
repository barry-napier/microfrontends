import { Component, OnInit, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GlobalContext } from '../shared/types/global-context.types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  protected context?: Signal<GlobalContext>;
  protected userInfo = computed(() => this.context?.()?.userInfo);
  protected config = computed(() => this.context?.()?.config);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.context = this.route.snapshot.data['context'];
  }

  protected getFeatures(features: Record<string, boolean> | undefined) {
    if (!features) return [];
    return Object.entries(features).map(([name, enabled]) => ({
      name,
      enabled,
    }));
  }
}
