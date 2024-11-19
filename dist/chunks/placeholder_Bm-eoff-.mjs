const image = new Proxy({"src":"/_astro/placeholder.CXTQ40vO.webp","width":1920,"height":1995,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Projects/Personal/astro-template/src/assets/images/placeholder.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("D:/Projects/Personal/astro-template/src/assets/images/placeholder.webp");
							return target[name];
						}
					});

export { image as default };
