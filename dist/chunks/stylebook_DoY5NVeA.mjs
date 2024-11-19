import { e as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, d as renderComponent, k as defineScriptVars, l as defineStyleVars, F as Fragment } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { b as $$Icon, c as buildSlug, $ as $$Button } from './Layout_C-gnpdAt.mjs';
import image from './placeholder_Bm-eoff-.mjs';
import { $ as $$PageLayout } from './PageLayout_BRgf4hFS.mjs';
import { a as $$MyImage, $ as $$Row } from './MyImage_4j3QZG_9.mjs';
import { $ as $$Section } from './Section_Bj4Y0GJ-.mjs';
/* empty css                             */
import 'clsx';

const $$Astro$4 = createAstro("https://www.lukaszmilos.pl");
const $$IconList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$IconList;
  const {
    items,
    interactive = false,
    iconName = "tabler:chevron-right",
    color = "text-accent",
    size = "text-4xl",
    class: className,
    ...attributes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["flex flex-col gap-1", className], "class:list")}${spreadAttributes(attributes)}> ${items.map((item) => renderTemplate`<li${addAttribute([
    "flex flex-row items-center gap-2",
    interactive && "duration-300 ease-in-out hover:translate-x-4"
  ], "class:list")}> ${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class:list": ["text-left", color, size] })} <span class="flex-1">${item}</span> </li>`)} </ul>`;
}, "D:/Projects/Personal/astro-template/src/components/ui/IconList.astro", void 0);

const $$Astro$3 = createAstro("https://www.lukaszmilos.pl");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Gallery;
  const {
    id,
    images,
    carousel = false,
    zoom = false,
    gap = "gap-8",
    height = "h-80",
    hoverEffects,
    class: className,
    ...attributes
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-gallery", "astro-gallery", { "data-id": id, "class": "w-full" }, { "default": () => renderTemplate` ${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute([
    "pswp-gallery",
    !carousel ? `grid grid-cols-1 place-content-stretch place-items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 ${gap}` : "relative h-80 overflow-hidden md:h-96",
    className
  ], "class:list")}${spreadAttributes(attributes)}> ${images?.map((image) => renderTemplate`<a${addAttribute(image.data.src, "href")}${addAttribute(image.data.width, "data-pswp-width")}${addAttribute(image.data.height, "data-pswp-height")} target="_blank"${addAttribute([
    "rounded-lg shadow",
    height,
    zoom && "overflow-hidden",
    carousel && "hidden duration-500 ease-in-out",
    hoverEffects
  ], "class:list")}${addAttribute(carousel ? true : void 0, "data-carousel-item")}> ${renderComponent($$result, "MyImage", $$MyImage, { "img": image.data, "alt": image.alt, "width": 500, "height": 500, "widths": [320, 500, 680], "sizes": `(max-width: 480px) 320px, (max-width: 768px) 500px, 680px`, "class:list": [
    "object-cover",
    zoom && "transition-transform duration-500 hover:scale-110"
  ] })} </a>`)} </div> ` })} `;
}, "D:/Projects/Personal/astro-template/src/components/ui/Gallery.astro", void 0);

