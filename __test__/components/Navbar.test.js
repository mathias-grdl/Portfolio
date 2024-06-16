import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../../src/components/Navbar";
import { usePathname } from "next/navigation";

// Mock the usePathname hook
jest.mock("next/navigation", () => ({
	usePathname: jest.fn(),
}));

const containerStyles = "container-styles";
const LinkStyles = "link-styles";
const underLineStyles = "underline-styles";
const onLinkClick = jest.fn();

describe("Navbar component", () => {
	it("renders all links and their underline animations correctly", () => {
		// Define mock paths for each link
		const mockPaths = [
			{ path: "/", name: "home", id: 1 },
			{ path: "/projects/", name: "my projects", id: 2 },
			{ path: "/contact/", name: "contact", id: 3 },
		];

		// Mock usePathname to return each path in sequence
		mockPaths.forEach((mockPath) => {
			usePathname.mockReturnValueOnce(mockPath.path);

			render(
				<Navbar
					containerStyles={containerStyles}
					LinkStyles={LinkStyles}
					underLineStyles={underLineStyles}
					onLinkClick={onLinkClick}
				/>
			);

			// Check that each link is rendered with the correct text
			const linkElements = screen.getAllByText(mockPath.name);
			expect(linkElements.length).toBeGreaterThan(0); // Ensure at least one element is found

			// Check that underline is rendered for the active link
			const underlineElement = screen.getByTestId(
				`underline-${mockPath.name}`
			);
			expect(underlineElement).toBeInTheDocument();
			expect(underlineElement).toHaveClass(underLineStyles);
		});
	});
});
