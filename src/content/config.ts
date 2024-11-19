import { defineCollection } from "astro:content"
import { postSchema, testSchema } from './schemas';


const postsCollection = defineCollection({
  type: "content",
  schema: postSchema,
})

const testsCollection = defineCollection({
  type: "content",
  schema: testSchema
})

export const collections = {
  posts: postsCollection,
  tests: testsCollection
}
