# Basic Informational Site

A small website built for [The Odin Project's Basic Informational Site assignment](https://www.theodinproject.com/lessons/nodejs-basic-informational-site).
It practices serving HTML pages with a plain Node.js HTTP server.

## Features

- Home, About, and Contact pages with shared navigation.
- A custom 404 page for unknown paths, including nested paths.
- Routing by URL pathname, so query strings preserve valid routes.
- Semantic HTML, responsive layouts, and visible keyboard focus.
- A simple HTTP 500 response and server-side diagnostics if a file cannot be read.

The server uses `node:http` and reads HTML asynchronously with `node:fs/promises`.
An explicit route map selects each file; unknown paths serve `404.html` with HTTP 404.
File locations are resolved relative to the server module, so starting it from another working directory also works.

## Technology

Node.js built-in modules, JavaScript ES modules, HTML, and embedded CSS.
Prettier is the only development dependency; there are no runtime dependencies.

## Getting started

Use Node.js 24 LTS and npm. This project was verified with Node.js 24.22.0 and npm 11.19.1.
Port 8080 must be available.

Install dependencies from the repository directory:

```sh
npm ci
```

Start the server:

```sh
npm start
```

Open <http://localhost:8080>. Stop the server with `Ctrl+C`.

For automatic server restarts when source files change:

```sh
npm run dev
```

## Routes

| Path           | HTML file         | HTTP status |
| -------------- | ----------------- | ----------- |
| `/`            | `index.html`      | 200         |
| `/about`       | `about.html`      | 200         |
| `/contact-me`  | `contact-me.html` | 200         |
| Any other path | `404.html`        | 404         |

## Formatting

Format the project or check its formatting:

```sh
npm run format
npm run format:check
```

JavaScript uses single quotes and no semicolons.
