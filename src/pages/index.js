import { graphql } from 'gatsby';
import * as React from 'react';

const IndexPage = ({ data }) => {
	return (
		<main>
			<div>
				{data.videos.nodes.map(({ title, order }) => (
					<div key={title}>
						Title: {title} | Order: {order}
					</div>
				))}
			</div>
		</main>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		videos: allVideosJson(sort: { order: ASC }) {
			nodes {
				title
				order
			}
		}
	}
`;
