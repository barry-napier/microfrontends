export interface Claim {
  id: string;
  claimNumber: string;
  dateSubmitted: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  amount: number;
  description: string;
  type: string;
}
