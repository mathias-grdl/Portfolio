import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import Template from "../components/Template";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
	title: "Mathias Grondziel",
	description: "Portfolio de Mathias Grondziel",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={outfit.className}>
				<ThemeProvider attribute="class" defaultTheme="Light">
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
