# namespaces

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme) [![license](https://img.shields.io/github/license/underlay/namespaces)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/@underlay/namespaces)](https://www.npmjs.com/package/@underlay/namespaces) ![TypeScript types](https://img.shields.io/npm/types/@underlay/namespaces) ![lines of code](https://img.shields.io/tokei/lines/github/underlay/namespaces)

URI constants for commonly used Underlay namespaces.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm i @underlay/namespaces
```

## Usage

```typescript
import { xsd, rdf, ul } from "@underlay/namespaces"

console.log(xsd.integer) // "http://www.w3.org/2001/XMLSchema#integer"
console.log(rdf.type) // "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
console.log(ul.class) // "http://underlay.org/ns/class"
```

## Contributing

This library is not intended to be comprehensive. Open an issue to discuss adding other namespaces.

## License

MIT © 2021 underlay
