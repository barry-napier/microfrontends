import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimsService } from '../services/claims.service';
import { Claim } from '../services/claim.interface';

@Component({
  selector: 'app-claim-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css'],
})
export class ClaimDetailsComponent implements OnInit {
  claim?: Claim;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private claimsService: ClaimsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.claimsService.getClaimById(id).subscribe((claim) => {
        this.claim = claim;
      });
    });
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

  goBack(): void {
    this.router.navigate(['/claims/summary']);
  }
}
