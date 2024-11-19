import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_pajwzIoN.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///D:/Projects/Personal/astro-template/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Projects/Personal/astro-template/dist/500.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/500","isIndex":false,"type":"page","pattern":"^\\/500\\/?$","segments":[[{"content":"500","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/500.astro","pathname":"/500","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Projects/Personal/astro-template/dist/polityka-prywatnosci/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/polityka-prywatnosci","isIndex":false,"type":"page","pattern":"^\\/polityka-prywatnosci\\/?$","segments":[[{"content":"polityka-prywatnosci","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/polityka-prywatnosci.astro","pathname":"/polityka-prywatnosci","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Projects/Personal/astro-template/dist/robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Projects/Personal/astro-template/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Projects/Personal/astro-template/dist/stylebook/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/stylebook","isIndex":false,"type":"page","pattern":"^\\/stylebook\\/?$","segments":[[{"content":"stylebook","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/stylebook.astro","pathname":"/stylebook","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/Projects/Personal/astro-template/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.lukaszmilos.pl","base":"/","trailingSlash":"ignore","compressHTML":true,"assetsPrefix":"","componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Projects/Personal/astro-template/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Projects/Personal/astro-template/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Projects/Personal/astro-template/src/pages/blog/baza-wiedzy/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/baza-wiedzy/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Projects/Personal/astro-template/src/pages/blog/kategoria/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/kategoria/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Projects/Personal/astro-template/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["D:/Projects/Personal/astro-template/src/pages/polityka-prywatnosci.astro",{"propagation":"none","containsHead":true}],["D:/Projects/Personal/astro-template/src/pages/stylebook.astro",{"propagation":"none","containsHead":true}],["D:/Projects/Personal/astro-template/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Projects/Personal/astro-template/src/pages/500.astro",{"propagation":"none","containsHead":true}],["D:/Projects/Personal/astro-template/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/500@_@astro":"pages/500.astro.mjs","\u0000@astro-page:src/pages/blog/baza-wiedzy/[...page]@_@astro":"pages/blog/baza-wiedzy/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/kategoria/[category]/[...page]@_@astro":"pages/blog/kategoria/_category_/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"pages/blog/_---page_.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/polityka-prywatnosci@_@astro":"pages/polityka-prywatnosci.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/stylebook@_@astro":"pages/stylebook.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_Rru8u7qS.mjs","D:/Projects/Personal/astro-template/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/src/pages/404.astro":"chunks/404_BxjIYMHK.mjs","/src/pages/500.astro":"chunks/500_Bw6RGTVY.mjs","/src/pages/blog/baza-wiedzy/[...page].astro":"chunks/_...page__BNdwPQfo.mjs","/src/pages/blog/kategoria/[category]/[...page].astro":"chunks/_...page__CVNPIu5k.mjs","/src/pages/blog/[...page].astro":"chunks/_...page__D07heqvG.mjs","/src/pages/blog/[...slug].astro":"chunks/_...slug__DHMPwD0p.mjs","/src/pages/polityka-prywatnosci.astro":"chunks/polityka-prywatnosci_Da9D30Qd.mjs","/src/pages/robots.txt.ts":"chunks/robots.txt_CmkuDpGL.mjs","/src/pages/rss.xml.js":"chunks/rss.xml_BDzJggeR.mjs","/src/pages/stylebook.astro":"chunks/stylebook_DoY5NVeA.mjs","/src/pages/index.astro":"chunks/index_BsMO74q-.mjs","D:/Projects/Personal/astro-template/src/content/posts/relume.md?astroContentCollectionEntry=true":"chunks/relume_D6W8fFHn.mjs","D:/Projects/Personal/astro-template/src/content/tests/2024-11-19-alfabet.md?astroContentCollectionEntry=true":"chunks/2024-11-19-alfabet_Cs1la4mD.mjs","D:/Projects/Personal/astro-template/src/content/tests/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf.md?astroContentCollectionEntry=true":"chunks/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf_C7v0DQVx.mjs","D:/Projects/Personal/astro-template/src/content/tests/map-rating-5-name-januszex-age-12-body-test-1.md?astroContentCollectionEntry=true":"chunks/map-rating-5-name-januszex-age-12-body-test-1_CJ9YDjrV.mjs","D:/Projects/Personal/astro-template/src/content/tests/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda.md?astroContentCollectionEntry=true":"chunks/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda_o3_Z5K5n.mjs","D:/Projects/Personal/astro-template/src/content/posts/relume.md?astroPropagatedAssets":"chunks/relume_Cn2E9zym.mjs","D:/Projects/Personal/astro-template/src/assets/images/placeholder.webp":"chunks/placeholder_Bm-eoff-.mjs","D:/Projects/Personal/astro-template/src/content/tests/2024-11-19-alfabet.md?astroPropagatedAssets":"chunks/2024-11-19-alfabet_Qelk5jcm.mjs","D:/Projects/Personal/astro-template/src/content/tests/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf.md?astroPropagatedAssets":"chunks/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf_DBtX6_Z9.mjs","D:/Projects/Personal/astro-template/src/content/tests/map-rating-5-name-januszex-age-12-body-test-1.md?astroPropagatedAssets":"chunks/map-rating-5-name-januszex-age-12-body-test-1_-0zzBWA_.mjs","D:/Projects/Personal/astro-template/src/content/tests/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda.md?astroPropagatedAssets":"chunks/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda_0YxwmQ9O.mjs","D:/Projects/Personal/astro-template/public/placeholder.webp":"chunks/placeholder_CgtpHdZB.mjs","D:/Projects/Personal/astro-template/src/content/posts/relume.md":"chunks/relume_DbHj-UiF.mjs","D:/Projects/Personal/astro-template/src/content/tests/2024-11-19-alfabet.md":"chunks/2024-11-19-alfabet_J4dzXgQj.mjs","D:/Projects/Personal/astro-template/src/content/tests/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf.md":"chunks/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf_Drm-reet.mjs","D:/Projects/Personal/astro-template/src/content/tests/map-rating-5-name-januszex-age-12-body-test-1.md":"chunks/map-rating-5-name-januszex-age-12-body-test-1_BaPTO3iq.mjs","D:/Projects/Personal/astro-template/src/content/tests/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda.md":"chunks/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda_CfxsoLZu.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.WsMi5TGm.js","/astro/hoisted.js?q=2":"_astro/hoisted.BeuNfMPY.js","/astro/hoisted.js?q=0":"_astro/hoisted.Dg4K-ezx.js","D:/Projects/Personal/astro-template/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.CKijkUPa.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///D:/Projects/Personal/astro-template/dist/404.html","/file:///D:/Projects/Personal/astro-template/dist/500.html","/file:///D:/Projects/Personal/astro-template/dist/polityka-prywatnosci/index.html","/file:///D:/Projects/Personal/astro-template/dist/robots.txt","/file:///D:/Projects/Personal/astro-template/dist/rss.xml","/file:///D:/Projects/Personal/astro-template/dist/stylebook/index.html","/file:///D:/Projects/Personal/astro-template/dist/index.html","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
