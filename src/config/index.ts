interface Config {
    host: string;
    port: number;
    environment: string;
}

/**
 * Verify all required environment variables are defined
 */

if (!process.env.HOST) {
    throw new Error('HOST environment variable is required');
}

if (!process.env.PORT) {
    throw new Error('PORT environment variable is required');
}

if (!process.env.NODE_ENV) {
    throw new Error('NODE_ENV environment variable is required');
}

export const config: Config = {
    host: process.env.HOST,
    port: Number(process.env.PORT),
    environment: process.env.NODE_ENV,
};