const $$Astro$2 = createAstro("https://www.lukaszmilos.pl");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Carousel;
  const {
    id,
    images,
    lightbox = false,
    zoom = false,
    height = "h-80",
    class: className,
    ...attributes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full" data-carousel="slide"${spreadAttributes(attributes)}> ${lightbox ? renderTemplate`${renderComponent($$result, "Gallery", $$Gallery, { "id": id, "images": images, "carousel": true, "zoom": zoom, "height": height })}` : renderTemplate`<div class="relative h-80 overflow-hidden rounded md:h-96"> ${images?.map((image) => renderTemplate`<div class="hidden rounded shadow duration-500 ease-in-out" data-carousel-item> ${renderComponent($$result, "MyImage", $$MyImage, { "img": image.data, "alt": image.alt, "widths": [320, 500, 680], "sizes": `(max-width: 480px) 320px, (max-width: 768px) 500px, 680px`, "class:list": ["object-cover", height] })} </div>`)} </div>`} <!-- Slider indicators --> <div class="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 space-x-4 rtl:space-x-reverse"> ${[...Array(images.length)].map((_, index) => renderTemplate`<button type="button" class="h-4 w-4 rounded-full bg-gray hover:bg-gray-dark"${addAttribute(index === 0, "aria-current")}${addAttribute(`Slide ${index + 1}`, "aria-label")}${addAttribute(index, "data-carousel-slide-to")}></button>`)} </div> <!-- Slider controls --> <button type="button" class="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4" data-carousel-prev> <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray group-hover:bg-gray-dark group-hover:text-white"> <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Poprzednie</span> </span> </button> <button type="button" class="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none" data-carousel-next> <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray group-hover:bg-gray-dark group-hover:text-white"> <svg class="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Następne</span> </span> </button> </div>`;
}, "D:/Projects/Personal/astro-template/src/components/ui/Carousel.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const emailData = {
    key: "f4795573-4477-40a4-9134-7719525fa71e",
    subject: "Nowa wiadomo\u015B\u0107 ze strony www",
    from: "Nowa wiadomo\u015B\u0107 ze strony www.lukaszmilos.pl"
  };
  const statuses = {
    sending: "Wysy\u0142anie...",
    success: "Wiadomo\u015B\u0107 zosta\u0142a wys\u0142ana",
    error: "B\u0142\u0105d: "
  };
  const errors = {
    emailRequired: "E-mail jest wymagany",
    emailInvalid: "Podany e-mail jest nieprawid\u0142owy",
    messageRequired: "Wiadomo\u015B\u0107 jest wymagana",
    somethingWentWrong: "Co\u015B posz\u0142o nie tak"
  };
  return renderTemplate(_a || (_a = __template(["", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation flex flex-col gap-6 astro-ohai7hk4" data-astro-reload novalidate> <input type="hidden" name="access_key"', ' class="astro-ohai7hk4"> <!-- Spam prevention --> <input type="checkbox" class="hidden astro-ohai7hk4" style="display:none" name="botcheck"> <!-- Subject --> <input type="hidden" name="subject"', ' class="astro-ohai7hk4"> <!-- From name --> <input type="hidden" name="from_name"', ' class="astro-ohai7hk4"> <!-- E-mail --> <div class="flex flex-col gap-2 astro-ohai7hk4"> <label for="email" class=" astro-ohai7hk4">\nE-mail <span class="text-danger astro-ohai7hk4">*</span> </label> <input id="email" name="email" type="email" required placeholder="Tw\xF3j adres e-mail" class="rounded border border-border_color text-sm focus:border-accent astro-ohai7hk4"> <div class="empty-feedback astro-ohai7hk4">', '</div> <div class="invalid-feedback astro-ohai7hk4">', '</div> </div> <!-- Message --> <div class="flex flex-col gap-2 astro-ohai7hk4"> <label for="message" class=" astro-ohai7hk4">\nWiadomo\u015B\u0107 <span class="text-danger astro-ohai7hk4">*</span> </label> <textarea id="message" name="message" rows="8" cols="50" required placeholder="Twoja wiadomo\u015B\u0107" class="rounded border border-border_color text-sm text-black focus:border-accent astro-ohai7hk4">    </textarea> <div class="empty-feedback invalid-feedback astro-ohai7hk4">', '</div> </div> <!-- Terms --> <div class="flex flex-col gap-2 astro-ohai7hk4"> <label for="terms" class="text-sm astro-ohai7hk4"> <input id="terms" name="terms" type="checkbox" required class="mr-2 h-4 w-4 border-border_color focus:border-accent astro-ohai7hk4"> <span class="text-danger astro-ohai7hk4">*</span>\nZgadzam si\u0119 z', " <a", ' class="text-accent hover:underline astro-ohai7hk4">\npolityk\u0105 prywatno\u015Bci.\n</a>\nWyra\u017Cam zgod\u0119 na przetwarzanie podanych w formularzu kontaktowym danych w celu\n      nawi\u0105zania kontaktu, odpowiedzi na zadane pytania i przes\u0142anie oferty handlowej\n      \u015Brodkami komunikacji elektronicznej lub telefonicznie.\n</label> </div> <!-- Submit --> <button type="submit" class="flex flex-row place-items-center justify-center gap-2 self-stretch rounded border border-accent bg-accent px-4 py-4 text-base text-white shadow-md transition-all duration-300 ease-in-out hover:translate-y-1 hover:border-accent-dark hover:bg-accent-dark md:self-start astro-ohai7hk4">\nWy\u015Blij wiadomo\u015B\u0107\n</button> <div id="result" class="p-2 text-center astro-ohai7hk4"></div> </form>  <script>(function(){', '\n  document.addEventListener(\n    "DOMContentLoaded",\n    () => {\n      const form = document.getElementById("form")\n      const result = document.getElementById("result")\n\n      document.getElementById("message").defaultValue = ""\n\n      form.addEventListener("submit", function (e) {\n        e.preventDefault()\n        form.classList.add("was-validated")\n\n        if (!form.checkValidity()) {\n          form.querySelectorAll(":invalid")[0].focus()\n          return\n        }\n        const formData = new FormData(form)\n        let object = Object.fromEntries(formData)\n\n        object["wiadomo\u015B\u0107"] = object["message"]\n        delete object["message"]\n        delete object["terms"]\n\n        const json = JSON.stringify(object)\n\n        result.innerHTML = statuses.sending\n        result.classList.add("sending")\n\n        fetch("https://api.web3forms.com/submit", {\n          method: "POST",\n          headers: {\n            "Content-Type": "application/json",\n            Accept: "application/json",\n          },\n          body: json,\n        })\n          .then(async (response) => {\n            let json = await response.json()\n            result.classList.remove("sending")\n            if (response.status == 200) {\n              result.classList.add("success")\n              result.innerHTML = statuses.success\n            } else {\n              result.classList.add("error")\n              result.innerHTML = statuses.error + json.message\n            }\n          })\n          .catch((error) => {\n            result.innerHTML = errors.somethingWentWrong\n          })\n          .then(function () {\n            form.reset()\n            form.classList.remove("was-validated")\n            setTimeout(() => {\n              result.style.display = "none"\n            }, 5000)\n          })\n      })\n    },\n    { once: true }\n  )\n})();<\/script>'])), maybeRenderHead(), addAttribute(emailData.key, "value"), addAttribute(emailData.subject, "value"), addAttribute(emailData.from, "value"), errors.emailRequired, errors.emailInvalid, errors.messageRequired, " ", addAttribute(buildSlug("/polityka-prywatnosci"), "href"), defineScriptVars({ statuses, errors }));
}, "D:/Projects/Personal/astro-template/src/components/widgets/ContactForm.astro", void 0);

const $$Astro$1 = createAstro("https://www.lukaszmilos.pl");
const $$Counter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Counter;
  const { value, class: className } = Astro2.props;
  const $$definedVars = defineStyleVars([{ num: value }]);
  return renderTemplate`${maybeRenderHead()}<span${addAttribute([[
    "before:left-[calc(0.4em * var(--n, 1))] animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num-counter)] before:content-[counter(num)]",
    className
  ], "astro-dolgn5qv"], "class:list")}${addAttribute($$definedVars, "style")}> <span class="sr-only astro-dolgn5qv"${addAttribute($$definedVars, "style")}>${value}</span> </span> `;
}, "D:/Projects/Personal/astro-template/src/components/widgets/Counter.astro", void 0);

const $$Astro = createAstro("https://www.lukaszmilos.pl");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { id, items } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "center": true, "class": "bg-accent-darkest text-center text-white" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>FAQ - Pytania i odpowiedzi</h2> <div class="flex w-full max-w-prose flex-col items-start gap-4" data-accordion="collapse" data-active-classes="bg-accent"> ${items?.map((item, index) => {
    const isLast = index === items.length - 1;
    return renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <button type="button"${addAttribute([
      "flex w-full items-center justify-between gap-4 rounded bg-accent-dark p-4 text-white shadow-sm transition-all duration-100 ease-in-out hover:bg-accent",
      !isLast && "border-b-0"
    ], "class:list")}${addAttribute(`${id}-heading-${index}`, "id")}${addAttribute(`#${id}-item-${index}`, "data-accordion-target")} aria-expanded="false"${addAttribute(`${id}-item-${index}`, "aria-controls")}> <span class="text-left">${item.question}</span> <svg data-accordion-icon class="h-4 w-4 shrink-0 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> <div${addAttribute(`${id}-item-${index}`, "id")} class="hidden"> <div class="p-4"> ${item.answer.map((paragraph) => renderTemplate`<p class="mb-2 text-left">${paragraph}</p>`)} </div> </div> ` })}`;
  })} </div> <div class="flex w-full flex-col items-center gap-4 text-center"> <p class="text-h5">Masz inne pytania?</p> <p class="text-gray">
