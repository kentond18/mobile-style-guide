import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: "Merriweather",
		body: "Mulish",
	},
	colors: {
		brand: {
			teal: {
				50: "#E6FEFE",
				100: "#B9FEFE",
				200: "#8CFDFD",
				300: "#5FFCFC",
				400: "#32FBFB",
				500: "#05FAFA",
				600: "#04C8C8",
				700: "#039696",
				800: "#026464",
				900: "#013232",
			},
			yellow: {
				50: "#FDF6E7",
				100: "#FBE5BC",
				200: "#F8D491",
				300: "#F5C366",
				400: "#F2B23B",
				500: "#EFA110",
				600: "#BF810D",
				700: "#906109",
				800: "#604006",
				900: "#302003",
			},
			pink: {
				50: "#FCF2E9",
				100: "#F6D9C0",
				200: "#F1C198",
				300: "#EBA96F",
				400: "#E69147",
				500: "#E0781F",
				600: "#B36019",
				700: "#874812",
				800: "#5A300C",
				900: "#2D1806",
			},
			orange: {
				50: "#FDEDE7",
				100: "#FACDBD",
				200: "#F7AD92",
				300: "#F38D68",
				400: "#F06D3D",
				500: "#ED4D12",
				600: "#BD3E0F",
				700: "#8E2E0B",
				800: "#5F1F07",
				900: "#2F0F04",
			},
			red: {
				50: "#FDEBE7",
				100: "#FBC7BC",
				200: "#F8A491",
				300: "#F58066",
				400: "#F25C3B",
				500: "#EF3910",
				600: "#BF2D0D",
				700: "#902209",
				800: "#601706",
				900: "#300B03",
			},
		},
	},
});

export default theme;
