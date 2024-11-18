import { config, fields, collection, singleton } from '@keystatic/core';

import { postSchema } from '~/content/schemas';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      format: { contentField: 'body' },
      path: 'src/content/posts/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),
  },
  //   singletons: {
  //   settings: singleton({
  //     label: 'Settings',
  //     path: 'src/content/settings/',
  //     schema: {
  //       title: fields.slug({ name: { label: 'Title' } }),
  //       content: fields.mdx({
  //         label: 'Content',
  //       }),
  //     },
  //  })
  // }
});