import { Queue } from 'bull';
export declare class AppService {
    private readonly healthQueue;
    constructor(healthQueue: Queue);
    getHello(): string;
    transcode(): Promise<void>;
}
