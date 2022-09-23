export interface Results<T> {
    count: number;
    next: string;
    previous?: any;
    results: T[];
}