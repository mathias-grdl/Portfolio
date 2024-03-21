"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({
	containerStyles,
	LinkStyles,
	underLineStyles,
}) {
	const links = [
		{ path: "/", name: "home", id: 1 },
		{ path: "/projects", name: "my projects", id: 2 },
		{ path: "/contact", name: "contact", id: 3 },
	];

	const path = usePathname();

	return (
		<nav className={`${containerStyles}`}>
			{links.map((link) => {
				return (
					<Link
						href={link.path}
						key={link.id}
						className={`capitalize ${LinkStyles}`}
					>
						{link.path === path && (
							<motion.span
								initial={{ y: "-100%" }}
								animate={{ y: 0 }}
								transition={{ type: "tween" }}
								layoutId="underline"
								className={`${underLineStyles}`}
							/>
						)}
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
}
