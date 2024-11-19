import { e as createAstro, a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead, g as renderSlot } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { a as $$Layout } from './Layout_C-gnpdAt.mjs';
import { $ as $$MyBreadCrumbs } from './MyBreadCrumbs_lfLGcO-o.mjs';

const $$Astro = createAstro("https://www.lukaszmilos.pl");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const {
    pageTitle,
    pageDescription = null,
    meta,
    schema,
    breadcrumbs = false
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="align-center flex flex-col items-center bg-accent-darkest px-6 py-8 text-white md:py-16"> <div class="flex max-w-prose flex-col items-center justify-center gap-4 text-center"> ${breadcrumbs && renderTemplate`${renderComponent($$result2, "MyBreadCrumbs", $$MyBreadCrumbs, {})}`} <h1>${pageTitle}</h1> ${pageDescription && renderTemplate`<p class="text-lg">${pageDescription}</p>`} ${renderSlot($$result2, $$slots["header"])} </div> </header> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "D:/Projects/Personal/astro-template/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
