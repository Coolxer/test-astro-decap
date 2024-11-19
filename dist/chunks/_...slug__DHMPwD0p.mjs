import { e as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute, d as renderComponent, F as Fragment, g as renderSlot } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_Dgj74dHt.mjs';
import { d as data } from './site_XOOrlhg2.mjs';
import { d as buildToc, s as slugify, $ as $$Button, b as $$Icon, a as $$Layout } from './Layout_C-gnpdAt.mjs';
import { $ as $$Section } from './Section_Bj4Y0GJ-.mjs';
import { a as $$MyImage, $ as $$Row } from './MyImage_4j3QZG_9.mjs';
import { $ as $$MyBreadCrumbs } from './MyBreadCrumbs_lfLGcO-o.mjs';
import { a as $$Categories, $ as $$PostCard } from './Categories_KRAKBI77.mjs';

const $$Astro$4 = createAstro("https://www.lukaszmilos.pl");
const $$TocHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TocHeading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="list-inside list-disc px-6 py-2 text-base"> <a${addAttribute("#" + heading.slug, "href")}> ${heading.text} </a> ${(heading?.subheadings?.length ?? 0) > 0 && renderTemplate`<ul class="translate-x-4"> ${heading?.subheadings?.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "D:/Projects/Personal/astro-template/src/components/blog/TocHeading.astro", void 0);

const $$Astro$3 = createAstro("https://www.lukaszmilos.pl");
const $$Toc = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Toc;
  const { headings } = Astro2.props;
  const toc = buildToc(headings);
  return renderTemplate`${maybeRenderHead()}<div class="w-full text-lg"> <span class="text-h5">Spis treści</span> <nav> <ul class="mt-2"> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TocHeading", $$TocHeading, { "heading": heading })}`)} </ul> </nav> </div>`;
}, "D:/Projects/Personal/astro-template/src/components/blog/Toc.astro", void 0);

const $$Astro$2 = createAstro("https://www.lukaszmilos.pl");
const $$PostNavigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostNavigation;
  const { prevPost, nextPost, class: className } = Astro2.props;
  return renderTemplate`${(prevPost || nextPost) && renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex flex-row justify-center gap-4", className], "class:list")}>${prevPost?.slug && renderTemplate`${renderComponent($$result, "Button", $$Button, { "link": "/blog/" + slugify(prevPost.slug) + "/" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "size-6" })}
Poprzedni post
` })}`}${nextPost?.slug && renderTemplate`${renderComponent($$result, "Button", $$Button, { "link": "/blog/" + slugify(nextPost.slug) + "/" }, { "default": ($$result2) => renderTemplate`
Następny post
${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "size-6" })}` })}`}</div>`}`;
}, "D:/Projects/Personal/astro-template/src/components/blog/PostNavigation.astro", void 0);

