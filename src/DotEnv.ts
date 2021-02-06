import dotenv from 'dotenv-flow';
import type { Environment } from '@micra/core';

export class DotEnv implements Environment {
  public static isInstance = false;

  public isInstance = true;

  protected definitions: Record<keyof NodeJS.ProcessEnv, string> = {};

  async init() {
    this.definitions = Object.assign(
      this.definitions,
      { ...process.env },
      dotenv.config().parsed || {},
    );
  }

  has(key: keyof NodeJS.ProcessEnv) {
    return Object.keys(this.definitions).includes(key as string);
  }

  get<K extends keyof NodeJS.ProcessEnv>(key: K, fallback?: NodeJS.ProcessEnv[K]) {
    return this.has(key) ? this.definitions[key] : fallback;
  }
}
