import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClaimsService } from '../services/claims.service';
import { Claim } from '../services/claim.interface';

@Component({
  selector: 'app-claims-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claims-summary.component.html',
  styleUrls: ['./claims-summary.component.css'],
})
export class ClaimsSummaryComponent implements OnInit {
  claims: Claim[] = [];

  constructor(private claimsService: ClaimsService, private router: Router) {}

  ngOnInit(): void {
    this.claimsService.getAllClaims().subscribe((claims) => {
      this.claims = claims;
    });
  }

  viewClaimDetails(claimId: string): void {
    this.router.navigate(['/claims', claimId]);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Approved':
        return 'status-approved';
      case 'Rejected':
        return 'status-rejected';
      default:
        return 'status-pending';
    }
  }
}
