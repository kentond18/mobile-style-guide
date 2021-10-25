import { Box, Heading, Text } from "@chakra-ui/layout";

const FontDisplay = ({ size, type }) => {
	if (!size) size = "xs";
	if (!type) type = "Body";

	const fontSize = {
		XS: "12px",
		SM: "14px",
		MD: "16px",
		LG: "18px",
		XL: "20px",
		"2XL": "24px",
		"3XL": "30px",
		"4XL": "36px",
	};

	if (type == "Heading")
		return (
			<Box p="2">
				<Heading fontSize={size} textAlign="center">
					{size.toUpperCase()} {type} Font -{" "}
					<i>{fontSize[size.toUpperCase()]}</i>
				</Heading>
			</Box>
		);
	if (type == "Body")
		return (
			<Box p="2">
				<Text fontSize={size} textAlign="center">
					{size.toUpperCase()} {type} Font -{" "}
					<i>{fontSize[size.toUpperCase()]}</i>
				</Text>
			</Box>
		);
};

export default FontDisplay;
