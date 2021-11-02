import { Box, Flex, Heading } from "@chakra-ui/layout";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Color from "./components/Color";
import FontDisplay from "./components/FontDisplay";
import Navbar from "./components/Navbar";

export default function Home() {
  const sizes = ["XS", "SM", "MD", "LG", "XL", "2XL", "3XL", "4XL"];

  return (
    <div>
      <Head>
        <title>Style Guide</title>
        <meta name="description" content="Style Guide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Flex justify="center" align="center" flexDirection="column">
          <Heading pt="3" as="h1" size="4xl">
            Style Guide
          </Heading>

          <Box id="colors">
            <Heading pt="2" size="lg" textAlign="center">
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
          <Box px="4" w="max-content">
            <Heading pt="2" size="lg" textAlign="center">
              Font
            </Heading>
            <Heading size="md" textAlign="center" pt="3" textDecor="underline">
              Heading Font
            </Heading>

            {sizes.map((e, i) => {
              return (
                <FontDisplay size={e.toLowerCase()} key={i} type="Heading" />
              );
            })}

            <Heading size="md" textAlign="center" pt="3" textDecor="underline">
              Body Font
            </Heading>

            {sizes.map((e, i) => {
              return <FontDisplay size={e.toLowerCase()} key={i} type="Body" />;
            })}
          </Box>
        </Flex>
        <Navbar />
      </Box>
    </div>
  );
}
