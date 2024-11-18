import { defineCollection } from "astro:content"
import { postSchema } from './schemas';


const postsCollection = defineCollection({
  type: "content",
  schema: postSchema,
})

export const collections = {
  posts: postsCollection,
}
