/*
* Zod Example: Options and Configurations
*/

import { z } from "zod";

const ShoutOptionsSchema = z.object({
  casing: z.enum(['upper', 'inherit']).default('upper'),
  multiply: z.number().default(1),
  separator: z.string().default(' '),
});
export type ShoutOptions = z.input<typeof ShoutOptionsSchema>;
/* Notice the use of `z.input` to extract the input type */

function shout(text: string, options: ShoutOptions = {}) {
  const { casing, multiply, separator } = ShoutOptionsSchema.parse(options);
  const textArray: string[] = [];
  for (let i = 0; i < multiply; i++) {
    textArray.push(casing === 'upper' ? text.toUpperCase(): text);
  }
  return textArray.join(separator);
}

const ex1 = shout('Hello, World!');
// Output: "HELLO, WORLD!"

const ex2 = shout('Hey', { multiply: 3});
// Output: "HEY HEY HEY"

const ex3 = shout('ha', { multiply: 5, separator: ''});
// Output: "HAHAHAHAHA"

console.log('Shout result:', ex1);
console.log('Shout result:', ex2);
console.log('Shout result:', ex3);
