import { a as createComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>test 1</p>";

				const frontmatter = {"name":"januszex","age":12,"rating":5};
				const file = "D:/Projects/Personal/astro-template/src/content/tests/map-rating-5-name-januszex-age-12-body-test-1.md";
				const url = undefined;
				function rawContent() {
					return "test 1\n";
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
