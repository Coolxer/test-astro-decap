const company = {
	name: "Łukasz Miłoś",
	address: "39-305 Borowa, Polska",
	email: [
		"lukasz.milos.it@gmail.com",
		"kontakt@lukaszmilos.pl"
	],
	phone: [
		"123 456 789"
	]
};
const site = {
	domain: "https://www.lukaszmilos.pl",
	trailingSlash: "ignore",
	meta: {
		"home-title": "Oficjalna strona Łukasza Miłoś",
		"home-description": "Strona internetowa inż. IT Łukasza Miłoś ",
		"meta-title-template": "%s - Łukasz Miłoś",
		"og-image": {
			src: "/og-default.jpg",
			alt: "inż. IT Łukasz Miłoś"
		}
	},
	integrations: {
		"google-search-console": "",
		"google-analytics": ""
	},
	blog: {
		author: "Łukasz Miłoś",
		itemsPerPage: 9
	},
	placeholderImage: "/placeholder.webp"
};
const data = {
	company: company,
	site: site
};

export { data as d };
