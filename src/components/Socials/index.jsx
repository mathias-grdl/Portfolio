"use client";
import { RiYoutubeFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
	{
		path: "/",
		name: <RiYoutubeFill />,
		id: 1,
	},
	{
		path: "https://www.linkedin.com/in/mathias-grondziel/",
		name: <RiLinkedinFill />,
		id: 2,
	},
	{
		path: "https://github.com/mathias-grdl",
		name: <RiGithubFill />,
		id: 3,
	},
];

export default function Socials({ containerStyles, iconsStyles }) {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon) => {
				return (
					<Link href={icon.path} key={icon.id} target="_blank">
						<div className={`${iconsStyles}`}>{icon.name}</div>
					</Link>
				);
			})}
		</div>
	);
}
