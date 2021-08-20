import { Films } from './films';
import { Characters } from './characters';

export interface Results {
    count: number;
    next: null;
    previous: null;
    results: Films[];
}
