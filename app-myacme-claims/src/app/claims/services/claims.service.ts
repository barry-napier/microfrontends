import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Claim } from './claim.interface';

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  private mockClaims: Claim[] = [
    {
      id: '1',
      claimNumber: 'CLM-2024-001',
      dateSubmitted: '2024-01-15',
      status: 'Pending',
      amount: 1250.0,
      description: 'Emergency Room Visit',
      type: 'Medical',
    },
    {
      id: '2',
      claimNumber: 'CLM-2024-002',
      dateSubmitted: '2024-01-20',
      status: 'Approved',
      amount: 500.0,
      description: 'Dental Cleaning',
      type: 'Dental',
    },
    {
      id: '3',
      claimNumber: 'CLM-2024-003',
      dateSubmitted: '2024-02-01',
      status: 'Rejected',
      amount: 2000.0,
      description: 'Prescription Medication',
      type: 'Pharmacy',
    },
  ];

  getAllClaims(): Observable<Claim[]> {
    return of(this.mockClaims);
  }

  getClaimById(id: string): Observable<Claim | undefined> {
    return of(this.mockClaims.find((claim) => claim.id === id));
  }
}
