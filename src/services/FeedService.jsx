import axios from "axios";

class FeedService {
	async getFeedsXML() {
		return (
			await axios.get(
				"https://cors-anywhere.herokuapp.com/https://www.nasa.gov/rss/dyn/breaking_news.rss",
			)
		).data;
	}
}

const feedService = new FeedService();
export default feedService;
