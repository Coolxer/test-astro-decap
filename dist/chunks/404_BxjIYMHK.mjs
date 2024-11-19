import { a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { $ as $$Button, a as $$Layout } from './Layout_C-gnpdAt.mjs';
import { $ as $$Section } from './Section_Bj4Y0GJ-.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "404 - Brak strony",
    description: "Strona nie zosta\u0142a znaleziona. Sprawd\u017A adres lub wr\xF3\u0107 na stron\u0119 g\u0142\xF3wn\u0105.",
    og: false,
    tw: false,
    nofollow: true,
    noindex: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "center": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1>404. Nie ma takiej strony</h1> ${renderComponent($$result3, "Button", $$Button, { "link": "/", "class": "" }, { "default": ($$result4) => renderTemplate`Wróć na stronę główną` })} ` })} ` })}`;
}, "D:/Projects/Personal/astro-template/src/pages/404.astro", void 0);

const $$file = "D:/Projects/Personal/astro-template/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
