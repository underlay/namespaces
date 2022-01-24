# namespaces

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme) [![license](https://img.shields.io/github/license/underlay/namespaces)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/@underlay/namespaces)](https://www.npmjs.com/package/@underlay/namespaces) ![TypeScript types](https://img.shields.io/npm/types/@underlay/namespaces) ![lines of code](https://img.shields.io/tokei/lines/github/underlay/namespaces)

URI constants for commonly used Underlay namespaces.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
  - [XSD terms](#xsd-terms)
  - [RDF terms](#rdf-terms)
  - [Underlay terms](#underlay-terms)
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

## API

### XSD terms

The datatypes from the [XML Schema Definition Language](https://www.w3.org/TR/xmlschema11-2/) are exported as a read-only `xsd` object:

```typescript
const xsd: {
	readonly string: "http://www.w3.org/2001/XMLSchema#string"
	readonly boolean: "http://www.w3.org/2001/XMLSchema#boolean"
	readonly Decimal: "http://www.w3.org/2001/XMLSchema#decimal"
	readonly integer: "http://www.w3.org/2001/XMLSchema#integer"
	readonly double: "http://www.w3.org/2001/XMLSchema#double"
	readonly float: "http://www.w3.org/2001/XMLSchema#float"
	readonly date: "http://www.w3.org/2001/XMLSchema#date"
	readonly time: "http://www.w3.org/2001/XMLSchema#time"
	readonly dateTime: "http://www.w3.org/2001/XMLSchema#dateTime"
	readonly dateTimeStamp: "http://www.w3.org/2001/XMLSchema#dateTimeStamp"
	readonly gYear: "http://www.w3.org/2001/XMLSchema#gYear"
	readonly gMonth: "http://www.w3.org/2001/XMLSchema#gMonth"
	readonly gDay: "http://www.w3.org/2001/XMLSchema#gDay"
	readonly gYearMonth: "http://www.w3.org/2001/XMLSchema#gYearMonth"
	readonly gMonthDay: "http://www.w3.org/2001/XMLSchema#gMonthDay"
	readonly duration: "http://www.w3.org/2001/XMLSchema#duration"
	readonly yearMonthDuration: "http://www.w3.org/2001/XMLSchema#yearMonthDuration"
	readonly dayTimeDuration: "http://www.w3.org/2001/XMLSchema#dayTimeDuration"
	readonly byte: "http://www.w3.org/2001/XMLSchema#byte"
	readonly short: "http://www.w3.org/2001/XMLSchema#short"
	readonly int: "http://www.w3.org/2001/XMLSchema#int"
	readonly long: "http://www.w3.org/2001/XMLSchema#long"
	readonly unsignedByte: "http://www.w3.org/2001/XMLSchema#unsignedByte"
	readonly unsignedShort: "http://www.w3.org/2001/XMLSchema#unsignedShort"
	readonly unsignedInt: "http://www.w3.org/2001/XMLSchema#unsignedInt"
	readonly unsignedLong: "http://www.w3.org/2001/XMLSchema#unsignedLong"
	readonly positiveInteger: "http://www.w3.org/2001/XMLSchema#positiveInteger"
	readonly nonNegativeInteger: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger"
	readonly nonPositiveInteger: "http://www.w3.org/2001/XMLSchema#nonPositiveInteger"
	readonly hexBinary: "http://www.w3.org/2001/XMLSchema#hexBinary"
	readonly base64Binary: "http://www.w3.org/2001/XMLSchema#base64Binary"
	readonly anyURI: "http://www.w3.org/2001/XMLSchema#anyURI"
	readonly language: "http://www.w3.org/2001/XMLSchema#language"
	readonly normalizedString: "http://www.w3.org/2001/XMLSchema#normalizedString"
	readonly token: "http://www.w3.org/2001/XMLSchema#token"
	readonly NMTOKEN: "http://www.w3.org/2001/XMLSchema#NMTOKEN"
	readonly Name: "http://www.w3.org/2001/XMLSchema#Name"
	readonly NCNames: "http://www.w3.org/2001/XMLSchema#NCNames"
}
```

### RDF terms

A selection of terms from the RDF Schema vocabulary are exported as a read-only `rdf` object:

```typescript
const rdf: {
	readonly type: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
	readonly first: "http://www.w3.org/1999/02/22-rdf-syntax-ns#first"
	readonly rest: "http://www.w3.org/1999/02/22-rdf-syntax-ns#rest"
	readonly langString: "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"
	readonly JSON: "http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON"
}
```

### Underlay terms

The terms in the Underlay namespace are exported as a read-only `ul` object:

```typescript
const ul: {
	readonly class: "http://underlay.org/ns/class"
	readonly key: "http://underlay.org/ns/key"
	readonly value: "http://underlay.org/ns/value"
	readonly uri: "http://underlay.org/ns/uri"
	readonly literal: "http://underlay.org/ns/literal"
	readonly datatype: "http://underlay.org/ns/datatype"
	readonly product: "http://underlay.org/ns/product"
	readonly component: "http://underlay.org/ns/component"
	readonly coproduct: "http://underlay.org/ns/coproduct"
	readonly option: "http://underlay.org/ns/option"
	readonly reference: "http://underlay.org/ns/reference"
	readonly some: "http://underlay.org/ns/some"
	readonly none: "http://underlay.org/ns/none"
	readonly source: "http://underlay.org/ns/source"
	readonly target: "http://underlay.org/ns/target"
	readonly map: "http://underlay.org/ns/map"
	readonly projection: "http://underlay.org/ns/projection"
	readonly dereference: "http://underlay.org/ns/dereference"
	readonly match: "http://underlay.org/ns/match"
	readonly case: "http://underlay.org/ns/case"
}
```

## Contributing

This library is not intended to be comprehensive. Open an issue to discuss adding other namespaces.

## License

MIT © 2021 underlay
