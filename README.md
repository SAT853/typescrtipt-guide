
# Core Types

- 1. number    1, 0.5, -10      - All numbers, no differentiation between integers or floats

- 2. string   'hi', "hi", `hi`  - All text Values

- 3. boolean   true, false      - Just these two, no "truthy" or "falsy" values

- 4. object   {name: "sathish"} - Any Javascript object, more specific types (type of object) are possiable

- 5. Array    [1, 2, 3]         - Any Javascript array, type can be flexible or strict (regarding the element types)

- 6. Tuple    [1, 2]            - Added by Typescript: Fixed-length Array

- 7. Enum     enum {NEW, OLD}   - Added by Typescript: Automatically enumerated global constant identifiers

- 8. Any      *                 - Any kind of values, no specific type assignment

## The Key difference is : javascript uses "dynamic types" (resolved at runtime), Typescript uses "static types" (set during Developmenrt)

### Important: Type Casing

- In TypeScript, you work with types like string or number all the times.

- Important: It is string and number (etc.), NOT String, Number etc.

- The core primitive types in TypeScript are all lowercase!
