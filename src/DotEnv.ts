import dotenv from 'dotenv-flow';
import type { Environment } from '@micra/core';

export class DotEnv implements Environment {
  public static isInstance = false;

  public isInstance = true;

  constructor() {
    dotenv.config();
  }

  async init(): Promise<void> {
    // No async initialization required. everything in parsed
    // within the constructor.
  }

  has(key: keyof NodeJS.ProcessEnv): boolean {
    return Object.keys(process.env).includes(key as string);
  }

  get<K extends keyof NodeJS.ProcessEnv>(
    key: K,
    fallback?: NodeJS.ProcessEnv[K],
  ): NodeJS.ProcessEnv[K] | undefined {
    return this.has(key) ? process.env[key] : fallback;
  }
}
