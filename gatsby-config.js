/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `gatsby-sort-resolver-bug`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: 'gatsby-transformer-json',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'videos',
				path: './content/videos',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'videos-order',
				path: './content/videos-order.json',
			},
		},
	],
};
