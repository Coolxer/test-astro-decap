import { a as createComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>sdsd dasdasda</p>";

				const frontmatter = {"name":"geniusz","age":64,"rating":9};
				const file = "D:/Projects/Personal/astro-template/src/content/tests/map-rating-9-name-geniusz-age-64-body-sdsd-dasdasda.md";
				const url = undefined;
				function rawContent() {
					return "sdsd dasdasda\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
