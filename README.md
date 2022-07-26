
# Core Types

- number    1, 0.5, -10      - All numbers, no differentiation between integers or floats

- string   'hi', "hi", `hi`  - All text Values

- boolean   true, false      - Just these two, no "truthy" or "falsy" values

- object   {name: "sathish"} - Any Javascript object, more specific types (type of object) are possiable

- Array    [1, 2, 3]         - Any Javascript array, type can be flexible or strict (regarding the element types)

- Tuple    [1, 2]            - Added by Typescript: Fixed-length Array

- Enum     enum {NEW, OLD}   - Added by Typescript: Automatically enumerated global constant identifiers

- Any      *                 - Any kind of values, no specific type assignment

## The Key difference is : javascript uses "dynamic types" (resolved at runtime), Typescript uses "static types" (set during Developmenrt)

### Important: Type Casing

- In TypeScript, you work with types like string or number all the times.

- Important: It is string and number (etc.), NOT String, Number etc.

- The core primitive types in TypeScript are all lowercase!
