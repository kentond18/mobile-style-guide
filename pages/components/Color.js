import { Box, Heading } from "@chakra-ui/layout";

const Color = ({ color }) => {
	if (!color) {
		color = "Gray";
	}

	return (
		<Box m="2">
			<Heading textAlign="center" size="md" py="2">
				{color}
			</Heading>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.50`}
				px="3"
				textColor="black"
			>
				{`${color} - 50`}
			</Box>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.100`}
				px="3"
				textColor="black"
			>
				{`${color} - 100`}
			</Box>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.200`}
				px="3"
				textColor="black"
			>
				{`${color} - 200`}
			</Box>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.300`}
				px="3"
				textColor="black"
			>
				{`${color} - 300`}
			</Box>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.400`}
				px="3"
				textColor="black"
			>
				{`${color} - 400`}
			</Box>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.500`}
				px="3"
				textColor="black"
			>
				{`${color} - 500`}
			</Box>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.600`}
				px="3"
				textColor="white"
			>
				{`${color} - 600`}
			</Box>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.700`}
				px="3"
				textColor="white"
			>
				{`${color} - 700`}
			</Box>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.800`}
				px="3"
				textColor="white"
			>
				{`${color} - 800`}
			</Box>
			<Box
				w="64"
				bgColor={`${color.toLowerCase()}.900`}
				px="3"
				textColor="white"
			>
				{`${color} - 900`}
			</Box>
		</Box>
	);
};

export default Color;
