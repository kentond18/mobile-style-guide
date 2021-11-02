import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Flex, Text } from "@chakra-ui/layout";

const Navbar = () => {
	return (
		<Box display="flex" flexDir="column" alignItems="center">
			<Heading textAlign="center">Navbar</Heading>

			<Text textAlign="center" py={3}>
				iPhone Portrait Navbar
			</Text>
			<Box
				bg={useColorModeValue("brand.teal.50", "gray.900")}
				h={"16"}
				w="md"
				display={"flex"}
				alignItems="center"
				justifyContent="space-evenly"
			>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 1
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 2
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 3
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 4
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 5
				</Button>
			</Box>
			<Text textAlign="center" py={3}>
				iPhone Landscape Navbar
			</Text>
			<Box
				bg={useColorModeValue("brand.teal.50", "gray.900")}
				h={"16"}
				w="2xl"
				display={"flex"}
				alignItems="center"
				justifyContent="space-evenly"
			>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 1
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 2
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 3
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 4
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 5
				</Button>
			</Box>
			<Text textAlign="center" py={3}>
				iPad Portrait Navbar
			</Text>
			<Box
				bg={useColorModeValue("brand.teal.50", "gray.900")}
				h={"16"}
				w="3xl"
				display={"flex"}
				alignItems="center"
				justifyContent="space-evenly"
			>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 1
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 2
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 3
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 4
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 5
				</Button>
			</Box>
			<Text textAlign="center" py={3}>
				iPad Landscape Navbar
			</Text>
			<Box
				bg={useColorModeValue("brand.teal.50", "gray.900")}
				h={"16"}
				w="6xl"
				display={"flex"}
				alignItems="center"
				justifyContent="space-evenly"
			>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 1
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 2
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 3
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 4
				</Button>
				<Button bg="brand.teal.200" _hover={{ bg: "brand.teal.500" }}>
					Item 5
				</Button>
			</Box>
		</Box>
	);
};

export default Navbar;
