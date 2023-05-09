exports.createSchemaCustomization = ({ actions }) => {
	const schema = `
    type VideosJson implements Node {
      order: Int!
    }
  `;

	actions.createTypes(schema);
};

exports.createResolvers = ({ createResolvers }) => {
	createResolvers({
		VideosJson: {
			order: {
				type: 'Int!',
				resolve: async (source, args, context, info) => {
					const { order } = await context.nodeModel.findOne({
						type: `ContentJson`,
					});
					const { relativePath } = await context.nodeModel.getNodeById({ id: source.parent });
					const index = order.indexOf(relativePath);
					return index !== -1 ? index : 999;
				},
			},
		},
	});
};
