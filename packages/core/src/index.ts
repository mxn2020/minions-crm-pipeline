/**
 * Minions Crm-pipeline SDK
 *
 * Deal stages, transitions, revenue forecasts, and win/loss tracking
 *
 * @module @minions-crm-pipeline/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Crm-pipeline.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
