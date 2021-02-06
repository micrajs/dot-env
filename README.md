<p align="center">
  <img src="https://raw.githubusercontent.com/micrajs/micrajs/live/.assets/logo.png" width="25%">
</p>

<h1 align="center">@micra/dot-env</h1>

<p align="center">
  <img alt="version" src="https://img.shields.io/npm/v/@micra/dot-env.svg">
  <img alt="issues" src="https://img.shields.io/github/issues/micrajs/library-template.svg">
  <img alt="prs" src="https://img.shields.io/github/issues-pr/micrajs/library-template.svg">
</p>

<hr />

## About

Creates a environment instance that gives access to `.env*` file definitions and the `process.env.*`. Under the hood, this package wraps [Dotenv-flow](https://github.com/kerimdzhanov/dotenv-flow). Checkout their docs for more info on how to declare your `.env*` files!

## Installation

```sh
yarn add @micra/dot-env
```

## Usage

```typescript
import { DotEnv } from '@micra/dot-env';

const env = new DotEnv();

env.init()
   .then(() => {
     env.get('NODE_ENV', 'production');
   });
```

When using a Micra Application, this class can be used as:

```typescript
// In your src/app/environment/index.ts
import app from '@micra/application';
import { DotEnv } from '@micra/dot-env';

app.registerEnv(DotEnv);

// Somewhere else in your application:
env('NODE_ENV', 'production');
```

## Author

- [Olavo Amorim Santos](https://github.com/olavoasantos)
