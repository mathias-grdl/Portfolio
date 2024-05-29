import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Socials from "../../src/components/Socials";

jest.mock("next/link", () => ({ children, href }) => (
	<a href={href}>{children}</a>
));

describe("Socials component", () => {
	beforeEach(() => {
		render(
			<Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
		);
	});

	test("renders the correct number of links", () => {
		const links = screen.getAllByRole("link");
		expect(links).toHaveLength(3);
	});

	test("renders each link with correct href", () => {
		const links = screen.getAllByRole("link");
		const youtubeLink = links.find(
			(link) => link.getAttribute("href") === "/"
		);

		const linkedinLink = links.find(
			(link) =>
				link.getAttribute("href") ===
				"https://www.linkedin.com/in/mathias-grondziel/"
		);

		const githubLink = links.find(
			(link) =>
				link.getAttribute("href") === "https://github.com/mathias-grdl"
		);

		expect(youtubeLink).toHaveAttribute("href", "/");
		expect(linkedinLink).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/mathias-grondziel/"
		);
		expect(githubLink).toHaveAttribute(
			"href",
			"https://github.com/mathias-grdl"
		);
	});
});
