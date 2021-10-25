import "@fontsource/mulish/400.css";
import "@fontsource/merriweather/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
