import { Box, Flex, Heading } from "@chakra-ui/layout";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Color from "./components/Color";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Style Guide</title>
				<meta name="description" content="Style Guide" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Flex justify="center" align="center" flexDirection="column">
					<Heading pt="3" as="h1" size="4xl">
						Style Guide
					</Heading>

					<Box>
						<Heading py="3" size="lg" textAlign="center">
							Colours
						</Heading>
						<Flex
							flexDir={{ sm: "column", md: "row" }}
							flexWrap="wrap"
							justify="center"
						>
							<Color color="Teal" />
							<Color color="Yellow" />
							<Color color="Pink" />
							<Color color="Orange" />
							<Color color="Red" />
							<Color />
						</Flex>
					</Box>
				</Flex>
			</body>
		</div>
	);
}
