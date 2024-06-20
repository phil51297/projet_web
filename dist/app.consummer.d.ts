import { Job } from 'bull';
export declare class AppConsummer {
    private readonly logger;
    transcode(job: Job<unknown>): Promise<void>;
}
