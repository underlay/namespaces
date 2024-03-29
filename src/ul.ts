const ul = {
	class: "http://underlay.org/ns/class",
	key: "http://underlay.org/ns/key",
	value: "http://underlay.org/ns/value",
	uri: "http://underlay.org/ns/uri",
	literal: "http://underlay.org/ns/literal",
	datatype: "http://underlay.org/ns/datatype",
	product: "http://underlay.org/ns/product",
	component: "http://underlay.org/ns/component",
	coproduct: "http://underlay.org/ns/coproduct",
	option: "http://underlay.org/ns/option",
	reference: "http://underlay.org/ns/reference",
	some: "http://underlay.org/ns/some",
	none: "http://underlay.org/ns/none",
	source: "http://underlay.org/ns/source",
	target: "http://underlay.org/ns/target",
	map: "http://underlay.org/ns/map",
	projection: "http://underlay.org/ns/projection",
	dereference: "http://underlay.org/ns/dereference",
	match: "http://underlay.org/ns/match",
	case: "http://underlay.org/ns/case",
} as const

export default Object.freeze(ul)