const $$Astro$1 = createAstro("https://www.lukaszmilos.pl");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { post, headings, meta, schema, relatedPosts, prevPost, nextPost } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="align-center flex flex-col items-center gap-4 bg-accent-darkest px-6 py-8 text-white md:py-16"> <div class="flex max-w-prose flex-col items-center justify-center gap-4 text-center"> <!-- Breadcrumbs --> ${renderComponent($$result2, "MyBreadCrumbs", $$MyBreadCrumbs, {})} ${post?.data.heading && renderTemplate`<h1>${post?.data.heading}</h1>`} ${post?.data.subheading && renderTemplate`<p class="text-lg">${post?.data.subheading}</p>`} <!-- Reading time --> <!-- <div class="flex flex-col text-center">
      {readingTime(post?.body)}
    </div> --> </div> </header> ${renderComponent($$result2, "Section", $$Section, { "center": true, "maxWidth": "max-w-prose" }, { "default": ($$result3) => renderTemplate`  ${post?.data.image.src && renderTemplate`${renderComponent($$result3, "MyImage", $$MyImage, { "src": "posts/" + post?.data.image.src, "alt": post?.data.image.alt, "width": 680, "height": 680, "loading": "eager" })}`} ${post?.data.leading && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <p class="text-left text-lg">${post?.data.leading}</p> <hr class="h-px w-full border-0 bg-gray"> ` })}`} ${post?.data.video && renderTemplate`<div class="flex w-full flex-col gap-4 self-start"> <p class="text-h3">Jeśli wolisz oglądać: </p> <div class="relative h-96 w-full"> <iframe class="t-0 l-0 b-0 r-0 absolute h-full w-full rounded shadow"${addAttribute(post?.data.video, "src")}></iframe> </div> </div>`} ${headings && renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Toc", $$Toc, { "headings": headings })} <hr class="h-px w-full border-0 bg-gray"> ` })}`} <article class="prose-img:aspect-square prose prose-lg text-black prose-p:text-lg prose-img:w-[680px] prose-img:rounded-lg prose-img:object-cover prose-img:shadow-md"> ${renderSlot($$result3, $$slots["default"])} </article> <hr class="h-px w-full border-0 bg-gray"> <div class="mt-8 flex w-full flex-col justify-between gap-4 md:flex-row md:gap-0"> <!-- Post categories --> ${post?.data.categories && renderTemplate`${renderComponent($$result3, "Categories", $$Categories, { "categories": post?.data.categories })}`} <!-- Author --> <div class="flex items-center gap-4"> <!-- <img class="h-10 w-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" /> --> ${renderComponent($$result3, "Icon", $$Icon, { "name": "avatar", "class": "size-10 rounded-full bg-gray p-2 shadow-sm" })} <div class="font-medium"> <div>${post?.data.author || data.site.blog.author}</div> </div> </div> </div> <hr class="my-8 h-px border-0 bg-gray">  ${renderComponent($$result3, "PostNavigation", $$PostNavigation, { "class": "mt-4", "prevPost": prevPost, "nextPost": nextPost })} ` })}  ${relatedPosts.length > 0 && renderTemplate`${renderComponent($$result2, "Section", $$Section, { "noTopPadding": true }, { "default": ($$result3) => renderTemplate` <h2 class="text-h3">Powiązane posty</h2> ${renderComponent($$result3, "Row", $$Row, { "maxColumns": 4, "placement": "items-stretch" }, { "default": ($$result4) => renderTemplate`${relatedPosts.length > 0 && relatedPosts.map((post2) => renderTemplate`${renderComponent($$result4, "PostCard", $$PostCard, { "post": post2 })}`)}` })} ` })}`}` })}`;
}, "D:/Projects/Personal/astro-template/src/layouts/PostLayout.astro", void 0);

const $$Astro = createAstro("https://www.lukaszmilos.pl");
async function getStaticPaths() {
  const posts = (await getCollection("posts")).filter((post) => !post?.data.draft).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return posts.map((post) => ({
    params: { slug: post?.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = (await getCollection("posts")).filter((post2) => !post2?.data.draft);
  function getNextPost() {
    let postIndex;
    for (const post2 of posts) {
      if (post2?.slug === Astro2.params.slug) {
        postIndex = posts.indexOf(post2);
        return posts[postIndex + 1] || null;
      }
    }
    return null;
  }
  function getPrevPost() {
    let postIndex;
    for (const post2 of posts) {
      if (post2?.slug === Astro2.params.slug) {
        postIndex = posts.indexOf(post2);
        return posts[postIndex - 1] || null;
      }
    }
    return null;
  }
  function getRelatedPosts(currentPost) {
    const relatedPosts2 = [];
    const categories = currentPost.data.categories;
    currentPost?.data?.relatedPosts?.forEach((related) => {
      const post2 = posts.find((p) => p.slug === related.slug);
      if (post2 && !relatedPosts2.includes(post2)) {
        relatedPosts2.push(post2);
      }
    });
    const otherPosts = posts.filter(
      (post2) => post2?.slug !== currentPost.slug && !relatedPosts2.includes(post2) && post2?.data.categories.some((category) => categories.includes(category))
    );
    while (relatedPosts2.length < 3 && otherPosts.length > 0) {
      const randomIndex = Math.floor(Math.random() * otherPosts.length);
      const selectedPost = otherPosts.splice(randomIndex, 1)[0];
      if (selectedPost)
        relatedPosts2.push(selectedPost);
    }
    return relatedPosts2.slice(0, 3);
  }
  const nextPost = getNextPost();
  const prevPost = getPrevPost();
  const post = Astro2.props;
  const { Content, headings } = await post?.render();
  const relatedPosts = getRelatedPosts(post);
  const meta = {
    ...post?.data.meta,
    article: true
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post?.data.meta.title,
    description: post?.data.meta.description,
    datePublished: post?.data.date,
    dateModified: post?.data.date,
    image: [post?.data.image],
    author: [
      {
        "@type": "Person",
        name: data.company.name,
        url: data.site.domain,
        type: "Organization"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "post": post, "headings": headings, "meta": meta, "schema": schema, "relatedPosts": relatedPosts, "prevPost": prevPost, "nextPost": nextPost }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "D:/Projects/Personal/astro-template/src/pages/blog/[...slug].astro", void 0);

const $$file = "D:/Projects/Personal/astro-template/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
