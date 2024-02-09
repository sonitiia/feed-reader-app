import { Link, Stack, Typography } from "@mui/material";

const Feed = ({ title, description, link }) => {
	return (
		<Stack gap={4}>
			<Link href={link}>
				<Typography variant="h5" fontWeight="bold">
					{title}
				</Typography>
			</Link>
			<Typography variant="p">{description}</Typography>
		</Stack>
	);
};

export default Feed;
