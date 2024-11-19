import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_CFg3Wg5i.mjs';
import { a as createComponent, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, b as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';

var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true, SITE: "https://www.lukaszmilos.pl", ASSETS_PREFIX: "" };
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(define_import_meta_env_default, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/relume.md": () => import('./relume_D6W8fFHn.mjs'),"/src/content/tests/2024-11-19-alfabet.md": () => import('./2024-11-19-alfabet_Cs1la4mD.mjs'),"/src/content/tests/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf.md": () => import('./map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf_C7v0DQVx.mjs'),"/src/content/tests/map-rating-5-name-januszex-age-12-body-test-1.md": () => import('./map-rating-5-name-januszex-age-12-body-test-1_CJ9YDjrV.mjs'),"/src/content/tests/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda.md": () => import('./map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda_o3_Z5K5n.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"jak-relume-pomaga-w-projektowaniu-stron-www":"/src/content/posts/relume.md"}},"tests":{"type":"content","entries":{"2024-11-19-alfabet":"/src/content/tests/2024-11-19-alfabet.md","map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf":"/src/content/tests/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf.md","map-rating-5-name-januszex-age-12-body-test-1":"/src/content/tests/map-rating-5-name-januszex-age-12-body-test-1.md","map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda":"/src/content/tests/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/relume.md": () => import('./relume_Cn2E9zym.mjs'),"/src/content/tests/2024-11-19-alfabet.md": () => import('./2024-11-19-alfabet_Qelk5jcm.mjs'),"/src/content/tests/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf.md": () => import('./map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf_DBtX6_Z9.mjs'),"/src/content/tests/map-rating-5-name-januszex-age-12-body-test-1.md": () => import('./map-rating-5-name-januszex-age-12-body-test-1_-0zzBWA_.mjs'),"/src/content/tests/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda.md": () => import('./map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda_0YxwmQ9O.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
