import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cta from "../../src/components/Cta";

jest.mock("next/link", () => {
	return ({ href, children }) => <a href={href}>{children}</a>;
});

describe("Cta component", () => {
	beforeEach(() => {
		render(<Cta />);
	});

	test("renders the headline text", () => {
		const headline = screen.getByText("Interested in my profile?");
		expect(headline).toBeInTheDocument();
	});

	test("renders the contact button", () => {
		const button = screen.getByRole("button", { name: "Contact me" });
		expect(button).toBeInTheDocument();
	});

	test("contact button has correct href attribute", () => {
		const contactLink = screen.getByRole("link", { name: "Contact me" });
		expect(contactLink).toHaveAttribute("href", "/contact");
	});
});
