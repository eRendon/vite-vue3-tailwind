import { Profile } from './Profile';
import { BankAccount } from "./BankAccount";

export interface User {
    profile: Profile;
    bankAccount: BankAccount[];
}
