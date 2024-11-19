import { a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { d as data } from './site_XOOrlhg2.mjs';
import { a as $$Layout } from './Layout_C-gnpdAt.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Meta title",
    description: "Meta description",
    // openGraph: {},
    // twitter: {},
    og: false,
    tw: false
  };
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Website",
    name: "\u0141ukasz Mi\u0142o\u015B",
    url: data.site.domain,
    description: "Strona www"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="m-12 flex w-full justify-center"> <h1 class="text-center">Strona internetowa</h1> </div> ` })}`;
}, "D:/Projects/Personal/astro-template/src/pages/index.astro", void 0);

const $$file = "D:/Projects/Personal/astro-template/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
