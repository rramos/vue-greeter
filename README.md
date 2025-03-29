# Greeter

A sample Greeter application with the following Features:

* Auth0 for authentication
* Github actions for Bun build and ESLint

## Requirements ##

* Node
* VUE
* Bun
* Auth0

## Pre-Setup

1. Create a Auth0 account and create one application to obtain **Domain** and **ClientId**
2. Create a local `.env.local` file based on the provided .env-example and fill the missing data

## More Info ##

If you would like to have more infor follow the article on <https://rramos.github.io/2025/03/28/auth0>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Compile and Minify for Production

```sh
bun run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```
