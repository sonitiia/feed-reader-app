import { useState, useEffect } from "react";
import Feed from "./Feed";
import feedService from "../../services/FeedService";
import { Stack, Typography, CircularProgress } from "@mui/material";

const FeedList = () => {
	const [feeds, setFeeds] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getFeedsData = async () => {
		try {
			const response = await feedService.getFeedsXML();
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(response, "application/xml");

			const items = Array.from(xmlDoc.querySelectorAll("item")).map(
				(item) => {
					const words = item
						.querySelector("description")
						.textContent.split(" ");
					const limitedDescription =
						words.slice(0, 50).join(" ") + "...";

					return {
						title: item.querySelector("title").textContent,
						link: item.querySelector("link").textContent,
						description: limitedDescription,
					};
				},
			);

			setFeeds(items);
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching feeds:", error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getFeedsData();
	}, []);

	return (
		<Stack
			alignItems="center"
			maxWidth="md"
			alignSelf="center"
			gap={8}
			my={8}
			px={3}
		>
			{isLoading ? (
				<CircularProgress />
			) : (
				<>
					<Typography variant="h4" alignSelf="start">
						Feed
					</Typography>
					{feeds.map((feed, index) => (
						<Feed
							key={index}
							title={feed.title}
							link={feed.link}
							description={feed.description}
							date={feed.date}
						/>
					))}
				</>
			)}
		</Stack>
	);
};

export default FeedList;
