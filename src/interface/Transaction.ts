export interface Transaction {
    from: string;
    to: string;
    balance: number;
    userId?: number;
    description: string;
    currency: string;
}
