export interface Profile {
    created?: Date;
    email: string;
    firstName: string;
    id?: number;
    isVerified: boolean;
    jwtToken: string;
    lastName: string;
    role: string;
    title: string;
    updated: unknown;
    balance?: number;
}