Napisz, co chcesz wiedzieć.<br>To darmowy i niezobowiązujący kontakt.
</p> ${renderComponent($$result2, "Button", $$Button, { "link": buildSlug("/kontakt"), "class": "self-stretch md:self-center" }, { "default": ($$result3) => renderTemplate`Zadaj swoje pytanie` })} </div> ` })}`;
}, "D:/Projects/Personal/astro-template/src/components/parts/FAQ.astro", void 0);

const $$Stylebook = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Stylebook",
    description: "Strona ustawie\u0144 stylu",
    noindex: true,
    nofollow: true,
    og: false,
    tw: false
  };
  const pageTitle = meta.title;
  const pageDescription = "Oprawa graficzna strony";
  const loremTitle = "Lorem ipsum dolor sit amet";
  const loremLeading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin arcu sit amet blandit efficitur. In convallis bibendum dui quis facilisis. Nunc et dui quam.";
  const loremDescription = "Cras a fringilla nisi, non laoreet magna. Vestibulum justo dolor, tempus quis mauris ac, bibendum tincidunt dui. Pellentesque nec odio quis eros tristique dictum. Phasellus vestibulum, lectus vitae cursus aliquam, metus nulla auctor risus, vitae condimentum nibh est ut lectus. Sed ultrices malesuada pulvinar. Vestibulum vehicula dui sed euismod lobortis. Praesent lectus diam, tempus id dapibus ac, mattis ut nibh. Nulla ipsum sem, blandit in augue non, congue molestie massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempor tortor id enim pharetra dictum. Aenean vel diam eu tortor porta sagittis. Donec id ex blandit, finibus orci eleifend, sollicitudin lacus. Integer at diam sollicitudin, finibus nibh vitae, cursus lacus.";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "pageTitle": pageTitle, "pageDescription": pageDescription, "meta": meta }, { "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Section", $$Section, { "maxWidth": "max-w-screen-md min-h-screen", "center": true, "withBackgroundImage": true, "class": "text-white" }, { "background": ($$result3) => renderTemplate`${renderComponent($$result3, "MyImage", $$MyImage, { "slot": "background", "src": "pages/cyfryzacja.webp", "alt": "", "width": 1920, "withOverlay": true, "overlayColor": "bg-gradient-to-b from-slate-800/50 to-slate-950/50", "class": "h-full rounded-none", "loading": "eager" })}`, "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<h1 class="text-center leading-tight">
Wzrost Twojej firmy zaczyna się tutaj
</h1><div class="flex flex-row gap-4 text-black"></div> ` })}  ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-col items-start gap-y-6"> <h1 class="max-w-[20ch]">Heading 1 first line Heading 1 second line</h1> <h2 class="max-w-[20ch]">Heading 2 first line Heading 2 second line</h2> <h3 class="max-w-[20ch]">Heading 3 first line Heading 3 second line</h3> <h4 class="max-w-[20ch]">Heading 4 first line Heading 4 second line</h4> <h5 class="max-w-[20ch]">Heading 5 first line Heading 5 second line</h5> <h6 class="max-w-[20ch]">Heading 6 first line Heading 6 second line</h6> <p class="text-sm"> ${loremDescription} </p> <p> ${loremDescription} </p> <p class="text-lg"> ${loremDescription} </p> </div> ` })}  ${renderComponent($$result2, "FAQ", $$FAQ, { "id": "faq-1", "items": [
    { question: "abc", answer: ["cde", "asdasdasd", "asdasdasdasdas"] },
    { question: "abc", answer: ["cde"] },
    { question: "abc", answer: ["cde"] },
    { question: "abc", answer: ["cde"] }
  ] })}  ${renderComponent($$result2, "Section", $$Section, { "class": "bg-gray-light" }, { "default": ($$result3) => renderTemplate` <h2>Lista punktowana z ikonami</h2> ${renderComponent($$result3, "IconList", $$IconList, { "items": ["sdkasdklasdlkasjdasd", "asdaskldjaskdlasd", "asdaskdaslkdalsd"] })} ` })}  ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <h2>Przyciski</h2> <div class="flex flex-col items-start gap-y-6"> <!-- primary buttons  --> <div class="flex flex-row flex-wrap items-center gap-4"> ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "primary", "size": "sm" }, { "default": ($$result4) => renderTemplate` Kup teraz ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "primary" }, { "default": ($$result4) => renderTemplate` Kup teraz ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "primary", "size": "lg" }, { "default": ($$result4) => renderTemplate` Kup teraz ` })} </div> <!-- primary buttons with icon  --> <div class="flex flex-row flex-wrap items-center gap-4"> ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "primary", "size": "sm" }, { "default": ($$result4) => renderTemplate`
Kup teraz
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path> </svg> ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "primary" }, { "default": ($$result4) => renderTemplate`
Kup teraz
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path> </svg> ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "primary", "size": "lg" }, { "default": ($$result4) => renderTemplate`
Kup teraz
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path> </svg> ` })} </div> <!-- secondary buttons  --> <div class="flex flex-row flex-wrap items-center gap-4"> ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "secondary", "size": "sm" }, { "default": ($$result4) => renderTemplate` Kup teraz ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "secondary" }, { "default": ($$result4) => renderTemplate` Kup teraz ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "secondary", "size": "lg" }, { "default": ($$result4) => renderTemplate` Kup teraz ` })} </div> <!-- secondary buttons with icon  --> <div class="flex flex-row flex-wrap items-center gap-4"> ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "secondary", "size": "sm" }, { "default": ($$result4) => renderTemplate`
Kup teraz
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path> </svg> ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "secondary" }, { "default": ($$result4) => renderTemplate`
Kup teraz
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path> </svg> ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "secondary", "size": "lg" }, { "default": ($$result4) => renderTemplate`
Kup teraz
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path> </svg> ` })} </div> <!-- link buttons --> <div class="flex flex-row flex-wrap items-center gap-4"> ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "link", "size": "sm" }, { "default": ($$result4) => renderTemplate`
Kup teraz
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path> </svg> ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "link" }, { "default": ($$result4) => renderTemplate`
Kup teraz
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path> </svg> ` })} ${renderComponent($$result3, "Button", $$Button, { "link": "#", "variant": "link", "size": "lg" }, { "default": ($$result4) => renderTemplate`
Kup teraz
<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"></path> </svg> ` })} </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "class": "bg-gray-light" }, { "default": ($$result3) => renderTemplate` <h2>Licznik i ikona</h2> <div class="row flex items-center"> ${renderComponent($$result3, "Counter", $$Counter, { "value": 23 })} ${renderComponent($$result3, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "size-12", "width": 48, "height": 48 })} </div> ` })}  ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate`  <h2>Obraz</h2> ${renderComponent($$result3, "MyImage", $$MyImage, { "img": image, "alt": "" })}  <h2>Obraz z prostą nakładką</h2> ${renderComponent($$result3, "MyImage", $$MyImage, { "src": "pages/cyfryzacja.webp", "alt": "", "withOverlay": true, "overlayColor": "bg-slate-900/50" })}  <h2>Obraz z zaawansoaną nakładką</h2> ${renderComponent($$result3, "MyImage", $$MyImage, { "src": "pages/cyfryzacja.webp", "alt": "", "withOverlay": true, "customOverlay": true }, { "overlay": ($$result4) => renderTemplate`<div class="l-0 t-0 group absolute inset-0 flex size-full w-full items-end justify-center rounded bg-red-300/50 pb-3 transition-all duration-300 ease-in-out hover:bg-red-500/50 hover:pb-4"> <span class="text-h5 text-white group-hover:text-red-500">
Przykładowy tekst
</span> </div>` })} ` })}  ${renderComponent($$result2, "Section", $$Section, { "class": "bg-gray-light" }, { "default": ($$result3) => renderTemplate` <h2>Galeria</h2> ${renderComponent($$result3, "Gallery", $$Gallery, { "id": "gal1", "images": [
    { data: image, alt: "glass" },
    { data: image, alt: "glass2" },
    { data: image, alt: "glass3" }
  ], "zoom": true })} ` })}  ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <h2>Karuzela</h2> ${renderComponent($$result3, "Carousel", $$Carousel, { "id": "car1", "images": [
    { data: image, alt: "glass" },
    { data: image, alt: "glass2" },
    { data: image, alt: "glass3" }
  ], "lightbox": true })} ` })}  ${renderComponent($$result2, "Section", $$Section, { "class": "bg-green-200" }, { "default": ($$result3) => renderTemplate` <h2>Karty</h2> ${renderComponent($$result3, "Row", $$Row, { "maxColumns": 4 }, { "default": ($$result4) => renderTemplate` <div class="fade-in flex flex-col gap-4 rounded bg-gray-lightest px-4 py-8 shadow"> <h3 class="text-h5">${loremTitle}</h3> <p>${loremLeading}</p> ${renderComponent($$result4, "Button", $$Button, { "link": "#" }, { "default": ($$result5) => renderTemplate`Sprawdź` })} </div> <div class="fade-in flex flex-col gap-4 rounded bg-gray-lightest px-4 py-8 shadow"> <h3 class="text-h5">${loremTitle}</h3> <p>${loremLeading}</p> ${renderComponent($$result4, "Button", $$Button, { "link": "#" }, { "default": ($$result5) => renderTemplate`Sprawdź` })} </div> <div class="fade-in flex flex-col gap-4 rounded bg-gray-lightest px-4 py-8 shadow"> <h3 class="text-h5">${loremTitle}</h3> <p>${loremLeading}</p> ${renderComponent($$result4, "Button", $$Button, { "link": "#" }, { "default": ($$result5) => renderTemplate`Sprawdź` })} </div> <div class="fade-in flex flex-col gap-4 rounded bg-gray-lightest px-4 py-8 shadow"> <h3 class="text-h5">${loremTitle}</h3> <p>${loremLeading}</p> ${renderComponent($$result4, "Button", $$Button, { "link": "#" }, { "default": ($$result5) => renderTemplate`Sprawdź` })} </div> <div class="fade-in flex flex-col gap-4 rounded bg-gray-lightest px-4 py-8 shadow"> <h3 class="text-h5">${loremTitle}</h3> <p>${loremLeading}</p> ${renderComponent($$result4, "Button", $$Button, { "link": "#" }, { "default": ($$result5) => renderTemplate`Sprawdź` })} </div> <div class="fade-in flex flex-col gap-4 rounded bg-gray-lightest px-4 py-8 shadow"> <h3 class="text-h5">${loremTitle}</h3> <p>${loremLeading}</p> ${renderComponent($$result4, "Button", $$Button, { "link": "#" }, { "default": ($$result5) => renderTemplate`Sprawdź` })} </div> <div class="fade-in flex flex-col gap-4 rounded bg-gray-lightest px-4 py-8 shadow"> <h3 class="text-h5">${loremTitle}</h3> <p>${loremLeading}</p> ${renderComponent($$result4, "Button", $$Button, { "link": "#" }, { "default": ($$result5) => renderTemplate`Sprawdź` })} </div> <div class="fade-in flex flex-col gap-4 rounded bg-gray-lightest px-4 py-8 shadow"> <h3 class="text-h5">${loremTitle}</h3> <p>${loremLeading}</p> ${renderComponent($$result4, "Button", $$Button, { "link": "#" }, { "default": ($$result5) => renderTemplate`Sprawdź` })} </div> ` })} ` })}  ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <div class="flex max-w-screen-sm flex-col gap-4"> <div class="flex flex-col items-center justify-center gap-2"> <h2>Skontaktuj się</h2> <p class="text-lg">Zadaj pytanie lub rozpocznij współpracę.</p> </div> ${renderComponent($$result3, "ContactForm", $$ContactForm, {})} </div>` })} ` })}`;
}, "D:/Projects/Personal/astro-template/src/pages/stylebook.astro", void 0);

const $$file = "D:/Projects/Personal/astro-template/src/pages/stylebook.astro";
const $$url = "/stylebook";

export { $$Stylebook as default, $$file as file, $$url as url };
