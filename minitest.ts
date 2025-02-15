import * as z from "zod";

function isObjectSchema(schema: z.ZodTypeAny): schema is z.ZodObject<any> {
  return schema instanceof z.ZodObject;
}

/**
 * DOES STUFF
 * @param schema 
 * @returns 
 */
function isUnionSchema(schema: z.ZodTypeAny): schema is z.ZodUnion<any> {
  return schema instanceof z.ZodUnion;
}

const mySchema = z.object({
  name: z.string(),
  age: z.number(),
});

if (isObjectSchema(mySchema)) {
  console.log("This is an Object Schema");
} else if (isUnionSchema(mySchema)) {
  console.log("This is a Union Schema");
}