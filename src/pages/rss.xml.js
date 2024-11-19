import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import data from "~/data/site.json"

export async function GET(context) {
  const blog = (await getCollection("posts")).filter((post) => !post.data.draft)

  return rss({
    title: data.site.meta["home-title"],
    description: data.site.meta["home-description"],
    site: context.site,
    customData: "<language>pl</language>",
    trailingSlash: true,
    items: blog.map((post) => ({
      title: post.data.title,
      link: `/blog/${post.slug}/`,
      pubDate: post.data.date,
      description: post.data.description,
      categories: post.data.categories,
    })),
  })
}
