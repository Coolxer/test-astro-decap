import { a as createComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>dsfsd fsdf sdf sdf</p>";

				const frontmatter = {"name":"sadasdasd","age":23,"rating":3};
				const file = "D:/Projects/Personal/astro-template/src/content/tests/map-rating-3-name-sadasdasd-age-23-body-dsfsd-fsdf-sdf-sdf.md";
				const url = undefined;
				function rawContent() {
					return "dsfsd fsdf sdf sdf\n";
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
