import { First } from '../interfaces';

export class FirstService {
    async displayHelloWorld(): Promise<First> {
        return {
            name: "Hello World",
            age: 1
        };
    }
}
